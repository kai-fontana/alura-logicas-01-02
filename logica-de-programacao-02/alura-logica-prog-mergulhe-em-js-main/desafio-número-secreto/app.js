alert('Boas vindas ao jogo do número secreto!');
let numeroSecreto = 5; 
let chute = prompt('Escolha um número entre 1 e 10:');

if (chute == numeroSecreto) {
    console.log("Isso aí! Você descobriu o número secreto (5). ");
} else {
    if(chute > numeroSecreto){
        alert("O número secreto é menor.");
    } else {
        alert("O número secreto é maior.");
    }
}