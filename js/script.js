'use strict';

const getData = function (){
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let direccion = document.getElementById("direccion").value;
    let numero = document.getElementById("numero").value;
    
    if (nombre == "") {
        document.getElementById("nombre").focus();
        
    } else {
        if (correo == "") {
            document.getElementById("correo").focus();
            
        } else {
            if (direccion == "") {
                document.getElementById("direccion").focus();
                
        } else {
            if (numero == "") {
                document.getElementById("numero").focus();
                
            } else {
                alert(`¡Hola ${nombre}!, Recibmos la informacion para tu pedido: Correo: ${correo} - Direccion: ${direccion} - Celular: ${numero}.  Pronto despacharemos tu orden.`);
            }
    }
    
} 
} 
}