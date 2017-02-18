const cacheName = "V1";
const urlsToCache = [
  '/',
  '/index.html',
  '/scripts/main.js',
  '/styles/style.css'
];

// install step of the service worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    chches.open(cacheName)
    .then((cache) => {
      console.log('Opened Cache');
      return cache.addAll(urlsToCache);
    });
  );
})
