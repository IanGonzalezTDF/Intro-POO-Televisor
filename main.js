"use strict";
// ===========
// FILMINA INTROPOO 2-TYPESCRIPT
// ===========
exports.__esModule = true;
var ReadlineSync = require("readline-sync");
var mensaje = ReadlineSync.question("Ingrese su nombre: ");
console.log("Hola ".concat(mensaje, " !"));
var fs = require("fs");
var texto = fs.readFileSync('abc.txt', 'utf-8');
var palabras = texto.split(';');
console.log(palabras);
