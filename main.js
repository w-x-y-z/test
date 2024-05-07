///register("https://w-x-y-z.github.io/test/sw.js")

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("https://w-x-y-z.github.io/test/sw.js")
    .then(function (registration) {
      console.log("Service Worker registrado correctamente",registration);
      sw=registration;
    })
    .catch(function (error) {
      console.log("Error al registrar el Service Worker:", error);
    });
}


// Agregar evento de clic al botón
//document.getElementById('notifyButton').addEventListener('click', showNotification);
notifyButton.addEventListener("click", () => {
  debugger;
  tesNotificacionPush();
});


// Crear un nuevo evento personalizado
var pushEvent = new CustomEvent('push', {
  detail: {
    message: 'Nuevo mensaje push recibido',
    data: {
      // Aquí puedes incluir cualquier dato adicional que desees enviar con el evento push
    }
  }
});
// Despachar el evento en el objeto global (window)
//window.dispatchEvent(pushEvent);
