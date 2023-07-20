import { proyectos } from "./proyectos_obj.js";
setTimeout(function () {
    const CUERPO_HTML = document.getElementById('page')
    const ANTES_HTML = document.getElementById('imagen_antes')
    const AHORA_HTML = document.getElementById('imagen_despues')
    const CERRAR_HTML = document.getElementById('cerrar')
    let proyectos_HTML = document.querySelectorAll(".proyectos_html")

    proyectos_HTML.forEach(function (currentValue, index, array) {
        currentValue.addEventListener('click', function () {
            obtenerImagenesProyectos(currentValue.id)
        })
    })


}, 1000)
let mostrarProyecto_HTML = document.getElementById('mostrarProyecto')
let contenedorBotones_JS = document.createElement('div')
let span_antes_JS = document.createElement('span')
let span_despues_JS = document.createElement('span')
let cerrar_JS = document.createElement('span')
let contenedorImagenes_JS = document.createElement('div')
let imagen_antes_JS = document.createElement('img')
let imagen_despues_JS = document.createElement('img')

function obtenerImagenesProyectos(id) {

    contenedorBotones_JS.classList.add('botones')
    imagen_antes_JS.classList.add('imagen_escritorio')
    imagen_despues_JS.classList.add('imagen_escritorio')
    imagen_antes_JS.classList.add('imagen_mobile')
    imagen_despues_JS.classList.add('imagen_mobile')
    span_antes_JS.id = 'imagen_antes'
    span_antes_JS.classList.add('btn_antes')
    span_despues_JS.classList.add('btn_ahora')
    cerrar_JS.classList.add('btn_cerrar')
    span_despues_JS.id = 'imagen_despues'
    cerrar_JS.id = 'cerrar'
    contenedorImagenes_JS.classList.add('contenedor_imagenes')
    mostrarProyecto_HTML.appendChild(contenedorBotones_JS)
    contenedorBotones_JS.appendChild(span_antes_JS)
    contenedorBotones_JS.appendChild(span_despues_JS)
    contenedorBotones_JS.appendChild(cerrar_JS)
    mostrarProyecto_HTML.appendChild(contenedorImagenes_JS)
    contenedorImagenes_JS.appendChild(imagen_antes_JS)
    contenedorImagenes_JS.appendChild(imagen_despues_JS)

    for (let i = 0; i < proyectos.length; i++) {
        let objetosProyectos = Object.keys(proyectos[i])
        for (let j = 0; j < objetosProyectos.length; j++) {
            let objProyecto = proyectos[i][objetosProyectos[j]]
            let proyecto_id = objProyecto.id
            if (proyecto_id === id) {
                mostrarProyecto_HTML.style.display = 'flex'
                span_antes_JS.textContent = 'Antes'
                span_despues_JS.textContent = 'Despues'
                cerrar_JS.textContent = 'Cerrar'
                imagen_antes_JS.src = `${objProyecto.imagen_pasado}`
                imagen_despues_JS.src = `${objProyecto.imagen_ahora}`
                console.log(mostrarProyecto_HTML)
                imagen_antes_JS.classList.remove('z-index')
                imagen_despues_JS.classList.remove('z-index')
                span_antes_JS.classList.remove('span-active')
                span_despues_JS.classList.add('span-active')
            }
        }

    }
}
cerrarDisplayImagenesProyectos()
function cerrarDisplayImagenesProyectos() {
    cerrar_JS.addEventListener('click', function () {
        mostrarProyecto_HTML.style.display = 'none';
        imagen_antes_JS.remove()
        imagen_despues_JS.remove()
    })
}
mostrarImagenPasadoPrente()
function mostrarImagenPasadoPrente(){
    span_antes_JS.addEventListener('click', function () {
        imagen_antes_JS.classList.add('z-index')
        imagen_despues_JS.classList.remove('z-index')
        span_antes_JS.classList.add('span-active')
        span_despues_JS.classList.remove('span-active')
    })
    span_despues_JS.addEventListener('click', function () {
        imagen_despues_JS.classList.add('z-index')
        imagen_antes_JS.classList.remove('z-index')
        span_despues_JS.classList.add('span-active')
        span_antes_JS.classList.remove('span-active')
    })
}