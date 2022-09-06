'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/config": "8174608960cf95cfaba2658bd899bc15",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "0c55875e7297d8ad140da706f4a3be9a",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "41de698a6444e930c42dec576101d4aa",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2169c301a60054af45f4a6cadaba9bc3",
".git/logs/refs/heads/main": "2169c301a60054af45f4a6cadaba9bc3",
".git/logs/refs/remotes/origin/HEAD": "1da601260f52a2b04e954c7c255e84ee",
".git/logs/refs/remotes/origin/main": "a0c9791653d18c7b6f380f4d3616ee75",
".git/objects/00/a0c7ed1aac6fdf94542f03b8d96dd6f797f7f4": "0d4a0b6cab3ae92b3171c55c8338b870",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/1c/201ed35607d4bd9fe292fd8ed66bd4413fd40e": "68d0db332bd279b04876003b95fae219",
".git/objects/1f/e56fa3e96788daf3ec53551d34cef1acaba10f": "27063441bec8f2f8f33219513342f45b",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/3b/0e3bf8a54eb8cee0d6518234b730fc8caa5a5b": "cdd6a6dcb3f957df06e5769b39258157",
".git/objects/4c/93738b1991d71cbb8e9c358151e8c9b5c3574d": "3ad6bd6eda00e697fcdb8d33b59e0833",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/5d/45fa639e2c18affa176980a2230930a0952cf2": "71f27c1d6cbfbc24dc918bfc752f27e9",
".git/objects/68/a2b227e82eed647730f0c2876ec94c68debec2": "a2699fb7ace28ae93b3d39b73160dee3",
".git/objects/71/c1840868a68fef6830c7cc87e7d72ee9baa3b0": "53e0abbc1da761f571eb281ee47f6030",
".git/objects/73/7e7e598ac064a0b39f63ca4c18e2bd901bed09": "16577e7ceeae34624114cd19061675ab",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/ac/af17ffce10d3a28b6127d395c9f617ca74d30b": "9459cd64732acc9ee3343c2e9ea66b0c",
".git/objects/d0/d3382b05a50fa855b8cc56ad5f19a1cb17b87b": "55479ff121442aa9471bce3c99736e76",
".git/objects/da/23755b328e6f43edb7546527a5565ede353f73": "a89986b990a30c0886b1747f208e3eeb",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/f8/dfca01c4142fbe005aa065873eab47a6ac0cfb": "dff41d4303eb4f82a32f15579f467a91",
".git/objects/f9/6b6abd8effc45c24bd85965cf1240aff774edf": "81a616415ec777823bb91941ee5906f7",
".git/objects/fc/7d440a29ffe38837ca6e7b3eac662916a9a070": "d8682634d777ed31b31e6d12cb92dfa9",
".git/objects/pack/pack-b27b4ab3d7f3f3dd3faee7ca9b67d965e05e8d7a.idx": "e5aac8a2b0f15e0ff8795bf6a703df2c",
".git/objects/pack/pack-b27b4ab3d7f3f3dd3faee7ca9b67d965e05e8d7a.pack": "785619a213c694fd4c00b99775423770",
".git/ORIG_HEAD": "d7a858b8e2d1272304b5a10ef1d957a5",
".git/packed-refs": "288fcefd9ffe500c735c79ab1ea4b131",
".git/refs/heads/main": "bd4da6af3dfa8f45bdcf2b62f8e0e7d3",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "bd4da6af3dfa8f45bdcf2b62f8e0e7d3",
"assets/AssetManifest.json": "27260374e425465f7639a54a41a754bd",
"assets/assets/images/posters/Tic%2520Tac%2520Toe%2520Game.svg": "37cbb7132d99e7547560eb29966c2ac2",
"assets/assets/rive/tic_tac_toe_animations.riv": "2a80fa77d562c1d080f66856992b2a48",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "e3ae37de18d25dee22fb9dd5406bbd76",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"CNAME": "9283080f4c8eab09f231fc842921f0d2",
"favicon.png": "1fb13983786faead0a269eb61790e4cc",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "5374da49f3e18375b257afc15519f3e3",
"icons/Icon-512.png": "edc8515549f4be4ee3f8ef521bbdfe5e",
"icons/Icon-maskable-192.png": "ed280517bb05a769bd79682fb6d1f12d",
"icons/Icon-maskable-512.png": "4672d3aa778b23b16ce7f5f33d51e813",
"index.html": "a77e219e834bf382732ce7ae82b4e26c",
"/": "a77e219e834bf382732ce7ae82b4e26c",
"main.dart.js": "a9f2092e4ab32bc05ea5d4b9cc7ce4f6",
"manifest.json": "f1d8b75d4d67b72a17843b26a4ebbba9",
"version.json": "ca1246d239c59e6af33bb74eb3bbe2e2"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
