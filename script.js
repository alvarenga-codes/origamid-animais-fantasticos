// Por ID
const animais = document.getElementById("animais");
//Por Classe
const gridSection = document.getElementsByClassName("grid-section");
//Genérico (mais utilizado)
const primeiraLi = document.querySelector("li");
const primeiraUl = document.querySelector("ul");
const linkInterno = document.querySelector('[href^="#"]');
//Selecionar listas
const gridsSection = document.querySelectorAll(".grid-section");
const animaisImg = document.querySelectorAll("img");


// console.log(gridSection);
// console.log(animais);
// console.log(primeiraLi);
// console.log(primeiraUl);
// console.log(linkInterno);
// console.log(gridsSection);
// console.log(gridsSection[1]);
// console.log(animaisImg);
// console.log(animaisImg[2].clientHeight);


//Retorne no console todas as imagens do site
const img = document.querySelectorAll("img");
console.log(img);
//Retorne no console apenas as imagens que começaram com a palavra imagem
const palavraImg = document.querySelectorAll('img[src^="img/imagem"]');
console.log(palavraImg);
//Selecione todos os links internos (onde o href começa com #)
const todosLinks = document.querySelectorAll('a[href^="#"');
console.log(todosLinks);
//Selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2 = document.querySelector(".animais-descricao h2");
console.log(primeiroH2);
//Selecione o último p do site
const paragraph = document.querySelectorAll("p");
const ultimoP = paragraph[paragraph.length - 1];
console.log(ultimoP.innerHTML);