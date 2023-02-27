const burgerMenu = document.querySelector('.burger');
const bodyElement = document.body;
const navMenu = document.querySelector('.header__nav-menu');
const stars = document.querySelectorAll('.star');
const accordion = document.querySelector('.promocode__more');


//burger
function toggleMenu() {
    burgerMenu.classList.toggle("active");
    bodyElement.classList.toggle("overflow");
    navMenu.classList.toggle("active");
}

burgerMenu.addEventListener('click', function () {
    toggleMenu();
});

//stars
function setRating(event) {
    var clickedStar = event.target;
    var rating = clickedStar.getAttribute('data-value');
    for (var i = 0; i < stars.length; i++) {
        if (i < rating) {
            stars[i].classList.add('active');
        } else {
            stars[i].classList.remove('active');
        }
    }
}

for (var i = 0; i < stars.length; i++) {
    stars[i].addEventListener('click', setRating);
}

//accordion
function toggleAccordion() {
    accordion.classList.toggle("active");
}
accordion.addEventListener('click', function(){
    toggleAccordion();
})