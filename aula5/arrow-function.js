// arrow =>
const presentArrow = name => `my name is ${name}`;
const sum = (num1, num2) => num1 + num2;

/*
ela é um jeito bem menor e simples de declarar as funções,
ela não pode ser nomeada 
*/

// arrow function com mais de uma linha 
const sumSmallNumbers = (num1, num2) => {
    if (num1 > 10 || num2 > 10) {
        return "only numbers less than 10"
    }
    else {
        return num1 + num2;
    }
}