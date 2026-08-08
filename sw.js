const CACHE='ipas-ai-quiz-v4-4-range-fix';
const ASSETS=['./','./index.html','./manifest.webmanifest','./icon.svg','./study-guide-subject-1.pdf','./study-guide-subject-2.pdf','./basic_questions_1265.json','./official_questions_300.json','./all_questions_1565.json'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS).catch(()=>null)))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{e.respondWith(fetch(e.request).then(res=>{const copy=res.clone();caches.open(CACHE).then(c=>c.put(e.request,copy)).catch(()=>{});return res;}).catch(()=>caches.match(e.request).then(r=>r||caches.match('./index.html'))))});
