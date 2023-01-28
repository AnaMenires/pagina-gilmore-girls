/* 
OBJETIVO 1 - Quando o usuário clicar no botão de ver trailer, devemos abrir a modal com o vídeo do trailer 
    Passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usando o js
    Passo 2 - dar um jeito de identificar quando o usuário clicar no botão 
    Passo 3 - dar um jeito de pegar o elemento da modal no js
    Passo 4 - abrir a modal na tela 

OBJETIVO 2 - Quando o usuário clicar no X devemos fechar a modal 
    Passo 1 - dar um jeito de pegar o elemento de fechar modal usando o js
    Passo 2 - dar um jeito de identificar quando o usuário clicar no X
    Passo 3 - fechar a modal
    
*/
const botaoTrailer = document.querySelector(".botao-trailer");

const video = document.getElementById("video");

const modal = document.querySelector(".modal");

const linkDoVideo = video.src ; 


// Passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usando o js

console.log(document.querySelector(".botao-trailer"));



// Passo 3 - dar um jeito de pegar o elemento da modal no js



// Passo 2 - dar um jeito de identificar quando o usuário clicar no botão 

botaoTrailer.addEventListener("click", () => {
    
        // Passo 4 - abrir a modal na tela 
        modal.classList.add("aberto");
        video.setAttribute("src", linkDoVideo);
        
})


// OBJETIVO 2 - Quando o usuário clicar no X devemos fechar a modal 
   //  Passo 1 - dar um jeito de pegar o elemento de fechar modal usando o js
   const botaoFecharModal = document.querySelector(".fechar-modal");


   // Passo 2 - dar um jeito de identificar quando o usuário clicar no X
   botaoFecharModal.addEventListener("click", ()=> {
    // Passo 3 - fechar a modal
    modal.classList.remove("aberto");
    video.setAttribute("src" , "");
   })



   
   