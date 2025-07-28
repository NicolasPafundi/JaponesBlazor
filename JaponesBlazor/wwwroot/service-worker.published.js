// Importa la lista de archivos generados automáticamente por Blazor en publish
self.importScripts('./service-worker-assets.js');

const cacheName = 'blazor-cache-v1';

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName).then(cache => {
            // Cachea todos los assets listados en service-worker-assets.js
            return cache.addAll(self.assetsManifest.assets.map(asset => asset.url));
        })
    );
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(
                keys.filter(key => key !== cacheName).map(key => caches.delete(key))
            )
        )
    );
    self.clients.claim();
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
