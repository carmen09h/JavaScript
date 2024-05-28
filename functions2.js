/*-------TERCERA SESION QUE UTILIZAMOS QUOAKKA Y JAVA SCRIPT------------*/
/* NOTA: Al crear el archivo de dataTypes.js se tiene que volver a activar QUOKKA */
// function - palabra reservada de JS y nos indica que es una función
//  FUNCIÓN - BLOQUE DE CÓDIGO
// saluda (nombre de mi función)
function saluda(){
    // RETURN ES EL PEDAZO DE LÓGICA QUE REGRESA LA FUNCIÓN
    return "hola";
}

// LLAMAR O INVOCAR LA FUNCIÓN -> CALL THE FUNCTION, INVOKE THE FUNCTION
console.log(saluda());


// PARÁMETROS DE UNA FUNCIÓN
function suma (numero1, numero2){
    return numero1 + numero2;
}
// ARGUMENTOS 
// PARA MOSTRAR EL RESULTADO DE LA SUMA SE TIENE QUE CORRER EL QUOKKA 
console.log(suma(5,100000)); 
console.log(suma(1004,435)); 
console.log(suma(4332,546)); 

//FUNCIONES QUE RECIBEN LOS DAROS Y QUE NO RECIBEN LOS DATOS 
// addTwo -> Crear un funcion addTwo que acepata un numero y regreas el numero +2

function addTwo(number){
    // Guardar mi resultado del numero +2 en una variable.
    const result =number +2;
    // Regresar = return   valor= result esa variable con el resultado final 
    return result;
}

// Verificacion que este correcta
// LLAMAMOS LA FUNCION
// addTwo()
// PARA VER EL RESULTADO DE aadTwo SE TIENE QUE CORRER EL QUOKKA
console.log(addTwo(7));
console.log(addTwo(988676));

