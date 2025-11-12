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
