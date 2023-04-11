// Dès que la page est chargée
window.onload = function () {
    scrollTo(0, 0)
    window.onscroll = function () {
        scrollTo(0, 0);
    }

    // Sélectionne le body du document
    const body = document.querySelector('body div.loading');

    // Ajoute la couleur de fond noir
    body.style.backgroundColor = '#13213A';

    // Ajoute la transition de fond avec une durée de 1 seconde
    body.style.transition = 'opacity 1s ease';

    // Retarde de 1 seconde l'enlèvement de la couleur de fond noire pour que la transition ait le temps de se produire
    setTimeout(() => {
        body.style.opacity = '0';
        setTimeout(() => {
            body.style.display = 'none';
            window.onscroll = null;
        }, 600);
    }, 600)
}