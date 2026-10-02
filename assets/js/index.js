// Guardar Hiperprámetros
function saveHyperparameters(){
    // Campos del formulario
    let epochs = document.getElementById('epochs');
    let rate = document.getElementById('rate');

    if(window.confirm("¿Aplicar cambios y reiniciar página?")){
        // Guarda los cambios
        sessionStorage.setItem('epochs', epochs.value);
        sessionStorage.setItem('rate', rate.value);
        location.reload();
    }
}