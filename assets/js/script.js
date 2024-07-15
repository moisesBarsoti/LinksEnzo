// Selecionando Arquivos
const tituloDosLinksShop = document.querySelector('#tituloLinks h2#shop');
const tituloDosLinks2 = document.querySelector('#tituloLinks h2#links2');
const containerLinks = document.querySelector('#containerLinks');

tituloDosLinksShop.addEventListener('click', () => {
    if(tituloDosLinks2.classList.contains('ativo')) {
        tituloDosLinks2.classList.remove('ativo');
        tituloDosLinksShop.classList.add('ativo');
    } 
    containerLinks.style.opacity = '0';
    tituloDosLinksShop.style.marginRight = '-1rem';
});

tituloDosLinks2.addEventListener('click', () => {
    if(tituloDosLinksShop.classList.contains('ativo')) {
        tituloDosLinksShop.classList.remove('ativo');
        tituloDosLinks2.classList.add('ativo');
    } 
    containerLinks.style.opacity = '1';
})