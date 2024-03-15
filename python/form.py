from django.shortcuts import render
from django.core.mail import send_mail
from django.conf import settings
from django.http import HttpResponseRedirect

def envoyer_mail(request):
    if request.method == 'POST':
        nom = request.POST.get('nom', '')
        email = request.POST.get('email', '')
        titleMessage = request.POST.get('titleMessage', '')
        message = request.POST.get('message', '')

        # Construction du message
        contenu_message = f'Nom : {nom}\nEmail : {email}\nObject : {titleMessage}\nMessage : {message}'

        # Envoi du mail
        send_mail(
            'Nouveau message depuis le formulaire de contact',
            contenu_message,
            settings.EMAIL_HOST_USER,  # Expéditeur
            [settings.EMAIL_DESTINATAIRE],  # Destinataire
            fail_silently=False,
        )

        # Redirection vers une page de confirmation
        return HttpResponseRedirect('/confirmation/')

    # Si la méthode HTTP n'est pas POST, retournez simplement le formulaire
    return render(request, 'votre_template.html')
