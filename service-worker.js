
const ichjihozon = 'rev2';//更新時変更
const hozonfiles = [
  './art.png',
  './caffeine.css',
  "./index.html",
  "./manifest.json",
  "./mark.png",
  "./mpsys.js",
  "./music.png",
  "./next.png",
  "./pause.png",
  "./play.png",
  "./prev.png",
  "./README.md",
  "./favicon.ico",
  "./repeatoff.png",
  "./repeaton.png",
  "./shuffleoff.png",
  "./shuffleon.png",
  "./splash.png",
  "./ic.png",
  "./ic2.png",
  "./ic.webp"
];//リソースファイル群


self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(ichjihozon)
      .then(function(cache) {
        return cache.addAll(hozonfiles);
      })
  );
});


self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request).catch(() => caches.match('./index.html'));
      }
    )
  );
});

self.addEventListener("activate",(event)=>
  {
const ntchange=[ichjihozon];
event.waitUntil(caches.keys().then((cachenamaeire)=>
  {
    return Promise.all(cachenamaeire.map((cachenamae)=>
      {
        if(ntchange.indexOf(cachenamae)===-1)//存在しないときに!
        {
return caches.delete(cachenamae);
        }
      }))
  }));
  });
