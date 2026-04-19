
window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.exp-card, .timeline-item, .skill-tag');

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].style.opacity = "1";
            reveals[i].style.transform = "translateY(0)";
        }
    }
}

document.querySelectorAll('.exp-card, .timeline-item, .skill-tag').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.6s ease-out";
});