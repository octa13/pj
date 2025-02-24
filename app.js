document.addEventListener("scroll", function() {
    let contacto = document.getElementById("contacto");
    let whatsappButton = document.getElementById("whatsapp-button");
    
    // Obtiene la posición de la sección "contacto"
    let contactoPosition = contacto.getBoundingClientRect().top;
    
    // Si la sección "contacto" está visible en la pantalla, mostramos el botón
    if (contactoPosition < window.innerHeight && contactoPosition > 0) {
        whatsappButton.style.display = "block";
    } else {
        whatsappButton.style.display = "none";
    }
});
