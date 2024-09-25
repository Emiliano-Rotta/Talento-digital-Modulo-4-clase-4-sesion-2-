// Repaso Generadores

//En JavaScript, los generadores son funciones que pueden ser pausadas y reanudadas, lo que permite un control más preciso del flujo de ejecución. Se definen utilizando la palabra clave function* y usan yield para devolver un valor y pausar la ejecución.

// let animales = ['león', 'tigre', 'elefante', 'jirafa', 'cebra'];

// function* generadorAnimal() {
//     let i = 0;
//     yield animales[i];
//     i++
//     yield animales[i];
//     i++
//     yield animales[i];
//     i++
//     yield animales[i];
//     i++
//     yield animales[i];
//     i++
//     return "No hay más animales"
// }

// const genAni = generadorAnimal();

// console.log(genAni.next().value);
// console.log(genAni.next().value);
// console.log(genAni.next().value);
// console.log(genAni.next().value);
// console.log(genAni.next().value);
// console.log(genAni.next().value);


// //Ejercicio para ir pasando las paginas de a uno

// function* libro() {
//     yield "Pag 1: Introduccion"
//     yield "Pag 2: Capítulo 1"
//     yield "Pag 3: Capítulo 2"
//     yield "Pag 4: Capítulo 3"
//     yield "Pag 5: Índice"
//     return "Fin del libro, espero te haya gustado"
// }

// const leer = libro();

// alert(leer.next().value);
// alert(leer.next().value);
// alert(leer.next().value);
// alert(leer.next().value);
// alert(leer.next().value);
// alert(leer.next().value);
