const KEY = "9988";

// Autenticación Inmediata
(function() {
    let entry = prompt("ACCESO RESTRINGIDO\nIngrese Identificador de Nodo:");
    if (entry === KEY) {
        window.onload = () => { document.getElementById('desktop-body').style.display = 'block'; };
    } else {
        window.location.href = "https://www.google.com";
    }
})();

function access(node) {
    const win = document.getElementById('window-overlay');
    const frame = document.getElementById('content-frame');
    const title = document.getElementById('label-title');

    win.style.display = 'flex';

    if(node === 'video') {
        title.innerText = "PROCESANDO: TERMINAL_A";
        frame.src = "https://www.youtube.com/embed/";
    } else if(node === 'social') {
        title.innerText = "PROCESANDO: ENLACE_B";
        frame.src = "https://www.instagram.com";
    } else if(node === 'logic') {
        title.innerText = "PROCESANDO: MÓDULO_C";
        frame.src = "https://poki.com";
    }
}

function terminate() {
    document.getElementById('window-overlay').style.display = 'none';
    document.getElementById('content-frame').src = '';
}
