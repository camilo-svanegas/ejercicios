//En contexto global (.window)
console.log(`this: ${this}`);

//Dentro de Scope
function whoIsThis() {
    return this;
};

console.log(`whoIsThis(): ${whoIsThis()}`);

//Modo Strict
function whoIsThisStrict() {
    'use strict';
    return this;
}

console.log(`whoIsThisStrict(): ${whoIsThisStrict()}`);

//This en el contexto de un objeto
const person = {
    nombre: 'Juan',
    saludar: function() {
        console.log(`Hola soy ${this.nombre}`);
    },
};

person.saludar();

//This en el contexto de una clase
function Persona(nombre) {
    this.nombre = nombre;
}

Persona.prototype.saludar = function() {
    console.log(`Hola me llamo ${this.nombre}`);
};

const nuevaPersona =  new Persona('Angela');
nuevaPersona.saludar();