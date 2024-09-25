
// //funcion con un valor por defecto

// function saludo(nombre = "Ghiselle"){
//     return `Hola ${nombre}`
// }

// console.log(saludo("Rodolfo")) // 1
// console.log(saludo("Ghiselle")) // 2
// console.log(saludo()) // 3

// Ejercicio 1: Función con parámetros por defecto
// Crea una función llamada crearSaludo que tome dos parámetros: nombre y saludo. El parámetro saludo debe tener un valor por defecto de "Hola". La función debe retornar un mensaje que combine ambos parámetros. Si no se proporciona un saludo, debe usar el valor por defecto. Llama a la función con y sin el parámetro saludo.

const crearSaludo = (nombre, saludo = "Hola") => {
    return `${saludo} ${nombre}`
}

console.log(crearSaludo("Juan", "Chau")) //1 Chau Juan
console.log(crearSaludo("Carlos")) //2 Hola Carlos
console.log(crearSaludo("Chau")) //3 Hola Chau
console.log(crearSaludo()) //4 Hola undefined

// chau juan, hola carlos, chau, hola

// Chau, Juan, Hola Carlos, Hola Chau, Hola undefined

// Chau Juan Hola Carlos

//chau juan hola carlos hola chau hola