// navbar variable

const nav = document.querySelector(".mobile-nav"),
    navMenubtn = document.querySelector(".nav-menu-btn"),
    navClosebtn = document.querySelector(".nav-close-btn");

// navToggle function

const navToggleFunc = () => nav.classList.toggle("active");
navMenubtn.addEventListener("click", navToggleFunc);
navClosebtn.addEventListener("click", navToggleFunc);