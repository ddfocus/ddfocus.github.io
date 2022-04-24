const version = "1650786201343";
const addResourcesToCache = async (resources) => {
  const cache = await caches.open(version);
  await cache.addAll(resources);
};
self.addEventListener("install", (event) => {
  event.waitUntil(addResourcesToCache([
    "/",
    "/about"
  ]));
  window.resizeTo(333, 777);
});
self.addEventListener("activate", (event) => {
  console.log("\u0410\u043A\u0442\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u043D");
});
self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});
