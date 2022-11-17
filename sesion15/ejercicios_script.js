//EJERCICIO 01
//Digite el importe de una compra, en caso de que el importe sea 150 o más, se le descontará el 12%. Mostrar el descuento otorgado 
//y el importe de compra final 

let nombre = prompt("Ingrese el nombre")
compra = prompt("Ingrese el total de la compra")
descuento = 0

if (compra >= 150) {
    descuento = compra*0.12
}

alert(`${nombre}, el total a pagar por la compra es: S/.${compra-descuento}`)
alert(`El descuento aplicado es: ${descuento} %`)

//EJERCICIO 02
//Ingrese el nombre de un alumno y las notas de su examen parcial, examen final y el promedio de prácticas; muestre el nombre del alumno 
//y su promedio final solo si el alumno está aprobado. Tenga en cuenta que para el cálculo del promedio la nota del examen final tiene peso doble.

let nom = prompt("Ingresa el nombre del alumno")
parcial = +prompt("Ingresa la nota del examen parcial")
final = +prompt("Ingresa la nota del examen final")
practicas = +prompt("Ingresa el promedio de prácticas")

promedio = (parcial + final*2 + practicas)/4

if (promedio >= 11) {
    alert(`${nom}, estás aprobado con: ${promedio}`)
} else {
    alert(`Estas desaprobado`)
}

//EJERCICIO 03
//Elaborar un programa que permita ingresar el nombre del trabajador, su sueldo básico y el número de hijos, 
//se deberá mostrar su bonificación y el sueldo final.  Tenga en cuenta que la empresa está dando una bonificación del 7% 
//del sueldo básico sólo en el caso el trabajador tuviese hijos.

let nombre1 = prompt("Ingresa el nombre")
sueldo = +prompt("Ingresa el sueldo")
nhijos = +prompt("Ingrese el número de hijos")
bonificacion = 0

if (nhijos > 0) {
    bonificacion = sueldo * 0.07
}

alert(`${nombre1}, te corresponde una bonificación de: S/.${bonificacion}`)
alert(`${nombre1}, tu sueldo total es de: S/. ${sueldo + bonificacion}`)

//EJERCICIO 04
//Construir un programa que permita ingresar un número, si el número es mayor de 500, se debe calcular y 
//mostrar en pantalla el 18% de este.

let number = +prompt("Ingrese un número")

if (number>500) {
    porcentaje = number*0.18

    alert(`El 18% de ${number} es:  ${porcentaje}`)
} else {
    alert(`Este número no es correcto`)
}

//EJERCICIO 05
//Crea una aplicación que pida un número y calcule su factorial (El factorial de un número es el producto de todos los enteros 
//entre 1 y el propio número y se representa por el número seguido de un signo de exclamación. Por ejemplo 5! = 1x2x3x4x5=120)

let num = +prompt("Ingrese un número")
factorial = 1

if (num<=0) {
    alert(`Este número no se puede calcular`)
}

for (let i = 1; i <= num;) { 
    factorial = factorial*i 
    i=i+1
}

alert(`El factorial del número ${num} es: ${factorial}`)
