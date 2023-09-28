// Obtener elementos del DOM
const tareaInput = document.getElementById("tareaInput");
const listaTareas = document.getElementById("listaTareas");

// Agregar tarea
function agregarTarea() {
    const tareaTexto = tareaInput.value.trim();
    if (tareaTexto !== "") {
        const nuevaTarea = document.createElement("li");
        nuevaTarea.innerHTML = `
            ${tareaTexto}
            <button onclick="eliminarTarea(this)">Eliminar</button>
        `;
        listaTareas.appendChild(nuevaTarea);
        tareaInput.value = "";
    }
}

// Eliminar tarea
function eliminarTarea(elemento) {
    const tareaEliminar = elemento.parentElement;
    listaTareas.removeChild(tareaEliminar);
}
