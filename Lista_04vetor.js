const readlinesync = require('readline-sync');

let vetor = [];
let numero;
let posicao;

for (let i = 0; i < 10; i++)
{
    vetor[i] = readlinesync.questionInt('Digite um número: ');
}

numero = readlinesync.questionInt('Digite o número que você deseja encontrar: ');

posicao = vetor.indexOf(numero);

if (posicao >= 0)
{
    console.log(`O número ${numero} está localizado na posição: ${posicao}`);
}
else
{
    console.log(`O número ${numero} não foi encontrado!`);
}


