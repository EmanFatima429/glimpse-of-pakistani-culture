// JavaScript to show the footer when the user scrolls down
window.addEventListener('scroll', function() {
    let footer = document.querySelector('footer');
    let scrollPosition = window.scrollY;
    
    // Show footer when user has scrolled 100px from the top (adjust as needed)
    if (scrollPosition > 100) {
        footer.classList.add('show');
    } else {
        footer.classList.remove('show');
    }
});
