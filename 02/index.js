

// exercicio 2 - fahrenheit para Celsius

/* De acordo com o aplicativo do tempo, agora está 73 ºF na sua cidade, se convertêssemos isso para Celsius, qual seria o resultado?

$$ F = 73 $$

$$ C = (73 - 32) \* \frac{5}{9} $$

$$ C ≅ 23 $$
*/

let f = 73;

let c = (73-32)*5/9;

console.log(`A temperatura é de ${f}ºf e ${c.toFixed(1)}°c.`)