const version = "1650789586356";
const addResourcesToCache = async (resources) => {
  const cache = await caches.open(version);
  await cache.addAll(resources);
};
self.addEventListener("install", (event) => {
  event.waitUntil(addResourcesToCache([
    "/",
    "/about"
  ]));
});
self.addEventListener("activate", (event) => {
});
self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});
