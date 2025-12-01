// <---Sección correspondiente a código del tutorial--->
const NACIONALIDADES_ACEPTADAS = [
    {key: 'AU', name: "Australia"},
    {key: 'BR', name: "Brasil"},
    {key: 'CA', name: "Canadá"},
    {key: 'CH', name: "Suiza"},
    {key: 'DE', name: "Alemania"},
    {key: 'DK', name: "Dinamarca"},
    {key: 'ES', name: "España"},
    {key: 'FI', name: "Finlandia"},
    {key: 'FR', name: "Francia"},
    {key: 'GB', name: "Reino Unido"},
    {key: 'IE', name: "Irlanda"},
    {key: 'IN', name: "India"},
    {key: 'IR', name: "Irán"},
    {key: 'MX', name: "México"},
    {key: 'NL', name: "Países Bajos"},
    {key: 'NO', name: "Noruega"},
    {key: 'NZ', name: "Nueva Zelanda"},
    {key: 'RS', name: "Serbia"},
    {key: 'TR', name: "Turquía"},
    {key: 'UA', name: "Ucrania"},
    {key: 'US', name: "Brasil"},
];

window.onload = () => {

    const form = document.getElementsByTagName("form");
    const inputs = form[0].getElementsByTagName("input");
    const selects = form[0].getElementsByTagName("select");

    for(let input of inputs){
        input.onfocus = resaltarDesresaltar;
        input.addEventListener("blur", resaltarDesresaltar);
        // <---Sección correspondiente a código de la asignación--->
        // Si el input se trata de un texto
        if(input.type === "text")
            input.addEventListener("input", validarCamposTexto);
        // <---Sección correspondiente a código de la asignación--->
    }
    
    for(let select of selects){
        select.onfocus = resaltarDesresaltar;
        select.addEventListener("blur", resaltarDesresaltar);
    }

    cargarNacionalidades();
}
// <---Sección correspondiente a código de la asignación--->
/*
    Valida si un input está vacío o, si se trata del nombre o apellidos, si
    tiene caracteres especiales. Está pensado para inputs que reciban texto.
*/
function validarCamposTexto(evento){
    // Obtiene el elemento del evento
    const elemento = evento.target;
    // Verifica si el contenido del input está vacío o tiene espacios en blanco.
    campoVacio = elemento.value.trim() === "";
    // Verifica si se trata del nombre o apellidos
    esNombreApellido = ["first-name", "last-name"].includes(elemento.name);
    // Verifica si el contenido tiene un nombre o apellidos válido.
    esNombreApellidoValido = /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/.test(elemento.value.trim());
    // Verifica si el input es del nombre o apellidos y si tiene caracteres especiales.
    tieneCaracteresEspeciales = esNombreApellido && !esNombreApellidoValido;

    // Obtiene todas las etiquetas de la página
    const etiquetas = document.getElementsByTagName("label");
    // Almacena la etiqueta del input
    let etiquetaTexto;
    // Recorre cada etiqueta
    for(let etiqueta of etiquetas){
        // Si el atributo "for" de la etiqueta es igual al nombre
        if(etiqueta.htmlFor == elemento.name){
            etiquetaTexto = etiqueta;
        }
    }    
    // Si el input tiene el campo vacío o caracteres especiales
    if(campoVacio || tieneCaracteresEspeciales){
        // Se pinta el contorno del input y el texto de la etiqueta asociada
        if(!elemento.classList.contains("not-valid"))
            elemento.classList.add("not-valid");
        
        if(!etiquetaTexto.classList.contains("not-valid-label")) 
                    etiquetaTexto.classList.add("not-valid-label");
    } else{
        // Se despinta el contorno del input y el texto de la etiqueta asociada
        if(elemento.classList.contains("not-valid"))
            elemento.classList.remove("not-valid");
        
        if(etiquetaTexto.classList.contains("not-valid-label")) 
                    etiquetaTexto.classList.remove("not-valid-label");
    }
}

// <---Sección correspondiente a código de la asignación--->

function resaltarDesresaltar(evento){
    evento.target.classList.toggle("selected");
    // <---Sección correspondiente a código de la asignación--->

    // Obtiene todos los elementos label de la página
    const etiquetas = document.getElementsByTagName("label");
    /*
        Recorre cada etiqueta y activa la clase "selected-label" únicamente a la etiqueta
        cuyo atributo "for" es igual al atributo "name" del elemento input o select que
        es enfocado.

        ¡¡OJO!!: Debido a que en la asignación no se especifica si podemos modificar el código
        HTML de la página, decidí hacerlo de esta manera, trabajando únicamente con código
        JavaScript. Normalmente hubiera agregado el atributo "id" a cada label, cuyo valor
        sería igual al mismo atributo de su elemento input correspondiente, logrando el
        mismo objetivo pero de manera más eficiente, aunque para efectos de esta asignación
        esta mayor eficiencia es mínima (también es por esta misma razón que decidí dejar
        este ciclo, ya que si fuera un proyecto más complejo o demandante hubiese optado por la opción
        que acabo de mencionar).
    */
    for(let etiqueta of etiquetas){
        // Si el atributo "for" de la etiqueta es igual al atributo "name" del input
        if(etiqueta.htmlFor == evento.target.name)
            // Se agrega/quita la clase selected label
            etiqueta.classList.toggle("selected-label");
    }

    // <---Sección correspondiente a código de la asignación--->
}

function cargarNacionalidades(){
    
    const nacionalidades = document.getElementById("nationality");

    for(let{key, name} of NACIONALIDADES_ACEPTADAS){
        
        const option = document.createElement("option");
        option.value = key;
        option.innerHTML = name;
        nacionalidades.appendChild(option);
    }
}
// <---Sección correspondiente a código del tutorial--->


