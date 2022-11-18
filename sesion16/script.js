//EJERCICIO 01 / En base al siguiente código, añadir una función para restar dos números:
let multipli = function(x,y) {
    return x*y
}

let suma = function(x,y) {
    return x+y
}

var resultado = multipli(5,2);
alert (resultado);

var resultado = suma(3,4);
alert (resultado);


function resta (x, y) {
    return x - y
}
alert(resta(18, 6))


//EJERCICIO 02 / En base al siguiente código: añadir una función para pasar de Farenheit a Celsius:
function celsiusAFahrenheit(celsius) {
    let resultado = (celsius * 1.8) + 32;
    return resultado;
}

function fahrenheitaCelsius(fahrenheit) {
    let resultado = (fahrenheit - 32) / 1.8;
    return resultado;
}

let celsius = parseFloat(prompt("Ingrese los grados Celsius:"));
resultado = celsiusAFahrenheit(celsius);
alert(`${celsius}°C convertidos a Fahrenheit es = ${resultado}°F`);

alert();

let fahrenheit = parseFloat(prompt("Ingrese los grados Fahrenheit:"));
resultado = fahrenheitaCelsius(fahrenheit);
alert(`${fahrenheit}°F convertidos a Celsius es =  ${resultado}°C`);


//EJERCICIO 03 / Realizar un programa con una función. Esta función muestra en pantalla 
//la suma de dos números introducidos por el usuario.
function sumar (number1,number2) {
    var number1 = parseFloat(document.getElementById("numero1").value);
    var number2 = parseFloat(document.getElementById("numero2").value);

    var resultado = number1+number2;
    return resultado;
}