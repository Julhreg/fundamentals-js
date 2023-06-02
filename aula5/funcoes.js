/* funções 
let x = "" // variavel que pode ter o valor trocado
console.log(x)
x = "oi"; // o java le linha por linha, então o console colocaria a primeira informação 
*/

// declarar a função 
function showText(text) { 
    console.log(text)
}


// executar a função
showText("Tatakae")
showText("shine")
showText(sum())

// tres formas de escrever as funções 

function sum(){
    return 2 + 2; // precisa ser a ultima linha da função e o console vai te devolver o que esta nela
}

console.log(sum())