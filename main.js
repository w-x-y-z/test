if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("sw.js")
    .then(function (registration) {
      console.log("Service Worker registrado correctamente");
    })
    .catch(function (error) {
      console.log("Error al registrar el Service Worker:", error);
    });
}

function simularNotificacionPush() {
  navigator.serviceWorker.ready.then(function (registration) {
    const options = {
      body: "Contenido de la notificación push simulada.",
      //icon: "icons/icon-192x192.png",
      //badge: "icons/badge.png",
      data: {
        url: "https://ejemplo.com/notificacion",
      },
    };

    registration.showNotification("Notificación Push Simulada", options);
  });
}

// Agregar evento de clic al botón
//document.getElementById('notifyButton').addEventListener('click', showNotification);
notifyButton.addEventListener("click", () => {
  debugger;
  simularNotificacionPush();
});
