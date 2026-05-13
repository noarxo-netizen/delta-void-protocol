// La clave secreta para tus amigos
const CLAVE_ACCESO = "9988"; 

// Bloqueo de entrada
window.onload = function() {
    let intento = prompt("SECURITY_CHECK: Enter Node ID to proceed");
    
    if (intento !== CLAVE_ACCESO) {
        // Si fallan la clave, los saca de la página
        window.location.href = "https://www.google.com";
    }
};

// Función para abrir los sitios
function launch(node) {
    const portal = document.getElementById('display-portal');
    const frame = document.getElementById('portal-frame');
    const label = document.getElementById('portal-id');

    portal.style.display = 'block';

    if(node === 'alpha') {
        label.innerText = 'DATA_STREAM_01';
        frame.src = 'https://www.youtube.com/embed/'; 
    } else if(node === 'beta') {
        label.innerText = 'DATA_STREAM_02';
        frame.src = 'https://www.instagram.com'; 
    } else if(node === 'gamma') {
        label.innerText = 'LOGIC_SIMULATION_03';
        frame.src = 'https://poki.com'; 
    }
}

// Función para cerrar la ventana
function killProcess() {
    document.getElementById('display-portal').style.display = 'none';
    document.getElementById('portal-frame').src = '';
}
