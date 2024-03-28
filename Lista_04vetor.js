const leia = require("readline-sync");

let vetorNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let numero;
let colocacao;

numero = readline.questionInt("\nDigite um numero inteiro: "); 

colocacao = vetorNum.indexOf(numero)

if(colocacao == 2, 5, 1, 3, 4, 9, 7, 8, 10, 6){
    console.log(`\nO ${numero} esta localizado na posicao: ${colocacao}`);

 } else {
    console.log(`\nO ${numero} nao foi localizado!.`);
 }


