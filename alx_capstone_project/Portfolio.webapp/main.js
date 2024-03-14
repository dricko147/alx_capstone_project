const form = document.getElementById('emailForm');
const email = document.getElementById('email');
const error = document.getElementById('error');
const emailregex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

function validateEmail() {
    if (!emailregex.test(email.value.trim())) {
        error.textContent = "Please enter a valid email address.";
        return false;
    } else {
        error.textContent = "";
        return true;
    }
};

form.addEventListener('submit', function(e) {
    if (!validateEmail()) {
        e.preventDefault();
    }
});

// ===== SCROLL HOME =====
sr.reveal('.home__title', {})
sr.reveal('.button', {delay: 200})
sr.reveal('.home__img', {delay: 400})
sr.reveal('.home__social-icon', {interval: 200})
// ===== SCROLL ABOUT =====
sr.reveal('.about__img', {})
sr.reveal('.about__subtitle', {delay: 200})
sr.reveal('.about__text', {delay: 400})
// ===== SCROLL SKILLS =====
sr.reveal('.skills__subtitle', {})
sr.reveal('.skills__text', {delay: 200})
sr.reveal('.skills__data', {interval: 200})
sr.reveal('.skills__img', {delay: 400})
// ===== SCROLL WORK =====
sr.reveal('.work__img', {interval: 200})
// ===== SCROLL CONTACT =====
sr.reveal('.contact__input', {interval: 200})