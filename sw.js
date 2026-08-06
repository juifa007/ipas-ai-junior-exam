const CACHE='ipas-ai-quiz-v3-3';
const ASSETS=['./','./index.html','./manifest.webmanifest','./icon.svg','./official_questions_300.json','./study-guide-subject-1.pdf','./study-guide-subject-2.pdf'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS).catch(()=>null)))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));self.clients.claim()});
self.addEventListener('fetch',e=>{e.respondWith(fetch(e.request).catch(()=>caches.match(e.request).then(r=>r||caches.match('./index.html'))))});
