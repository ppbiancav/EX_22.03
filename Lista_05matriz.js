const leia = require('readline-sync');

let matriz = [
[4.0, 5.0, 7.0, 3.0],
[2.5, 6.5, 4.7, 8.0],
[10.0, 8.5, 9.5, 8.0],
[9.0, 6.5, 7.6, 8.2],
[5.0, 5.0, 5.0, 6.3],
[7.0, 8.0, 9.0, 8.5],
[5.5, 3.5, 2.5, 1.0],
[8.0, 9.0, 10.0, 9.5],
[5.6, 5.8, 6.5, 7.0],
[7.5, 8.5, 9.5, 10.0]];
let mediaAluno = [];
let notaAluno = [];

for(let i = 0; i < matriz.length; i++){
     let somar = 0;
     for(let j = 0; j < matriz[i].length; j++){
          somar += matriz[i][j]
     }
     mediaAluno = somar/matriz[i].length; notaAluno[1] = media.toFixed(1)
}
console.log(notaAluno);

