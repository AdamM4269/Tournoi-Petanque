const hamburgerButton = document.querySelector(".nav-toggler");
const navigation = document.querySelector("nav");
let btnImg = document.querySelector('[class="logo"]');
hamburgerButton.addEventListener("click", toggleNav)

function toggleNav(){
    hamburgerButton.classList.toggle("active")
    navigation.classList.toggle("active")
}

btnImg.addEventListener('click', ()=>{
    window.location.href = "index.html";
});

const envoieMailAM = document.getElementById("envoieMailAM");
const envoieMailAB = document.getElementById("envoieMailAB");

envoieMailAB.addEventListener("click", ()=>{
    var email = "abrocard@solutec.fr";
    var sujet = "Support tournoi de pétanque";
    var corps = "Hello Axel ! \n \nJe te contacte à propos du tournoi de pétanque. J'ai un problème avec...";
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(sujet)}&body=${encodeURIComponent(corps)}`;
})

envoieMailAM.addEventListener("click", ()=>{
    var email = "amezaber@solutec.fr";
    var sujet = "Support tournoi de pétanque";
    var corps = "Hello Adam ! \n \nJe te contacte à propos du tournoi de pétanque. J'ai un problème avec...";
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(sujet)}&body=${encodeURIComponent(corps)}`;
})
