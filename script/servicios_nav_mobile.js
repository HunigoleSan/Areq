const menu =document.querySelector("#menu");
const esqueleto_label = document.querySelector("#esqueleto_label");
function showListoNavMobile(){
    esqueleto_label.classList.toggle('show-columns-firts')
}
function showEsqueletoLabel(){
    esqueleto_label.classList.remove('show-columns-firts')
}

menu.addEventListener('click', showListoNavMobile)
esqueleto_label.addEventListener('click', showEsqueletoLabel)
