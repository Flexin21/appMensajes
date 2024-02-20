
function enviarMensaje() {
    var texto = $('#textoUsuario').val();
    
    $.ajax({
        url: baseUrl + '/enviarMensaje',
        method: 'get',
        data: { mensajeEnvio: texto },
        success: function(respuesta) {
            alert(respuesta);
        }
    });
}

function verMensaje() {
    var texto = $('#textoUsuario').val();
    
    $.ajax({
        url: baseUrl + '/verMensajes',
        method: 'get',
        data: { mensajeEnvio: texto },
        success: function(respuesta) {
            alert(respuesta);
        }
    });
}
