self.addEventListener('install', function(event) {
  console.log('[Service Worker] Instalado');
});

self.addEventListener('push', function(event) {
  console.log('[Service Worker] Push recibido.');

  const title = 'Notificación Push';
  const options = {
    body: 'Contenido de la notificación push.',
    icon: 'icons/icon-192x192.png',
    badge: 'icons/badge.png'
  };

  event.waitUntil(self.registration.showNotification(title, options));
});
