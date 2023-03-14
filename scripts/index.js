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

//modal form

function openMobileNav() {
    navBar.style.display = "block";
    menuNav.style.display = "none";
    console.log("fonction");
}

function closeMobileNav() {
    navBar.style.display = "none";
    menuNav.style.display = "block"; 
    console.log("fermer");
}

