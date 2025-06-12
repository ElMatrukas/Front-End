let nombre = "Matias"
function saludar(nombre) {
    console.log("Hola, " + nombre + "!")
}
saludar(nombre) // Hola, Matias!

function sumar(a, b) {
    console.log(a + b);
}

sumar(21, 6);

const letras = function(palabra) {
    if (palabra.length > 5) {
        return "tiene mas de 5 letras";
    } else {
        return "tiene menos de 5 letras";
    }
}
const resultado = letras("hola");
console.log(resultado);