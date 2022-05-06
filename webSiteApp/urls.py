from django.urls import path
from .views import IndexPageView, ContactView

urlpatterns = [
    path('', IndexPageView.as_view(), name='index'),
    path('contact/', ContactView.as_view(), name='contact'),
]