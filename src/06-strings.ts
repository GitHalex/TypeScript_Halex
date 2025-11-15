let miNombre: string = "Halex";
let miApellido: string = "Gonzalez";

// el tamaño de la cadena
console.log(miNombre.length);

// Acceso a caracteres individuales
console.log(miApellido[1]);
console.log(miNombre[7]); //undefined, porque no existe esa posición

// metodfos comunes de strings
console.log(miNombre.toUpperCase());
console.log(miNombre.toLowerCase());
console.log(miNombre.indexOf("halex")); //-1 porque no existe
console.log(miNombre.indexOf("lex")); //2 porque empieza en la posición 2
console.log(miNombre.includes("alex"));
console.log(miNombre.slice(0, 2));
console.log(miNombre.replace("Halex", "Alex")); //cambia Halex por Alex
console.log(miNombre.concat(" ", miApellido)); //une dos strings
console.log(`${miNombre} ${miApellido}`); //otra forma de unir dos strings
console.log(miNombre.repeat(3)); //repite el string 3 veces

// Template Strings
let saludo: string = `Hola, mi nombre es ${miNombre} ${miApellido}.`;
console.log(saludo);

/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto
let nombreCompleto: string = miNombre + " " + miApellido;
console.log(nombreCompleto);

// 2. Muestra la longitud de una cadena de texto
let tamanioNombreCompleto: number = nombreCompleto.length;
console.log(tamanioNombreCompleto);

// 3. Muestra el primer y último carácter de un string
let primerCaracter: string = nombreCompleto[0];
let ultimoCaracter: string = nombreCompleto[nombreCompleto.length - 1];
console.log(
  `Primer carácter: ${primerCaracter}, Último carácter: ${ultimoCaracter}`
);

// 4. Convierte a mayúsculas y minúsculas un string
let nombreMayusculas: string = nombreCompleto.toUpperCase();
console.log(nombreMayusculas);
let nombreMinusculas: string = nombreCompleto.toLowerCase();
console.log(nombreMinusculas);

// 5. Crea una cadena de texto en varias líneas
let datosPersonales: string = `Nombre: ${miNombre}
Apellido: ${miApellido}
Edad: 30;
pais: España`;

console.log(datosPersonales);

// 6. Interpola el valor de una variable en un string
let edad: number = 30;
let presentacion: string = `Hola, mi nombre es ${miNombre} ${miApellido} y tengo ${edad} años.`;
console.log(presentacion);

// 7. Reemplaza todos los espacios en blanco de un string por guiones
let stringConEspacios: string = "Hola a todos, bienvenidos a TypeScript";
let stringConGuiones: string = stringConEspacios.replace(/ /g, "-");
console.log(stringConGuiones);

// 8. Comprueba si una cadena de texto contiene una palabra concreta
let palabraABuscar: string = "TypeScript";
let contienePalabra: boolean = stringConEspacios.includes(palabraABuscar);
console.log(
  `¿La cadena contiene la palabra "${palabraABuscar}"? ${contienePalabra}`
);

// 9. Comprueba si dos strings son iguales
let string1: string = "Hola Mundo";
let string2: string = "Hola Mundo";
let sonIguales: boolean = string1 === string2;
console.log(`¿Los strings son iguales? ${sonIguales}`);

// 10. Comprueba si dos strings tienen la misma longitud
let string3: string = "TypeScript";
let string4: string = "JavaScript";
let mismaLongitud: boolean = string3.length === string4.length;
console.log(
  `¿Los strings ${string3} y ${string4} tienen la misma longitud? ${mismaLongitud}`
);
