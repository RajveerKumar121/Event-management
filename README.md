# EventHub — Event Management Platform

A full-stack event management web application built with **Django**, **HTML/CSS**, and **JavaScript**. EventHub allows users to discover upcoming events, create events, register for events through an RSVP system, and manage their authentication securely.

## ✨ Features

- 🔐 User registration, login, and logout
- 📅 Create and browse events
- 🔎 Filter events by category
- 🎟️ RSVP for events
- ❌ Cancel an RSVP
- 🚫 Prevent RSVP when an event reaches capacity
- 📊 Live RSVP/attendee count updates
- 🕒 Upcoming-event filtering
- 📱 Responsive design for desktop and mobile
- 🛡️ CSRF protection and authenticated actions
- 🗄️ SQLite for local development
- 🐘 PostgreSQL support for production
- ⚙️ Environment-variable based production configuration
- 🧪 Automated Django tests for core functionality

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Python | Backend programming |
| Django | Web framework |
| SQLite | Local development database |
| PostgreSQL | Production database |
| HTML5 | Page structure |
| CSS3 | Styling and responsive UI |
| JavaScript | Client-side interactions |
| Django Templates | Dynamic frontend rendering |

## 📁 Project Structure

```text
event-management/
├── manage.py
├── requirements.txt
├── README.md
│
├── eventhub/
│   ├── settings.py
│   ├── urls.py
│   ├── wsgi.py
│   └── ...
│
├── events/
│   ├── migrations/
│   ├── templates/
│   ├── models.py
│   ├── views.py
│   ├── forms.py
│   ├── urls.py
│   └── tests.py
│
├── templates/
│   └── ...
│
└── static/
    ├── css/
    └── js/
```

> Folder names may differ slightly depending on the version of the project you are using.

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
cd event-management
```

### 2. Create a virtual environment

#### Windows

```bash
python -m venv venv
venv\Scripts\activate
```

#### macOS / Linux

```bash
python3 -m venv venv
source venv/bin/activate
```

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

### 4. Apply migrations

```bash
python manage.py migrate
```

### 5. Create an admin account

```bash
python manage.py createsuperuser
```

Follow the prompts to set the username, email, and password.

### 6. Run the development server

```bash
python manage.py runserver
```

Open the application at:

```text
http://127.0.0.1:8000/
```

The Django admin panel is available at:

```text
http://127.0.0.1:8000/admin/
```

## 🔑 Authentication Flow

Users can:

1. Create an account using the signup page.
2. Log in through the normal user login page.
3. Browse upcoming events.
4. Open an event's details.
5. RSVP if they are logged in.
6. Cancel their RSVP when needed.

Authentication-protected views use Django's built-in authentication system.

## 🎟️ RSVP System

The RSVP system is designed to prevent registrations beyond an event's capacity.

When a user RSVPs:

```text
User
  ↓
POST RSVP request
  ↓
Django authentication check
  ↓
Event capacity check
  ↓
Create RSVP
  ↓
Return updated attendee count
  ↓
Update UI with JavaScript
```

The RSVP operation uses a database transaction and row locking to reduce race conditions when multiple users attempt to register for the final available seats simultaneously.

## 🗄️ Database Configuration

### Local development

If `DATABASE_URL` is not provided, the project can use SQLite:

```text
db.sqlite3
```

### Production

For production, configure a PostgreSQL connection through the `DATABASE_URL` environment variable.

Example:

```text
DATABASE_URL=postgresql://username:password@host:5432/database
```

Do **not** commit database credentials to GitHub.

## 🔐 Environment Variables

For production, configure sensitive values through environment variables.

Recommended variables:

```text
DJANGO_SECRET_KEY=your-production-secret-key
DATABASE_URL=your-postgresql-database-url
DJANGO_DEBUG=False
DJANGO_ALLOWED_HOSTS=your-domain.com
DJANGO_SUPERUSER_USERNAME=admin
DJANGO_SUPERUSER_EMAIL=admin@example.com
DJANGO_SUPERUSER_PASSWORD=strong-password
```

### Generate a secure Django secret key

You can generate one with:

```bash
python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"
```

Never commit a production secret key, database password, or other credentials to the repository.

## 🧪 Running Tests

Run the Django test suite with:

```bash
python manage.py test
```

The tests cover important application behavior such as:

- Event listing
- User signup
- Authentication requirements
- RSVP registration
- RSVP cancellation
- Event capacity handling

## 🛡️ Security

The project includes several Django security mechanisms:

- CSRF protection
- Authentication-protected actions
- Environment-based production secrets
- Database transactions for RSVP operations
- Server-side validation
- Event capacity validation

Before deploying publicly, make sure production settings are configured correctly.

Run Django's deployment checks with:

```bash
python manage.py check --deploy
```

## 🌐 Deployment

The application can be deployed on platforms such as **Render** using PostgreSQL.

Typical deployment flow:

```text
GitHub Repository
       ↓
   Render Web Service
       ↓
   Django Application
       ↓
 PostgreSQL Database
```

### Example Render configuration

**Build Command**

```bash
pip install -r requirements.txt && python manage.py collectstatic --noinput && python manage.py migrate
```

**Start Command**

```bash
gunicorn eventhub.wsgi:application
```

> Replace `eventhub.wsgi:application` if your Django project package has a different name.

Set the required environment variables in the hosting provider's dashboard rather than committing them to the repository.

## 📌 Important Production Checklist

Before deploying:

- [ ] Set `DJANGO_SECRET_KEY`
- [ ] Set `DJANGO_DEBUG=False`
- [ ] Configure `DATABASE_URL`
- [ ] Configure allowed hosts
- [ ] Run migrations
- [ ] Run `python manage.py collectstatic`
- [ ] Run `python manage.py check --deploy`
- [ ] Create a production admin account
- [ ] Never commit `.env`
- [ ] Never commit passwords or API keys
- [ ] Use HTTPS in production

## 🧑‍💻 Development

Contributions and improvements are welcome.

A typical development workflow:

```bash
git checkout -b feature/your-feature
```

Make your changes, run the tests:

```bash
python manage.py test
```

Then commit:

```bash
git add .
git commit -m "Add your feature"
git push origin feature/your-feature
```

## 🐛 Known Limitations / Future Improvements

Potential improvements for future versions:

- Organizer dashboard
- Event ownership and permissions
- Edit and delete events
- "My RSVPs" dashboard
- Event search
- Pagination
- Event image uploads
- Email RSVP confirmations
- Calendar integration
- QR-code based event check-in
- Better custom 404/500 pages
- Advanced analytics for event organizers
- REST API
- Automated CI/CD with GitHub Actions

## 📄 License

This project is available for educational and personal use.

If you plan to distribute or commercially use the project, add an appropriate open-source license such as MIT and update this section accordingly.

## 👨‍💻 Author

**Rgs Developer**

Built as a full-stack web development project using Django and modern frontend technologies.

---

⭐ If you find this project useful, consider giving the repository a star!
