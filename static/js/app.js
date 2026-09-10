// EventHub Interactive Client Controller

document.addEventListener('DOMContentLoaded', () => {
    const rsvpBtn = document.getElementById('rsvp-button');

    if (!rsvpBtn) return;

    rsvpBtn.addEventListener('click', async (e) => {
        e.preventDefault();

        const targetUrl = rsvpBtn.getAttribute('data-url');
        const csrfToken = rsvpBtn.getAttribute('data-csrf');
        const attendeeCountEl = document.getElementById('attendee-count');

        // UI state: disable button during flight
        rsvpBtn.disabled = true;
        const initialText = rsvpBtn.textContent;
        rsvpBtn.textContent = 'Processing...';

        try {
            const response = await fetch(targetUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrfToken,
                    'X-Requested-With': 'XMLHttpRequest',
                },
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Action could not be completed.');
            }

            // Update attendee counter
            if (attendeeCountEl && typeof data.attendee_count !== 'undefined') {
                attendeeCountEl.textContent = data.attendee_count;
            }

            // Toggle styles & text based on response
            if (data.action === 'registered') {
                rsvpBtn.textContent = 'Cancel RSVP';
                rsvpBtn.classList.remove('btn-primary');
                rsvpBtn.classList.add('btn-danger');
            } else if (data.action === 'cancelled') {
                rsvpBtn.textContent = 'Register / RSVP';
                rsvpBtn.classList.remove('btn-danger');
                rsvpBtn.classList.add('btn-primary');
            }

            // Handle capacity exhaustion state
            if (data.is_full && data.action !== 'registered') {
                rsvpBtn.textContent = 'Event Full';
                rsvpBtn.disabled = true;
                rsvpBtn.style.opacity = '0.5';
                rsvpBtn.style.cursor = 'not-allowed';
            } else {
                rsvpBtn.disabled = false;
            }
        } catch (err) {
            console.error('[EventHub] RSVP error:', err);
            alert(err.message || 'An unexpected error occurred. Please try again.');
            rsvpBtn.textContent = initialText;
            rsvpBtn.disabled = false;
        }
    });
});