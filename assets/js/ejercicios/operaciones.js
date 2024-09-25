// Ejercicio 3: Combi un archivo operaciones.js que contenga una función multiplicar (exportada de forma común) y una función dividir (exportada por defecto). En el archivo main.js, importa ambas funciones y realiza una multiplicación y una división de dos números, mostrando los resultados en la consola.nación de exportación común y por defecto


export function multiplicar(numUno, numDos){
    return numUno * numDos
}

export default function dividir(numUno, numDos){
    return numUno / numDos
}