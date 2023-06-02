function nameAge(name, age){
    return `My name is ${name}  and I'm ${age} years old.`
}
console.log(nameAge("julia", 19))


// parâmetros de funções
function sum(num1, num2){
    return num1 + num2;
}
console.log(sum(2, 2)); //aqui adicionamos valores para os num1 e num2
// a ordem dos parâmetros importam


function multiply(num1 = 1, num2 = 2){
    return num1 * num2;
}
console.log(multiply(sum(4, 5)))

// o = 1 foi adicionado como valor padrão dos parâmetros, = 1 no caso da multiplicação deixa ele neutro 

// podemos ter varias funções com os mesmos nomes, eles so funcionam nelas enquanto estão sendo executadas -> ex = num1 e num2

//https://cursos.alura.com.br/course/fundamentos-javascript-tipos-variaveis-funcoes/task/94151