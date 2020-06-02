'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "c66e2f6d2d5e2bfb79516c9290f8d20c",
"assets/assets/images/icon.png": "0acc4fb27dca6764227bcc59d514d678",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "7f1df1ee47854388e684afc0845ea820",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "0acc4fb27dca6764227bcc59d514d678",
"icons/icon.png": "0acc4fb27dca6764227bcc59d514d678",
"index.html": "1b7d7b79595d01843728f816d1eeff12",
"/": "1b7d7b79595d01843728f816d1eeff12",
"main.dart.js": "acb86e8c83c5d3218ffe83a7ef1c3a2c",
"manifest.json": "ef0947a6a4d1005448833ecd1880c3e8"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
