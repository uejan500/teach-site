/* 教學系列導覽：四本手冊共用的連結列。
   每本手冊只要在 </body> 前加一行 <script src="教學系列導覽.js"></script>，檔案放在同一個資料夾即可。
   要新增手冊或相關連結，只改這個檔案。 */
(function(){
'use strict';
if(window.__tbNav)return;window.__tbNav=1;
var BOOKS=[
  {f:'教學總覽.html',t:'教學總覽',d:'四本手冊怎麼搭配、學習路線',i:'🧭'},
  {f:'儀器教學_公開版.html',t:'RF 硬體工程師手冊',d:'儀器操作、實機面板模擬器、量測與規格判定',i:'🧰'},
  {f:'RF_SI_PI模擬教學.html',t:'RF・SI・PI 模擬教學',d:'Layout 觀念與 RF／SI／PI 互動模擬',i:'📐'},
  {f:'高速數位訊號設計小教室_手機單檔版.html',t:'高速數位訊號設計小教室',d:'SerDes、DDR、通道、封裝、模擬軟體',i:'⚡'},
  {f:'EMI抑制實戰手冊_公開版.html',t:'EMI 抑制實戰手冊',d:'EMI debug 流程、對策、認證',i:'🛡'}
];
/* 每本手冊裡「到其他手冊看相關內容」的連結：[顯示文字, 檔名#位置] */
var REL={
  '儀器教學_公開版.html':[['眼圖、ISI 觀念與模擬','RF_SI_PI模擬教學.html#si-eye'],['Jitter 與相位雜訊','RF_SI_PI模擬教學.html#si-jitter'],['TDR 阻抗剖面','RF_SI_PI模擬教學.html#si-tdr'],['PDN 目標阻抗','RF_SI_PI模擬教學.html#pi-target'],['高速介面設計','高速數位訊號設計小教室_手機單檔版.html#interface'],['EMI 量測可信度','EMI抑制實戰手冊_公開版.html#t-meas'],['Buck 雜訊與梯形頻譜','EMI抑制實戰手冊_公開版.html#t-buck']],
  'RF_SI_PI模擬教學.html':[['高速示波器模擬器（眼圖、PI）','儀器教學_公開版.html#lab-hs'],['VNA 實機面板（TDR、Mixer）','儀器教學_公開版.html#lab-vna'],['規格對照與量測判定','儀器教學_公開版.html#speccheck'],['高速數位：模擬區','高速數位訊號設計小教室_手機單檔版.html#sim'],['EMI Debug 流程','EMI抑制實戰手冊_公開版.html#flow']],
  '高速數位訊號設計小教室_手機單檔版.html':[['高速示波器模擬器：量眼高眼寬','儀器教學_公開版.html#lab-hs'],['規格對照與量測判定','儀器教學_公開版.html#speccheck'],['損耗、ISI 與眼圖','RF_SI_PI模擬教學.html#si-eye'],['PDN 阻抗','RF_SI_PI模擬教學.html#pi-z'],['纜線與連接器輻射','EMI抑制實戰手冊_公開版.html#t-cable']],
  'EMI抑制實戰手冊_公開版.html':[['SA 實機面板（Channel Power、Zero Span）','儀器教學_公開版.html#lab-sa'],['規格對照與量測判定','儀器教學_公開版.html#speccheck'],['電纜共模輻射','RF_SI_PI模擬教學.html#si-cm'],['DC-DC 與 PI','RF_SI_PI模擬教學.html#pi-dcdc'],['高速數位：原理區','高速數位訊號設計小教室_手機單檔版.html#principle']],
  '教學總覽.html':[]
};
var here='';try{here=decodeURIComponent(location.pathname.split('/').pop());}catch(e){}
var css='.tbn-btn{position:fixed;left:max(12px,env(safe-area-inset-left,0px));bottom:calc(12px + env(safe-area-inset-bottom,0px));z-index:9999;font:600 13px/1 system-ui,"Microsoft JhengHei",sans-serif;padding:9px 13px;border-radius:999px;border:1px solid #c9ced6;background:#fff;color:#1d1f23;box-shadow:0 3px 12px #0003;cursor:pointer}'+
 '.tbn-panel{position:fixed;left:max(12px,env(safe-area-inset-left,0px));bottom:calc(58px + env(safe-area-inset-bottom,0px));z-index:9999;width:min(340px,calc(100vw - 24px));max-height:70vh;overflow:auto;background:#fff;color:#1d1f23;border:1px solid #c9ced6;border-radius:12px;box-shadow:0 8px 28px #0004;padding:10px 12px;font:14px/1.5 system-ui,"Microsoft JhengHei",sans-serif}'+
 '.tbn-panel[hidden]{display:none}.tbn-panel h6{margin:6px 0 4px;font-size:12px;letter-spacing:.06em;color:#5d636e}.tbn-panel a{display:block;color:#0b5cad;text-decoration:none;padding:5px 6px;border-radius:6px}.tbn-panel a:hover{background:#eef4fb}'+
 '.tbn-panel a.on{background:#eef4fb;color:#1d1f23;font-weight:700}.tbn-panel small{display:block;color:#5d636e;font-size:12px}'+
 '@media (prefers-color-scheme:dark){.tbn-btn,.tbn-panel{background:#1f2227;color:#e6e7ea;border-color:#3a3f47}.tbn-panel a{color:#7db6f5}.tbn-panel a:hover,.tbn-panel a.on{background:#27303c;color:#e6e7ea}.tbn-panel small,.tbn-panel h6{color:#9aa0aa}}'+
 '@media (max-width:600px){.tbn-btn{width:44px;height:44px;padding:0;font-size:0;display:flex;align-items:center;justify-content:center}.tbn-btn::before{content:"📚";font-size:19px}'+
 'body.wide .tbn-btn{top:calc(66px + env(safe-area-inset-top,0px));bottom:auto;left:auto;right:max(10px,env(safe-area-inset-right,0px));opacity:.9}'+
 'body.wide .tbn-panel{top:calc(116px + env(safe-area-inset-top,0px));bottom:auto;left:auto;right:max(10px,env(safe-area-inset-right,0px))}}'+
 '[data-theme="dark"] .tbn-btn,[data-theme="dark"] .tbn-panel{background:#1f2227;color:#e6e7ea;border-color:#3a3f47}[data-theme="dark"] .tbn-panel a{color:#7db6f5}[data-theme="dark"] .tbn-panel a:hover,[data-theme="dark"] .tbn-panel a.on{background:#27303c;color:#e6e7ea}[data-theme="dark"] .tbn-panel small,[data-theme="dark"] .tbn-panel h6{color:#9aa0aa}'+
 '[data-theme="light"] .tbn-btn,[data-theme="light"] .tbn-panel{background:#fff;color:#1d1f23;border-color:#c9ced6}[data-theme="light"] .tbn-panel a{color:#0b5cad}[data-theme="light"] .tbn-panel a:hover,[data-theme="light"] .tbn-panel a.on{background:#eef4fb;color:#1d1f23}[data-theme="light"] .tbn-panel small,[data-theme="light"] .tbn-panel h6{color:#5d636e}'+
 '.tbn-theme{position:fixed;left:max(12px,env(safe-area-inset-left,0px));bottom:calc(64px + env(safe-area-inset-bottom,0px));z-index:9999;width:42px;height:42px;border-radius:50%;border:1px solid #c9ced6;background:#fff;color:#1d1f23;box-shadow:0 3px 12px #0003;font-size:18px;line-height:1;cursor:pointer}'+
 '@media (prefers-color-scheme:dark){:root:not([data-theme="light"]) .tbn-theme{background:#1f2227;color:#e6e7ea;border-color:#3a3f47}}'+
 '[data-theme="dark"] .tbn-theme{background:#1f2227;color:#e6e7ea;border-color:#3a3f47}'+
 '.tbn-inapp{position:fixed;left:0;right:0;top:0;z-index:10000;background:#fff6d6;color:#3b2f00;border-bottom:1px solid #e8c55a;padding:10px max(14px,env(safe-area-inset-right,0px)) 10px max(14px,env(safe-area-inset-left,0px));font:14px/1.6 system-ui,"Microsoft JhengHei",sans-serif;box-shadow:0 2px 10px #0002}'+
 '.tbn-inapp button{margin-left:8px;font:inherit;font-size:13px;border:1px solid #c9a227;background:#fff;color:#3b2f00;border-radius:999px;padding:2px 10px;cursor:pointer}'+
 '@media print{.tbn-btn,.tbn-panel,.tbn-inapp{display:none}}';
/* 手機 App：加到主畫面的圖示、名稱，以及離線快取（只在網站上啟用，直接開檔案時略過） */
function pwa(){
  var h=document.head,add=function(tag,attrs){var e=document.createElement(tag);for(var k in attrs)e.setAttribute(k,attrs[k]);h.appendChild(e);};
  if(!document.querySelector('link[rel="manifest"]'))add('link',{rel:'manifest',href:'manifest.webmanifest'});
  if(!document.querySelector('link[rel="apple-touch-icon"]'))add('link',{rel:'apple-touch-icon',href:'apple-touch-icon.png'});
  if(!document.querySelector('meta[name="theme-color"]'))add('meta',{name:'theme-color',content:'#1a4dba'});
  add('meta',{name:'apple-mobile-web-app-capable',content:'yes'});add('meta',{name:'mobile-web-app-capable',content:'yes'});
  add('meta',{name:'apple-mobile-web-app-title',content:'RF 教學'});add('meta',{name:'apple-mobile-web-app-status-bar-style',content:'default'});
  if('serviceWorker' in navigator&&location.protocol==='https:'){window.addEventListener('load',function(){navigator.serviceWorker.register('sw.js').catch(function(){});});}
  /* 不擋 Chrome 自己的安裝提示；同時記下來給「安裝到桌面」按鈕用 */
  window.addEventListener('beforeinstallprompt',function(e){window.__tbInstall=e;document.dispatchEvent(new Event('tb-installable'));});
}
/* LINE、Messenger、FB、IG、微信等 App 內建的瀏覽器不能安裝：提示改用 Safari／Chrome */
function inApp(){var u=navigator.userAgent||'';return /Line\/|FBAN|FBAV|FB_IAB|Instagram|Messenger|MicroMessenger|; wv\)/i.test(u);}
function inAppBanner(){if(!inApp()||location.protocol!=='https:')return;var ios=/iPhone|iPad|iPod/i.test(navigator.userAgent);
  var d=document.createElement('div');d.className='tbn-inapp';
  d.innerHTML='<b>📱 想裝到手機桌面？</b>這是 App 內建的瀏覽器，不能安裝。請改用 <b>'+(ios?'Safari':'Chrome')+'</b> 開啟：'+(ios?'點右下或右上角「⋯」→「用 Safari 開啟」':'點右上角「⋮」→「用 Chrome 開啟」（或「在瀏覽器中開啟」）')+'。<button type="button">複製網址</button><button type="button" aria-label="關閉">×</button>';
  var bs=d.querySelectorAll('button');bs[0].addEventListener('click',function(){var t=location.href.split('#')[0];(navigator.clipboard?navigator.clipboard.writeText(t):Promise.reject()).then(function(){bs[0].textContent='已複製 ✓';},function(){prompt('複製這個網址，貼到 Safari／Chrome：',t);});});
  bs[1].addEventListener('click',function(){d.remove();});document.body.appendChild(d);}
pwa();
/* 亮／暗色切換：四本手冊共用同一個設定（換手冊也會記得）。
   手冊自己有 ◐ 按鈕（id="themeBtn"）就沿用它；沒有就加一顆。 */
var TKEY='tb-theme';
function effTheme(){var t=document.documentElement.getAttribute('data-theme');if(t==='dark'||t==='light')return t;return (window.matchMedia&&matchMedia('(prefers-color-scheme: dark)').matches)?'dark':'light';}
function savedTheme(){try{return localStorage.getItem(TKEY);}catch(e){return null;}}
function saveTheme(t){try{localStorage.setItem(TKEY,t);}catch(e){}}
function themeInit(){var own=document.getElementById('themeBtn'),s=savedTheme();
  if(own){if((s==='dark'||s==='light')&&s!==effTheme())own.click();own.addEventListener('click',function(){setTimeout(function(){saveTheme(effTheme());},0);});return;}
  if(s==='dark'||s==='light')document.documentElement.setAttribute('data-theme',s);
  var b=document.createElement('button');b.type='button';b.className='tbn-theme';
  var label=function(){var d=effTheme()==='dark';b.textContent=d?'☀':'☾';b.title=d?'切換成亮色':'切換成暗色';b.setAttribute('aria-label',b.title);};label();
  b.addEventListener('click',function(){var t=effTheme()==='dark'?'light':'dark';document.documentElement.setAttribute('data-theme',t);saveTheme(t);label();window.dispatchEvent(new Event('tb-theme'));});
  document.body.appendChild(b);}
function init(){
  var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
  var b=document.createElement('button');b.type='button';b.className='tbn-btn';b.textContent='📚 教學系列';b.setAttribute('aria-expanded','false');
  var p=document.createElement('div');p.className='tbn-panel';p.hidden=true;
  var h='<h6>四本手冊</h6>'+BOOKS.map(function(x){return '<a href="'+encodeURI(x.f)+'" class="'+(x.f===here?'on':'')+'">'+x.i+' '+x.t+'<small>'+x.d+'</small></a>';}).join('');
  var r=REL[here]||[];if(r.length)h+='<h6>相關內容（其他手冊）</h6>'+r.map(function(x){var s=x[1].split('#');return '<a href="'+encodeURI(s[0])+(s[1]?'#'+s[1]:'')+'">↗ '+x[0]+'</a>';}).join('');
  var standalone=(window.matchMedia&&matchMedia('(display-mode: standalone)').matches)||navigator.standalone;
  if(location.protocol==='https:'&&!standalone)h+='<h6>手機</h6><a href="'+encodeURI('教學總覽.html')+'#install">📱 安裝到手機桌面（可離線看）</a>';
  h+='<h6>個人</h6><a href="'+encodeURI('我的案例.html')+'" class="'+(here==='我的案例.html'?'on':'')+'">🔐 我的案例<small>需要第二組密碼</small></a>';
  var hasPw=false;try{hasPw=!!(localStorage.getItem('tb-pw')||sessionStorage.getItem('tb-pw')||localStorage.getItem('tb-pw2')||sessionStorage.getItem('tb-pw2'));}catch(e){}
  if(hasPw)h+='<a href="#" data-tb-lock>🔒 鎖定（下次要重新輸入密碼）</a>';
  p.innerHTML=h;document.body.appendChild(p);document.body.appendChild(b);inAppBanner();themeInit();
  var lk=p.querySelector('[data-tb-lock]');if(lk)lk.addEventListener('click',function(e){e.preventDefault();try{['tb-pw','tb-pw2'].forEach(function(k){localStorage.removeItem(k);sessionStorage.removeItem(k);});}catch(x){}location.reload();});
  b.addEventListener('click',function(){p.hidden=!p.hidden;b.setAttribute('aria-expanded',String(!p.hidden));});
  document.addEventListener('click',function(e){if(!p.hidden&&!p.contains(e.target)&&e.target!==b){p.hidden=true;b.setAttribute('aria-expanded','false');}});
  /* EMI 手冊沒有網址 #位置：用 data-id 找到頁面再切過去 */
  if(here.indexOf('EMI')===0&&location.hash.length>1){var id=decodeURIComponent(location.hash.slice(1));var pages=[].slice.call(document.querySelectorAll('section.page'));var i=pages.findIndex(function(s){return s.getAttribute('data-id')===id;});
    if(i>=0&&typeof window.go==='function'){try{window.go(i);}catch(e){}}}
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();

/* 頂部導覽列（參考高速數位訊號設計小教室）：「← 返回」回到剛才看的那一頁、目前位置、上一頁／下一頁。
   各手冊原本頁尾的上一頁／下一頁照常保留；這裡只是把它們也放到上面。高速數位那本已有自己的，不重複加。 */
(function(){
'use strict';
if(window.__tbTop)return;window.__tbTop=1;
function start(){
  if(document.getElementById('crumbbar'))return;            // 高速數位小教室已有自己的
  var main=document.querySelector('main');if(!main)return;
  var books={
    pg:function(){var p=document.querySelector('section.pg.on');return p&&{el:p,key:p.id,t:p.dataset.t,g:p.dataset.g};},
    chap:function(){var p=document.querySelector('section.chap.active')||[].filter.call(document.querySelectorAll('section.chap'),function(s){return s.offsetParent!==null;})[0];
      if(!p)return null;var h=p.querySelector('h2'),e=p.querySelector('.eyebrow');return{el:p,key:p.id,t:h?[].map.call(h.childNodes,function(n){return n.textContent.trim();}).filter(Boolean).join(' ').replace(/\s+/g,' '):p.id,g:e?e.textContent.split('·')[0].trim():''};},
    page:function(){var p=document.querySelector('.page.on');return p&&{el:p,key:p.dataset.id,t:p.dataset.t,g:p.dataset.g,emi:1};}
  };
  var kind=document.querySelector('section.pg')?'pg':document.querySelector('section.chap')?'chap':document.querySelector('.page[data-id]')?'page':'';
  if(!kind)return;
  var st=document.createElement('style');st.textContent=
   '.tb-top{position:sticky;z-index:9;display:flex;align-items:center;gap:8px;margin:0 0 14px;padding:7px 10px;border:1px solid var(--line,#dfe1e5);border-radius:10px;background:var(--panel,#fff);color:var(--ink,#1d1f23);box-shadow:0 6px 16px -12px rgba(0,0,0,.35);font:13px/1.4 system-ui,"Microsoft JhengHei",sans-serif}'+
   '.tb-top button{display:inline-flex;align-items:center;gap:6px;border:1px solid var(--line,#dfe1e5);background:var(--bg,#f6f6f3);color:inherit;border-radius:8px;padding:5px 10px;font:inherit;cursor:pointer;white-space:nowrap;max-width:30vw;overflow:hidden;text-overflow:ellipsis}'+
   '.tb-top button:hover:not(:disabled){border-color:var(--accent,#0b64c0);color:var(--accent,#0b64c0)}.tb-top button:disabled{opacity:.35;cursor:default}'+
   '.tb-top .tb-bc{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--muted,#5d636e)}.tb-top .tb-bc b{color:var(--ink,#1d1f23)}'+
   '.tb-top .tb-key{font-size:11px;color:var(--muted,#5d636e);white-space:nowrap}'+
   '@media (max-width:700px){.tb-top{gap:6px;padding:6px 8px}.tb-top .tb-key,.tb-top .tb-g{display:none}.tb-top button{padding:5px 8px;max-width:34vw}.tb-top .tb-pn b{display:none}}';
  document.head.appendChild(st);
  var bar=document.createElement('div');bar.className='tb-top';bar.setAttribute('role','navigation');bar.setAttribute('aria-label','頁面導覽');
  bar.innerHTML='<button type="button" class="tb-back" hidden>← 返回</button><div class="tb-bc"></div>'+
    '<button type="button" class="tb-pn tb-prev">‹ <b>上一頁</b></button><button type="button" class="tb-pn tb-next"><b>下一頁</b> ›</button><span class="tb-key">Esc 返回</span>';
  main.insertBefore(bar,main.firstChild);
  var hd=document.querySelector('header.top')||document.querySelector('body>header');
  function place(){var h=0;if(hd&&getComputedStyle(hd).position==='sticky')h=hd.getBoundingClientRect().height;bar.style.top='calc('+Math.round(h+6)+'px + env(safe-area-inset-top,0px))';}
  place();addEventListener('resize',place);
  var back=bar.querySelector('.tb-back'),prev=bar.querySelector('.tb-prev'),next=bar.querySelector('.tb-next'),bc=bar.querySelector('.tb-bc');
  var stack=[],cur=null,going=false;
  function pagerOf(p){if(kind==='page')return document.querySelector('.pager');var g=p.el.querySelector('.pager');return g||[].filter.call(document.querySelectorAll('.pager'),function(x){return x.offsetParent!==null;})[0];}
  function pick(pg,which){if(!pg)return null;var e=which<0?(pg.querySelector('#prev,a.prev')||pg.querySelector('a:not(.nx)')):(pg.querySelector('#next,a.next,a.nx'));
    if(!e||e.disabled||e.classList.contains('dis')||(e.tagName==='A'&&!e.getAttribute('href').replace('#','')))return null;return e;}
  function label(e){return e?e.textContent.replace(/[←→◀▶‹›]/g,'').replace(/上一頁|下一頁|上一章|下一章/g,'').trim():'';}
  function nav(key){going=true;
    if(kind==='page'){var bs=document.querySelectorAll('aside button.nv'),hit=null;var pg=[].filter.call(document.querySelectorAll('.page'),function(x){return x.dataset.id===key;})[0];
      [].forEach.call(bs,function(b){if(pg&&b.textContent.indexOf(pg.dataset.t)===0)hit=b;});if(hit)hit.click();else going=false;}
    else{location.hash='#'+key;}
    setTimeout(sync,60);}
  function sync(){var p=books[kind]();if(!p)return;
    if(!cur||cur.key!==p.key){if(cur&&!going)stack.push({key:cur.key,t:cur.t});if(stack.length>40)stack.shift();going=false;cur=p;}
    bc.innerHTML=(p.g?'<span class="tb-g">'+p.g+' / </span>':'')+'<b></b>';bc.querySelector('b').textContent=p.t||'';
    var pg=pagerOf(p),a=pick(pg,-1),b=pick(pg,1);
    prev.disabled=!a;next.disabled=!b;prev.title=a?'上一頁：'+label(a):'';next.title=b?'下一頁：'+label(b):'';
    prev.onclick=function(){if(a)a.click();setTimeout(sync,60);};next.onclick=function(){if(b)b.click();setTimeout(sync,60);};
    var last=stack[stack.length-1];back.hidden=!last;if(last){back.textContent='← 返回：'+last.t;back.title='回到剛才看的「'+last.t+'」';}}
  back.addEventListener('click',function(){var e=stack.pop();if(e)nav(e.key);});
  addEventListener('keydown',function(e){if(e.key!=='Escape'||(e.target.closest&&e.target.closest('input,textarea,select')))return;var t=document.querySelector('.toc.open,nav.toc.open');if(t)return;if(stack.length){e.preventDefault();back.click();}});
  addEventListener('hashchange',function(){setTimeout(sync,30);});addEventListener('popstate',function(){setTimeout(sync,30);});
  document.addEventListener('click',function(){setTimeout(sync,80);},true);
  setInterval(sync,700);sync();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start();
})();
