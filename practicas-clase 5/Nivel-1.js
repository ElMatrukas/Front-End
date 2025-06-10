let edad = 19;
let esMayor = true;
let esMenor = false;

if (edad >= 18 && esMayor) {
    console.log("Es mayor de edad");
} else {
    console.log("No es mayor de edad");
}

let esAdmin = false;
let esModerador = true;

if (esAdmin || esModerador) {
    console.log("Tiene permisos especiales");
} else {
    console.log("No tiene permisos especiales");
}

if (!esMayor) {
    console.log("No podes entrar tines que cumplir 18");   
}