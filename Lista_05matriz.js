const readlinesync = require('readline-sync');

let matriz = [];
let diagonalPrincipal = [];
let diagonalSecundaria = [];
let somaPrincipal = 0;
let somaSecundaria = 0;


for (let i = 0; i < 3; i++)
{
    matriz[i] = [];
    for (let j = 0; j < 3; j++)
    {
        matriz[i][j] = readlinesync.questionInt('Digite um número');
    }
}

for (let i = 0; i < 3; i++) 
{
    for (let j = 0; j < 3; j++) 
    {
        if (i === j) 
        {
            diagonalPrincipal[i] = matriz[i][j];
            somaPrincipal += matriz[i][j];
        }
        if (i + j === 2) 
        {
            diagonalSecundaria[i] = matriz[i][j];
            somaSecundaria += matriz[i][j];
        }
    }
}

console.log('Elementos da Diagonal Principal:');
console.table(diagonalPrincipal);
console.log('Elementos da Diagonal Secundária:');
console.table(diagonalSecundaria);
console.log('Soma dos Elementos da Diagonal Principal:');
console.table(somaPrincipal);
console.log('Soma dos Elementos da Diagonal Secudária:');
console.table(somaSecundaria);

