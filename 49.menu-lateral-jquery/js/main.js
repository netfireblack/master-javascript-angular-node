// Código JQuery

// Sirve para que esten cargados los elementos cuando se vaya a ejecutar el codigo escrito en su interior
$(document).ready(function() {
    $('#burger').click(function() {
        $('#burger').toggleClass('abierto');
        $('.menu').toggleClass('abierto');
    })
})