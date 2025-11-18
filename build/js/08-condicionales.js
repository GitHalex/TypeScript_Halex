"use strict";
let empresa = "Microsoft";
if (empresa !== "") {
    console.log(`la variable tiene valor ${empresa}`);
}
let usuario = "admin";
let contrasena = "12345";
usuario === "admin" && contrasena === "12345"
    ? console.log("Acceso concedido")
    : console.log("Acceso denegado");
let esNumero = -5;
if (esNumero > 0) {
    console.log("El número es positivo");
}
else if (esNumero < 0) {
    console.log("El número es negativo");
}
else {
    console.log("El número es cero");
}
let edadVotante = 16;
if (edadVotante >= 18) {
    console.log("Puedes votar");
}
else {
    console.log(`No puedes votar, te faltan ${18 - edadVotante} años`);
}
edadVotante >= 18
    ? console.log("Puedes votar")
    : console.log(`No puedes votar, te faltan ${18 - edadVotante} años`);
let edadPersona = 20;
let tipoPersona = edadPersona >= 18 ? "adulto" : "menor";
console.log(`La persona es un ${tipoPersona}`);
let mes = "Marzo";
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
let idioma = "francés";
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
