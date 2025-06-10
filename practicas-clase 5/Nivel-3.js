let inicioSesion = true;
let cuentaExiste = true;
let cuentaVerificada = false;

if (cuentaExiste || inicioSesion && cuentaVerificada) {
    console.log("No cumples con los requisitos para acceder");  
} else {
    console.log("cumples con los requisitos para acceder");   
}
if (!cuentaVerificada) {
    console.log("necesitas verificar tu cuenta para acceder");   
} else {
    console.log("Bienvenido ya puedes acceder");
}
