//DESAFIO 1

let diaDoUsuario = prompt("Qual dia da semana é hoje?");

if (diaDoUsuario == "sábado" || "domingo") {
   alert("Bom final de semana!");

} else{
   alert("Boa semana!");
}

//DESAFIO 2

let numeroUsuario = prompt("Digite um número aleatório");

if(numeroUsuario >=0) {
    alert(`O número ${numeroUsuario} é positivo`);
} else{
    alert(`O número ${numeroUsuario} é negativo`);
}

//DESAFIO 3

let tentativaUsuario = prompt("Escolha uma quantidade de pontos:");

if(tentativaUsuario >= 100) {
    alert("Parabéns, você venceu!");
} else{
    alert("Tente novamente para ganhar!");
}

//DESAFIO 4

let saldoDoUsuario = 500;
let respostaDoUsuario = prompt("Deseja saber o seu saldo?");

if (respostaDoUsuario === "sim") {
    alert(`O seu saldo atual é de: ${saldoDoUsuario}`);
} else{
    alert("Certo! Então, até a próxima!");
}

//DESAFIO 5 

let nomeDeUsuario = prompt("Insira o seu nome:");
alert(`Boas-vindas, ${nomeDeUsuario}!`);