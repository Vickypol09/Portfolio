// Simple hover effect for skill cards
var skillCards = document.querySelectorAll('.skill-card');

for (var i = 0; i < skillCards.length; i++) {
    skillCards[i].addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
}