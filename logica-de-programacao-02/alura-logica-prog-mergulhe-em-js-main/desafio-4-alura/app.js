//DESAFIO 01
let mensagemDeBoasVindas = "Boas-vindas!";
console.log(mensagemDeBoasVindas);

//DESAFIO 02 
let nome = Kai;
console.log(`Olá, ${nome}`);

//DESAFIO 03
let nome2 = Kaillanny;
alert(`Olá, ${nome2}`);

//DESAFIO 04
let lingProgrFavorita = prompt("Qual a linguagem de programação que você mais gosta?");
console.log(lingProgrFavorita);

//DESAFIO 05
let valor1 = 5;
let valor2 = 8;
let resultado = valor1 + valor2;
 
//alert(resultado);
console.log(`A soma entre ${valor1} e ${valor2} é igual a ${resultado}.`);

 //DESAFIO 06
let valor01 = 9;
let valor02 = 6;
let resultado1 = valor01 - valor02;
console.log(`A diferença entre ${valor01} e ${valor02} é igual a ${resultado}.`);

//DESAFIO 07
let idadeDoUsuario = prompt("Insira a sua idade: ");
if (idadeDoUsuario > 18) {
    console.log("Você é maior de idade!");
} else{
    console.log("Você é menor de idade!");
}

//DESAFIO 08
let numero = prompt("Insira um valor: ");
let comparacaoNumeros = numero > 0 ? "O número é positivo" : "O número é negativo";
if(numero == 0) {
    alert("O número é zero.");
}

//VERSÃO ESTENDIDA DO OPERADOR TERNÁRIO ACIMA
//if(numero > 0) {
//    alert("O número é positivo");
//} else {
//    alert("O número é negativo.");
//}
//if(numero == 0) {
//    alert("O número é zero.");
//}

//DESAFIO 09
let numeroInicial = 1;
while(numeroInicial <= 10) {
    console.log(numeroInicial);
    numeroInicial++;
}

//DESAFIO 10
let nota = 4;
let comparacaoNota = nota >= 7 ? "Aprovado" : "Reprovado";
console.log(comparacaoNota);

//VERSÃO ESTENDIDA DO OPERADOR TERNÁRIO ACIMA
//if (nota >= 7) {
//    console.log("Aprovado");
//} else{
//    console.log("Reprovado");
//}

//DESAFIO 11
let numeroAleatorio = parseInt(Math.random() * 10);
console.log(numeroAleatorio);

//DESAFIO 12
let numeroAleatorio1 = Math.floor(Math.random() * 10) + 1;
console.log(numeroAleatorio1);

//DESAFIO 13
let numeroAleatorio2 = Math.floor(Math.random() * 100) +1;
console.log(numeroAleatorio2);