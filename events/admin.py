from django.contrib import admin
from .models import Category, Event, RSVP

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name',)

@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'location', 'start_time', 'capacity', 'organizer')
    list_filter = ('category', 'start_time')
    search_fields = ('title', 'description', 'location')

@admin.register(RSVP)
class RSVPAdmin(admin.ModelAdmin):
    list_display = ('event', 'user', 'registered_at')
    list_filter = ('event', 'registered_at')
