const switchInput = document.querySelector('div#switchLinks input');
const links = document.querySelector('div#links');
const shop = document.querySelector('div#shop');

shop.classList.add('opacity0');

switchInput.addEventListener('click', () => {
    links.classList.toggle('irParaBaixo');
    shop.classList.toggle('opacity0');
});