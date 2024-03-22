// Récupérer le DOM
//name
const inputName = document.querySelector("#name");
const inputNameError = document.querySelector(".name-error-input");
//email
const inputEmail = document.querySelector("#email");
const inputEmailError = document.querySelector(".email-error-input");
//intitulé du message
const inputTitleMessage = document.querySelector("#titleMessage");
const inputTitleMessageError = document.querySelector(".ttmsg-error-input") 
//message
const inputMessage = document.querySelector("#message");
const inputMessageError =document.querySelector(".mgs-error-input");

// Écouter le DOM
//name
inputName.addEventListener("change", validateName);
//email
inputEmail.addEventListener("change", validateEmail);
//intitulé du message
inputTitleMessage.addEventListener("change", validateTmsg);
//message
inputMessage.addEventListener("change", validateMsg);
// Vérifier le input
// Fonction qui autorise que des lettres ou des chiffres
function hasOnlyLetters(string) {
    const regexToMatch = new RegExp('[a-zA-Zéèàôîê]+', 'g');
    return regexToMatch.test(string);
}

// Fonction pour valider le nom
function validateName() {
    if (inputName.value.length > 1 && inputName.value.length < 50 && hasOnlyLetters(inputName.value)) {
        inputName.classList.remove("error-color");
        inputNameError.innerText = "";
        console.log("Le nom est correct");
        return true;
    } else {
        inputName.classList.add("error-color");
        inputNameError.innerText = "Le champ doit avoir 2 lettres minimum.";
        console.log("Le nom est incorrect");
        return false;
    }
}

// Fonction pour valider le email
function validateEmail() {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputEmail.value)) {
        inputEmail.classList.remove("error-color");
        inputEmailError.innerText = "";
        console.log("email true");
        return true;
    } else {
        inputEmail.classList.add("error-color");
        inputEmailError.innerText = "L'adresse email est incorrecte.";
        console.log("email false");
        return false;
    }
}

//Fonction pour valider le titre
function validateTmsg() {
    if (inputTitleMessage.value.length > 1 && inputTitleMessage.value.length < 50 && hasOnlyLetters(inputTitleMessage.value)) {
        inputTitleMessage.classList.remove("error-color");
        inputTitleMessageError.innerText = "";
        console.log("Le titre du message est correct");
        return true;
    } else {
        inputTitleMessage.classList.add("error-color");
        inputTitleMessageError.innerText = "L’intitulé du message doit avoir 2 lettres minimum.";
        console.log("Le titre du message est incorrect");
        return false;
    }
}

//Fonction pour valider le message
function validateMsg() {
    if (inputMessage.value.length > 1 && inputMessage.value.length < 250) {
        inputMessage.classList.remove("error-color");
        inputMessageError.innerText = "";
        console.log("Le message est correct");
        return true;
    } else {
        inputMessage.classList.add("error-color");
        inputMessageError.innerText = "Le message doit avoir 2 lettres minimum.";
        console.log("Le message est incorrect");
        return false;
    }
}


// Appel des fonctions
validateName();
validateEmail();
validateTmsg();
validateMsg();

//envoyer le message
const YOUR_SERVICE_ID = "contact_prw9pqt";
const YOUR_TEMPLATE_ID = "template_sy9q8oj";

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.formulaire').addEventListener('submit', function(event) {
        emailjs.init("8PZfNVUqhOFKld6rU");
        event.preventDefault();
        if (validateName() &&
            validateEmail() &&
            validateTmsg() &&
            validateMsg()) {
            // Récupérer les valeurs du formulaire
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const titleMessage = document.getElementById('titleMessage').value;
            const message = document.getElementById('message').value;

            // Utiliser EmailJS pour envoyer l'e-mail
            emailjs.send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, {
                name: name,
                email: email,
                titleMessage: titleMessage,
                message: message
            }).then(function(response) {
                console.log('E-mail envoyé avec succès!', response);
                // Afficher un message de succès à l'utilisateur
                document.querySelector('.sendForm').innerText = "Formulaire envoyé avec succès!";
                document.querySelector('.sendForm').style.backgroundColor = "rgb(218, 181, 252);";
                document.querySelector('.formulaire').reset();
            }, function(error) {
                console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
                // Afficher un message d'erreur à l'utilisateur
                document.querySelector('.sendForm').innerText = "Une erreur s'est produite lors de l'envoi du formulaire.";
                document.querySelector('.sendForm').style.backgroundColor = "rgb(181, 68, 110);";
            });
        } else {
            document.querySelector('.sendForm').innerText = "Il reste des champs à valider !";
            document.querySelector('.sendForm').style.backgroundColor = "rgb(181, 68, 110);";
            console.log("Il reste des champs à valider !");
        }
    });
});
