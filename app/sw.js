// Shell cache only. Prices always come from the network; last list is kept in localStorage for offline at a show.
var C='jtcg-shell-1',F=['/app/','/app/index.html','/app/manifest.webmanifest'];
self.addEventListener('install',function(e){e.waitUntil(caches.open(C).then(function(c){return c.addAll(F)}))});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(x){return x!==C}).map(function(x){return caches.delete(x)}))}))});
self.addEventListener('fetch',function(e){var u=new URL(e.request.url);if(u.origin===location.origin&&u.pathname.indexOf('/app/')===0)e.respondWith(fetch(e.request).catch(function(){return caches.match(e.request)}))});
