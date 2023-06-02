/*  var
var height = 5;
var length = 7;

area = height + length;
console.log(area)

var area; 
*/

// let 
let form = 'rectangle';
let height = 5;
let length = 7;
let area; // certo

area = height + length;
console.log(area)

if (form === 'rectangle') { 
    area = height * length;
} else {
    area = (height * length) / 2;
}
console.log(area)
//let area; -> errado -> aqui daria um erro porque a let area precisava ser definida antes de rodar o programa 

// por segurança é melhor usarmos let no lugar de area


// const 
const cForm = 'square';
const cHeight = 5;
const cLength = 7;
let cArea; // para poder rodar sem um valor 
// const cArea; -> errado -> toda constante precisa ter um valor

if (cForm === 'square') { 
    cArea = cHeight * cLength;
} else {
    cArea = (cHeight * cLength) / 2;
}
console.log(cArea)