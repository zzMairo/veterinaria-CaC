
(function(){

    var formulario = document.getElementById("formulario");

    var validarNombre = function(e){
        const msg = document.getElementById("mensajeNombre")
        if(formulario.nombre.value == 0) {
            msg.innerHTML = "Completa el campo Nombre";
            e.preventDefault();
        }

    };

    var validarApellido = function(e){
        const msg = document.getElementById("mensajeApellido")
        if(formulario.apellido.value == 0) {
            msg.innerHTML = "Completa el campo Apellido";
            e.preventDefault();
        }

    };

    var validarEmail = function(e){
        const msg = document.getElementById("mensajeEmail")
        if(formulario.email.value == 0) {
            msg.innerHTML = "Completa el campo Email";
            e.preventDefault();
        }

    };
    
    var validarAsunto = function(e){
        const msg = document.getElementById("mensajeAsunto")
        if(formulario.asunto.value == 0) {
            msg.innerHTML = "Completa el campo Asunto";
            e.preventDefault();
        }

    };

    var validarMensaje = function(e){
        const msg = document.getElementById("mensajeMensaje")
        if(formulario.mensaje.value == 0) {
            msg.innerHTML ="Escriba su mensaje";
            e.preventDefault();
        }

    };

    var validar = function(e){
        validarNombre(e);
        validarApellido(e);
        validarEmail(e);
        validarAsunto(e);
        validarMensaje(e);
    };

formulario.addEventListener("submit", validar);

}())
