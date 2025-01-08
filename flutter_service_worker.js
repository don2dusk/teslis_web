'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "670703e0d78e795cb02a741ea3967f7d",
"version.json": "e8b1b902617c764febf74ccafc5c9e9a",
"index.html": "52b9528075fca53ceee8f6b8eb983929",
"/": "52b9528075fca53ceee8f6b8eb983929",
"main.dart.js": "aa197a03b0554dc7cc39132aebcba7b8",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d1619b78d422cb5ad9f3f2f4f5960c1f",
"assets/AssetManifest.json": "0b679a1414c49ec4e7dc446ef53ae23d",
"assets/NOTICES": "3a60a62cf1c833ec81049b5a3f7932c4",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "a79e169aefc34177497f522688cdfb29",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "d914826d2fd5ef607ade37cfd90ad433",
"assets/fonts/MaterialIcons-Regular.otf": "dbb6f5dd1707d98f8f192322df79bf21",
"assets/assets/pngs/yellow_avatar.png": "f6a3c29d9fe403c232ce84cee7aedf4c",
"assets/assets/pngs/amico.png": "65ceb47db38265b0140f8b53e4045dac",
"assets/assets/pngs/agency.png": "dc3171db8ba33b6fd4cf3f23285459c7",
"assets/assets/pngs/avatar.png": "06ecc2682368462c87f548d565fa7e39",
"assets/assets/pngs/excel.png": "9c410e1489e03aa7ad3352d1b67b1d3c",
"assets/assets/pngs/Avatars.png": "e6b2f011cad91ba6d8b5a412f86732d4",
"assets/assets/pngs/loadingpage.png": "a89913a8d56359b4356f08b22469dfd4",
"assets/assets/pngs/id1.png": "e1ddb37a33c881c56669d0214e27d7e6",
"assets/assets/pngs/image.png": "b30ab5b03818449c0e6101e99850d3d3",
"assets/assets/svgs/arrowD.svg": "240c3b9533d4157e03c4ba8a29e36960",
"assets/assets/svgs/arrow_purple.svg": "95e14ab08183129777f5491af82c22cd",
"assets/assets/svgs/pvc_usage.svg": "6f9f000e4db0a54252e873ce420b76e5",
"assets/assets/svgs/person_popup.svg": "29da596616d32b1840b8168d4d9501a4",
"assets/assets/svgs/unit.svg": "10a00e238f6d41547c0610869d28ddef",
"assets/assets/svgs/long_line.svg": "86aab3d09c28174dfae722e1786026a7",
"assets/assets/svgs/in_pro.svg": "f3c6810a427943bc694b64a55fabb6e8",
"assets/assets/svgs/tiny_line.svg": "870fcd2b323a03210f41f3193911aee0",
"assets/assets/svgs/arrow.svg": "af48f0d179499af66f65297ea37c010c",
"assets/assets/svgs/down.svg": "5b8192f2ea87a8d1069a381b7ffdad3b",
"assets/assets/svgs/ongoing_case.svg": "532e768cbb6b23c407cf81b1ff69ce5f",
"assets/assets/svgs/did_error.svg": "50fe185a207e29ef1ccbf43d27edd4c6",
"assets/assets/svgs/up.svg": "5ad57ee1e6be38f982c96c2fff5476ca",
"assets/assets/svgs/small_line.svg": "e9580baf24ae18a2b016189bd126801d",
"assets/assets/svgs/calender.svg": "176e9e9126bebd2d2a91030af2ffaf12",
"assets/assets/svgs/login_logo2.svg": "82583753be760a3188107b516f74e004",
"assets/assets/svgs/download.svg": "c2f79ef6d28022b2181d60e4c589f5d6",
"assets/assets/svgs/inventory_gauge.svg": "6f9f000e4db0a54252e873ce420b76e5",
"assets/assets/svgs/login_logo.svg": "bcb682e0468bc3bb4f7f363c21c9a9c5",
"assets/assets/svgs/home_bar.svg": "6ccf3270cb0b8aec701bedfd46080a4e",
"assets/assets/svgs/line3.svg": "cd0eb6b423b6084767dcdc136ccf1d11",
"assets/assets/svgs/pending_case.svg": "ff546a63d7fd11e0d14bff953cc3b25f",
"assets/assets/svgs/warning.svg": "26471320ee168056f0de89253edfc5f8",
"assets/assets/svgs/create_user.svg": "b8dbfbcf7d7e7340c77cfbd2b5c6850a",
"assets/assets/svgs/email.svg": "cb2f397af02569d022f571cc91cb65ac",
"assets/assets/svgs/error_report.svg": "2c8d49ca82f042ec92854343fa97b15f",
"assets/assets/svgs/delete2.svg": "5dd7953ed03a21ec8ad2edadadab2429",
"assets/assets/svgs/batch_icon.svg": "baf75457de7e29d15a7b57d94a11a5a3",
"assets/assets/svgs/pending.svg": "549c55f12e829e3de877bdf962deade5",
"assets/assets/svgs/3dots.svg": "afdc6908bbdb08dc6d63d05dc048ca41",
"assets/assets/svgs/dashboard/task_us.svg": "1ec2e9ebb924bd43f22313c61116e171",
"assets/assets/svgs/dashboard/schedule_se.svg": "f58ebb3e329ef901fe5f28400bfb175f",
"assets/assets/svgs/dashboard/logout.svg": "81459a72b9957e8b7102071d3a1dd690",
"assets/assets/svgs/dashboard/home_us.svg": "762f7817f240078c0d64be5a8ea5ae2e",
"assets/assets/svgs/dashboard/schedule_us.svg": "39b1162574de369b1e8c859296fbcb12",
"assets/assets/svgs/dashboard/settings.svg": "57be420a106d0523b8e72f3389ea4841",
"assets/assets/svgs/dashboard/task_se.svg": "0581edc03cb57ce832722cf357df74aa",
"assets/assets/svgs/dashboard/home_se.svg": "9e9b9cb1dc94a9eaf20d606ee5690878",
"assets/assets/svgs/dashboard/user_se.svg": "5d9a435325c341b0f34b8b5c92971b1b",
"assets/assets/svgs/dashboard/user_us.svg": "3d68d0f563f3e7e77a365c8af963cb99",
"assets/assets/svgs/pic_error.svg": "5d9fb41d44190c33b4c404e2603a08d5",
"assets/assets/svgs/notification.svg": "320a6f7510c956658b8bad2f7f4b294d",
"assets/assets/svgs/Raise_J.svg": "d553c8d16a675510d21242bb16810874",
"assets/assets/svgs/line.svg": "430ceb2a800efeedd009142dc6569d38",
"assets/assets/svgs/ID1.svg": "aa3a34c41cb50eb954889ee4cbce5da4",
"assets/assets/svgs/job.svg": "d8dafcd7d80966075075c8a02285d44d",
"assets/assets/svgs/edit.svg": "74fd2f6c673c31a3bcbfd186ea60a519",
"assets/assets/svgs/total_case.svg": "c3774953670381c55db7b9e1fa7e0cb0",
"assets/assets/svgs/job_icon.svg": "93a1d8a631fb736d5d5acc8624c0d7c7",
"assets/assets/svgs/delete.svg": "a92521edc8e76c0651709de56c308a68",
"assets/assets/svgs/phone.svg": "edb50cf9c5941ae5ef882f455cca1129",
"assets/assets/svgs/jobs.svg": "afb80588422f2143bae07284252fee55",
"assets/assets/svgs/location.svg": "57cba717528c46e800ac016c952d069b",
"assets/assets/svgs/batch_creationg.svg": "307da6430c09a418884efbcc6c5569f8",
"assets/assets/svgs/Avatars.svg": "8aefec6f3e69bddaaa9a8e4b7f9370dc",
"assets/assets/svgs/dataV.svg": "38d260bfd53e9851e470e2275c0c0070",
"assets/assets/svgs/logo2.svg": "a0bd91cb7e409a94cdd00b73e26b85f5",
"assets/assets/svgs/upload.svg": "20b73677be4d75c69ca033f76c5f417e",
"assets/assets/svgs/logo.svg": "2cfbadfa2494a5d16d98399a6208d371",
"assets/assets/svgs/naira.svg": "0437371363017b9bf58f2490cac5f9b0",
"assets/assets/svgs/excel.svg": "c25a1a5a575872373bf0795f5a01ab6c",
"assets/assets/svgs/create_user_2.svg": "82ffa7d1ae4a2c62907e5419f1cf975d",
"assets/assets/svgs/id.svg": "775c5688e7abbab3187b64f747d890f2",
"assets/assets/svgs/completed.svg": "04d962973d02606d5fe8fa9d1e3b2e55",
"assets/assets/svgs/pro_stats.svg": "492368f99e3a092e9a699942cdf792b9",
"assets/assets/svgs/avatar.svg": "cc20bd41ab39822a3bf0b13e90831d73",
"assets/assets/svgs/purple_schedule.svg": "e5cb7738c25ee49ee7a1d533364783c2",
"assets/assets/svgs/ed_error.svg": "1869db8869a7286471396f77505f2b4f",
"assets/assets/svgs/uk_brand.svg": "4be41bcb079fb8966191ef5b1e90ef7e",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
