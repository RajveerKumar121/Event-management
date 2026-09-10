from django.shortcuts import render, get_object_or_404, redirect
from django.http import JsonResponse
from django.contrib.auth.decorators import login_required
from .models import Event, Category, RSVP
from .forms import EventForm

def event_list(request):
    category_id = request.GET.get('category')
    events = Event.objects.all().order_by('start_time')
    if category_id:
        events = events.filter(category_id=category_id)
    categories = Category.objects.all()
    return render(request, 'event_list.html', {'events': events, 'categories': categories})

def event_detail(request, pk):
    event = get_object_or_404(Event, pk=pk)
    user_has_rsvped = False
    if request.user.is_authenticated:
        user_has_rsvped = RSVP.objects.filter(event=event, user=request.user).exists()
    return render(request, 'event_detail.html', {'event': event, 'user_has_rsvped': user_has_rsvped})

@login_required
def event_create(request):
    if request.method == 'POST':
        form = EventForm(request.POST)
        if form.is_valid():
            event = form.save(commit=False)
            event.organizer = request.user
            event.save()
            return redirect('event_detail', pk=event.pk)
    else:
        form = EventForm()
    return render(request, 'event_form.html', {'form': form})

@login_required
def toggle_rsvp(request, pk):
    if request.method == 'POST':
        event = get_object_or_404(Event, pk=pk)
        rsvp = RSVP.objects.filter(event=event, user=request.user)
        if rsvp.exists():
            rsvp.delete()
            return JsonResponse({'status': 'unregistered', 'count': event.rsvp_count})
        elif not event.is_full:
            RSVP.objects.create(event=event, user=request.user)
            return JsonResponse({'status': 'registered', 'count': event.rsvp_count})
        return JsonResponse({'error': 'Event is full'}, status=400)
    return JsonResponse({'error': 'Invalid request'}, status=400)