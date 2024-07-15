// Selecionando Arquivos
const inputCheckbox = document.querySelector("div#switchLinks input");
const containerLinks = document.querySelector("div#containerLinks");

inputCheckbox.addEventListener('click', () => {
    containerLinks.classList.toggle('desativo');
});