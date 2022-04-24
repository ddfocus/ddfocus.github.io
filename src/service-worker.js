import { build, files, prerendered, version } from '$service-worker';

const addResourcesToCache = async (resources) => {
	const cache = await caches.open(version);
	await cache.addAll(resources);
};


self.addEventListener("install", (event) => {
	event.waitUntil(
		addResourcesToCache([
			"/",
			"/about",
		])
	);
});

self.addEventListener('activate', (event) => {
    // console.log('pwa activate');
});

//simple strategy - only network
self.addEventListener('fetch', event => {
	event.respondWith(fetch(event.request));
});
