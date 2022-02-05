//IIFE
(function(){
    let color = 'green';

    function printColor() {
        console.log(color);
    }

    printColor();
})();

//Funciones que regresan funciones
function makeColorPrinter(color) {
    let colorMessage = `The color is ${color}`;

    return function () {
        console.log(colorMessage);
    }
}

let greenColorPrinter = makeColorPrinter('Green');
console.log(greenColorPrinter());