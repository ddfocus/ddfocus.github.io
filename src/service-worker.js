import { build, files, prerendered, version } from '$service-worker';


// test https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers


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

	window.resizeTo(333, 777);
});

self.addEventListener('activate', (event) => {
    console.log('Активирован');
});

//simple strategy - only network
self.addEventListener('fetch', (event) => {
    console.log('fetch');
	event.respondWith(fetch(request));
  
	// event.respondWith(
	// 	caches.match(event.request)
	// );
});



// const FILES = `cache${version}`;
// const FILES_TO_CACHE = ["/about.html", "/index.html"];

// const build = [];
// const prerendered = [];
// const version = '';



// `build` is an array of all the files generated by the bundler,
// `files` is an array of everything in the `static` directory
// const to_cache = build.concat(files);
// const staticAssets = new Set(to_cache);


// This code executes in its own worker or thread
// self.addEventListener("install", event => {
// 	event.waitUntil(
// 		caches
// 			.open(files)
// 			.then((cache) => cache.addAll(files))
// 			.then(() => {
// 				worker.skipWaiting();
// 			})
// 	);
// 	console.log("Service worker installed");

//  });

//  self.addEventListener("activate", event => {
// 	event.waitUntil(
// 		caches.keys().then(async (keys) => {
// 			// delete old caches
// 			for (const key of keys) {
// 				if (key !== files) await caches.delete(key);
// 			}

// 			self.clients.claim();
// 		})
// 	);

// 	console.log("Service worker activated");
//  });

