// conversão implicita 

const number = 456;
const stringNumber = "456";

console.log (number === stringNumber) // false
console.log (number == stringNumber) // true 

console.log (number + stringNumber) // 456456 por ter juntado duas strings

// conervsão explicita 
// Number ()
// String ()

console.log(number + Number(stringNumber)) //912 pois a string foi convertida 

// nao da pra converter uma string que tenhas letras tambem 

let telephone = 12341234;
console.log("the phone is " + String(telephone)); // teremos a conversão do número 12341234 para uma string “12341234” e assim poderemos fazer a concatenação entre as strings

//Outra opção para transformarmos um valor em String é usar o toString() 
console.log("the phone is" + telephone.toString()); //mais parecida com outras linguagens de programação.

//Podemos usar o operador de soma + para fazer a conversão de textos para números, colocando-os antes das variáveis:
let largura = "10";
let altura = "5";
console.log( + largura * + altura); // teremos a conversão de String para números realizado usando o + antes das variáveis