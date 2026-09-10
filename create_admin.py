import os
import django

# Setup Django environment
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings')
django.setup()

from django.contrib.auth import get_user_model

User = get_user_model()

# Change these to whatever you want your login to be
USERNAME = os.environ.get('DJANGO_SUPERUSER_USERNAME', 'admin')
EMAIL = os.environ.get('DJANGO_SUPERUSER_EMAIL', 'admin@example.com')
PASSWORD = os.environ.get('DJANGO_SUPERUSER_PASSWORD', 'AdminPass123!')

if not User.objects.filter(username=USERNAME).exists():
    print(f"Creating superuser: {USERNAME}")
    User.objects.create_superuser(username=USERNAME, email=EMAIL, password=PASSWORD)
    print("Superuser created successfully!")
else:
    print(f"Superuser '{USERNAME}' already exists.")