var CACHE_NAME = "cache-v0.2";
var FILE_TO_CACHE = [
  "./",
  //"./css/style.css",
  "https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
];

/* Start the service worker and cache all of the app's content */
self.addEventListener("install", (e) => {
  // Realizar acciones de instalación, como cachear recursos estáticos
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILE_TO_CACHE))
  );
  // Activar la nueva versión del Service Worker inmediatamente después de la instalación
  self.skipWaiting();
});

/* Serve cached content when offline */
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});

self.addEventListener("activate", (e) => {
  // Realizar acciones de activación, como borrar cachés antiguas
  e.waitUntil(
    caches.keys()
    .then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log(`Elimina todas las cachés antiguas que no coinciden con la nueva CACHE_NAME`);
            return caches.delete(cacheName);
          }
        })
      )
    )
    .then(()=>{
      return caches.open(CACHE_NAME).then(cache=>{
        console.log(`Abre la nueva caché y almacena la nueva lista de recursos (FILE_TO_CACHE)`);
        return cache.addAll(FILE_TO_CACHE);
      })
    })
  );
});



self.addEventListener("push", function (event) {
  console.log("[Service Worker] Push recibido.");

  const title = "Notificación Push";
  const options = {
    body: "Contenido de la notificación push."
    //icon: "icons/icon-192x192.png",
    //badge: "icons/badge.png",
  };

  //event.waitUntil(self.registration.showNotification(title, options));
  //event.registration.showNotification(title, options);
  event.waitUntil(sw.showNotification(title, options));
});
