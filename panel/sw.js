// Permite instalar el panel como app. Siempre usa datos en vivo (no guarda nada en caché).
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
