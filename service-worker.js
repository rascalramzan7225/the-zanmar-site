
self.addEventListener('install', function(e) {
  console.log('Service Worker: Installed');
  e.waitUntil(
    caches.open('the-zanmar-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/style.css'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  console.log('Service Worker: Fetching');
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
