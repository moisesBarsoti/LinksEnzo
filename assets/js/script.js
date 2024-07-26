const switchInput = document.querySelector('div#switchLinks input');
const links = document.querySelector('div#links');
const shop = document.querySelector('div#shop');

switchInput.addEventListener('click', () => {
    links.classList.toggle('irParaBaixo');
    shop.style.opacity = '1';
});