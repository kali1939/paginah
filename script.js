// Función para mostrar secciones individuales
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se recargue

    // Obtener los valores del formulario
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let mensaje = document.getElementById("mensaje").value;

    // Asegurarse de que los valores estén correctamente formateados y codificados para la URL
    let mensajeWhatsApp = `Hola, soy *${encodeURIComponent(nombre)}*. Mi correo es: *${encodeURIComponent(email)}*. Y el mensaje es: *${encodeURIComponent(mensaje)}*`;

    // Número de WhatsApp (cambia por el tuyo)
    let numeroWhatsApp = "527774286946";

    // Redirigir a WhatsApp con los datos del formulario
    window.open(`https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${mensajeWhatsApp}`, "_blank");

    // Mostrar mensaje de confirmación
    document.getElementById("confirmacion").style.display = "block";

    // Limpiar los campos del formulario
    document.getElementById("nombre").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mensaje").value = "";
});



