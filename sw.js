const CACHE_NAME = "my-first-islamic-journey-v9";
const CORE_ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.webmanifest",
  "./assets/data/content.json",
  "./assets/images/app-icon.svg",
  "./assets/images/zezo-avatar.svg",
  "./assets/images/little-zezo-avatar.jpg",
  "./assets/images/little-zezo-photo.jpg",
  "./assets/images/adam-cousin-avatar.jpg",
  "./assets/images/adam-cousin-photo.jpg",
  "./assets/images/story-night-garden.png",
  "./assets/images/story-boat.svg",
  "./assets/images/story-rainbow.svg",
  "./assets/images/story-courtyard.svg",
  "./assets/images/garden.svg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          return response;
        })
        .catch(() => caches.match("./index.html"));
    })
  );
});
