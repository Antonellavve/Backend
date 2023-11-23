let myObject = {
    name: "Antonella",
    lastName: "Velazquez"
}

let myArr = [1,2,3,4]

let str = "Hola Mundo"

// console.log({myObject, myArr, str});

//Function expresion
let myFunctionExpresion = (num) => {
    return num * 2
}

let numeroPorDos = myFunctionExpresion(3)
//  console.log(numeroPorDos);

//function declaration
function myFunctionDeclaration (str){
    return str
} 

console.log(myFunctionDeclaration("Hola desde la funcion"));

//cuando nosotros declaramos una function exp, solo la podemos llamar desp de declarar
//en cambio una function declaration podemos llamarla desde cualquier parte del archivo, 
//se toma como que estuviera declarada al comienzo de nuestro archivo, es lo que se llama 
//caracteristica hosting es un término para describir que las declaraciones de variables y 
//funciones son desplazadas a la parte superior del scope más cercano, scope global o de función.
// esto tiene que ver en como se declaran las funciones y variables, independientemente de si son
//declaraticas o expresiones, y del uso de let, var o const. para que se lean de cualquier parte se usa la palabra reservada FUNCTION