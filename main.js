const menuBtn = document.querySelector('#mobile-menu');

menuBtn.addEventListener('click', e => {
    const menu = document.querySelector('.mobile-links');
    menu.classList.toggle('hidden') //toggle para alternar la presencia de la clase "hidden" en el elemento menu. Si el elemento tiene la clase "hidden", se la quitará, y si no la tiene, se la añadirá.
});