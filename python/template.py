from django.urls import path
from .views import envoyer_mail

urlpatterns = [
    path('myMail/', envoyer_mail, name='envoyer_mail'),
]
