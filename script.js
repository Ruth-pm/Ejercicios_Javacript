//EJERCICIO 01
let varones = +prompt("Ingrese la cantidad de estudiantes varones");
let mujeres = +prompt("Ingrese la cantidad de estudiantes mujeres");

porcentajeVarones = varones*100/(varones+mujeres);
porcentajeMujeres = mujeres*100/(varones+mujeres);

alert(`El porcentaje de varones es del: ${porcentajeVarones} %`);
alert(`El porcentaje de mujeres es del: ${porcentajeMujeres} %`);

//EJERCICIO 2
let monto = +prompt("Ingrese el monto de inversión para la reparación");
avenida1 = monto*0.35
avenida2 = monto*0.25
avenida3 = monto*0.10
avenida4 = monto*0.15
avenida5 = monto-avenida1-avenida2-avenida3-avenida4

alert(`La Avenida La Mar recibirá: ${avenida1}`);
alert(`La Avenida Abancay recibirá: ${avenida2}`);
alert(`La Avenida 28 de Julio recibirá: ${avenida3}`);
alert(`La Avenida Aviación recibirá: ${avenida4}`);
alert(`La Avenida Tacna recibirá: ${avenida5}`);


//EJERCICIO 3
let general = +prompt("Ingrese el valor vendido de entradas generales");
let mayores = +prompt("Ingrese el valor vendido de entradas para mayores de 65");
let menores = +prompt("Ingrese el valor vendido de entradas para menores de edad");

alert(`El total de venta de entrada general es: ${general*150}`);
alert(`El total de venta de entrada para mayores de 65 es: ${mayores*50}`);
alert(`El total de venta de entrada para menores de edad es: ${menores*80}`);