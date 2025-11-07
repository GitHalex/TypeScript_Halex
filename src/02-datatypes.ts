let myName: string = "Alice";
let alias: string = "CloudWalker";
let email: string = "clud@gmail.com";

let age: number = 30;
let height: number = 5.9;

let isStudent: boolean = false;
let isMarried: boolean = true;

// undefined and null
let undefinedVar: undefined;
console.log(undefinedVar);

let nullVar: null = null;
console.log(nullVar);

// Symbol
let sym1: symbol = Symbol("id");
let sym2: symbol = Symbol("id");
console.log(typeof sym1);
console.log(sym1 === sym2); // false

// BigInt
let bigIntVar: bigint = BigInt(9007199254741991);
console.log(typeof bigIntVar);

console.log(bigIntVar);

/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea

// 2. Escribe un comentario en varias líneas

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let myString: string = "Hello, TypeScript!";
let myNumber: number = 42;
let myBoolean: boolean = true;
let myUndefined: undefined = undefined;
let myNull: null = null;
let mySymbol: symbol = Symbol("mySymbol");
let myBigInt: bigint = BigInt(12345678901234567890);

// 4. Imprime por consola el valor de todas las variables
console.log(myString);
console.log(myNumber);
console.log(myBoolean);
console.log(myUndefined);
console.log(myNull);
console.log(mySymbol);
console.log(myBigInt);

// 5. Imprime por consola el tipo de todas las variables
console.log(typeof myString);
console.log(typeof myNumber);
console.log(typeof myBoolean);
console.log(typeof myUndefined);
console.log(typeof myNull);
console.log(typeof mySymbol);
console.log(typeof myBigInt);

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
myString = "TypeScript is awesome!";
myNumber = 100;
myBoolean = false;
myUndefined = undefined;
myNull = null; // This will cause an error
mySymbol = Symbol("newSymbol");
myBigInt = BigInt(98765432109876543210);

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

// 9. A continuación, modifica los valores de las constantes

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse
