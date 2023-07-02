/* const radioButtonHtml = document.querySelectorAll('input[type="radio"]');
const inputHtml = document.getElementById('input'); */
/* 
inputHtml.classList.add('input-mobile-cerrado')
inputHtml.classList.remove('input-mobile-cerrado') */
// Obtener los elementos del DOM
const radios = document.querySelectorAll('input[type="radio"]');
const input = document.getElementById('input');
const cerrarRadio = document.getElementById('cerrar');
let selectedRadioIndex = 0;

// Función para manejar el cambio de tamaño de la ventana

function handleResize() {
    if (window.innerWidth < 1051) {
        radios.forEach((radio) => {
            radio.checked = false;
        });
        input.style.display = 'none';
        cerrarRadio.checked = false; // Desmarcar el botón "Cerrar"
        
    } else {
        radios[selectedRadioIndex].checked = true;
        input.style.display = 'block';
        
    }
}

// Función para manejar el clic en los radios
function handleRadioChange(event) {
    selectedRadioIndex = Array.from(radios).findIndex((radio) => radio === event.target);
    console.log(selectedRadioIndex)
    if (window.innerWidth <= 1050) {
        input.style.display = 'block';
        cerrarRadio.checked = false; // Desmarcar el botón "Cerrar" al seleccionar un radio
    }
}

// Función para manejar el clic en el botón "Cerrar"
function handleCerrarClick() {
    radios.forEach((radio) => {
        radio.checked = false;
    });
    input.style.display = 'none';
}
cerrarRadio.addEventListener('click', handleCerrarClick);
// Agregar el evento de carga del contenido DOM
document.addEventListener('DOMContentLoaded', () => {
    // Llamar a la función inicialmente
    handleResize();

    // Agregar el evento de cambio a los radios
    radios.forEach((radio) => {
        radio.addEventListener('change', handleRadioChange);
    });

    // Agregar el evento de clic al botón "Cerrar"
    
});

// Agregar el evento de cambio de tamaño de ventana
window.addEventListener('resize', handleResize);