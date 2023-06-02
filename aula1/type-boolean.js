// boolean 
// true -> verdadeiro 
// false -> falso

const firstNumberB = 5;
const secondNumberB = 10;

console.log(firstNumberB === secondNumberB); //false


/*o JavaScript diferencia minúsculas e maiúsculas, tanto nos valores dos dados quanto no código que escrevemos.

const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase(); -> para deixar tudo em minusculo

console.log(cidade === inputMinusculo); // true*/


const usuarioLogado = true
const contapaga = false

// truthy ou falsy

// 0 = false
// 1 = true

console. log (0 == false)
console. log ("" == false)

// undefined
// null as> vazio ou nada

let minhaVar;
let varNull = null;

console. log (minhaVar) //undefined
console. log (varNull) //null


let numero = 3;
let texto = "Alura";

console.log(typeof numero) // number
console.log (typeof texto) // string


console. log (typeof minhaVar) // undefined
console. log(typeof varNull) //  object
