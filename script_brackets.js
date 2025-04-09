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