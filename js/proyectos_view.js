import { proyectos } from "./proyectos_obj.js";
let CARTAS_HTML = document.getElementById("cartas")

crearCartaProyectos(proyectos)

function crearCartaProyectos(objetoProyectos) {
    for (let i = 0; i < objetoProyectos.length; i++) {
        const element = Object.keys(objetoProyectos[i])
        for (let j = 0; j < element.length; j++) {
            /* let nombreObjecto = element[j] */
            setTimeout(function () {
                let card_JS = document.createElement("div");
                let titulo_JS = document.createElement("p");
                let container_fondo_JS = document.createElement("div");
                let container_imagen_JS = document.createElement("div");
                let imagen_pasado_JS = document.createElement("img");
                let imagen_ahora_JS = document.createElement("img");
                let contenedor_informacion_JS = document.createElement("div");
                let fecha_JS = document.createElement("p");
                let area_JS = document.createElement("p");
                let antecedente_JS = document.createElement("p");
                let contexto_JS = document.createElement("p");
                card_JS.classList.add("cards__proyectos");
                card_JS.classList.add("proyectos_html");
                
                titulo_JS.classList.add("cards__lugar");
                container_fondo_JS.classList.add("cards_fondo_imagen")
                container_imagen_JS.classList.add("cards_container_imagen")
                imagen_pasado_JS.classList.add("cards__imagen")
                imagen_pasado_JS.classList.add("villaMariaDelTriunfo")
                imagen_ahora_JS.classList.add("cards__imagen")
                contenedor_informacion_JS.classList.add("cards__informacion")
                fecha_JS.classList.add("cards__fecha")
                area_JS.classList.add("cards__area")
                antecedente_JS.classList.add("antecedente")
                contexto_JS.classList.add("cards__Antecedente_contexto")
                CARTAS_HTML.appendChild(card_JS)
                card_JS.appendChild(titulo_JS)
                card_JS.appendChild(container_fondo_JS)
                container_fondo_JS.appendChild(container_imagen_JS)
                container_imagen_JS.appendChild(imagen_pasado_JS)
                container_imagen_JS.appendChild(imagen_ahora_JS)
                card_JS.appendChild(contenedor_informacion_JS)
                contenedor_informacion_JS.appendChild(fecha_JS)
                contenedor_informacion_JS.appendChild(area_JS)
                contenedor_informacion_JS.appendChild(antecedente_JS)
                contenedor_informacion_JS.appendChild(contexto_JS)
                let propiedades = objetoProyectos[i][element[j]]
                card_JS.id = propiedades.id;
/*                 console.log(propiedades.titulo) */
                titulo_JS.textContent = `${propiedades.titulo}`
                imagen_pasado_JS.src = `${propiedades.imagen_pasado}`
                imagen_ahora_JS.src = `${propiedades.imagen_ahora}`
                fecha_JS.textContent = `${propiedades.fecha}`
                area_JS.textContent = `${propiedades.area}`
                antecedente_JS.textContent = `${propiedades.antecedente}`
                contexto_JS.textContent = `${propiedades.contexto}`
            }, 500)
        }
    }
}



