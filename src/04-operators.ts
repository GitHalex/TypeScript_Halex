let a: number = 10;
let b: number = 5;
console.log(a + b);
console.log(a - b);
console.log(a * b);

console.log(a / b);
console.log(a % b); //modulo
console.log(a ** b); //exponentiation

let numero: number = 1;
numero++;
console.log(`este es el incremento de la variable numero++: ${numero}`);

numero = 1;
numero--;
console.log(`este es el decremento de la variable numero--: ${numero}`);

numero = 1;
++numero;
console.log(`este es el incremento de la variable ++numero: ${numero}`);

numero = 2;
--numero;
console.log(`este es el decremento de la variable --numero: ${numero}`);

// Operadores de asignación
let c: number = 10;
c += 5;
console.log(c);

// operadores de comparación
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a == b);
console.log(a === b);
console.log(a != b);

// operadores lógicos
console.log(a > 5 && b < 10); // and
console.log(a > 5 || b > 10); // or
console.log(!(a > 5)); // not // negación

// operador ternario
let resultado: string = a > b ? "a es mayor que b" : "a no es mayor que b";
console.log(resultado);

// Clase 20 - Ejercicios: Operadores

// 1. Crea una variable para cada operación aritmética
let suma: number = a + b;
let resta: number = a - b;
let multiplicacion: number = a * b;
let division: number = a / b;
let modulo: number = a % b;
let exponente: number = a ** b;

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
let asignacionSuma: number = 10;
asignacionSuma += suma; // 15

let asignacionResta: number = 10;
asignacionResta -= resta; // 5

let asignacionMultiplicacion: number = 2;
asignacionMultiplicacion *= multiplicacion; // 10

let asignacionDivision: number = 20;
asignacionDivision /= division; // 4

let asignacionModulo: number = 10;
asignacionModulo %= modulo; // 0

let asignacionExponente: number = 2;
asignacionExponente **= exponente; // 1024

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(a > b); // true
console.log(a >= 10); // true
console.log(b < 10); // true
console.log(b <= 5); // true
console.log(a === 10); // true
console.log(a !== 10); // false

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(a < b); // false
console.log(a <= 5); // false
console.log(b > 10); // false
console.log(b >= 10); // false
console.log(a !== 10); // false

// 5. Utiliza el operador lógico and

// 6. Utiliza el operador lógico or

// 7. Combina ambos operadores lógicos

// 8. Añade alguna negación

// 9. Utiliza el operador ternario

// 10. Combina operadores aritméticos, de comparáción y lógicas
