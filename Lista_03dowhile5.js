const leia = require("readline-sync") 

let numero, soma = 0;

do{
    numero = leia.questionInt("\nDigite o numero da soma: ")
    if (numero > 0){
        soma += numero

    }
}while (numero != 0 )

console.log("\nA soma dos numeros positivos é: ", soma);