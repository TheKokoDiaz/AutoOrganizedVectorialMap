// Guardar Hiperprámetros
function saveHyperparameters(){
    // Campos del formulario
    let epochs = document.getElementById('epochs');

    if(window.confirm("¿Aplicar cambios y reiniciar página?")){
        // Guarda los cambios
        sessionStorage.setItem('epochs', epochs.value)
        location.reload();
    }
}