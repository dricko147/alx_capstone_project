var submitError = document.getElementById('error');

function validateEmail() {
    var email = document.getElementById('email').value;
    // var essentialToPass = /^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4$/;
    var essentialToPass = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(email.length == 0) {
        submitError.innerHTML = "Email is invalid";
        return false;
    }
    if(!essentialToPass.test(email)) {
        submitError.innerHTML = "Please enter a valid email address";
        return false;
    }
    submitError.innerHTML = "Valid!";
    return true;
}

function validateForm() {
    if (!validateEmail()) {
        submitError.style.display = 'block';
        submitError.innerHTML = "Please enter a valid password";
        setTimeout(function(){submitError.style.display = 'none';}, 5000);
        return false;
    }
}

// ===== SCROLL HOME =====
sr.reveal('.home_title', {})
sr.reveal('.button', {delay: 200})
sr.reveal('.home__img', {delay: 400});sr.reveal('.home__social-icon', {interval: 200})

// ===== SCROLL SKILLS =====
sr.reveal('.skills__subtitle', {})
sr.reveal('.skills__text', {delay: 200})
sr.reveal('.skills__data', {interval: 200})
sr.reveal('.skills__img', {delay: 400})
// ===== SCROLL ABOUT =====
sr.reveal('.about__img', {})
sr.reveal('.about__subtitle', {delay: 200})
sr.reveal('.about__text', {delay: 400})
// ===== SCROLL WORK =====
sr.reveal('.work__img', {interval: 200})
// ===== SCROLL PROJECT =====
sr.reveal('.project__img', {interval: 200})
// ===== SCROLL CONTACT =====
sr.reveal('.contact__input', {interval: 200})