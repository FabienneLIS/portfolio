//Dom elements

const menuNav = document.querySelector(".nav-menu");
console.log("menu");
const navBar = document.querySelector(".nav-link");
console.log("nav");
const linkChoose = document.querySelectorAll(".link-choose");
console.log("lien");

// Event listen
menuNav.addEventListener("click", openMobileNav);
linkChoose.forEach((choose) => choose.addEventListener("click", closeMobileNav));

//refresh fonction
function refresh(){
    var t = 1000; // rafraîchissement en millisecondes
    setTimeout('widthWindow()',t)
}

function widthWindow() {
    //let keepWidth = window.innerWidth
   // refresh()
    //return keepWidth
}
widthWindow()
//modal form

function openMobileNav() {
    if(window.innerWidth < 771) {
            navBar.style.display = "block";
            menuNav.style.display = "none";
            console.log("fonction");
        } else {
            false
        } 
        window.location.refresh()
    }
 

function closeMobileNav() {
    if(window.innerWidth < 771) {
            navBar.style.display = "none";
            menuNav.style.display = "block"; 
            console.log("fermer");
        } else {
            false
        }
    }

//date

// Obtenez la date actuelle au format souhaité (par exemple, "2023")
const currentDate = new Date().getFullYear();

// Sélectionnez l'élément span par son ID
const datePlaceholder = document.getElementById("datePlaceholder");

// Remplacez le contenu de l'élément span avec la date actuelle
datePlaceholder.textContent = currentDate;




