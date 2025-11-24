//DESAFIO 01

let numeroInicial = 1;
let numeroAlvo = 10;

while (numeroInicial <= 11) {
    let contador = numeroInicial++;
    alert(contador);
}



//DESAFIO 02

let numeroInicial= 10;
let numeroAlvo = 0;

while(numeroInicial >= 0) {
    let contador = numeroInicial--;
    alert(contador);
}

//DESAFIO 03

let numeroAlvo = 0;
let numeroInicial = prompt("Diga um número aleatório");

while (numeroInicial >= numeroAlvo) {
    let contador = numeroInicial--;
    console.log(contador);
    alert(contador);
}

//DESAFIO 04

let numeroInicial = 0;
let numeroAlvo = prompt("Diga um número aleatório:");

while(numeroInicial <= numeroAlvo) {
    let contador = numeroInicial++;
    console.log(contador);
    alert(contador);
}

