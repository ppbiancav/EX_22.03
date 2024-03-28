const leia = require("readline-sync"); 

let numero1, numero2;

numero1 = leia.questionInt("\nDigite o primeiro numero ");
numero2 = leia.questionInt("\nDigite o segundo numero "); 

if (numero1 < numero2){
    for (numero1 = numero1; numero1 <= numero2; numero1++ ){
        if (numero1 %3 == 0 && numero1 %5 == 0){
            console.log("e multiplo de 3 e 5", numero1);

        }


    }

}else{
    console.log("\nIntervalo invalido! ");
}