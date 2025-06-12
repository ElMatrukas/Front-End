let edad = 18
function puedeVotar(edad) {
    if (edad >=18) {
        return "Puede votar"
    } else {
        return "No puede votar"
        }
}
console.log(puedeVotar(edad))

let numero = 5
function esPar(numero) {
    if (numero % 2 == 0) {
        return numero *2
    } else {
        return numero *3
    }
}
console.log(esPar(numero))