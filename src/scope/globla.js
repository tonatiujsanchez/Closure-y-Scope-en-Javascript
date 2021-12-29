// Reasignar una variable reutilizando la palabra 'var', es una mala practica.
var hello = 'Hello';
var hello = 'Hello + World';

// Reasignar una variable reutilizando la palabra let, da un error.
let world = 'Hello world';
// No se puede reasinar una contante, da un error
const helloWorld = 'Hello World!!!';



const anotherFuntion = ()=>{
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}
anotherFuntion();

// Declara una variable sin las palabras reservada var, let, const es una mala practica
// y se convierte en un variable global
const holamundo = ()=>{
    globalVar = 'Im global';
}
holamundo();
console.log( globalVar );


const funtionReasign = ()=>{
    // La primera es local y la segunda global, pero es mala plactica
    let holaDeNuevo = holaGlobal = 'Este un valor global y local';
}
funtionReasign();
console.log(holaGlobal);  
console.log(holaDeNuevo);  //Da un error por que es una variable local