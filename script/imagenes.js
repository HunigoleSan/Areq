

const lista__imagenes = [
    '../img/plano1.jpg',
    '../img/plano2.jpg',
    '../img/plano3.jpg',
    '../img/plano4.jpeg'
]
const
    plano__uno = document.getElementById('uno'),
    plano__dos = document.getElementById('dos'),
    plano__tres = document.getElementById('tres'),
    plano__cuatro = document.getElementById('cuatro'),
    carousel = document.getElementById('carousel');
const
    selector__uno = document.getElementById('seleccion_uno'),
    selector__dos = document.getElementById('seleccion_dos'),
    selector__tres = document.getElementById('seleccion_tres'),
    selector__cuatro = document.getElementById('seleccion_cuatro');

let mostrar_imagen = document.querySelectorAll('.seleccionado');
selector__uno.style.marginLeft = "0px"
function mostrar_plano_1() {
    selector__dos.style.marginLeft = "-620px";
    selector__tres.style.marginLeft = "-620px";
    selector__cuatro.style.marginLeft = "-620px";
    setTimeout(function () {
        selector__uno.style.marginLeft = "0px"
    }, 500);
}
function mostrar_plano_2() {
    selector__uno.style.marginLeft = "-620px";
    selector__tres.style.marginLeft = "-620px";
    selector__cuatro.style.marginLeft = "-620px";

    setTimeout(function () {
        selector__dos.style.marginLeft = "0px"
    }, 500);
}
function mostrar_plano_3() {
    selector__uno.style.marginLeft = "-620px";
    selector__dos.style.marginLeft = "-620px";
    selector__cuatro.style.marginLeft = "-620px";

    setTimeout(function () {
        selector__tres.style.marginLeft = "0px"
    }, 500);
}
function mostrar_plano_4() {
    selector__uno.style.marginLeft = "-620px";
    selector__dos.style.marginLeft = "-620px";
    selector__tres.style.marginLeft = "-620px";

    setTimeout(function () {
        selector__cuatro.style.marginLeft = "0px"
    }, 500);
}
plano__uno.addEventListener('click', mostrar_plano_1);
plano__dos.addEventListener('click', mostrar_plano_2);
plano__tres.addEventListener('click', mostrar_plano_3);
plano__cuatro.addEventListener('click', mostrar_plano_4);

