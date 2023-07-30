import { servicios } from "./servicios_obj.js";
document.addEventListener("DOMContentLoaded", function () {
    const INPUT_HTML = document.getElementById("input")
    let servicios_links_HTML = document.querySelectorAll(".servicios__links")

    function imprimirBoxServicios(objServicios) {
        let id = "", id_box = "", titulo = "", descripcion, contar = 0, htmlString = ``;
        servicios_links_HTML.forEach(function (currentValue, index, array) {
            currentValue.addEventListener('click', function () {
                let box_HTML = document.querySelector(".box")
                let id_servicio = currentValue.getAttribute("id");
                if (box_HTML) {
                    box_HTML.remove()
                    for (let propiedades in objServicios) {
                        id = objServicios[propiedades].id
                        id_box = objServicios[propiedades].box;
                        if (id_servicio === id) {
                            titulo = objServicios[propiedades].titulo
                            descripcion = objServicios[propiedades].descripcion
                            contar += 1
                            htmlString = `
                                <div id="${id_box}" class="box ${id_box}">
                                    <div id="caja${contar}" class="cajas">
                                        <div class="cajas__card">
                                            <p class="caja__titulo">${titulo}</p>
                                            <p class="caja__descripción">
                                                ${descripcion}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                `
                            INPUT_HTML.insertAdjacentHTML('beforeend', htmlString);
                            break
                        }
                    }
                } 
            })
        })
        for (let propiedades in objServicios) {
            id = objServicios[propiedades].id
            id_box = objServicios[propiedades].box;
            if ("item-1" === id) {
                id = objServicios[propiedades].id
                id_box = objServicios[propiedades].box;
                titulo = objServicios[propiedades].titulo
                descripcion = objServicios[propiedades].descripcion
                contar += 1
                htmlString = `
                            <div id="${id_box}" class="box ${id_box}">
                                <div id="caja${contar}" class="cajas">
                                    <div class="cajas__card">
                                        <p class="caja__titulo">${titulo}</p>
                                        <p class="caja__descripción">
                                            ${descripcion}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            `
                INPUT_HTML.insertAdjacentHTML('beforeend', htmlString);
                break
            }
        }
    }
    for (let i = 0; i < servicios.length; i++) {
        const element = servicios[i];
        imprimirBoxServicios(element)
    }
});
const ESQUELETO_LABEL_HTML = document.getElementById("esqueleto_label")
function imprimirLabelServicios(objServicios) {
    let htmlString = ""
    let contar = 0
    let id = "", titulo = "";
    for (let propiedades in objServicios) {
        id = objServicios[propiedades].id;
        titulo = objServicios[propiedades].titulo
        contar += 1
        htmlString = `
            <div class="content_label">
                <a id="${id}" class="servicios__links" href="#servicios">${titulo}</a>
            </div>
            `
        ESQUELETO_LABEL_HTML.insertAdjacentHTML('beforeend', htmlString);
    }
}
for (let i = 0; i < servicios.length; i++) {
    const element = servicios[i];
    imprimirLabelServicios(element)
}

