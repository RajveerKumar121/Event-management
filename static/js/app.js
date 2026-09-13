document.addEventListener('DOMContentLoaded', () => {
    const rsvpBtn = document.getElementById('rsvp-btn');

    if (!rsvpBtn) return;

    rsvpBtn.addEventListener('click', async () => {
        const eventId = rsvpBtn.dataset.eventId;
        const csrfToken = rsvpBtn.dataset.csrf;

        rsvpBtn.disabled = true;
        const originalText = rsvpBtn.textContent;
        rsvpBtn.textContent = 'Processing...';

        try {
            const response = await fetch(`/event/${eventId}/rsvp/`, {
                method: 'POST',
                headers: {
                    'X-CSRFToken': csrfToken,
                    'X-Requested-With': 'XMLHttpRequest',
                },
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Action could not be completed.');
            }

            document.getElementById('rsvp-count').textContent = data.count;

            if (data.status === 'registered') {
                rsvpBtn.textContent = 'Cancel RSVP';
                rsvpBtn.classList.remove('btn-primary');
                rsvpBtn.classList.add('btn-danger');
            } else if (data.status === 'unregistered') {
                rsvpBtn.textContent = 'RSVP Now';
                rsvpBtn.classList.remove('btn-danger');
                rsvpBtn.classList.add('btn-primary');
            }

            rsvpBtn.disabled = false;

        } catch (error) {
            console.error('[EventHub] RSVP error:', error);
            alert(error.message);
            rsvpBtn.textContent = originalText;
            rsvpBtn.disabled = false;
        }
    });
});