from django.contrib.auth.forms import UserCreationForm
from django.urls import reverse_lazy
from django.views import generic
from .forms import CustomUserCreationForm

# Create your views here.


class SignUpView(generic.CreateView):
    form_class = CustomUserCreationForm
    success_url = reverse_lazy('login')
    template_name = 'registration/signup.html'


class PasswordChangeView(generic.CreateView):
    success_url = reverse_lazy('password_change_done.html')
    template_name = 'registration/password_change_form.html'
