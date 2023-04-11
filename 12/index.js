
// Exercicio 12 - Taxa de juros

// i = m/c -1

let c = 60000;
let m = 90000;
let n = 24;
let exp = 1/n;

let i = (m*exp) / c - 1;



console.log(`"O seu financiamento de ${c} reais teve uma taxa de juros de ${i.toFixed(2)}%, pois após 24 meses você teve que pagar ${m} reais.`)

