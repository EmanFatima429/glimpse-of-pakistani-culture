// JavaScript to show the footer when the user scrolls down
let slideIndex = 0;
window.addEventListener('scroll', function () {
    let footer = document.querySelector('footer');
    let scrollPosition = window.scrollY;

    // Show footer when user has scrolled 100px from the top (adjust as needed)
    if (scrollPosition > 100) {
        footer.classList.add('show');
    } else {
        footer.classList.remove('show');
    }
});



function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

function plusSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    slideIndex += n;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    if (slideIndex < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

document.addEventListener("DOMContentLoaded", () => {
    showSlides(); // Ensure the slideshow starts
});
