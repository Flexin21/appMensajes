
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
        }
    });
}
