// import { doblar as multiplicar, nombre, resta } from "./matematica.js"; //la reescribo con la palabra multiplicar para que no se pise con la de direccion de transito
// import { doblar } from "./direccionTransito.js";
// // import usuario from "./exportacionPorDefecto.js";

// let resultado = multiplicar(4)

// console.log(`El resultado de la multiplicacion de ${nombre} es igual a: ${resultado}`)

// let transito = doblar("der")
// console.log(transito)


// console.log(resta(80,40))

// // alert(`Hola ${usuario}`)


//--------------------------------
import { sumar, restar } from "./ejercicios/math.js"; //Ejercicio 1
import capitalizar from "./ejercicios/string.js";//Ejercicio 2
import dividir from "./ejercicios/operaciones.js";//Ejercicio3
import { multiplicar } from "./ejercicios/operaciones.js";//Ejercicio3


//1
const resultadoSuma = sumar(10, 20)
const resultadoResta = restar(100, 20)

console.log(`El resultado de la suma es: ${resultadoSuma}`)
console.log(`El resultado de la resta es: ${resultadoResta}`)

//------------------------------------
//2
const palabra = "javascript"

console.log(capitalizar(palabra))

//------------------------------------
//3
const resultadoMultiplicar = multiplicar(10, 20) //200
const resultadoDividir = dividir(100, 20) // 5

console.log(`El producto de la multiplición es: ${resultadoMultiplicar}`)
console.log(`El resultado de la división es: ${resultadoDividir}`)
