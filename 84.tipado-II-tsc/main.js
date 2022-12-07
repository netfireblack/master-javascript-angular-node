// Tipos compuestos
// Arrays
// let identificador: <tipo-elemento>[]
// let identificador: Array<tipo-elemento>
var frutas;
var vehiculos;
frutas = ['peras', 'manzanas'];
// Tipo any
var id = 2876; // Rompe la inferencia de tipos y permitirá cualquiera
id = '06754';
// Tipado de funciones (parámetros y el retorno de la función)
function suma(a, b) {
    return a + b;
}
suma(4, 9);
// Tipo void (en funciones que no devuelvan valores)
function setMensaje(mensaje) {
    console.log(mensaje);
    // return mensaje; devolvería error
}
// Tipado genérico en funciones (se define el tipo en la invocación de la función)
function retornoResultado(saludo) {
    return saludo;
}
var a = retornoResultado('Hola');
var b = retornoResultado(12);
var referencia;
referencia = 'A16762';
referencia = 12.34;
// referencia = false; devolvería error
