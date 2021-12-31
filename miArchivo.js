//Nombre y comision
let textoA = 'Comision-20025';
let textoB = 'Nelson Andrada';
const blanco = " ";
let resultado = textoA + blanco + textoB;
console.log( resultado);


// Variables Globales
const monto_maximo = 100000;
const cant_productos_max = 100;
const descuento = 10;
const iva = 21;
const interes1 = 25;
const interes2 = 35;
const interes3 = 45;
var descuento_si;
var interes;
var interes_si;

// Ingrese la Cantidad de Productos
let productos = cargarCantidadProductos();
// Cargo los Productos
cargarProductos(productos);