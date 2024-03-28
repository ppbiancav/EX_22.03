const leia = require("readline-sync"); 

let idadeMenor = 0, idadeMaior = 0; 

idade = leia.questionInt("\nDigite sua idade: ")

while(idade >= 0){
    if (idade < 21){
        idadeMenor++

    }

    if (idade > 50){
        idadeMaior++

    }idade = leia.questionInt("\nDigite sua idade: ")
}
    
   console.log(`total de pessoas menor de 21 anos: ${idadeMenor}`);
   console.log(`total de pessoas maior que 50 anos: ${idadeMaior}`);
    