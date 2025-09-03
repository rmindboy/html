    function validardatos(nombre, correo, mensaje){
        var resultado = "el/los campos ";

        if(nombre == ""){
            var resultado = resultado + " nombre "
        }if(correo ==  ""){
            var resultado = resultado + " correo "
        }
        if(mensaje ==  ""){
            var resultado = resultado + " mensaje "
        }
        if(nombre != "" && correo != "" && mensaje != ""){
            return null;
        }
        resultado = resultado + " esta(n) vacio(s)"
        return resultado;
    }
    
    function msg_contacto(){
        var nombre = document.getElementById("nombre").value;
        var correo = document.getElementById("correo").value;
        var mensaje = document.getElementById("mensaje").value;

        var validacion = validardatos(nombre, correo, mensaje);
        if(validacion != null){
            document.getElementById("Enviar").innerHTML = `
            <p>${validacion}</p>
            `;
        }else{
            document.getElementById("Enviar").innerHTML = `
            <p>nombre: ${nombre}, correo: ${correo},  mensaje: ${mensaje}</p>
            `;
        }
    }