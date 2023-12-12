// Défilement fluide pour la navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Affichage de l'overlay du CV
const cvImage = document.querySelector('.cv-image');
const cvOverlay = document.getElementById('cvOverlay');
const closeButton = document.querySelector('.cv-overlay .close');

// Afficher l'overlay lorsque l'image du CV est cliquée
if (cvImage) {
    cvImage.addEventListener('click', function() {
        cvOverlay.style.display = 'block';
    });
}

// Fermer l'overlay lorsque le bouton de fermeture est cliqué
if (closeButton) {
    closeButton.addEventListener('click', function() {
        cvOverlay.style.display = 'none';
    });
}

// Fermer l'overlay en cliquant en dehors du CV agrandi
window.addEventListener('click', function(event) {
    if (event.target === cvOverlay) {
        cvOverlay.style.display = 'none';
    }
});