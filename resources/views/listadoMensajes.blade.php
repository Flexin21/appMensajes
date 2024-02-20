@php
    $session = Session();
    $nombre = $session->get('nombre');
@endphp

<div>
    <h1>Mensajes del chat. Bienvenido {{ $nombre }}</h1>
    <div id="contenedorMensajes">
        
    </div>

    <input type="text" id="textoUsuario" name="textoUsuario" />
    <button onclick="enviarMensaje()">Enviar</button> <br>

    <div>
        <button onclick="verMensaje()">ver mensaje</button>
    </div>

</div>
