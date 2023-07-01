const villaMariaDelTriunfo = document.querySelector("#villa_maria_del_triunfo");
const lugar_2 = document.querySelector("#lugar_2");
const lugar_3 = document.querySelector("#lugar_3");
const lugar_4 = document.querySelector("#lugar_4");
const proyectos = document.querySelector("#proyectos")
console.log(villaMariaDelTriunfo)

const imagenes = [
    [
        "../img/proyectos/planoArquitectonico_1_antes.jpg",
        "../img/proyectos/planoArquitectonico_1_despues.jpeg"
    ],
    [
        "../img/proyectos/planoArquitectonico2.jpg",
        "../img/proyectos/planoArquitectonico2.jpg"
    ],
    [
        "../img/proyectos/planoArquitectonico3.jpg",
        "../img/proyectos/planoArquitectonico3.jpg"
    ],
    [
        "../img/proyectos/planoArquitectonico2.jpg",
        "../img/proyectos/planoArquitectonico3.jpg"
    ]
]

const divElement = document.createElement("div");
const divElementChildImages = document.createElement("div");
const parradoCerrarImages = document.createElement("p");

parradoCerrarImages.id = "cerrarDivElement";
parradoCerrarImages.classList.add("cerrar_images_content")
parradoCerrarImages.textContent = "X"
divElementChildImages.classList.add("select_images_content")
divElementChildImages.id="elementoPadre"

proyectos.appendChild(divElement)
divElement.appendChild(parradoCerrarImages)
divElement.appendChild(divElementChildImages)

function mostrarImagenes(numero){
    for (let i = 0; i < imagenes[numero].length; i++) {
        const imagenAntes = document.createElement("img");
        imagenAntes.style.width = "500px"
        imagenAntes.src = imagenes[numero][i];
        divElementChildImages.appendChild(imagenAntes)
            
    }
}

function selectShowImages(e) {
    const capturarId = e.srcElement.id;

    if (capturarId == "villa_maria_antes" || capturarId == "villa_maria_ahora") {
        divElement.classList.add("proyectos_imagenes_seleccionadas")
        divElement.classList.remove("proyectos_imagenes_seleccionadas_esconder")
        console.log(divElementChildImages.children)
        mostrarImagenes(0)
        
        parradoCerrarImages.addEventListener("click", cerrarDivElement);

    } else if (capturarId == "lugar_antes2" || capturarId == "lugar_ahora2") {
        divElement.classList.add("proyectos_imagenes_seleccionadas")
        divElement.classList.remove("proyectos_imagenes_seleccionadas_esconder")
        console.log(divElementChildImages.children.id)
        mostrarImagenes(1)
        
        parradoCerrarImages.addEventListener("click", cerrarDivElement);
    }else if (capturarId == "lugar_antes3" || capturarId == "lugar_ahora3") {
        divElement.classList.add("proyectos_imagenes_seleccionadas")
        divElement.classList.remove("proyectos_imagenes_seleccionadas_esconder")
        mostrarImagenes(2)
        parradoCerrarImages.addEventListener("click", cerrarDivElement);
    }else if (capturarId == "lugar_antes4" || capturarId == "lugar_ahora4") {
        divElement.classList.add("proyectos_imagenes_seleccionadas")
        divElement.classList.remove("proyectos_imagenes_seleccionadas_esconder")
        mostrarImagenes(3)
        parradoCerrarImages.addEventListener("click", cerrarDivElement);
    }


}

function cerrarDivElement(e) {
    console.log("cerraste y removiste las imagenes")
    console.log()
    /* console.log(divElementChildImages) */
    
    /* console.log(arrayDivElement) */
    const hijos = document.querySelectorAll(".select_images_content > img")
    hijos.forEach(element => {
        divElementChildImages.removeChild(element)
    })
    /* console.log(hijos) */
    /* divElementChildImages.removeChild(hijos) */
    
    divElement.classList.add("proyectos_imagenes_seleccionadas_esconder")
    

}

villaMariaDelTriunfo.addEventListener("click", selectShowImages)
lugar_2.addEventListener("click", selectShowImages)
lugar_3.addEventListener("click", selectShowImages)
lugar_4.addEventListener("click", selectShowImages)