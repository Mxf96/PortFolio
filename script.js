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


document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll('[data-popup]');
    const popup = document.createElement('div');
    popup.className = 'popup';
    const overlay = document.createElement('div');
    overlay.className = 'popup-overlay';
    document.body.appendChild(popup);
    document.body.appendChild(overlay);

    items.forEach(item => {
        item.addEventListener('click', function() {
            popup.textContent = this.getAttribute('data-popup');
            popup.style.display = 'block';
            overlay.style.display = 'block';
        });
    });

    overlay.addEventListener('click', function() {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    });
});