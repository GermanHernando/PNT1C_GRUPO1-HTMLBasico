/*const formulario = document.getElementById('formularioDeReserva');
const input = document.querySelectorAll('#formulario input');*/

const expresiones = {
	nombre:document.getElementById("nomCompleto"),
	dni:document.getElementById("dni"),
    cel: document.getElementById("cel"),
	mail:document.getElementById("email"),
	cantPersonas:document.getElementById("cantPersonas")
}

function enviarDatos(){
    let warnings = "";
    let entrar = false;
    if(expresiones.nombre.value.length<3){
       /* nombre.setCustomValidity("El nombre no es válido!<br>");*/
        warnings+="El nombre no es válido!\n";
        entrar=true;
    }
    if(expresiones.dni.value.length<8){
        warnings+="El dni no es válido!\n";
        entrar=true;
    }
    if(expresiones.mail.value==""){
        warnings+="El mail no es válido!\n";
        entrar=true;
    }
    if(expresiones.cantPersonas.value < 1){
        warnings+="La cantidad de personas no puede ser menor a 1!";
        entrar=true;
    }
    if(entrar){
        alert(warnings);
    }else{
        alert("Enviado!");
    }
 }; 




