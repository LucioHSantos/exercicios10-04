

/*
 ###  Exercício 4 - juros compostos
Se um capital de R$ 1000,00 é aplicado durante 5 meses no sistema de juros compostos sob uma taxa mensal fixa de 12,5%, qual será o valor do montante?

Sendo:

**C =** 1000 \
**i =** 0,125 \
**t =** 5

$$ M = 1000 (1 + 0,125)^5 $$

$$ M = 1000 (1,802) $$

$$ M = 1802 $$

O seu programa deverá imprimir o montante com base no input recebido.
*/

let c = 1.000;
let i = 12.5;
let t = 5;
i= i++
let m = c*(i**5);

console.log(`O valor do montante é de R$${m.toFixed(0)}.`)