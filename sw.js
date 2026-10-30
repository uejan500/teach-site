/* 離線快取：第一次打開時把四本手冊存到手機；之後先用存好的版本，同時在背景下載新版（下次打開就是新版）。 */
const CACHE='rf-teach-v5';
const FILES=['./','./index.html','./教學總覽.html','./儀器教學_公開版.html','./RF_SI_PI模擬教學.html','./高速數位訊號設計小教室_手機單檔版.html','./EMI抑制實戰手冊_公開版.html','./我的案例.html','./教學系列導覽.js','./manifest.webmanifest','./icon-192.png','./icon-512.png','./apple-touch-icon.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>Promise.all(FILES.map(f=>c.add(new Request(f,{cache:'reload'})).catch(()=>{})))).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET'||new URL(r.url).origin!==location.origin)return;
  e.respondWith(caches.open(CACHE).then(c=>c.match(r,{ignoreSearch:true}).then(hit=>{
    const net=fetch(r).then(res=>{if(res&&res.ok)c.put(r,res.clone());return res;}).catch(()=>hit);
    return hit||net;})));});
