let pokemons = [
    {id: 1, name: "charmander", type: "fire", base_damage: 10, base_hp: 12, speed: 30},
    {id: 2, name: "squirtle", type: "water", base_damage: 9, base_hp: 14, speed: 26},
    {id: 3, name: "bulbasaur", type: "leaf", base_damage: 8, base_hp: 16, speed: 26},
    {id: 4, name: "pikachu", type: "electric", base_damage: 12, base_hp: 8, speed: 32},
    {id: 5, name: "pidgey", type: "air", base_damage: 10, base_hp: 10, speed: 35},
    {id: 6, name: "goldeen", type: "water", base_damage: 9, base_hp: 12, speed: 32},
    {id: 7, name: "bellsprout", type: "leaf", base_damage: 10, base_hp: 12, speed: 30},
    {id: 8, name: "magnemite", type: "electric", base_damage: 9, base_hp: 14, speed: 30},
    {id: 9, name: "ponyta", type: "fire", base_damage: 12, base_hp: 18, speed: 36},
    {id: 10, name: "evee", type: "normal", base_damage: 10, base_hp: 12, speed: 30},
]

//1. Ordernar los pokemons por base_damage de menor a mayor.
    // pokemons.sort((v1, v2) => {
    //     if (v1.base_damage < v2.base_damage){
    //         return -1;
    //     } else if (v1.base_damage > v2.base_damage) {
    //         return 1;
    //     } else {
    //         return 0;
    //     }
    // });

    // //De otra forma más simple
    // pokemons.sort((v1, v2) => {
    //     return v1.base_damage - v2.base_damage;
    // });

    // console.log(pokemons);
 
//2. Crear una funcion para ordernar los pokemons dependiendo de el argumento que se ingrese en la funcion. Pueden ingresar: type, base_damage, base_hp o speed.

    function orderPokemon(argument){
        let values = ["id", "name", "type", "base_damage", "base_hp", "speed"]
        if (values.includes(argument)) {
            if (argument === "type" || argument === "name") {
                return pokemons.sort((v1,v2) => v1[argument].localeCompare(v2[argument]))
            } else {
                return pokemons.sort((v1,v2) => v1[argument] - v2[argument])
            }            
        } else {
            console.log("FatalError: Ingresa un argumento válido")
        }
    }

//3. Crear una funcion que filtre el objeto pokemons y devuelva un arreglo con los pokemons filtrados. La funcion debe aceptar un argumento para filtrar por type de pokemon.
 
    // function filterPokemons(typePokemon){
    //     let values = ["fire", "water", "leaf", "electric", "air", "normal"]
    //     if (values.includes(typePokemon)) {
    //         return pokemons.filter(pokemon => pokemon.type === typePokemon)
    //     } else {
    //         console.log("No reconocido: Ingresa un argumento válido")
    //     }
    // }

//4. Crear un objeto llamado Pokemon Master que tenga los siguientes atributos: id: number, name: string, created_date: string, y pokemon: array of objects.
    // let pokemonMaster ={
    //     id: 20, 
    //     name: "electabuzz", 
    //     created_date: "15/11/2020 10:00",
    //     pokemon: [],
    // };

    // console.log(pokemonMaster);


//5. Crear una funcion que de manera aleatoria agregue un nuevo pokemon al atributo pokemon de Pokemon Master.
    // function addNewPokemon(){
    //     let random = Math.floor(Math.random() * pokemons.length)
    //     pokemonMaster.pokemon.push(pokemons[random])

    //     console.log(pokemonMaster)
    // }

//6. Crear una funcion que agregue de manera aleatoria los atributos min_damage y max_damage a nuestro arreglo de pokemons teniendo en cuenta lo siguiente:
// min_damage debe ser un numero entero aleatorio entre 1 y 2 y max_damage debe ser un numero entero aleatorio entre 3 y 5
 

    // function addAtributes(){
    //     for (let num = 0; num < pokemons.length; num++) {
    //         pokemons[num]["min_damage"] = Math.floor(Math.random() * 2) + 1;
    //         pokemons[num]["max_damage"] = Math.floor(Math.random() * 3) + 3;
            
    //     }
    //     console.log(pokemons);
    // }
    

//7. Crear una funcion que determine el daño que hara un pokemon elegido de la lista ante una posible pelea, para ello considerar que el daño que hara el pokemon es:
// daño = base_damage + un valor aleatorio entre el min_damage y el max_damage

    // function damage(chosenPokemon) {
    //     if (chosenPokemon < pokemons.length) {
    //         addAtributes()
    //         let selectedPokemon = pokemons[chosenPokemon]
    //         let totalDamage = 
    //         selectedPokemon.base_damage + Math.floor(Math.random() * (selectedPokemon.max_damage-1+selectedPokemon.min_damage)+selectedPokemon.min_damage)

    //         console.log(totalDamage)
    //     } else {
    //         console.log(`Ingrese un número no mayor a ${pokemons.length -1}`)
    //     }    
    // }
    
//8. Nuestro Pokemon Master quiere estar preparado para pelear, para ello necesita que lo apoyes a ordenar sus pokemons. El quiere que sus pokemons se ordenen de manera
// que el que tenga un mayor valor posible de base_damage + max_damage sea el que este primero en la lista y asi sucesivamente.

    // pokemons.sort(function (v1, v2) {
    //     v1.base_damage + v1.max_damage - (v2.base_damage + v2.max_damage)
    // });

    // console.log(pokemons);


//EJERCICIOS SESION 02

//9. Crear una lista desordenada de Pokemons en nuestro documento HTML
const root = document.getElementById("root")
root.style.margin = "2rem"
const h4 = document.createElement("h4")
root.append(h4)

const ul = document.createElement('ul')
ul.style.margin = "1rem"
root.append(ul)

const texth4 = document.createTextNode("LISTA DESORDENADA DE POKEMONS")
h4.append(texth4)

pokemons.forEach(pokemon => {
    const li = document.createElement('li')
    li.textContent = pokemon.name
    ul.append(li)
})

//10. Utilizando javascript crear una tabla de pokemons con las siguientes columnas: id, name, type, base_damage, base_hp, speed
//11. Agregar un evento que permita ordenar los pokemons haciendo click en sus encabezados.
//12. Corregir la function "orderPokemon" para que acepte ordenarlos segun id y name.

const root2 = document.getElementById("root2")
root2.style.margin = "2rem"

const h2 = document.createElement("h2")

const table = document.createElement('table')
table.style.textAlign = "center"

root2.append(h2)
root2.append(table)

const texth2 = document.createTextNode("LISTADO DE POKEMONS")
h2.append(texth2)

const tr = document.createElement('tr')
table.append(tr)


// Encabezado de la Tabla
for(const property in pokemons[0]){
    const th = document.createElement("th")
    th.textContent = property
    th.style.cursor = "pointer"
    th.classList.add("header")
    th.addEventListener("click", (v) => {
        v.preventDefault()
        orderPokemon(property)
        table.innerHTML = ""
        table.append(tr)
        buildBody()
    })
    tr.append(th)
}

// Cuerpo de la Tabla
function buildBody(){
    for (let i = 0; i < pokemons.length; i++) {
        const tr = document.createElement("tr")
        const values = Object.values(pokemons[i])

        for (let n = 0; n < values.length; n++) {
            const td = document.createElement("td")
            td.classList.add("column")
            td.textContent = values[n]
            tr.append(td)            
        }
        table.append(tr)
    }
}