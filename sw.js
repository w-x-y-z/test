let d
let sw
self.addEventListener("install", function (event) {
  console.log("[Service Worker] Instalado");
});

self.addEventListener("push", function (event) {
  console.log("[Service Worker] Push recibido.");

  const title = "Notificación Push";
  const options = {
    body: "Contenido de la notificación push.",
    icon: "icons/icon-192x192.png",
    badge: "icons/badge.png",
  };

  //event.waitUntil(self.registration.showNotification(title, options));
  //event.registration.showNotification(title, options);
  event.waitUntil(sw.showNotification(title, options));
});

function simularNotificacionPush() {
  navigator.serviceWorker.ready.then(function (e) {
    const options = {
      body: "Contenido de la notificación push simulada.",
      //icon: "icons/icon-192x192.png",
      //badge: "icons/badge.png",
      data: {
        url: "https://ejemplo.com/notificacion",
      },
    };
    d=e;
    console.log(e);
    e.showNotification("Notificación Push Simulada", options);
  });
}

 tesNotificacionPush= () => {
    const options = {
      body: "Contenido de la notificación push simulada 123",
      //icon: "icons/icon-192x192.png",
      //badge: "icons/badge.png",
      data: {
        url: "https://ejemplo.com/notificacion",
      },
    };
    sw.showNotification("Notificación Push Simulada", options);
}

