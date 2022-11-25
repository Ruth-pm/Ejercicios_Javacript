//-----------------------------  CASO 01  -----------------------------

//1. Crear una funcion que convierta los strings que se ingresan como parametros a estilo capitalizado.
// Ejemplo: "hola a todos" => "Hola A Todos"

let frase = "hola a todos"

function capitalizar(cadena){ 
    let array = cadena.split(" ") 
    let capitalizedString = []
    for(const index in array){
        capitalizedString.push((array[index].charAt(0).toUpperCase() + array[index].slice(1)))
    }
    return capitalizedString.join(" ")
}
 
//2. Dado el siguiente objeto, crear una funcion que verifique si todos los atributos se encuentran llenos.
// En caso no sea asi, que envie una alerta mostrando un mensaje y los atributos que estan vacíos.
let person = { nombre: "", apellido: "Pacheco", edad: 38, profesion: ""}
function verificar_person() {
    for(const index in person) {
        if (person[index] === "") {
        alert(`El campo ${index} está vacío`)
        }
    }
}
verificar_person()

//3. Para el ejercicio anterior, crear una funcion que dados los datos pendientes, lance un prompt para que el usuario
// complete los datos faltantes. Debe verificar que el dato ingresado no este vacio y que corresponda al tipo de dato.
function verificarYCompletar(objeto) {
    for(const index in objeto) {
        if (objeto[index] === "") {
            objeto[index] = prompt(`El campo ${index} está vacío, por favor completar datos: `)
        }
    }
    return objeto
} 

//4. Te enviaron una base de datos de usuarios:
let users = [
    {nombre: "", apellido: "Pacheco", edad: 38, profesion: ""},
    {nombre: "Andrea", apellido: "", edad: 25, profesion: "profesor"},
    {nombre: "Julia", apellido: "", edad: 32, profesion: "musico"},
    {nombre: "", apellido: "Martinez", edad: 29, profesion: "programador"},
    {nombre: "Roberto", apellido: "Mattos", edad: 40, profesion: ""},
    {nombre: "Mercedes", apellido: "Sanchez", edad: 35, profesion: "veterinario"},
]
 
// Evaluar que usuarios tienen datos pendientes
// y en caso no existan, solicitar el ingreso de los datos a traves del prompt para completarlos.
for (const index in users){
    verificarYCompletar(users[index])
}

console.log(users)

//5. Crear una funcion que permita ordenar los usuarios por edad de menor a mayor.
function ordenar( users) {
    users.sort((v1, v2) => v1.edad - v2.edad)
    console.log(users)
    
}


//-----------------------------  CASO 02  -----------------------------
let users_2 = [
    {nombre: "Andres", apellido: "Pacheco", edad: 38, profesion: "developer"},
    {nombre: "Andrea", apellido: "Sanchez", edad: 25, profesion: "profesor"},
    {nombre: "Julia", apellido: "Ochoa", edad: 32, profesion: "musico"},
    {nombre: "Samuel", apellido: "Martinez", edad: 29, profesion: "programador"},
    {nombre: "Roberto", apellido: "Mattos", edad: 40, profesion: "chef"},
    {nombre: "Mercedes", apellido: "Sanchez", edad: 35, profesion: "veterinario"},
]

//6. Crear una funcion que nos permita escribir los datos de cada usuario en el navegador linea por linea de la siguiente manera:
function show_date_users(users_2){
    for(const index in users_2){
        let nombre = users_2[index].nombre
        let apellido = users_2[index].apellido
        let edad = users_2[index].edad
        let profesion = users_2[index].profesion

        let frase =`• ${nombre} ${apellido} tiene ${edad} años y es ${profesion}`
        document.write(frase)
        document.write("<br>")
    }
}
show_date_users(users_2);


//7. Crear una funcion que nos permita ingresar el parametro por el cual se va a ordenar la lista de usuarios y retorne la lista
// ordenada.
function order_users(argument){
    if (argument === "edad"){
        return users_2.sort((a,b) => a[argument]-b[argument])
    } else {
        return users_2.sort((a,b) => a[argument].localeCompare(b[argument]))
    }
}

//8. Crear un boton con javascript que diga "Aceptar" y cuando se le de click mande una alerta que diga: "De acuerdo!"
const body = document.getElementById("body")
body.style.margin = "2rem"
const root = document.getElementById("root")

const btn = document.createElement("button")
btn.style.padding = "12px"
btn.style.margin = "1rem"
btn.style.width = "20%"
btn.style.background = "#0c6edf"
btn.style.borderColor = "#fff"
btn.style.color = "#fff"
btn.style.cursor = "pointer"
btn.style.borderRadius = "6px"

btn.textContent = "Aceptar"
btn.addEventListener("click",() => {
    alert("De acuerdo!")
})

body.append(root)
root.append(btn)

//9. Agrega un listener al boton para que cuando el usuario haga hover sobre este, el boton desaparezca.
btn.addEventListener("mouseover", () => {
    btn.style.background = ""
    btn.style.color = "#000"
    setTimeout(() => {
        btn.style.background = "#0c6edf"
        btn.style.color = "#fff"
    }, 500)
})