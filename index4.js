const numeros = [43, 50, 65, 12];

const soma = numeros.reduce((acc, atual) => atual + acc, 0);

console.log(soma);

function operacaoNumerica(acc, atual) {
  return atual + acc;
}

const soma2 = numeros.reduce(operacaoNumerica, 0);

console.log(soma2);
