'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "c5e1670a76fa30eb5c8cb1969cb58536",
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
".git/index": "0d495496144cc2818a90c724d62abe0a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ed44793a23f0cfa557b100e9cd121abc",
".git/logs/refs/heads/main": "ed44793a23f0cfa557b100e9cd121abc",
".git/logs/refs/remotes/origin/HEAD": "1da601260f52a2b04e954c7c255e84ee",
".git/logs/refs/remotes/origin/main": "f84231916d94e8bc5524687e940c3e86",
".git/objects/00/a0c7ed1aac6fdf94542f03b8d96dd6f797f7f4": "0d4a0b6cab3ae92b3171c55c8338b870",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/12/3099f19d57f735cd5302c14c7457dcbc49f139": "b8140702358d85382cc84ed7153cb0e1",
".git/objects/1a/db4df86d70870106b8e05baef212b7dd505315": "947a1d57bdd73e6e62e7b33a048015e4",
".git/objects/1c/201ed35607d4bd9fe292fd8ed66bd4413fd40e": "68d0db332bd279b04876003b95fae219",
".git/objects/1f/e56fa3e96788daf3ec53551d34cef1acaba10f": "27063441bec8f2f8f33219513342f45b",
".git/objects/20/0e6f1490678ab56282d275a5bdbea50644d385": "c738e7e5b2377bb3fc92acead555b8ce",
".git/objects/22/fbf96edc88746596b5edbe2f0b6304f1c8a736": "035dd6638e919e924ba4b98a1564ee11",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/2a/da18071db2ba3d26d2fd8b697afe81dcddeae2": "9326eb0aa25be1746fb679a12fe77c30",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/37/4623d836fff244a6f7dab64958641be51a9668": "d1efebf67abee816cb5344c9e882b87d",
".git/objects/39/1eadc66ad5ec947c6c2f84f8ceb70d55571021": "d543ad8fcddb3513d67f80f9e6819b65",
".git/objects/3b/0e3bf8a54eb8cee0d6518234b730fc8caa5a5b": "cdd6a6dcb3f957df06e5769b39258157",
".git/objects/3f/95b401ec9d3f104a4e8a9f249beb35b1c44a6d": "11e3b1f8743e9750d5b9d8b2ea6b2ec7",
".git/objects/40/2fffb47839e9a4aed50f1215f16ad69d80dc73": "7f3c8723a33f118967feb28761f5d171",
".git/objects/44/0164f2341567599d4a7436447ac47071dd6a11": "d996af17cd311cb7f2533148bc1ab4c4",
".git/objects/46/81e56fd507ed985b0be94c84fa43d875bdbc8b": "def637826d29336a68301d134aa609c7",
".git/objects/46/b5dbf9fb1dd8c953bece8283eafeffd16f92f7": "f8eddb40f5476f0b5e4bae91651274c0",
".git/objects/4c/93738b1991d71cbb8e9c358151e8c9b5c3574d": "3ad6bd6eda00e697fcdb8d33b59e0833",
".git/objects/4e/6ba0381d0722e5a7629e1baf26e59dc0598915": "7f3c84bbbb5cf5c7086785a652df7721",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4f/4251661731d587ef1cfd23722707e85453e15a": "58ea304f09f422b022bbdf6b7853a567",
".git/objects/52/b0c0bc980037737bc695205bfde68b7d6dc04a": "0ef190ff646909e911448c155511147e",
".git/objects/53/d42c45ebc1ccbd4199bea0026461b7dc9aca6e": "a0fbe50d07d43872b62c7741aabcb801",
".git/objects/5d/45fa639e2c18affa176980a2230930a0952cf2": "71f27c1d6cbfbc24dc918bfc752f27e9",
".git/objects/64/2a1a079182b9ce50bed2d4b59d3513611a1469": "4b80207f205987d3e8d6e3fbba083770",
".git/objects/64/e7d6b92a15a2bd6df4b36457226c411f349599": "2de48629ae6208adf8cd0fad57bfd345",
".git/objects/65/946e82c088057c05c59ed65348073165b4a93e": "346b117f84eb9f6a180a9bcf1cb8afed",
".git/objects/68/a2b227e82eed647730f0c2876ec94c68debec2": "a2699fb7ace28ae93b3d39b73160dee3",
".git/objects/71/c1840868a68fef6830c7cc87e7d72ee9baa3b0": "53e0abbc1da761f571eb281ee47f6030",
".git/objects/73/023d274cfe4cf728e3d28aaf9417920e924ff7": "4b9c6b6adbb7ee34c0092201b8143c55",
".git/objects/73/7e7e598ac064a0b39f63ca4c18e2bd901bed09": "16577e7ceeae34624114cd19061675ab",
".git/objects/73/88aaf9bb34526abd2bbd5de4594f0ab7f0c828": "a47076b5e946a7f3e2dbfea1d13bf834",
".git/objects/75/bcf1b605630cd0224f4ae9bc7dd3279eedebc0": "5befcfaa8c933fc41f64e2e58e06709d",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/e5f58b759396fa9f6e5174c11fa0f057760d61": "b827e2d83c619f51ebc08a74f60ab575",
".git/objects/86/952c542ee7a9014038e00bd51ed4a1e06e47a4": "b7645452e81fb3fb9cf0bfc1b32f32ad",
".git/objects/92/d46f88c6e504e0bfc6994b7ac8332696a80de7": "4335a5f4944bd4c5896c05a6628a7134",
".git/objects/9c/3178d9a9ff38fbf2cd0245cf91cd8de860dfe4": "f361ffb899cda3fb4259b2c00a9e7688",
".git/objects/a5/e6811280a40e499d99ec8396d779efd5ad1ce9": "54cedc0ab3f9ab34e55f5a722acf7e78",
".git/objects/ac/af17ffce10d3a28b6127d395c9f617ca74d30b": "9459cd64732acc9ee3343c2e9ea66b0c",
".git/objects/ae/2dbb29289ac814d36ca6e9cd23bb544de59a68": "99848da5214c84c8d26d8e2552d1d13f",
".git/objects/b6/0875cf909b68c3724517a85f0ac4b0d399cf53": "a5ee2f3f238386c9a47a5cb8be343dee",
".git/objects/b7/e1084dfc0208292fff3cf44319a53bed972e0c": "fde07e55d194e1eeb65d392e0c93554c",
".git/objects/ba/eb53fc344e5823c3c09cf096ea53ad51389935": "c8da45164f093b99086e55d8f783f666",
".git/objects/c1/f043a818cfa52238120777ba8810228f0b8ea6": "51113cea462377833f6859bb6a20e030",
".git/objects/c6/7d9d6a58865a65511517be9eae1eaa70983317": "077e8e69d68bf88a32030ca7d5da5b70",
".git/objects/d0/d3382b05a50fa855b8cc56ad5f19a1cb17b87b": "55479ff121442aa9471bce3c99736e76",
".git/objects/d3/d344d13db517f7b5036c0d2157a07288bb789b": "d8409027a4e4e51c183d94c2d138e4b1",
".git/objects/d6/c0dd45265c7362952f267ca172289b30743281": "5424ee2afe61fd0747745ad2d4da18fe",
".git/objects/d9/22e24fe3e4abf07406104b88b8965ac14ce15a": "2e0a8d2df3fcd9ea728bc6dbf413904c",
".git/objects/da/23755b328e6f43edb7546527a5565ede353f73": "a89986b990a30c0886b1747f208e3eeb",
".git/objects/da/c403f6dea3f62d6d78cb922be8cbea08d42c55": "799633ea9789f1b0d913fbe8dd498e4d",
".git/objects/de/8f40d7ade7f15abb8c7ba559d1eabae9cd25f2": "821b2695fe131dd8224200d2294056af",
".git/objects/e1/10cd2c24520c4b741f8fb7484bcf6af7a1b2d8": "6a0ba34d290ba3ba40cb69866e539b8a",
".git/objects/e9/e25f550a2f6e2abe7d8c238e78f0809a408506": "575ce4088832f12d1f532d546c58bf07",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/f0/14d023c42de622b4ae2bd4dec040d6140cbced": "780564849b21873f4d36f2908ac557f9",
".git/objects/f8/dfca01c4142fbe005aa065873eab47a6ac0cfb": "dff41d4303eb4f82a32f15579f467a91",
".git/objects/f9/6b6abd8effc45c24bd85965cf1240aff774edf": "81a616415ec777823bb91941ee5906f7",
".git/objects/fa/f1ff99d4b573e8fb8b9609f6bf17440a53371f": "e464705ad5402f8b62a89ec1648cf2e4",
".git/objects/fb/737780b762122848b0f5b3a889c78ebd6eca15": "79cb6d8acc864e71231b076e8fc04fb5",
".git/objects/fc/7d440a29ffe38837ca6e7b3eac662916a9a070": "d8682634d777ed31b31e6d12cb92dfa9",
".git/objects/pack/pack-b27b4ab3d7f3f3dd3faee7ca9b67d965e05e8d7a.idx": "e5aac8a2b0f15e0ff8795bf6a703df2c",
".git/objects/pack/pack-b27b4ab3d7f3f3dd3faee7ca9b67d965e05e8d7a.pack": "785619a213c694fd4c00b99775423770",
".git/ORIG_HEAD": "d7a858b8e2d1272304b5a10ef1d957a5",
".git/packed-refs": "288fcefd9ffe500c735c79ab1ea4b131",
".git/refs/heads/main": "a496aec27c3c71fa48b06c17aadffb27",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "a496aec27c3c71fa48b06c17aadffb27",
"assets/AssetManifest.json": "27260374e425465f7639a54a41a754bd",
"assets/assets/images/posters/Tic%2520Tac%2520Toe%2520Game.svg": "37cbb7132d99e7547560eb29966c2ac2",
"assets/assets/rive/tic_tac_toe_animations.riv": "4115bd42f598b44a99f37f609c120f40",
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
"index.html": "106924354d5a96598c324f4db6a23e79",
"/": "106924354d5a96598c324f4db6a23e79",
"main.dart.js": "80fe70e16f033bd2e5a1a97624ed550a",
"manifest.json": "4b120c90f20cebd4199fd537e28e0d14",
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
