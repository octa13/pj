
    document.querySelector("form").addEventListener("submit", async function (e) {
      e.preventDefault(); // Evita el envío tradicional del formulario
  
      const formData = new FormData(this);
  
      const datos = {
        nombre: formData.get("nombre"),
        email: formData.get("email"),
        telefono: formData.get("telefono"),
        domicilio: formData.get("domicilio"),
        localidad: formData.get("localidad")
      };
  
      try {
        const respuesta = await fetch("http://localhost:3000/enviar", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(datos)
        });
  
        if (respuesta.ok) {
          Swal.fire({
            icon: 'success',
            title: '¡Mensaje enviado!',
            text: 'Gracias por contactarte. Te responderemos pronto.',
            confirmButtonColor: '#3085d6'
          });
          this.reset(); // Limpia el formulario
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No se pudo enviar el mensaje. Intentá de nuevo.',
            confirmButtonColor: '#d33'
          });
        }
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error de conexión',
          text: 'Verificá tu conexión o contactá al soporte.',
          confirmButtonColor: '#d33'
        });
        console.error(error);
      }
    });
  
