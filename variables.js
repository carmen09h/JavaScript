// Esto es un comentario de 1 línea

/* Comentario de
varias 
líneas */

console.log();
// CONSOLE.LOG es una función para "imprimir" o "ver" cualquier variable o data
console.log("Hello World!")

/* VARIABLES Y CONSTANTES - variables son contenedores 
    VAR - LET - CONST
    Para variables que se pueden cambiar más adelante, usamos VAR o LET
    Para variables constantes, usamos CONST 
*/

/* LET Y CONST */
/* keyword(let OR const) name = value 
Estoy creando esta variable llamada fridge y inicializándola con el valor "empty"*/
let refri = "vacío";
console.log(refri);
/* Cambiar el valor de la variable usamos solo su nombre */
refri = "lleno";
console.log(refri);

var casa = "sucia";
console.log(casa);
casa = "limpia";
console.log(casa);

/* CONST */
const mascota = "gato";
console.log(mascota);
/*mascota = "pez";
console.log(mascota);*/

//NOMBRANDO VARIABLES
// 1. Nombres se distinguen entre mayúsculas y minúsculas
let a = "hola";
let A = "adiós";
console.log(a);
console.log(A);

/*--------------ESTRUCTURA IMPORTANTE DE LAS VARIABLES------------------*/
// 2. Nombres deben comenzar con un carácter en minúscula
// 3. Nombres no pueden comenzar con números
// 4. Nombres no pueden contener símbolos
// 5. Nombres en camelCased son las mejores prácticas

// VÁLIDAS
let user;
let estudiante3;
let favoriteCandy;
let favFood;
let camelCasedVariable;

// NO VÁLIDAS
/* let 3estudiante ;
let fav-candy ; */
/* let camelCasedVariable; */
console.log(favFood);

/* CHALLENGE VARIABLES */

let firstName = "Carmen";
/* CONCATENACIÓN */
/*CAMBIO DE LAS VARIABLES Y DE FORMA DINAMICA*/
/*Saludo*/
console.log( "Hello"+ " "+ firstName); /*Hello Carmen*/
/*Apellido*/
let lastName = "Huitrón";
/* Saludo + Nombre + Apellido*/
console.log("Hello " + firstName +" " + lastName); /*Hello Carmen Huitrón*/
console.log("Hello this is my Mother's something");

/*---------------SEGUNDA CLASE DE JAVA SCRIPT--------------------------------*/
/* NOTA: Al volver a abrir el archivo variables.js se tiene que volver a activar QUOKKA */
/* ACTIVIDACION: Shift + control + p y luego buscamos Quokka y le damos en Start on Current File  */

