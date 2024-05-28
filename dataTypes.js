/*-------TERCERA SESION QUE UTILIZAMOS QUOAKKA Y JAVA SCRIPT------------*/
/* NOTA: Al crear el archivo de dataTypes.js se tiene que volver a activar QUOKKA */
/* ACTIVIDACION: Shift + control + p y luego buscamos Quokka y le damos en Start on Current File  */

                               /* INICION DE LA SESION */
                               /* ----TIPOS DE DATOS---*/
// String -- Cadena -- cualquier cosa dentro de comillas
const nombre = "Carmen"; // Variable de tipo cadena que almacena mi nombre "Carmen"
const edad = "22"; // Variable de tipo cadena que almacena  mi edad "22"
const space = ' '; // Variable de tipo cadena que almacena un espacio en blanco

// Number - cualquier número
const favNum = 10; // Variable de tipo número que almacena el número entero 15
const favNum1 = 10.9; // Variable de tipo número que almacena el número decimal 15.9

// Boolean - 2 opciones (true or false)
const iLoveCoding = true; // Variable de tipo booleano que indica que ama la programación (true)
const iLoveCoding1 = false; // Variable de tipo booleano que indica que no ama la programación (false)

// Undefined
let casa; // Declaración de una variable sin asignarle un valor, por lo que es undefined
console.log(casa); // Imprime 'undefined' porque la variable casa no tiene un valor asignado

// Null - nulo
const hoja = null; // Variable de tipo null que representa la ausencia intencional de un valor

// *******************************************************************************************
// CHALLENGES

// 1. String Concatenation
// Voy a crear 3 variables constantes y les voy a asignar unas palabras a cada una
const first = "Welcome "; // Variable de tipo cadena que almacena "Welcome "
const second = "to the"; // Variable de tipo cadena que almacena "to the"
const third = " jungle"; // Variable de tipo cadena que almacena " jungle"

const example = {
    first: "Welcome",
    second: "to the",
    third: "jungle",
}

// Hacer un console.log concatenando estas variables PERO voy a guardar esa frase en otra variable
// TU CÓDIGO AQUÍ
const welcome = first + second + third; // Concatenación de las variables first, second y third

console.log(welcome); // Imprime "Welcome to the jungle"

// OUTPUT: "Welcome to the jungle"

// ********************TIPOS DE DATOS COMPUESTOS*******************************
// Nos permiten guardar en variables colecciones de datos asociados o no 

// OBJECT 

const persona = {
    // NOMBRE --- VALOR // KEY VALUE PAIRS
    // KEY -- VALUE
    // strings
    nombre: "Maria del Carmen Huitron Domingo", // Cadena que almacena el nombre
    nacimiento: "08/08/2001", // Cadena que almacena la fecha de nacimiento
    colorOjos: "cafes", // Cadena que almacena el color de ojos
    // Number
    edad: 22, // Número que almacena la edad
    // Boolean
    estudia: true, // Booleano que indica si estudia (true)
}

console.log(persona); // Imprime el objeto persona completo
// ¿CÓMO ACCEDEMOS A LOS VALORES DEL OBJETO?
// QUIERO ACCEDER AL NOMBRE DE LA PERSONA
console.log("Mi nombre es " + persona.nombre); // Imprime "Mi nombre es Maria del Carmen Huitron Domingo"
console.log("Mi nacimiento es " + persona.nacimiento); // Imprime "Mi nacimiento es 08/08/2001"

console.log(persona.edad); // Imprime la edad (22)

// ARRAY 
//              index 0 ,   index 1,   index 2,  index 3
const frutas = ["banana", "manzana", "melón", "pera"]; // Array que almacena una lista de frutas
const vacio = []; // Array vacío
const fruta = ["tomate"]; // Array con un solo elemento "tomate"
//TIPOS DE DATOS DENTRO DE MI ARRAY
const miArray = [21, "ramen", true, undefined, false]; // Array con diferentes tipos de datos
const miArray2 = [15, "manzana", [1, 2, 3, true, "banana"], { uno: 1 }]; // Array con elementos anidados

console.log(frutas[3]); // Imprime "pera" (elemento en el índice 3)
console.log(frutas[1]); // Imprime "manzana" (elemento en el índice 1)

const fruta1 = "sandía"; // Variable de tipo cadena que almacena "sandía"
//          ACCEDO AL NOMBRE DE LA VARIABLE fruta1 Y CON [] ESTOY ACCEDIENDO AL ÍNDICE EN ESPECÍFICO
console.log(fruta1[0]); // Imprime "s" (primer carácter de "sandía")

// AGREGAR VALORES A MI ARRAY INDIRECTAMENTE
// Método push (función)

/* --------NOTA: El método .push() en JavaScript se utiliza para agregar uno o más elementos al final de un array.
Este método modifica el array original y devuelve la nueva longitud del array. */

vacio.push("hola"); // Agrega el elemento "holis" al array vacío

console.log(vacio); // Imprime ["hola"]

// Objetos vacíos también son objetos
const empty = {}; // Objeto vacío
