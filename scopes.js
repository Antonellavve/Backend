

var vGlobal = "declarada con var"
let lGlobal = "declarada con let"
const cGlobal = "declarada con const"

function myFunction () {
    var vScope = "declarada con var func"
    let lScope = "declarada con let func"
    const cScope = "declarada con const en func"
}

//variable con var se puede reasignar
var miVariable  = "hola mundo"
var miVariable = "chau"

//la variable declarada con let y const no se puede reasignar, son unicas
//indica un codigo mas seguro que no pueda ponerse el mismo nombre, es unico

let arr = [];

for (var i = 0  ; i < 5 ; i++){
    var numero = i
    arr.push(numero)
}

if (true){
    var x = 3
}



// console.log(numero)
console.log(miVariable);