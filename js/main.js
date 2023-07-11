const hamburger = document.querySelector(".hamburger-menu");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    if(window.innerWidth <= 768){
        navLinks.classList.toggle("show");
    }
});
