// Selecionando Arquivos
const inputCheckbox = document.querySelector("div#switchLinks input");
const containerLinks = document.querySelector("div#containerLinks");
const shop = document.querySelector("div#shop");

shop.style.opacity = '0';

inputCheckbox.addEventListener('click', () => {
    containerLinks.classList.toggle('desativo');
    shop.style.opacity = '1';
    shop.style.position = 'absolute';
});