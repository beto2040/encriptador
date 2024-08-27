const areaDelTexto = document.querySelector('.area_del_texto');
const mensajeTexto = document.querySelector('.mensaje_texto');

function btnEncriptar() {
    const textoEncriptado = encriptacion(areaDelTexto.value);
    mensajeTexto.value = textoEncriptado;
    areaDelTexto.value = "";
    if (textoEncriptado.trim() !== "") {
        mensajeTexto.classList.add('ocultar-fondo');
    }
}

function encriptacion(cadenaTextoEncriptada) {
    
    let arrayCodigoEncriptar = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
    cadenaTextoEncriptada = cadenaTextoEncriptada.toLowerCase();

    for (let i = 0; i < arrayCodigoEncriptar.length; i++) {
        if (cadenaTextoEncriptada.includes(arrayCodigoEncriptar[i][0])) {
            cadenaTextoEncriptada = cadenaTextoEncriptada.replaceAll(arrayCodigoEncriptar[i][0], arrayCodigoEncriptar[i][1]);

        }

    }
    return cadenaTextoEncriptada;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptacion(areaDelTexto.value);
    mensajeTexto.value = textoDesencriptado;
    areaDelTexto.value = "";
    if (textoDesencriptado.trim() !== "") {
        mensajeTexto.classList.add('ocultar-fondo');
    }
}

function desencriptacion(cadenaTextoDesencriptada) {

    let arrayCodigoEncriptar = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
    cadenaTextoDesencriptada = cadenaTextoDesencriptada.toLowerCase();

    for (let i = 0; i < arrayCodigoEncriptar.length; i++) {
        if (cadenaTextoDesencriptada.includes(arrayCodigoEncriptar[i][1])) {
            cadenaTextoDesencriptada = cadenaTextoDesencriptada.replaceAll(arrayCodigoEncriptar[i][1], arrayCodigoEncriptar[i][0]);

        }

    }
    return cadenaTextoDesencriptada;
}

function btnCopiar() {
    copia();
}

function copia() {
    navigator.clipboard.writeText(mensajeTexto.value)
        .then(() => {
            alert('¡Texto copiado con exito!');
        })
        .catch(err => {
            console.error('Error al copiar el texto: ', err);
        });
}

function ocultarFondo() {
    mensajeTexto.classList.add('ocultar-fondo');
}

window.onload = function() {
    mensajeTexto.classList.remove('ocultar-fondo');
};
