const openBtn = document.getElementById("open__btn");
const closeBtn = document.getElementById("close__btn");
const navMenu = document.getElementById("nav__menu");

function openNav() {
    openBtn.style.display = "none";
    closeBtn.style.display = "block";
    navMenu.style.display = "block";
}

function closeNav() {
    openBtn.style.display = "block";
    closeBtn.style.display = "none";
    navMenu.style.display = "none";
}



const scroll = new LocomotiveScroll({
    el: document.querySelector('.scroll'),
    smooth: true
});

