# EventHub — Full-Stack Event Management & RSVP Platform

EventHub is a modern, responsive full-stack web application designed for organizing, discovering, and attending developer meetups, workshops, and tech summits.

The platform provides dynamic event categorization, asynchronous RSVP management, live capacity updates, and administrative tools for managing events, categories, and attendees.

---

## 👨‍💻 Internship Project

This project was developed as part of an internship with **CodeTech IT Solution**.

- **Organization:** CodeTech IT Solution
- **Intern ID:** `CMSFMF3UQ1`
- **Project:** EventHub — Event Management & RSVP Platform
- **Project Type:** Full-Stack Web Development
- **Role:** Software/Web Development Intern

---

## 🌐 Live Demo

**Live Application:**  
https://event-management-0l7b.onrender.com/

**GitHub Repository:**  
https://github.com/RajveerKumar121/Event-management

> **Note:** The production environment is hosted on Render's free tier. Please allow approximately 30–50 seconds for the initial load if the instance is spinning up from an idle state.

---

## 🚀 Key Features

### 📅 Event Discovery & Categorization

- Browse active events.
- Filter events by category.
- Categories include examples such as:
  - Tech & AI
  - Workshops
  - Networking
- View all active event listings.

### 🔄 Dynamic RSVP Tracking

- RSVP to events without a full page reload.
- Asynchronous RSVP toggling using AJAX/Fetch API.
- Optimistic UI updates.
- Live capacity counting.
- Individual registration validation.

### 🛠️ Event Administration

Administrators can manage:

- Events
- Categories
- Attendees
- Event details
- Event capacity
- Event scheduling

### ☁️ Production Deployment

The application is deployed on **Render** and uses:

- PostgreSQL through Neon for production
- SQLite for local development
- Gunicorn for serving the Django application
- WhiteNoise for static file serving

### 🎨 Modern User Interface

- Responsive design
- Minimalist SaaS-inspired interface
- Dark-mode UI
- Modern CSS
- Vanilla JavaScript
- Dynamic interactions without unnecessary page reloads

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Backend** | Python 3.14, Django 5.2 |
| **Database** | PostgreSQL (Neon Database) / SQLite (Local Development) |
| **Web Server** | Gunicorn |
| **Static Assets** | WhiteNoise |
| **Frontend** | Django Templates, HTML5, Modern CSS |
| **JavaScript** | Vanilla JavaScript, Fetch API |
| **Deployment** | Render Cloud Platform |

---

## 🏗️ System Architecture

EventHub follows a full-stack Django architecture:

```text
                    ┌─────────────────────┐
                    │      User / Admin   │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │   Django Templates  │
                    │    HTML / CSS / JS   │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │    Django Backend   │
                    │   Views / ORM / Auth│
                    └──────────┬──────────┘
                               │
                    ┌──────────┴──────────┐
                    ▼                     ▼
          ┌─────────────────┐   ┌─────────────────┐
          │ PostgreSQL/Neon │   │     SQLite      │
          │   Production    │   │ Local Development│
          └─────────────────┘   └─────────────────┘
