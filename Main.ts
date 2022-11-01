// ===========
// FILMINA INTROPOO 2-TYPESCRIPT
// ===========


import * as ReadlineSync from 'readline-sync';

let mensaje = ReadlineSync.question(`Ingrese su nombre: `);
console.log(`Hola ${mensaje} !`);

import * as fs from 'fs';

let texto:string = fs.readFileSync('abc.txt','utf-8');
let palabras: string[] = texto.split(';');

console.log(palabras);