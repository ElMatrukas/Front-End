/* let nombre = "Matias";
let edad = 19;
const esEstudiante = true;

let numero;
numero = 2;

let nada = null; */

/* console.log(typeof nombre)
console.log(typeof edad)
console.log(typeof esEstudiante)
console.log(typeof numero)
console.log(typeof nada) */

/* let persona = ["hola", "como", "estas"]

console.log(typeof persona) */
const objectPerson = {
    nombre1 : "Matias",
    edad1 : 19,
    estadoCivil : "soltero"
}
function greeting() {
    console.log("Hola, soy " + objectPerson.nombre1 + " y tengo " + objectPerson.edad1 + " años" + " y mi estado civil es " + objectPerson.estadoCivil);
}

console.log(greeting());

