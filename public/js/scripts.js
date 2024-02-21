
function enviarMensaje() {
    var texto = $('#textoUsuario').val();
    
    $.ajax({
        url: baseUrl + '/enviarMensaje',
        method: 'get',
        data: { mensajeEnvio: texto },
        success: function(respuesta) {
            alert(respuesta);

            verMensaje();
        }

    });
}

function verMensaje() {
    var texto = $('#textoUsuario').val();
    
    $.ajax({
        url: baseUrl + '/obtenerMensajes',
        method: 'get',
        success: function(respuesta) {
            console.info(respuesta);
            var mensajes= JSON.parse(respuesta);
            console.log(mensajes);
            console.log("EL mensaje 0 es" + mensajes [0] ['texto']);
        }
    });
}
