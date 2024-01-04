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

function downloadResume() {
    var resumePath = '28sep resume.pdf';


    var link = document.createElement('a');
    
    link.href = resumePath;

    link.download = 'sources/suraj_Resume.pdf';

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
}

const scroll = new LocomotiveScroll({
    el: document.querySelector('.scroll'),
    smooth: true
});

