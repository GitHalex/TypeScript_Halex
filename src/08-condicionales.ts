// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let empresa: string = "Microsoft";
if (empresa !== "") {
  console.log(`la variable tiene valor ${empresa}`);
}
// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let usuario: string = "admin";
let contrasena: string = "12345";
usuario === "admin" && contrasena === "12345"
  ? console.log("Acceso concedido")
  : console.log("Acceso denegado");

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let esNumero: number = -5;
if (esNumero > 0) {
  console.log("El número es positivo");
} else if (esNumero < 0) {
  console.log("El número es negativo");
} else {
  console.log("El número es cero");
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let edadVotante: number = 16;
if (edadVotante >= 18) {
  console.log("Puedes votar");
} else {
  console.log(`No puedes votar, te faltan ${18 - edadVotante} años`);
}
edadVotante >= 18
  ? console.log("Puedes votar")
  : console.log(`No puedes votar, te faltan ${18 - edadVotante} años`);

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad
let edadPersona: number = 20;
let tipoPersona: string = edadPersona >= 18 ? "adulto" : "menor";
console.log(`La persona es un ${tipoPersona}`);

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes: string = "Marzo";
switch (mes) {
  case "Diciembre":
  case "Enero":
  case "Febrero":
    console.log("Estamos en invierno");
    break;
  case "Marzo":
  case "Abril":
  case "Mayo":
    console.log("Estamos en primavera");
    break;
  case "Junio":
  case "Julio":
  case "Agosto":
    console.log("Estamos en verano");
    break;
  case "Septiembre":
  case "Octubre":
  case "Noviembre":
    console.log("Estamos en otoño");
    break;
  default:
    console.log("Mes no válido");
    break;
}
// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
switch (mes) {
  case "Enero":
  case "Marzo":
  case "Mayo":
  case "Julio":
  case "Agosto":
  case "Octubre":
  case "Diciembre":
    console.log(`${mes} tiene 31 días`);
    break;
  case "Abril":
  case "Junio":
  case "Septiembre":
  case "Noviembre":
    console.log(`${mes} tiene 30 días`);
    break;
  case "Febrero":
    console.log(`${mes} tiene 28 o 29 días`);
    break;
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma: string = "francés";
switch (idioma) {
  case "español":
    console.log("Hola");
    break;
  case "inglés":
    console.log("Hello");
    break;
  case "francés":
    console.log("Bonjour");
    break;
  case "alemán":
    console.log("Hallo");
    break;
  default:
    console.log("Idioma no soportado");
    break;
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6

// 10. Usa un switch para hacer de nuevo el ejercicio 7
