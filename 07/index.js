
// Exercicio 07 - Simulador de Covid

let po = 1000;
let x = 4;
let t = 7;
x = Math.pow(x, t/7);
let covid = po*x;

console.log(`Após 7 dias o número de pessoas será de ${covid}.`)