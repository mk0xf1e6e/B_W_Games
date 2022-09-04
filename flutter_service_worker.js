'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/config": "8174608960cf95cfaba2658bd899bc15",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
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
".git/index": "69dbdc817b4cc459a2ea14bcae9f060b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1ec0a960e7c22cca252d63d01033c3a3",
".git/logs/refs/heads/main": "1ec0a960e7c22cca252d63d01033c3a3",
".git/logs/refs/remotes/origin/HEAD": "d8079f3ed3f6308ba43a7f3a93b827c3",
".git/logs/refs/remotes/origin/main": "e3fad25d81a1b7dd97645196e237ac3b",
".git/objects/03/df6e7211e2473b3e7af0b3310c4cb957cc5f53": "84ec6d1ea52a7e1c20ecd5b6a2e0ef70",
".git/objects/09/29b896a0ba876d656ae8f6747db519f16d3009": "42e964f1d9d52a9ac26a6bc3d0840890",
".git/objects/19/4e8de3a9e4b9091e1aee493acf56e7177f777a": "5be7375df5c97bb241fa2b3861b3663a",
".git/objects/1b/3e9a9d5f8d64c5aa8f5755443357a622b64aa9": "e6c9f40c7a278427baabead5590602d8",
".git/objects/22/15b72f392549bbce34276c87f552886a5141bd": "4925e74590767283ee60bda41db9dd69",
".git/objects/23/096836023ad43a13d95e24e445d41f1664e314": "935dedc463a81b7d778d2901a046ad0d",
".git/objects/2b/95cae59f62f1d3f3fca611fda496df5382889f": "c84ce3ad95368c576c4cda3a6d489936",
".git/objects/38/c857a537dd1ca9f64aba0636d80385f6557110": "3e057247b5701fc0b966a4fe199cfe2b",
".git/objects/40/0eaa63e4b149f0be17f96e4d03796e070364c4": "e5cbe5c3d2fa3a9625326a6d99327795",
".git/objects/41/1db4f1ef6d14afb9af68b5d80b39f62fa86f61": "0f438aa19346a0a9e394d93c55100721",
".git/objects/42/921f95391bbce5db612e0cc7dd7464a31f8a21": "58437981f52547ea37f2cb3008e43ae3",
".git/objects/43/6e73604865ce74ffaa42b24e5b40c3949c2e64": "a8fdadcba3bde03efbd9d5fb5a9eec5c",
".git/objects/44/8bae9b74fd6ea18da5609534f041418a327fdc": "d3c7a08845f7e5eda492ce1279f39ef6",
".git/objects/45/bfa60081d222f683c95a10d7b3d643c8fab5a1": "0ffd60068f00cef0812648a0d7e1c6ca",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/50/6aadbab8892f82b94b12f391e9563358d19f8b": "f972e5aa4c305200a439f4bcc99db04d",
".git/objects/51/8913144c587f6e1c821f0de16398dd67524cf3": "56c18b35951218cb52425ee805bd75f6",
".git/objects/58/226945976382ecc780bd6af530ca098a728ba0": "53a2864bb376a14c76a48385ce694e98",
".git/objects/5f/d48a95b0f8d93e6cea204ef2f8e4f25f7fb246": "4dbc5da04cd44a703b35297adc493e26",
".git/objects/63/58ed5e98482492469cae2f13fdadc8129b9552": "d56098f8fe6a2bb5bbc60700f6a2882b",
".git/objects/6d/5a13edca294c7f88b64b0f226fb053619791ac": "df4fed54296fe41289f45f95c96e4af7",
".git/objects/6e/0c227dc45ff0de5c5d39bec2ca0c17247fd88b": "29e643f7eef92acb387edfbf9815f2e2",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/8b/00dd5d03298825fdcdf3642d676263c559a2d3": "5f872caf0155b71060c48dd5d0dfe1dc",
".git/objects/8b/ccc4e2e619f9da9894e139ea86deaf287ce282": "6b6d9e0b2576d5bb2ae1a487acb9768a",
".git/objects/a0/ceec0879e2e238185a4844d735ccd4735aa78c": "ab181b16c37c313283b86e6b5dd35646",
".git/objects/a0/d9dae8d8ba9ca8170b3a7acc7f7afa9ad81dc5": "36c01d8612b28d0fc1ddc32b4023c7c4",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/487bfc113054e77840929ab95f818329b40794": "df996948433949d75d778852c26bbaf5",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d4/4f6dde2a91a06956828d2986c6dbb29933cd0a": "9691d7fb7daab3f743207406ee2a9007",
".git/objects/d8/72f272bb26074cddcdaed143a668fbf8bfcc9f": "3cbb446954784c5c19e4e13e35342083",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f0/8f3877b9093715ee0a0cb4a82dedc02905e15c": "47ca67d573b4d3bf786771c1f7a4a982",
".git/objects/f6/af63d2c05a5c1028af3903579db123350570a7": "8007ade90a3c803bfbfeeed33b910670",
".git/objects/f6/c8d664c6347af66a18813059d6e4592c814da4": "fef58b726ef60ec1fd097caac0bda7e1",
".git/objects/fb/7193b92e397717fc98da6aa215cbaea2d6a8b4": "91afd28aa2fda895d0f5965d55aa5cde",
".git/objects/pack/pack-1a9267abb0834f6eaba190b35f3389539779cc2c.idx": "9faf838ad488c7cfd868d7dda310fbcb",
".git/objects/pack/pack-1a9267abb0834f6eaba190b35f3389539779cc2c.pack": "3e040227367dd7a63d387789310e352a",
".git/packed-refs": "5e43bbbef645ca8d92d2f7df1bf0d5ff",
".git/refs/heads/main": "a64b1120583318c055cdbacdbb6648ca",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "a64b1120583318c055cdbacdbb6648ca",
"assets/AssetManifest.json": "27260374e425465f7639a54a41a754bd",
"assets/assets/images/posters/Tic%2520Tac%2520Toe%2520Game.svg": "37cbb7132d99e7547560eb29966c2ac2",
"assets/assets/rive/tic_tac_toe_animations.riv": "2a80fa77d562c1d080f66856992b2a48",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "e3ae37de18d25dee22fb9dd5406bbd76",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "1fb13983786faead0a269eb61790e4cc",
"icons/Icon-192.png": "5374da49f3e18375b257afc15519f3e3",
"icons/Icon-512.png": "edc8515549f4be4ee3f8ef521bbdfe5e",
"icons/Icon-maskable-192.png": "ed280517bb05a769bd79682fb6d1f12d",
"icons/Icon-maskable-512.png": "4672d3aa778b23b16ce7f5f33d51e813",
"index.html": "ce2b8dea8593641e7018b14fd41013a1",
"/": "ce2b8dea8593641e7018b14fd41013a1",
"LICENSE": "6d7fc7991f0f18fee9fd0d4e32540e60",
"main.dart.js": "32b548c6e5afd2ba5edf5f35faf2e888",
"manifest.json": "f1d8b75d4d67b72a17843b26a4ebbba9",
"README.md": "7fa1227dddbea3b5ddaa7a18d465e881",
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
