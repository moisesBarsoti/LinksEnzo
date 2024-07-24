// Selecionando Arquivos
const inputCheckbox = document.querySelector("div#switchLinks input");
const containerLinks = document.querySelector("div#containerLinks div#links");
const shop = document.querySelector("div#shop");

shop.style.transform = 'translateX(-100vw)';

inputCheckbox.addEventListener('click', () => {
    containerLinks.classList.toggle('desativo');
    if(containerLinks.classList.contains('desativo')) {
        shop.style.transform = 'translateX(0vw)';
        containerLinks.style.transform = 'translateX(-100vw)';
        shop.style.position = 'absolute';

    } else {
        shop.style.transform = 'translateX(-100vw)';
        containerLinks.style.transform = 'translateX(0vw)';
        containerLinks.style.marginLeft = '-.5rem';
    }
});