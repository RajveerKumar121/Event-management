# EventHub — Full-Stack Event Management & RSVP Platform

EventHub is a modern, responsive web application designed for organizing, discovering, and attending developer meetups, workshops, and tech summits. The platform features dynamic category filtering, real-time RSVP state toggling via AJAX, and administrative management.

- **Live Application:** [https://event-management-0l7b.onrender.com/](https://event-management-0l7b.onrender.com/)
- **Repository:** [https://github.com/RajveerKumar121/Event-management](https://github.com/RajveerKumar121/Event-management)

> **Note:** The production environment is hosted on Render's free tier. Please allow 30–50 seconds on initial load if the instance is spinning up from idle.

---

## Key Features

- **Event Discovery & Categorization:** Filter events by category (e.g., Tech & AI, Workshops, Networking) or view all active listings.
- **Dynamic RSVP Tracking:** Async RSVP toggling with optimistic UI updates and live capacity counting without full page reloads.
- **Event Administration:** Full administrative control for creating, editing, and managing events, categories, and attendees.
- **Production-Grade Architecture:** Deployed on Render with a serverless PostgreSQL database and WhiteNoise for static file serving.
- **Minimalist SaaS UI:** Dark-mode interface built with modern CSS and vanilla JavaScript.

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Backend** | Python 3.14, Django 5.2 |
| **Database** | PostgreSQL (Neon Database) / SQLite (Local Dev) |
| **WSGI Server** | Gunicorn |
| **Static Assets** | WhiteNoise |
| **Frontend** | Django Templates, HTML5, Modern CSS, Vanilla JavaScript (Fetch API) |
| **Deployment** | Render Cloud Platform |

---

## System Architecture & Data Model

- **Category:** Categorical grouping (`name`).
- **Event:** Central model with relational mappings to `Category` and the host `User` (`title`, `description`, `location`, `start_time`, `end_time`, `capacity`, `organizer`).
- **RSVP:** Unique relational mapping between `User` and `Event` enforcing individual registration constraints and capacity validation.

---

## Local Development Setup

### 1. Clone the Repository
```bash
git clone [https://github.com/RajveerKumar121/Event-management.git](https://github.com/RajveerKumar121/Event-management.git)
cd Event-management
