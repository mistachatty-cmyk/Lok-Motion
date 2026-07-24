/* ═══ BUNDLED: lok-components.js ════════════════════════ */
/*!
 * Lok Motion — component database
 * All demo code original, MIT. Lok Services.
 *
 * SCHEMA
 *   id    unique kebab-case
 *   name  display name
 *   cat   text|reveal|scroll|surface|control|loader|ambient|shader|three|physics|media
 *   eng   css|anime|gsap|motion|gl|three|matter
 *   txt   1 = renders the user's word, 0 = geometry only
 *   img   1 = uses the uploaded/placeholder image
 *   tags  string[]
 *   css   scoped automatically per instance
 *   js    runs with: root, text, eng, esc, chars, img, onStop, DPR
 *
 * Any demo with a rAF loop, interval, or engine tween MUST call
 * onStop(fn) so the viewport unmounter can tear it down.
 */

export const BRANDS = [
  'LOK SERVICES','LOKBOOK','RUNEDIARY','RUNESITE','KINETIC SOULS','TRYL',
  'THE RIGHTEOUS YIELD LIFE','PARTY BITES','GSIX DESIGNS','GSIX NETWORK',
  'LOCALPERKS','LOK RESUME STUDIO','LOKPASS','THE CIRCLE','LOK MOTION'
];

export const ADS = [
  {k:'Lok Services',h:'TRYL — The Righteous Yield Life',p:'Faith-forward streetwear. PRAY, TRYL, THE CIRCLE and HEADWEAR collections.'},
  {k:'Lok Services',h:'Runesite',p:'The mobile-first OSRS companion. Grand Exchange, quests, hiscores and the Squire AI — all in the browser.'},
  {k:'Lok Services',h:'LocalPerks',p:'Hyper-local resident discount networks. Verified residents, real business ROI, replicable per property.'},
  {k:'Lok Services',h:'GSix Designs',p:'Web design and build for people tired of templates. Chattanooga-based, shipping fast.'},
  {k:'Lok Services',h:'Lok Resume Studio',p:'Resume optimization with grammar checking, AI-phrase flagging and multi-platform versioning.'},
  {k:'Lok Services',h:'Lokbook',p:'Where the Lok ecosystem lives. Blot tokens, studio marketplace, real-time matchmaking.'}
];

export const CATS = [
  {id:'text',    label:'Kinetic text'},
  {id:'reveal',  label:'Reveals & entrances'},
  {id:'scroll',  label:'Scrollers & marquees'},
  {id:'surface', label:'Surfaces & cards'},
  {id:'control', label:'Buttons & controls'},
  {id:'loader',  label:'Loaders & progress'},
  {id:'ambient', label:'Ambient & backgrounds'},
  {id:'shader',  label:'Canvas & shaders'},
  {id:'three',   label:'3D scenes'},
  {id:'physics', label:'Physics'},
  {id:'media',   label:'Your image'}
];

export const ENGS = [
  ['css',    'CSS native'],
  ['anime',  'Anime.js'],
  ['gsap',   'GSAP'],
  ['motion', 'Motion'],
  ['gl',     'Canvas / WebGL'],
  ['three',  'Three.js'],
  ['matter', 'Matter.js']
];

export const CRED = {
  css:    {n:'CSS native',    u:'https://developer.mozilla.org/docs/Web/CSS/CSS_animations'},
  gl:     {n:'Canvas / WebGL',u:'https://developer.mozilla.org/docs/Web/API/Canvas_API'},
  anime:  {n:'Anime.js',      u:'https://animejs.com'},
  gsap:   {n:'GSAP',          u:'https://gsap.com'},
  motion: {n:'Motion',        u:'https://motion.dev'},
  three:  {n:'Three.js',      u:'https://threejs.org'},
  matter: {n:'Matter.js',     u:'https://brm.io/matter-js/'}
};

export const CSS_LIB = [

/* ══════════════════════════════════════════════════════════
   CSS NATIVE — kinetic text
   ══════════════════════════════════════════════════════════ */
{id:'blur-in',name:'Blur In',cat:'text',eng:'css',txt:1,tags:['entrance','stagger'],
 css:`.s{display:flex;gap:.02em;font:800 34px/1 Archivo,sans-serif;letter-spacing:-.03em}
.s i{font-style:normal;opacity:0;filter:blur(11px);transform:translateY(9px);
 animation:blurin .62s cubic-bezier(.2,.8,.3,1) forwards;animation-delay:calc(var(--i)*55ms)}
@keyframes blurin{to{opacity:1;filter:blur(0);transform:none}}`,
 js:`root.innerHTML='<span class="s">'+chars(text)+'</span>';`},

{id:'glitch',name:'Glitch',cat:'text',eng:'css',txt:1,tags:['loop','rgb-split'],
 css:`.s{position:relative;font:900 33px/1 'JetBrains Mono',monospace;letter-spacing:.02em;color:#E9EBF1}
.s::before,.s::after{content:attr(data-t);position:absolute;inset:0;background:#141821;overflow:hidden}
.s::before{color:#5EEAD4;left:2px;animation:gA 2.4s steps(2,end) infinite}
.s::after{color:#FF4D8D;left:-2px;animation:gB 3.1s steps(2,end) infinite}
@keyframes gA{0%,88%,100%{clip-path:inset(100% 0 0 0)}
 90%{clip-path:inset(12% 0 62% 0);transform:translateX(-3px)}
 94%{clip-path:inset(58% 0 18% 0);transform:translateX(3px)}}
@keyframes gB{0%,84%,100%{clip-path:inset(0 0 100% 0)}
 87%{clip-path:inset(70% 0 8% 0);transform:translateX(3px)}
 92%{clip-path:inset(22% 0 54% 0);transform:translateX(-3px)}}`,
 js:`root.innerHTML='<span class="s" data-t="'+esc(text)+'">'+esc(text)+'</span>';`},

{id:'shimmer',name:'Shimmer Sweep',cat:'text',eng:'css',txt:1,tags:['loop','gradient'],
 css:`.s{font:900 34px/1 Archivo,sans-serif;letter-spacing:-.03em;
 background:linear-gradient(100deg,#39404F 0%,#39404F 38%,#5EEAD4 48%,#E9EBF1 52%,#5EEAD4 56%,#39404F 66%,#39404F 100%);
 background-size:280% 100%;-webkit-background-clip:text;background-clip:text;color:transparent;
 animation:sweep 2.6s linear infinite}
@keyframes sweep{from{background-position:180% 0}to{background-position:-80% 0}}`,
 js:`root.innerHTML='<span class="s">'+esc(text)+'</span>';`},

{id:'neon',name:'Neon Flicker',cat:'text',eng:'css',txt:1,tags:['loop','glow'],
 css:`.s{font:900 35px/1 Archivo,sans-serif;letter-spacing:-.02em;color:#D9FFF8;
 text-shadow:0 0 6px rgba(94,234,212,.9),0 0 18px rgba(94,234,212,.6),0 0 42px rgba(94,234,212,.32);
 animation:flick 4.2s linear infinite}
@keyframes flick{0%,42%,44%,54%,100%{opacity:1}43%{opacity:.32}53%{opacity:.55}55%{opacity:.28}}`,
 js:`root.innerHTML='<span class="s">'+esc(text)+'</span>';`},

{id:'typewriter',name:'Typewriter',cat:'text',eng:'css',txt:1,tags:['loop','caret'],
 css:`.s{font:600 26px/1 'JetBrains Mono',monospace;letter-spacing:.02em;display:flex;align-items:center}
.s b{width:2px;height:1em;background:#5EEAD4;margin-left:4px;animation:caret .9s steps(1) infinite}
@keyframes caret{0%,50%{opacity:1}51%,100%{opacity:0}}`,
 js:`root.innerHTML='<span class="s"><u style="text-decoration:none"></u><b></b></span>';
const u=root.querySelector('u');let i=0,dir=1;
const iv=setInterval(()=>{i+=dir;u.textContent=text.slice(0,i);
 if(i>=text.length){dir=0;setTimeout(()=>dir=-1,1100);}
 if(i<=0&&dir===-1){dir=1;}},90);
onStop(()=>clearInterval(iv));`},

{id:'wave-text',name:'Wave',cat:'text',eng:'css',txt:1,tags:['loop','stagger'],
 css:`.s{display:flex;gap:.02em;font:800 34px/1 Archivo,sans-serif;letter-spacing:-.02em}
.s i{font-style:normal;display:inline-block;color:#E9EBF1;
 animation:wv 1.5s ease-in-out infinite;animation-delay:calc(var(--i)*78ms)}
@keyframes wv{0%,100%{transform:translateY(0);color:#E9EBF1}40%{transform:translateY(-13px);color:#5EEAD4}}`,
 js:`root.innerHTML='<span class="s">'+chars(text)+'</span>';`},

{id:'stretch',name:'Stretch Hover',cat:'text',eng:'css',txt:1,tags:['hover','interactive'],
 css:`.s{display:flex;font:900 33px/1 Archivo,sans-serif;letter-spacing:-.03em;cursor:default}
.s i{font-style:normal;display:inline-block;transition:transform .34s cubic-bezier(.2,1.5,.4,1),color .34s}
.s i:hover{transform:scaleY(1.55) translateY(-3px);color:#5EEAD4}
.s i:hover+i{transform:scaleY(1.22)}`,
 js:`root.innerHTML='<span class="s">'+chars(text)+'</span>';`},

{id:'chromatic',name:'Chromatic Drift',cat:'text',eng:'css',txt:1,tags:['loop','blend'],
 css:`.s{position:relative;font:900 33px/1 Archivo,sans-serif;letter-spacing:-.03em;color:transparent}
.s span{position:absolute;inset:0;mix-blend-mode:screen}
.s span:nth-child(1){color:#FF4D8D;animation:dr 3.4s ease-in-out infinite}
.s span:nth-child(2){color:#5EEAD4;animation:dr 3.4s ease-in-out infinite -1.1s}
.s span:nth-child(3){color:#8B7CFF;animation:dr 3.4s ease-in-out infinite -2.2s}
@keyframes dr{0%,100%{transform:translate(0,0)}33%{transform:translate(3px,-2px)}66%{transform:translate(-3px,2px)}}`,
 js:`const e=esc(text);
root.innerHTML='<span class="s">'+e+'<span>'+e+'</span><span>'+e+'</span><span>'+e+'</span></span>';`},

{id:'liquid-fill',name:'Liquid Fill',cat:'text',eng:'css',txt:1,tags:['loop','clip'],
 css:`.s{position:relative;font:900 34px/1 Archivo,sans-serif;letter-spacing:-.03em;color:#2A3040}
.s span{position:absolute;inset:0;color:#5EEAD4;overflow:hidden;
 animation:fillup 3.4s cubic-bezier(.5,0,.5,1) infinite}
@keyframes fillup{0%{clip-path:inset(100% 0 0 0)}45%,55%{clip-path:inset(0 0 0 0)}100%{clip-path:inset(0 0 100% 0)}}`,
 js:`const e=esc(text);root.innerHTML='<span class="s">'+e+'<span>'+e+'</span></span>';`},

{id:'outline-draw',name:'Outline Draw',cat:'text',eng:'css',txt:1,tags:['loop','stroke'],
 css:`.s{font:900 36px/1 Archivo,sans-serif;letter-spacing:-.02em;color:transparent;
 -webkit-text-stroke:1.4px #5EEAD4;position:relative}
.s span{position:absolute;inset:0;color:#5EEAD4;-webkit-text-stroke:0;
 clip-path:inset(0 100% 0 0);animation:draw 3.6s cubic-bezier(.65,0,.35,1) infinite}
@keyframes draw{0%,10%{clip-path:inset(0 100% 0 0)}50%,70%{clip-path:inset(0 0 0 0)}100%{clip-path:inset(0 0 0 100%)}}`,
 js:`const e=esc(text);root.innerHTML='<span class="s">'+e+'<span>'+e+'</span></span>';`},

{id:'jitter',name:'Jitter',cat:'text',eng:'css',txt:1,tags:['loop','chaotic'],
 css:`.s{display:flex;font:900 32px/1 Archivo,sans-serif;letter-spacing:-.02em;color:#E9EBF1}
.s i{font-style:normal;display:inline-block;
 animation:jt .38s steps(2,end) infinite;animation-delay:calc(var(--i)*-73ms)}
@keyframes jt{0%{transform:translate(0,0)}25%{transform:translate(1.4px,-1.4px)}
 50%{transform:translate(-1.4px,1px)}75%{transform:translate(1px,1.4px)}}`,
 js:`root.innerHTML='<span class="s">'+chars(text)+'</span>';`},

{id:'depth-shadow',name:'Depth Shadow',cat:'text',eng:'css',txt:1,tags:['loop','3d'],
 css:`.s{font:900 34px/1 Archivo,sans-serif;letter-spacing:-.03em;color:#E9EBF1;
 animation:dsh 3.6s ease-in-out infinite}
@keyframes dsh{
 0%,100%{text-shadow:2px 2px 0 #2A6B62,4px 4px 0 #1E4B45,6px 6px 0 #16332F}
 50%{text-shadow:-2px 2px 0 #6B3048,-4px 4px 0 #4B2233,-6px 6px 0 #331722}}`,
 js:`root.innerHTML='<span class="s">'+esc(text)+'</span>';`},

{id:'blur-focus',name:'Focus Pull',cat:'text',eng:'css',txt:1,tags:['loop','stagger'],
 css:`.s{display:flex;gap:.03em;font:800 32px/1 Archivo,sans-serif;letter-spacing:-.02em;color:#E9EBF1}
.s i{font-style:normal;display:inline-block;filter:blur(5px);opacity:.4;
 animation:fp 3.2s ease-in-out infinite;animation-delay:calc(var(--i)*180ms)}
@keyframes fp{0%,70%,100%{filter:blur(5px);opacity:.4}
 25%,45%{filter:blur(0);opacity:1;color:#5EEAD4}}`,
 js:`root.innerHTML='<span class="s">'+chars(text)+'</span>';`},

{id:'strike-reveal',name:'Strike Reveal',cat:'text',eng:'css',txt:1,tags:['loop','line'],
 css:`.s{position:relative;font:800 28px/1 Archivo,sans-serif;letter-spacing:-.02em;color:#E9EBF1;padding:0 3px}
.s::after{content:'';position:absolute;left:0;top:50%;height:2px;background:#5EEAD4;
 width:0;animation:strike 3.4s cubic-bezier(.65,0,.35,1) infinite}
@keyframes strike{0%,8%{width:0;left:0}45%,58%{width:100%;left:0}92%,100%{width:0;left:100%}}`,
 js:`root.innerHTML='<span class="s">'+esc(text)+'</span>';`},

{id:'rainbow-cycle',name:'Spectrum Cycle',cat:'text',eng:'css',txt:1,tags:['loop','hue'],
 css:`.s{font:900 34px/1 Archivo,sans-serif;letter-spacing:-.03em;
 background:linear-gradient(90deg,#5EEAD4,#8B7CFF,#FF6B9D,#FFB454,#5EEAD4);
 background-size:300% 100%;-webkit-background-clip:text;background-clip:text;color:transparent;
 animation:hue 5s linear infinite}
@keyframes hue{to{background-position:300% 0}}`,
 js:`root.innerHTML='<span class="s">'+esc(text)+'</span>';`},

{id:'mask-slide',name:'Mask Slide',cat:'text',eng:'css',txt:1,tags:['loop','mask'],
 css:`.s{font:900 32px/1 Archivo,sans-serif;letter-spacing:-.03em;color:#5EEAD4;
 -webkit-mask:linear-gradient(90deg,transparent,#000 30%,#000 70%,transparent);
 mask:linear-gradient(90deg,transparent,#000 30%,#000 70%,transparent);
 -webkit-mask-size:220% 100%;mask-size:220% 100%;animation:msl 3.4s ease-in-out infinite}
@keyframes msl{0%,100%{-webkit-mask-position:140% 0;mask-position:140% 0}
 50%{-webkit-mask-position:-40% 0;mask-position:-40% 0}}`,
 js:`root.innerHTML='<span class="s">'+esc(text)+'</span>';`},

{id:'spotlight-text',name:'Spotlight Text',cat:'text',eng:'css',txt:1,tags:['pointer','mask'],
 css:`.s{position:relative;font:900 32px/1 Archivo,sans-serif;letter-spacing:-.03em;color:#2A3040;cursor:crosshair}
.s span{position:absolute;inset:0;color:#5EEAD4;
 -webkit-mask:radial-gradient(70px circle at var(--x,50%) var(--y,50%),#000 0%,transparent 70%);
 mask:radial-gradient(70px circle at var(--x,50%) var(--y,50%),#000 0%,transparent 70%)}`,
 js:`const e=esc(text);root.innerHTML='<span class="s">'+e+'<span>'+e+'</span></span>';
const el=root.querySelector('.s');
const mv=ev=>{const b=el.getBoundingClientRect();
 el.style.setProperty('--x',(ev.clientX-b.left)+'px');
 el.style.setProperty('--y',(ev.clientY-b.top)+'px');};
el.addEventListener('pointermove',mv);
onStop(()=>el.removeEventListener('pointermove',mv));`},

{id:'weight-pulse',name:'Weight Pulse',cat:'text',eng:'css',txt:1,tags:['loop','stagger'],
 css:`.s{display:flex;font:400 32px/1 Archivo,sans-serif;letter-spacing:-.01em;color:#E9EBF1}
.s i{font-style:normal;display:inline-block;
 animation:wp 2.4s ease-in-out infinite;animation-delay:calc(var(--i)*110ms)}
@keyframes wp{0%,100%{font-weight:400;color:#565C6E}45%{font-weight:900;color:#5EEAD4}}`,
 js:`root.innerHTML='<span class="s">'+chars(text)+'</span>';`},

/* ── CSS · reveals ── */
{id:'split-rise',name:'Split Rise',cat:'reveal',eng:'css',txt:1,tags:['mask','stagger'],
 css:`.s{display:flex;gap:.01em;font:900 33px/1 Archivo,sans-serif;letter-spacing:-.04em}
.s b{overflow:hidden;display:block;padding-bottom:.06em}
.s i{font-style:normal;display:block;transform:translateY(110%);
 animation:rise .68s cubic-bezier(.16,1,.3,1) forwards;animation-delay:calc(var(--i)*48ms)}
@keyframes rise{to{transform:none}}`,
 js:`root.innerHTML='<span class="s">'+[...text].map((c,i)=>
 '<b><i style="--i:'+i+'">'+(c===' '?'&nbsp;':esc(c))+'</i></b>').join('')+'</span>';`},

{id:'curtain',name:'Curtain Wipe',cat:'reveal',eng:'css',txt:1,tags:['mask','clip'],
 css:`.s{position:relative;overflow:hidden;font:900 30px/1.2 Archivo,sans-serif;letter-spacing:-.035em;padding:4px}
.s span{display:block;clip-path:inset(0 100% 0 0);animation:wipe 1.1s cubic-bezier(.76,0,.24,1) forwards}
.s::after{content:'';position:absolute;inset:0;background:#5EEAD4;
 animation:bar 1.1s cubic-bezier(.76,0,.24,1) forwards}
@keyframes wipe{to{clip-path:inset(0 0 0 0)}}
@keyframes bar{0%{transform:translateX(-101%)}50%{transform:translateX(0)}100%{transform:translateX(101%)}}`,
 js:`root.innerHTML='<div class="s"><span>'+esc(text)+'</span></div>';`},

{id:'scale-fade',name:'Scale Fade',cat:'reveal',eng:'css',txt:1,tags:['entrance','soft'],
 css:`.s{font:800 31px/1 Archivo,sans-serif;letter-spacing:-.035em;color:#E9EBF1;
 opacity:0;transform:scale(.86);filter:blur(6px);animation:sf .9s cubic-bezier(.16,1,.3,1) forwards}
@keyframes sf{to{opacity:1;transform:none;filter:blur(0)}}`,
 js:`root.innerHTML='<div class="s">'+esc(text)+'</div>';`},

{id:'flip-board',name:'Flip Board',cat:'reveal',eng:'css',txt:1,tags:['3d','stagger'],
 css:`.s{display:flex;gap:4px;perspective:700px}
.s b{display:block;width:30px;height:42px;background:#141821;border:1px solid #2A3040;border-radius:3px;
 display:grid;place-items:center;font:700 18px/1 'JetBrains Mono',monospace;color:#5EEAD4;
 transform-origin:50% 0;animation:fb .7s cubic-bezier(.2,1.2,.3,1) backwards;
 animation-delay:calc(var(--i)*90ms)}
@keyframes fb{from{transform:rotateX(-95deg);opacity:0}to{transform:none;opacity:1}}`,
 js:`root.innerHTML='<div class="s">'+[...text.slice(0,7)].map((c,i)=>
 '<b style="--i:'+i+'">'+(c===' '?'&nbsp;':esc(c))+'</b>').join('')+'</div>';`},

{id:'blinds',name:'Blinds',cat:'reveal',eng:'css',txt:1,tags:['mask','stagger'],
 css:`.s{position:relative;font:900 29px/1 Archivo,sans-serif;letter-spacing:-.03em;color:#E9EBF1;padding:10px 6px}
.s u{position:absolute;top:0;bottom:0;width:12.5%;background:#0F1116;
 animation:bl .85s cubic-bezier(.76,0,.24,1) forwards;animation-delay:calc(var(--i)*65ms)}
@keyframes bl{to{transform:scaleY(0)}}`,
 js:`root.innerHTML='<div class="s">'+esc(text)+
 [0,1,2,3,4,5,6,7].map(i=>'<u style="--i:'+i+';left:'+(i*12.5)+'%"></u>').join('')+'</div>';`},

{id:'iris',name:'Iris Open',cat:'reveal',eng:'css',txt:1,tags:['clip','circle'],
 css:`.s{font:900 30px/1 Archivo,sans-serif;letter-spacing:-.03em;color:#5EEAD4;padding:14px 18px;
 clip-path:circle(0% at 50% 50%);animation:iris 1.1s cubic-bezier(.65,0,.35,1) forwards}
@keyframes iris{to{clip-path:circle(80% at 50% 50%)}}`,
 js:`root.innerHTML='<div class="s">'+esc(text)+'</div>';`},

{id:'letter-drop',name:'Letter Drop',cat:'reveal',eng:'css',txt:1,tags:['gravity','stagger'],
 css:`.s{display:flex;gap:.02em;font:900 33px/1 Archivo,sans-serif;letter-spacing:-.03em;color:#E9EBF1}
.s i{font-style:normal;display:inline-block;
 animation:drp .8s cubic-bezier(.5,0,.6,1.4) backwards;animation-delay:calc(var(--i)*62ms)}
@keyframes drp{from{transform:translateY(-70px) rotate(-14deg);opacity:0}to{transform:none;opacity:1}}`,
 js:`root.innerHTML='<span class="s">'+chars(text)+'</span>';`},

{id:'skew-in',name:'Skew In',cat:'reveal',eng:'css',txt:1,tags:['entrance','stagger'],
 css:`.s{display:flex;gap:.02em;font:900 32px/1 Archivo,sans-serif;letter-spacing:-.03em;color:#5EEAD4}
.s i{font-style:normal;display:inline-block;
 animation:sk .72s cubic-bezier(.16,1,.3,1) backwards;animation-delay:calc(var(--i)*45ms)}
@keyframes sk{from{transform:skewX(-38deg) translateX(-24px);opacity:0}to{transform:none;opacity:1}}`,
 js:`root.innerHTML='<span class="s">'+chars(text)+'</span>';`},

/* ── CSS · scrollers ── */
{id:'marquee',name:'Marquee',cat:'scroll',eng:'css',txt:1,tags:['loop','infinite'],
 css:`.s{width:100%;overflow:hidden;
 -webkit-mask:linear-gradient(90deg,transparent,#000 14%,#000 86%,transparent);
 mask:linear-gradient(90deg,transparent,#000 14%,#000 86%,transparent)}
.s .t{display:flex;gap:1.4em;white-space:nowrap;width:max-content;
 font:800 26px/1 Archivo,sans-serif;letter-spacing:-.02em;color:#5EEAD4;
 animation:march 12s linear infinite}
.s:hover .t{animation-play-state:paused}
@keyframes march{to{transform:translateX(-50%)}}`,
 js:`const o=Array.from({length:6},()=>'<span>'+esc(text)+'</span>').join('');
root.innerHTML='<div class="s"><div class="t">'+o+o+'</div></div>';`},

{id:'marquee-rev',name:'Counter Marquee',cat:'scroll',eng:'css',txt:1,tags:['loop','dual'],
 css:`.s{width:100%;display:grid;gap:9px;overflow:hidden;
 -webkit-mask:linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent);
 mask:linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)}
.s .t{display:flex;gap:1.2em;white-space:nowrap;width:max-content;
 font:800 20px/1 Archivo,sans-serif;letter-spacing:-.02em}
.s .a{color:#5EEAD4;animation:mA 11s linear infinite}
.s .b{color:#565C6E;animation:mB 13s linear infinite}
@keyframes mA{to{transform:translateX(-50%)}}
@keyframes mB{from{transform:translateX(-50%)}to{transform:translateX(0)}}`,
 js:`const o=Array.from({length:7},()=>'<span>'+esc(text)+'</span>').join('');
root.innerHTML='<div class="s"><div class="t a">'+o+o+'</div><div class="t b">'+o+o+'</div></div>';`},

{id:'ticker',name:'Vertical Ticker',cat:'scroll',eng:'css',txt:1,tags:['loop','vertical'],
 css:`.s{height:96px;overflow:hidden;position:relative;
 -webkit-mask:linear-gradient(180deg,transparent,#000 26%,#000 74%,transparent);
 mask:linear-gradient(180deg,transparent,#000 26%,#000 74%,transparent)}
.s .c{animation:vroll 6s linear infinite}
.s .c div{height:32px;display:grid;place-items:center;
 font:700 17px/1 'JetBrains Mono',monospace;letter-spacing:.09em;color:#5EEAD4}
@keyframes vroll{to{transform:translateY(-50%)}}`,
 js:`const items=[esc(text),'LOK','MOTION',esc(text),'SHIP IT','LOK'];
const b=items.map(t=>'<div>'+t+'</div>').join('');
root.innerHTML='<div class="s"><div class="c">'+b+b+'</div></div>';`},

{id:'marquee-3d',name:'Perspective Marquee',cat:'scroll',eng:'css',txt:1,tags:['3d','loop'],
 css:`.s{width:100%;perspective:340px;overflow:hidden;
 -webkit-mask:linear-gradient(90deg,transparent,#000 20%,#000 80%,transparent);
 mask:linear-gradient(90deg,transparent,#000 20%,#000 80%,transparent)}
.s .t{display:flex;gap:1.1em;white-space:nowrap;width:max-content;
 font:900 30px/1 Archivo,sans-serif;letter-spacing:-.03em;color:#5EEAD4;
 transform:rotateX(26deg);animation:m3 10s linear infinite}
@keyframes m3{to{transform:rotateX(26deg) translateX(-50%)}}`,
 js:`const o=Array.from({length:6},()=>'<span>'+esc(text)+'</span>').join('');
root.innerHTML='<div class="s"><div class="t">'+o+o+'</div></div>';`},

{id:'tag-conveyor',name:'Tag Conveyor',cat:'scroll',eng:'css',txt:1,tags:['loop','pills'],
 css:`.s{width:100%;overflow:hidden;
 -webkit-mask:linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent);
 mask:linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)}
.s .t{display:flex;gap:8px;white-space:nowrap;width:max-content;animation:march 14s linear infinite}
.s b{font:500 12px/1 'JetBrains Mono',monospace;padding:7px 13px;border-radius:100px;
 border:1px solid #2A3040;color:#8A90A3;background:#141821}
.s b:nth-child(3n){border-color:#2A6B62;color:#5EEAD4}
@keyframes march{to{transform:translateX(-50%)}}`,
 js:`const w=[esc(text),'MOTION','UI','ANIME','GSAP','WEBGL'];
const o=w.map(t=>'<b>'+t+'</b>').join('');
root.innerHTML='<div class="s"><div class="t">'+o+o+o+'</div></div>';`},

{id:'news-crawl',name:'News Crawl',cat:'scroll',eng:'css',txt:1,tags:['loop','ticker'],
 css:`.s{width:100%;display:flex;align-items:center;background:#0F1116;border:1px solid #1E222C;
 border-radius:4px;overflow:hidden;height:38px}
.s .k{flex:none;background:#5EEAD4;color:#04120F;height:100%;display:grid;place-items:center;
 padding:0 12px;font:700 10px/1 'JetBrains Mono',monospace;letter-spacing:.14em}
.s .w{flex:1;overflow:hidden}
.s .t{display:flex;gap:2.4em;white-space:nowrap;width:max-content;
 font:400 12px/1 'JetBrains Mono',monospace;color:#8A90A3;animation:march 16s linear infinite}
@keyframes march{to{transform:translateX(-50%)}}`,
 js:`const o=Array.from({length:4},()=>'<span>'+esc(text)+' — now shipping</span>').join('');
root.innerHTML='<div class="s"><div class="k">LIVE</div><div class="w"><div class="t">'+o+o+'</div></div></div>';`},

{id:'wheel-scroll',name:'Word Wheel',cat:'scroll',eng:'css',txt:1,tags:['loop','3d'],
 css:`.s{height:100px;width:100%;perspective:420px;display:grid;place-items:center;overflow:hidden}
.s .c{position:relative;width:100%;height:34px;transform-style:preserve-3d;
 animation:wheel 9s linear infinite}
.s .c div{position:absolute;inset:0;display:grid;place-items:center;backface-visibility:hidden;
 font:700 17px/1 'JetBrains Mono',monospace;letter-spacing:.08em;color:#5EEAD4}
@keyframes wheel{to{transform:rotateX(-360deg)}}`,
 js:`const w=[esc(text),'LOK','MOTION','BUILD','SHIP','LOK'];
root.innerHTML='<div class="s"><div class="c">'+w.map((t,i)=>
 '<div style="transform:rotateX('+(i*60)+'deg) translateZ(34px)">'+t+'</div>').join('')+'</div></div>';`},

/* ── CSS · surfaces ── */
{id:'beam',name:'Border Beam',cat:'surface',eng:'css',txt:1,tags:['loop','border'],
 css:`.s{position:relative;padding:22px 30px;border-radius:6px;background:#0F1116;color:#E9EBF1;
 font:700 19px/1 Archivo,sans-serif;letter-spacing:-.02em;isolation:isolate}
.s::before{content:'';position:absolute;inset:0;border-radius:inherit;padding:1px;
 background:conic-gradient(from var(--a,0deg),transparent 0 72%,#5EEAD4 84%,#D9FFF8 90%,transparent 96%);
 -webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);
 -webkit-mask-composite:xor;mask-composite:exclude;animation:spin 3.4s linear infinite}
@property --a{syntax:'<angle>';inherits:false;initial-value:0deg}
@keyframes spin{to{--a:360deg}}`,
 js:`root.innerHTML='<div class="s">'+esc(text)+'</div>';`},

{id:'glass',name:'Liquid Glass',cat:'surface',eng:'css',txt:1,tags:['glass','lok-core'],
 css:`.s{padding:24px 32px;border-radius:8px;
 background:linear-gradient(150deg,rgba(255,255,255,.075),rgba(255,255,255,.015));
 border:1px solid rgba(255,255,255,.1);backdrop-filter:blur(14px) saturate(170%);
 -webkit-backdrop-filter:blur(14px) saturate(170%);
 box-shadow:inset 0 1px 0 rgba(255,255,255,.15),0 14px 34px rgba(0,0,0,.5);
 color:#E9EBF1;font:700 19px/1 Archivo,sans-serif;letter-spacing:-.02em;position:relative;overflow:hidden}
.s::after{content:'';position:absolute;top:-60%;left:-30%;width:60%;height:220%;
 background:linear-gradient(90deg,transparent,rgba(255,255,255,.11),transparent);
 transform:rotate(22deg);animation:sheen 4.5s ease-in-out infinite}
@keyframes sheen{0%,68%{left:-40%}88%,100%{left:120%}}`,
 js:`root.innerHTML='<div class="s">'+esc(text)+'</div>';`},

{id:'spotlight',name:'Spotlight Follow',cat:'surface',eng:'css',txt:1,tags:['hover','pointer'],
 css:`.s{position:relative;padding:26px 34px;border-radius:6px;background:#0F1116;border:1px solid #1E222C;
 overflow:hidden;color:#E9EBF1;font:700 19px/1 Archivo,sans-serif;letter-spacing:-.02em;cursor:crosshair}
.s::before{content:'';position:absolute;inset:0;pointer-events:none;
 background:radial-gradient(180px circle at var(--x,50%) var(--y,50%),rgba(94,234,212,.19),transparent 62%);
 opacity:0;transition:opacity .25s}
.s:hover::before{opacity:1}`,
 js:`root.innerHTML='<div class="s">'+esc(text)+'</div>';
const el=root.querySelector('.s');
const mv=e=>{const b=el.getBoundingClientRect();
 el.style.setProperty('--x',(e.clientX-b.left)+'px');
 el.style.setProperty('--y',(e.clientY-b.top)+'px');};
el.addEventListener('pointermove',mv);
onStop(()=>el.removeEventListener('pointermove',mv));`},

{id:'tilt',name:'Tilt Card',cat:'surface',eng:'css',txt:1,tags:['3d','pointer'],
 css:`.w{perspective:800px}
.s{padding:26px 34px;border-radius:8px;background:linear-gradient(150deg,#191E28,#0F1116);
 border:1px solid #2A3040;color:#E9EBF1;font:700 18px/1 Archivo,sans-serif;letter-spacing:-.02em;
 transition:transform .15s ease-out,box-shadow .3s;transform-style:preserve-3d;
 box-shadow:0 10px 30px rgba(0,0,0,.45)}
.s:hover{box-shadow:0 18px 46px rgba(94,234,212,.14)}`,
 js:`root.innerHTML='<div class="w"><div class="s">'+esc(text)+'</div></div>';
const w=root.querySelector('.w'),el=root.querySelector('.s');
const mv=e=>{const b=w.getBoundingClientRect();
 const x=(e.clientX-b.left)/b.width-.5,y=(e.clientY-b.top)/b.height-.5;
 el.style.transform='rotateY('+(x*22)+'deg) rotateX('+(-y*22)+'deg)';};
const lv=()=>el.style.transform='';
w.addEventListener('pointermove',mv);w.addEventListener('pointerleave',lv);
onStop(()=>{w.removeEventListener('pointermove',mv);w.removeEventListener('pointerleave',lv);});`},

{id:'glow-corners',name:'Corner Glow',cat:'surface',eng:'css',txt:1,tags:['loop','glow'],
 css:`.s{position:relative;padding:24px 32px;border-radius:7px;background:#0F1116;
 border:1px solid #1E222C;color:#E9EBF1;font:700 18px/1 Archivo,sans-serif;letter-spacing:-.02em}
.s u{position:absolute;width:26px;height:26px;border:2px solid #5EEAD4;
 animation:cg 2.8s ease-in-out infinite}
.s u:nth-child(1){top:-1px;left:-1px;border-right:0;border-bottom:0;border-radius:7px 0 0 0}
.s u:nth-child(2){top:-1px;right:-1px;border-left:0;border-bottom:0;border-radius:0 7px 0 0;animation-delay:.2s}
.s u:nth-child(3){bottom:-1px;left:-1px;border-right:0;border-top:0;border-radius:0 0 0 7px;animation-delay:.4s}
.s u:nth-child(4){bottom:-1px;right:-1px;border-left:0;border-top:0;border-radius:0 0 7px 0;animation-delay:.6s}
@keyframes cg{0%,100%{opacity:.25;filter:none}50%{opacity:1;filter:drop-shadow(0 0 6px #5EEAD4)}}`,
 js:`root.innerHTML='<div class="s"><u></u><u></u><u></u><u></u>'+esc(text)+'</div>';`},

{id:'folder-card',name:'Folder Peek',cat:'surface',eng:'css',txt:1,tags:['hover','stack'],
 css:`.s{position:relative;width:158px;height:100px;cursor:pointer}
.s b{position:absolute;inset:auto 0 0;height:78px;border-radius:6px;background:#141821;
 border:1px solid #2A3040;transition:transform .4s cubic-bezier(.2,1.2,.35,1)}
.s b:nth-child(1){background:#1A2029}
.s b:nth-child(2){background:#151A22}
.s .f{position:absolute;inset:auto 0 0;height:58px;border-radius:6px;
 background:linear-gradient(150deg,#5EEAD4,#2A6B62);display:grid;place-items:center;
 font:700 14px/1 Archivo,sans-serif;color:#04120F;letter-spacing:-.02em;z-index:3}
.s:hover b:nth-child(1){transform:translateY(-30px) rotate(-7deg)}
.s:hover b:nth-child(2){transform:translateY(-18px) rotate(5deg)}`,
 js:`root.innerHTML='<div class="s"><b></b><b></b><div class="f">'+esc(text)+'</div></div>';`},

{id:'grad-border',name:'Gradient Border Pulse',cat:'surface',eng:'css',txt:1,tags:['loop','border'],
 css:`.s{position:relative;padding:22px 30px;border-radius:7px;background:#0F1116;color:#E9EBF1;
 font:700 18px/1 Archivo,sans-serif;letter-spacing:-.02em;z-index:1}
.s::before{content:'';position:absolute;inset:-1.5px;border-radius:inherit;z-index:-1;
 background:linear-gradient(120deg,#5EEAD4,#8B7CFF,#FF6B9D,#5EEAD4);
 background-size:300% 100%;animation:gb 4s linear infinite;filter:blur(.5px)}
@keyframes gb{to{background-position:300% 0}}`,
 js:`root.innerHTML='<div class="s">'+esc(text)+'</div>';`},

{id:'hover-lift',name:'Hover Lift',cat:'surface',eng:'css',txt:1,tags:['hover','shadow'],
 css:`.s{padding:24px 30px;border-radius:7px;background:#141821;border:1px solid #2A3040;
 color:#E9EBF1;font:700 18px/1 Archivo,sans-serif;letter-spacing:-.02em;cursor:pointer;
 transition:transform .3s cubic-bezier(.2,1.2,.35,1),box-shadow .3s,border-color .3s}
.s:hover{transform:translateY(-8px);border-color:#5EEAD4;
 box-shadow:0 18px 40px rgba(0,0,0,.5),0 0 30px rgba(94,234,212,.18)}`,
 js:`root.innerHTML='<div class="s">'+esc(text)+'</div>';`},

/* ── CSS · controls ── */
{id:'wipe-btn',name:'Wipe Fill',cat:'control',eng:'css',txt:1,tags:['button','hover'],
 css:`.s{position:relative;overflow:hidden;cursor:pointer;border:1px solid #5EEAD4;background:transparent;
 color:#5EEAD4;padding:13px 30px;border-radius:4px;
 font:700 13px/1 'JetBrains Mono',monospace;letter-spacing:.1em;transition:color .32s}
.s span{position:relative;z-index:2}
.s::before{content:'';position:absolute;inset:0;background:#5EEAD4;transform:translateY(101%);
 transition:transform .36s cubic-bezier(.2,.9,.3,1)}
.s:hover{color:#04120F}
.s:hover::before{transform:none}`,
 js:`root.innerHTML='<button class="s"><span>'+esc(text)+'</span></button>';`},

{id:'shine-btn',name:'Shine Button',cat:'control',eng:'css',txt:1,tags:['button','loop'],
 css:`.s{position:relative;overflow:hidden;border:0;cursor:pointer;padding:13px 28px;border-radius:5px;
 background:#5EEAD4;color:#04120F;font:700 13px/1 'JetBrains Mono',monospace;letter-spacing:.09em;
 transition:transform .16s,box-shadow .16s}
.s:hover{transform:translateY(-1px);box-shadow:0 8px 22px rgba(94,234,212,.3)}
.s:active{transform:translateY(0)}
.s::after{content:'';position:absolute;top:0;left:-120%;width:55%;height:100%;
 background:linear-gradient(90deg,transparent,rgba(255,255,255,.6),transparent);
 transform:skewX(-22deg);animation:shine 3s ease-in-out infinite}
@keyframes shine{0%,62%{left:-120%}86%,100%{left:180%}}`,
 js:`root.innerHTML='<button class="s">'+esc(text)+'</button>';`},

{id:'ripple-btn',name:'Ripple Press',cat:'control',eng:'css',txt:1,tags:['button','click'],
 css:`.s{position:relative;overflow:hidden;cursor:pointer;border:1px solid #2A3040;background:#141821;
 color:#E9EBF1;padding:14px 30px;border-radius:5px;
 font:600 13px/1 'JetBrains Mono',monospace;letter-spacing:.09em;transition:border-color .2s}
.s:hover{border-color:#5EEAD4}
.s u{position:absolute;border-radius:50%;background:rgba(94,234,212,.45);
 transform:translate(-50%,-50%) scale(0);animation:rip .62s ease-out forwards;pointer-events:none}
@keyframes rip{to{transform:translate(-50%,-50%) scale(9);opacity:0}}`,
 js:`root.innerHTML='<button class="s">'+esc(text)+'</button>';
const b=root.querySelector('.s');
const dn=e=>{const r=b.getBoundingClientRect();const u=document.createElement('u');
 u.style.cssText='left:'+(e.clientX-r.left)+'px;top:'+(e.clientY-r.top)+'px;width:26px;height:26px';
 b.appendChild(u);setTimeout(()=>u.remove(),640);};
b.addEventListener('pointerdown',dn);
onStop(()=>b.removeEventListener('pointerdown',dn));`},

{id:'toggle',name:'Slide Toggle',cat:'control',eng:'css',txt:0,tags:['input','spring'],
 css:`.s{display:flex;align-items:center;gap:11px;cursor:pointer;user-select:none}
.s .t{width:52px;height:28px;border-radius:100px;background:#1E222C;border:1px solid #2A3040;
 position:relative;transition:background .3s,border-color .3s}
.s .t b{position:absolute;top:3px;left:3px;width:20px;height:20px;border-radius:50%;background:#565C6E;
 transition:transform .34s cubic-bezier(.2,1.4,.4,1),background .3s}
.s.on .t{background:rgba(94,234,212,.2);border-color:#5EEAD4}
.s.on .t b{transform:translateX(24px);background:#5EEAD4}
.s span{font:400 11px/1 'JetBrains Mono',monospace;color:#8A90A3;letter-spacing:.1em}`,
 js:`root.innerHTML='<div class="s"><div class="t"><b></b></div><span>OFF</span></div>';
const s=root.querySelector('.s');
s.onclick=()=>{s.classList.toggle('on');
 s.querySelector('span').textContent=s.classList.contains('on')?'ON':'OFF';};`},

{id:'arrow-slide',name:'Arrow Slide',cat:'control',eng:'css',txt:1,tags:['button','hover'],
 css:`.s{display:flex;align-items:center;gap:10px;cursor:pointer;border:1px solid #2A3040;
 background:#141821;color:#E9EBF1;padding:13px 24px;border-radius:100px;overflow:hidden;
 font:600 13px/1 'JetBrains Mono',monospace;letter-spacing:.08em;transition:border-color .25s,color .25s}
.s:hover{border-color:#5EEAD4;color:#5EEAD4}
.s b{display:block;width:16px;height:1.5px;background:currentColor;position:relative;
 transition:width .3s cubic-bezier(.2,1,.3,1)}
.s b::after{content:'';position:absolute;right:0;top:-3px;width:7px;height:7px;
 border-top:1.5px solid currentColor;border-right:1.5px solid currentColor;transform:rotate(45deg)}
.s:hover b{width:30px}`,
 js:`root.innerHTML='<button class="s">'+esc(text)+'<b></b></button>';`},

{id:'loading-btn',name:'Loading Button',cat:'control',eng:'css',txt:1,tags:['button','state'],
 css:`.s{position:relative;cursor:pointer;border:0;background:#5EEAD4;color:#04120F;
 padding:13px 30px;border-radius:5px;min-width:150px;
 font:700 13px/1 'JetBrains Mono',monospace;letter-spacing:.09em;overflow:hidden}
.s.load{color:transparent;pointer-events:none}
.s.load::after{content:'';position:absolute;inset:0;margin:auto;width:17px;height:17px;
 border:2px solid rgba(4,18,15,.3);border-top-color:#04120F;border-radius:50%;
 animation:spinb .7s linear infinite}
.s.done{background:#8BE84A}
@keyframes spinb{to{transform:rotate(360deg)}}`,
 js:`root.innerHTML='<button class="s">'+esc(text)+'</button>';
const b=root.querySelector('.s');const T=[];
b.onclick=()=>{b.classList.add('load');
 T.push(setTimeout(()=>{b.classList.remove('load');b.classList.add('done');b.textContent='DONE';},1500));
 T.push(setTimeout(()=>{b.classList.remove('done');b.textContent=text;},2900));};
onStop(()=>T.forEach(clearTimeout));`},

{id:'tab-switch',name:'Tab Switch',cat:'control',eng:'css',txt:0,tags:['nav','slide'],
 css:`.s{position:relative;display:flex;background:#0F1116;border:1px solid #1E222C;
 border-radius:6px;padding:3px}
.s u{position:absolute;top:3px;bottom:3px;background:#5EEAD4;border-radius:4px;
 transition:transform .34s cubic-bezier(.2,1.1,.3,1),width .34s;z-index:1}
.s button{position:relative;z-index:2;background:none;border:0;cursor:pointer;padding:9px 17px;
 font:600 11px/1 'JetBrains Mono',monospace;letter-spacing:.09em;color:#8A90A3;transition:color .25s}
.s button.on{color:#04120F}`,
 js:`const t=['ALL','CSS','GL'];
root.innerHTML='<div class="s"><u></u>'+t.map((x,i)=>
 '<button class="'+(i===0?'on':'')+'">'+x+'</button>').join('')+'</div>';
const s=root.querySelector('.s'),u=root.querySelector('u'),bs=[...s.querySelectorAll('button')];
const move=b=>{u.style.width=b.offsetWidth+'px';u.style.transform='translateX('+(b.offsetLeft-3)+'px)';};
const raf=requestAnimationFrame(()=>move(bs[0]));
onStop(()=>cancelAnimationFrame(raf));
bs.forEach(b=>b.onclick=()=>{bs.forEach(x=>x.classList.remove('on'));b.classList.add('on');move(b);});`},

{id:'radio-morph',name:'Radio Morph',cat:'control',eng:'css',txt:0,tags:['input','spring'],
 css:`.s{display:flex;gap:14px}
.s label{display:flex;align-items:center;gap:8px;cursor:pointer;
 font:400 11px/1 'JetBrains Mono',monospace;color:#8A90A3;letter-spacing:.08em}
.s i{width:17px;height:17px;border-radius:50%;border:1.5px solid #2A3040;display:grid;place-items:center;
 transition:border-color .25s}
.s i::after{content:'';width:8px;height:8px;border-radius:50%;background:#5EEAD4;
 transform:scale(0);transition:transform .3s cubic-bezier(.2,1.6,.4,1)}
.s label.on i{border-color:#5EEAD4}
.s label.on i::after{transform:scale(1)}
.s label.on{color:#E9EBF1}`,
 js:`const o=['ONE','TWO','THREE'];
root.innerHTML='<div class="s">'+o.map((x,i)=>
 '<label class="'+(i===0?'on':'')+'"><i></i>'+x+'</label>').join('')+'</div>';
const ls=[...root.querySelectorAll('label')];
ls.forEach(l=>l.onclick=()=>{ls.forEach(x=>x.classList.remove('on'));l.classList.add('on');});`},

/* ── CSS · loaders ── */
{id:'bar-sweep',name:'Bar Sweep',cat:'loader',eng:'css',txt:0,tags:['loader','loop'],
 css:`.s{width:190px}
.s .b{height:3px;background:#1E222C;border-radius:3px;overflow:hidden}
.s .b u{display:block;height:100%;width:36%;background:#5EEAD4;border-radius:3px;
 animation:sweepb 1.5s cubic-bezier(.65,0,.35,1) infinite}
.s p{font:400 9.5px/1 'JetBrains Mono',monospace;letter-spacing:.18em;text-transform:uppercase;
 color:#565C6E;margin-top:11px;text-align:center}
@keyframes sweepb{0%{transform:translateX(-110%)}100%{transform:translateX(390%)}}`,
 js:`root.innerHTML='<div class="s"><div class="b"><u></u></div><p>loading</p></div>';`},

{id:'dot-pulse',name:'Dot Pulse',cat:'loader',eng:'css',txt:0,tags:['loader','stagger'],
 css:`.s{display:flex;gap:8px}
.s b{width:9px;height:9px;border-radius:50%;background:#5EEAD4;
 animation:dp 1.3s ease-in-out infinite;animation-delay:calc(var(--i)*160ms)}
@keyframes dp{0%,80%,100%{transform:scale(.4);opacity:.3}40%{transform:scale(1);opacity:1}}`,
 js:`root.innerHTML='<div class="s">'+[0,1,2,3].map(i=>'<b style="--i:'+i+'"></b>').join('')+'</div>';`},

{id:'ring-spin',name:'Ring Spin',cat:'loader',eng:'css',txt:0,tags:['loader','mask'],
 css:`.s{width:54px;height:54px;border-radius:50%;
 background:conic-gradient(from 0deg,transparent 0 62%,#5EEAD4 88%,transparent 96%);
 -webkit-mask:radial-gradient(farthest-side,transparent calc(100% - 4px),#000 calc(100% - 3px));
 mask:radial-gradient(farthest-side,transparent calc(100% - 4px),#000 calc(100% - 3px));
 animation:rs 1.05s linear infinite}
@keyframes rs{to{transform:rotate(360deg)}}`,
 js:`root.innerHTML='<div class="s"></div>';`},

{id:'radial-pct',name:'Radial Progress',cat:'loader',eng:'css',txt:0,tags:['loader','progress'],
 css:`.s{position:relative;width:82px;height:82px;display:grid;place-items:center;
 border-radius:50%;background:conic-gradient(#5EEAD4 var(--p,0%),#1E222C 0);
 animation:fill 3s ease-in-out infinite}
.s::before{content:'';position:absolute;inset:7px;border-radius:50%;background:#141821}
.s span{position:relative;font:700 15px/1 'JetBrains Mono',monospace;color:#5EEAD4}
@property --p{syntax:'<percentage>';inherits:false;initial-value:0%}
@keyframes fill{0%{--p:0%}70%,100%{--p:78%}}`,
 js:`root.innerHTML='<div class="s"><span>78%</span></div>';`},

{id:'skeleton',name:'Skeleton Shimmer',cat:'loader',eng:'css',txt:0,tags:['loader','placeholder'],
 css:`.s{width:190px;display:grid;gap:9px}
.s b{height:11px;border-radius:3px;
 background:linear-gradient(90deg,#1A1F2A 0%,#252C3A 42%,#1A1F2A 84%);
 background-size:220% 100%;animation:sk 1.5s linear infinite}
.s b:nth-child(1){width:100%}.s b:nth-child(2){width:82%}
.s b:nth-child(3){width:64%}.s b:nth-child(4){width:90%}
@keyframes sk{to{background-position:-220% 0}}`,
 js:`root.innerHTML='<div class="s"><b></b><b></b><b></b><b></b></div>';`},

{id:'wave-loader',name:'Wave Loader',cat:'loader',eng:'css',txt:0,tags:['loader','stagger'],
 css:`.s{display:flex;align-items:center;gap:4px;height:52px}
.s b{width:5px;height:14px;border-radius:3px;background:#5EEAD4;
 animation:wl 1.1s ease-in-out infinite;animation-delay:calc(var(--i)*110ms)}
@keyframes wl{0%,100%{height:14px;opacity:.4}50%{height:44px;opacity:1}}`,
 js:`root.innerHTML='<div class="s">'+[0,1,2,3,4,5,6].map(i=>'<b style="--i:'+i+'"></b>').join('')+'</div>';`},

{id:'orbit-loader',name:'Orbit Loader',cat:'loader',eng:'css',txt:0,tags:['loader','orbit'],
 css:`.s{position:relative;width:62px;height:62px}
.s u{position:absolute;inset:0;border-radius:50%;border:1.5px solid transparent;
 border-top-color:#5EEAD4;animation:ol 1.4s cubic-bezier(.5,0,.5,1) infinite}
.s u:nth-child(2){inset:9px;border-top-color:#8B7CFF;animation-duration:1.05s;animation-direction:reverse}
.s u:nth-child(3){inset:18px;border-top-color:#FF6B9D;animation-duration:1.75s}
@keyframes ol{to{transform:rotate(360deg)}}`,
 js:`root.innerHTML='<div class="s"><u></u><u></u><u></u></div>';`},

{id:'blocks-loader',name:'Block Cascade',cat:'loader',eng:'css',txt:0,tags:['loader','grid'],
 css:`.s{display:grid;grid-template-columns:repeat(3,1fr);gap:5px;width:62px}
.s b{aspect-ratio:1;background:#5EEAD4;border-radius:2px;
 animation:bc 1.4s ease-in-out infinite;animation-delay:calc(var(--i)*110ms)}
@keyframes bc{0%,70%,100%{transform:scale(.35);opacity:.25}35%{transform:scale(1);opacity:1}}`,
 js:`root.innerHTML='<div class="s">'+[0,1,2,3,4,5,6,7,8].map(i=>'<b style="--i:'+i+'"></b>').join('')+'</div>';`},

/* ── CSS · ambient ── */
{id:'scanline',name:'Scanline',cat:'ambient',eng:'css',txt:1,tags:['crt','loop'],
 css:`.s{position:relative;overflow:hidden;padding:24px 32px;border-radius:4px;background:#0F1116;
 border:1px solid #1E222C;font:700 22px/1 'JetBrains Mono',monospace;letter-spacing:.08em;color:#5EEAD4}
.s::before{content:'';position:absolute;inset:0;pointer-events:none;
 background:repeating-linear-gradient(180deg,rgba(0,0,0,.34) 0 1px,transparent 1px 3px)}
.s::after{content:'';position:absolute;left:0;right:0;height:38px;
 background:linear-gradient(180deg,transparent,rgba(94,234,212,.13),transparent);
 animation:scan 3.2s linear infinite}
@keyframes scan{from{top:-40px}to{top:100%}}`,
 js:`root.innerHTML='<div class="s">'+esc(text)+'</div>';`},

{id:'grid-pulse',name:'Grid Pulse',cat:'ambient',eng:'css',txt:1,tags:['background','loop'],
 css:`.s{position:relative;width:100%;height:108px;display:grid;place-items:center;overflow:hidden;
 border-radius:4px;background:#0A0B0E}
.s::before{content:'';position:absolute;inset:-40%;
 background-image:linear-gradient(#1E222C 1px,transparent 1px),
 linear-gradient(90deg,#1E222C 1px,transparent 1px);
 background-size:26px 26px;animation:drift 14s linear infinite}
.s::after{content:'';position:absolute;inset:0;
 background:radial-gradient(60% 60% at 50% 50%,rgba(94,234,212,.16),transparent 70%);
 animation:breathe 3.4s ease-in-out infinite}
.s span{position:relative;z-index:2;font:900 23px/1 Archivo,sans-serif;letter-spacing:-.03em;color:#E9EBF1}
@keyframes drift{to{transform:translate(26px,26px)}}
@keyframes breathe{0%,100%{opacity:.5}50%{opacity:1}}`,
 js:`root.innerHTML='<div class="s"><span>'+esc(text)+'</span></div>';`},

{id:'aurora',name:'Aurora',cat:'ambient',eng:'css',txt:1,tags:['background','gradient'],
 css:`.s{position:relative;width:100%;height:112px;border-radius:5px;overflow:hidden;
 display:grid;place-items:center;background:#0A0B0E}
.s u{position:absolute;width:180px;height:180px;border-radius:50%;filter:blur(46px);opacity:.55}
.s u:nth-child(1){background:#5EEAD4;animation:au1 9s ease-in-out infinite}
.s u:nth-child(2){background:#8B7CFF;animation:au2 11s ease-in-out infinite}
.s u:nth-child(3){background:#FF6B9D;animation:au3 13s ease-in-out infinite}
.s span{position:relative;z-index:2;font:900 23px/1 Archivo,sans-serif;letter-spacing:-.03em;color:#fff;
 text-shadow:0 2px 20px rgba(0,0,0,.6)}
@keyframes au1{0%,100%{transform:translate(-58px,-22px)}50%{transform:translate(42px,20px)}}
@keyframes au2{0%,100%{transform:translate(52px,18px)}50%{transform:translate(-38px,-24px)}}
@keyframes au3{0%,100%{transform:translate(6px,26px)}50%{transform:translate(-16px,-28px)}}`,
 js:`root.innerHTML='<div class="s"><u></u><u></u><u></u><span>'+esc(text)+'</span></div>';`},

{id:'noise',name:'Noise Field',cat:'ambient',eng:'css',txt:1,tags:['texture','grain'],
 css:`.s{position:relative;width:100%;height:106px;border-radius:5px;overflow:hidden;display:grid;
 place-items:center;background:radial-gradient(90% 90% at 50% 40%,#1A2A2A,#0A0B0E)}
.s::before{content:'';position:absolute;inset:-100%;opacity:.13;
 background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)'/%3E%3C/svg%3E");
 animation:grain .5s steps(3) infinite}
.s span{position:relative;z-index:2;font:900 23px/1 Archivo,sans-serif;letter-spacing:-.03em;color:#5EEAD4}
@keyframes grain{0%{transform:translate(0,0)}33%{transform:translate(-14px,9px)}66%{transform:translate(11px,-12px)}}`,
 js:`root.innerHTML='<div class="s"><span>'+esc(text)+'</span></div>';`},

{id:'hex-grid',name:'Hex Grid',cat:'ambient',eng:'css',txt:1,tags:['background','loop'],
 css:`.s{position:relative;width:100%;height:108px;border-radius:5px;overflow:hidden;
 display:grid;place-items:center;background:#0A0B0E}
.s::before{content:'';position:absolute;inset:-20%;opacity:.5;
 background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='46'%3E%3Cpath d='M20 0 L40 11.5 L40 34.5 L20 46 L0 34.5 L0 11.5 Z' fill='none' stroke='%231E222C' stroke-width='1'/%3E%3C/svg%3E");
 animation:hx 18s linear infinite}
.s::after{content:'';position:absolute;inset:0;
 background:radial-gradient(50% 60% at 50% 50%,rgba(94,234,212,.18),transparent 72%);
 animation:breathe 4s ease-in-out infinite}
.s span{position:relative;z-index:2;font:900 22px/1 Archivo,sans-serif;letter-spacing:-.03em;color:#E9EBF1}
@keyframes hx{to{transform:translate(40px,46px)}}
@keyframes breathe{0%,100%{opacity:.45}50%{opacity:1}}`,
 js:`root.innerHTML='<div class="s"><span>'+esc(text)+'</span></div>';`},

{id:'floating-orbs',name:'Floating Orbs',cat:'ambient',eng:'css',txt:1,tags:['background','loop'],
 css:`.s{position:relative;width:100%;height:110px;border-radius:5px;overflow:hidden;
 display:grid;place-items:center;background:#0A0B0E;border:1px solid #1E222C}
.s u{position:absolute;border-radius:50%;background:#5EEAD4;opacity:.5;
 animation:fo 9s ease-in-out infinite}
.s span{position:relative;z-index:2;font:900 21px/1 Archivo,sans-serif;letter-spacing:-.03em;color:#E9EBF1}
@keyframes fo{0%,100%{transform:translateY(14px) scale(1)}50%{transform:translateY(-16px) scale(1.3)}}`,
 js:`const o=[[12,18,7],[74,26,5],[40,72,9],[88,66,6],[26,50,4],[60,14,6]];
root.innerHTML='<div class="s">'+o.map((p,i)=>
 '<u style="left:'+p[0]+'%;top:'+p[1]+'%;width:'+p[2]+'px;height:'+p[2]+
 'px;animation-delay:'+(i*-1.4)+'s"></u>').join('')+
 '<span>'+esc(text)+'</span></div>';`},

{id:'spot-sweep',name:'Spotlight Sweep',cat:'ambient',eng:'css',txt:1,tags:['background','loop'],
 css:`.s{position:relative;width:100%;height:106px;border-radius:5px;overflow:hidden;
 display:grid;place-items:center;background:#0F1116;border:1px solid #1E222C}
.s::before{content:'';position:absolute;top:-50%;bottom:-50%;width:70px;
 background:linear-gradient(90deg,transparent,rgba(94,234,212,.22),transparent);
 transform:rotate(14deg);animation:sws 4.4s ease-in-out infinite}
.s span{position:relative;z-index:2;font:900 22px/1 Archivo,sans-serif;letter-spacing:-.03em;color:#E9EBF1}
@keyframes sws{0%{left:-20%}100%{left:110%}}`,
 js:`root.innerHTML='<div class="s"><span>'+esc(text)+'</span></div>';`},

{id:'mesh-lines',name:'Mesh Lines',cat:'ambient',eng:'css',txt:1,tags:['background','loop'],
 css:`.s{position:relative;width:100%;height:108px;border-radius:5px;overflow:hidden;
 display:grid;place-items:center;background:#0A0B0E}
.s u{position:absolute;left:0;right:0;height:1px;
 background:linear-gradient(90deg,transparent,#2A6B62,transparent);
 animation:ml 5s ease-in-out infinite}
.s span{position:relative;z-index:2;font:900 22px/1 Archivo,sans-serif;letter-spacing:-.03em;color:#5EEAD4}
@keyframes ml{0%,100%{transform:scaleX(.3);opacity:.25}50%{transform:scaleX(1);opacity:1}}`,
 js:`root.innerHTML='<div class="s">'+[0,1,2,3,4,5,6].map(i=>
 '<u style="top:'+(9+i*13)+'%;animation-delay:'+(i*-.62)+'s"></u>').join('')+
 '<span>'+esc(text)+'</span></div>';`}
];

export const ENGINE_LIB = [

/* ══════════════════════════════════════════════════════════
   ANIME.JS
   ══════════════════════════════════════════════════════════ */
{id:'anime-stagger',name:'Stagger Cascade',cat:'text',eng:'anime',txt:1,tags:['stagger','elastic'],
 css:`.s{display:flex;gap:.04em;font:900 34px/1 Archivo,sans-serif;letter-spacing:-.03em;color:#FF6B9D}
.s i{font-style:normal;display:inline-block;opacity:0}`,
 js:`const{animate,stagger}=eng;
root.innerHTML='<span class="s">'+chars(text)+'</span>';
const a=animate(root.querySelectorAll('.s i'),{opacity:[0,1],y:[-38,0],rotate:[-24,0],scale:[.4,1],
 duration:900,delay:stagger(70),ease:'outElastic(1,.6)',loop:true,loopDelay:900});
onStop(()=>a.pause());`},

{id:'anime-flip',name:'Flip Reveal',cat:'reveal',eng:'anime',txt:1,tags:['3d','stagger'],
 css:`.s{display:flex;gap:.06em;font:900 33px/1 Archivo,sans-serif;letter-spacing:-.02em;perspective:600px}
.s i{font-style:normal;display:inline-block;color:#E9EBF1;transform-style:preserve-3d}`,
 js:`const{animate,stagger}=eng;
root.innerHTML='<span class="s">'+chars(text)+'</span>';
const a=animate(root.querySelectorAll('.s i'),{rotateX:[90,0],opacity:[0,1],duration:800,
 delay:stagger(85),ease:'outBack',loop:true,loopDelay:1100});
onStop(()=>a.pause());`},

{id:'anime-scramble',name:'Scramble Lock',cat:'text',eng:'anime',txt:1,tags:['scramble','loop'],
 css:`.s{font:700 29px/1 'JetBrains Mono',monospace;letter-spacing:.06em;color:#FF6B9D;
 text-shadow:0 0 22px rgba(255,107,157,.3)}`,
 js:`const{animate}=eng;
root.innerHTML='<span class="s"></span>';
const el=root.querySelector('.s'),pool='ABCDEFGHJKLMNPQRSTUVWXYZ0123456789#$%&@',t=[...text];
const o={p:0};let a;
const run=()=>{a=animate(o,{p:[0,1],duration:1500,ease:'outQuad',onUpdate:()=>{
 el.textContent=t.map((c,i)=>c===' '?' ':(o.p*t.length>i+.6?c:pool[(Math.random()*pool.length)|0])).join('');}});};
run();const iv=setInterval(run,3000);
onStop(()=>{clearInterval(iv);a&&a.pause();});`},

{id:'anime-pulse',name:'Pulse Grid',cat:'ambient',eng:'anime',txt:0,tags:['grid','stagger'],
 css:`.s{display:grid;grid-template-columns:repeat(8,1fr);gap:5px;width:190px}
.s b{aspect-ratio:1;background:#FF6B9D;border-radius:2px;opacity:.16}`,
 js:`const{animate,stagger}=eng;
root.innerHTML='<div class="s">'+'<b></b>'.repeat(32)+'</div>';
const a=animate(root.querySelectorAll('.s b'),{opacity:[.12,1],scale:[.6,1],duration:1200,
 delay:stagger(90,{grid:[8,4],from:'center'}),ease:'inOutQuad',loop:true,alternate:true});
onStop(()=>a.pause());`},

{id:'anime-orbit',name:'Orbit Ring',cat:'ambient',eng:'anime',txt:1,tags:['loop','transform'],
 css:`.s{position:relative;width:150px;height:150px;display:grid;place-items:center}
.s .c{font:700 13px/1 'JetBrains Mono',monospace;color:#FF6B9D;letter-spacing:.1em;z-index:2}
.s b{position:absolute;width:7px;height:7px;border-radius:50%;background:#FF6B9D;top:50%;left:50%;margin:-3.5px}`,
 js:`const{animate}=eng;
root.innerHTML='<div class="s"><span class="c">'+esc(text)+'</span>'+'<b></b>'.repeat(9)+'</div>';
const A=[];
root.querySelectorAll('.s b').forEach((el,i)=>{
 const a=(i/9)*Math.PI*2,r=60;
 el.style.transform='translate('+Math.cos(a)*r+'px,'+Math.sin(a)*r+'px)';
 A.push(animate(el,{scale:[.4,1.5],opacity:[.25,1],duration:1400,delay:i*120,
  ease:'inOutSine',loop:true,alternate:true}));});
onStop(()=>A.forEach(a=>a.pause()));`},

{id:'anime-bars',name:'Equalizer Bars',cat:'loader',eng:'anime',txt:0,tags:['stagger','loop'],
 css:`.s{display:flex;align-items:flex-end;gap:5px;height:70px}
.s b{width:8px;background:#FF6B9D;border-radius:2px;height:12px}`,
 js:`const{animate,stagger}=eng;
root.innerHTML='<div class="s">'+'<b></b>'.repeat(12)+'</div>';
const a=animate(root.querySelectorAll('.s b'),{height:[12,64],duration:700,
 delay:stagger(90,{from:'center'}),ease:'inOutSine',loop:true,alternate:true});
onStop(()=>a.pause());`},

{id:'anime-svg',name:'SVG Line Draw',cat:'reveal',eng:'anime',txt:0,tags:['svg','stroke'],
 css:`.s svg{width:140px;height:140px}
.s path,.s circle{fill:none;stroke:#FF6B9D;stroke-width:2.5;stroke-linecap:round}`,
 js:`const{animate}=eng;
root.innerHTML='<div class="s"><svg viewBox="0 0 100 100">'+
 '<circle cx="50" cy="50" r="38"/><path d="M32 52 L45 65 L70 38"/></svg></div>';
const A=[];
root.querySelectorAll('.s circle,.s path').forEach((el,i)=>{
 const L=el.getTotalLength();
 el.style.strokeDasharray=L;el.style.strokeDashoffset=L;
 A.push(animate(el,{strokeDashoffset:[L,0],duration:1300,delay:i*450,
  ease:'inOutQuart',loop:true,loopDelay:900}));});
onStop(()=>A.forEach(a=>a.pause()));`},

{id:'anime-pop',name:'Elastic Pop',cat:'control',eng:'anime',txt:1,tags:['button','elastic'],
 css:`.s{border:0;cursor:pointer;padding:14px 30px;border-radius:6px;background:#FF6B9D;color:#0A0B0E;
 font:700 13px/1 'JetBrains Mono',monospace;letter-spacing:.1em}`,
 js:`const{animate}=eng;
root.innerHTML='<button class="s">'+esc(text)+'</button>';
const b=root.querySelector('.s');
b.addEventListener('click',()=>animate(b,{scale:[1,1.28,1],rotate:[0,-5,0],duration:750,ease:'outElastic(1,.4)'}));
animate(b,{scale:[.7,1],opacity:[0,1],duration:800,ease:'outBack'});`},

{id:'anime-cube',name:'3D Cube Spin',cat:'three',eng:'anime',txt:1,tags:['3d','css3d'],
 css:`.w{perspective:600px;width:100px;height:100px}
.s{position:relative;width:100px;height:100px;transform-style:preserve-3d}
.s b{position:absolute;inset:0;border:1px solid #FF6B9D;background:rgba(255,107,157,.09);
 display:grid;place-items:center;font:700 12px/1 'JetBrains Mono',monospace;color:#FF6B9D;
 letter-spacing:.06em;backface-visibility:visible}`,
 js:`const{animate}=eng;
const T=esc(text).slice(0,6);
const f=[[0,0,50],[0,180,50],[0,90,50],[0,-90,50],[90,0,50],[-90,0,50]];
root.innerHTML='<div class="w"><div class="s">'+f.map(v=>
 '<b style="transform:rotateX('+v[0]+'deg) rotateY('+v[1]+'deg) translateZ('+v[2]+'px)">'+T+'</b>').join('')+
 '</div></div>';
const a=animate(root.querySelector('.s'),{rotateX:[0,360],rotateY:[0,360],
 duration:9000,ease:'linear',loop:true});
onStop(()=>a.pause());`},

{id:'anime-carousel',name:'3D Carousel',cat:'three',eng:'anime',txt:1,tags:['3d','css3d'],
 css:`.w{perspective:800px;width:190px;height:110px}
.s{position:relative;width:100%;height:100%;transform-style:preserve-3d}
.s b{position:absolute;left:50%;top:50%;width:76px;height:56px;margin:-28px -38px;
 border-radius:5px;background:#141821;border:1px solid #6B3048;display:grid;place-items:center;
 font:700 11px/1 'JetBrains Mono',monospace;color:#FF6B9D}`,
 js:`const{animate}=eng;
const N=6,T=esc(text).slice(0,7);
root.innerHTML='<div class="w"><div class="s">'+Array.from({length:N},(_,i)=>
 '<b style="transform:rotateY('+(i*360/N)+'deg) translateZ(84px)">'+T+'</b>').join('')+'</div></div>';
const a=animate(root.querySelector('.s'),{rotateY:[0,360],duration:11000,ease:'linear',loop:true});
onStop(()=>a.pause());`},

{id:'anime-cylinder',name:'Cylinder Text',cat:'three',eng:'anime',txt:1,tags:['3d','stagger'],
 css:`.w{perspective:520px;width:210px;height:100px;display:grid;place-items:center}
.s{position:relative;transform-style:preserve-3d;display:flex}
.s i{font-style:normal;display:inline-block;font:900 27px/1 Archivo,sans-serif;
 letter-spacing:-.02em;color:#FF6B9D;transform-origin:50% 50% -60px}`,
 js:`const{animate,stagger}=eng;
root.innerHTML='<div class="w"><div class="s">'+chars(text)+'</div></div>';
const L=root.querySelectorAll('.s i');
L.forEach((el,i)=>{el.style.transform='rotateY('+((i-(L.length-1)/2)*17)+'deg)';});
const a=animate(L,{opacity:[0,1],translateZ:[-70,0],duration:900,
 delay:stagger(60),ease:'outCubic',loop:true,loopDelay:1200});
onStop(()=>a.pause());`},

{id:'anime-morph-grid',name:'Morph Grid',cat:'ambient',eng:'anime',txt:0,tags:['grid','stagger'],
 css:`.s{display:grid;grid-template-columns:repeat(6,1fr);gap:6px;width:170px}
.s b{aspect-ratio:1;background:#FF6B9D;opacity:.7}`,
 js:`const{animate,stagger}=eng;
root.innerHTML='<div class="s">'+'<b></b>'.repeat(36)+'</div>';
const a=animate(root.querySelectorAll('.s b'),{
 borderRadius:['2px','50%'],rotate:[0,180],scale:[1,.55],
 duration:1600,delay:stagger(60,{grid:[6,6],from:'center'}),
 ease:'inOutQuad',loop:true,alternate:true});
onStop(()=>a.pause());`},

/* ══════════════════════════════════════════════════════════
   GSAP
   ══════════════════════════════════════════════════════════ */
{id:'gsap-bounce',name:'Elastic Bounce',cat:'text',eng:'gsap',txt:1,tags:['timeline','bounce'],
 css:`.s{display:flex;gap:.03em;font:900 35px/1 Archivo,sans-serif;letter-spacing:-.03em;color:#8BE84A}
.s i{font-style:normal;display:inline-block}`,
 js:`const gsap=eng;
root.innerHTML='<span class="s">'+chars(text)+'</span>';
const L=root.querySelectorAll('.s i');
const tl=gsap.timeline({repeat:-1,repeatDelay:.7})
 .from(L,{y:-70,opacity:0,duration:1.1,ease:'bounce.out',stagger:.07})
 .to(L,{y:0,duration:.3,ease:'power2.out'});
onStop(()=>tl.kill());`},

{id:'gsap-swing',name:'Pendulum Swing',cat:'text',eng:'gsap',txt:1,tags:['physics','stagger'],
 css:`.s{display:flex;gap:.02em;font:900 33px/1 Archivo,sans-serif;letter-spacing:-.03em;color:#E9EBF1}
.s i{font-style:normal;display:inline-block;transform-origin:50% -40px}`,
 js:`const gsap=eng;
root.innerHTML='<span class="s">'+chars(text)+'</span>';
const L=root.querySelectorAll('.s i');
const a=gsap.from(L,{scale:0,opacity:0,duration:.8,ease:'back.out(2)',stagger:.06});
const b=gsap.to(L,{rotation:16,duration:1.4,ease:'sine.inOut',
 stagger:{each:.09,from:'start'},repeat:-1,yoyo:true});
onStop(()=>{a.kill();b.kill();});`},

{id:'gsap-counter',name:'Roll Counter',cat:'loader',eng:'gsap',txt:1,tags:['numeric','loop'],
 css:`.s{display:flex;flex-direction:column;align-items:center;gap:9px}
.s .n{font:700 36px/1 'JetBrains Mono',monospace;color:#8BE84A;letter-spacing:.02em}
.s .l{font:400 9.5px/1 'JetBrains Mono',monospace;letter-spacing:.18em;text-transform:uppercase;color:#565C6E}`,
 js:`const gsap=eng;
root.innerHTML='<div class="s"><span class="n">0</span><span class="l">'+esc(text)+'</span></div>';
const n=root.querySelector('.n'),o={v:0};
const t=gsap.to(o,{v:9847,duration:2.4,ease:'power2.out',repeat:-1,repeatDelay:1.4,
 onUpdate:()=>n.textContent=Math.round(o.v).toLocaleString()});
onStop(()=>t.kill());`},

{id:'gsap-burst',name:'Radial Burst',cat:'ambient',eng:'gsap',txt:1,tags:['loop','transform'],
 css:`.s{position:relative;width:180px;height:130px;display:grid;place-items:center}
.s .c{font:800 17px/1 Archivo,sans-serif;color:#E9EBF1;letter-spacing:-.02em;z-index:2}
.s b{position:absolute;width:3px;height:16px;border-radius:2px;background:#8BE84A;
 top:50%;left:50%;margin:-8px -1.5px}`,
 js:`const gsap=eng;
root.innerHTML='<div class="s"><span class="c">'+esc(text)+'</span>'+'<b></b>'.repeat(16)+'</div>';
const T=[];
root.querySelectorAll('.s b').forEach((el,i)=>{
 gsap.set(el,{rotation:(i/16)*360,transformOrigin:'50% 50%'});
 T.push(gsap.fromTo(el,{y:0,opacity:0,scaleY:.3},
  {y:-48,opacity:1,scaleY:1,duration:1.1,ease:'power3.out',repeat:-1,delay:i*.045,repeatDelay:.5}));});
onStop(()=>T.forEach(t=>t.kill()));`},

{id:'gsap-stack',name:'Card Stack',cat:'surface',eng:'gsap',txt:1,tags:['stagger','3d'],
 css:`.s{position:relative;width:150px;height:104px}
.s b{position:absolute;inset:0;border-radius:7px;background:linear-gradient(150deg,#1D2430,#0F1116);
 border:1px solid #476B22;display:grid;place-items:center;
 font:700 15px/1 Archivo,sans-serif;color:#8BE84A;letter-spacing:-.02em}`,
 js:`const gsap=eng;
root.innerHTML='<div class="s">'+Array.from({length:4},()=>'<b>'+esc(text)+'</b>').join('')+'</div>';
const c=[...root.querySelectorAll('.s b')].reverse();
const tl=gsap.timeline({repeat:-1,repeatDelay:1})
 .fromTo(c,{y:0,scale:1,opacity:0},{opacity:1,duration:.3,stagger:.08})
 .to(c,{y:i=>-i*13,scale:i=>1-i*.06,duration:.9,ease:'power3.out',stagger:.07},'<')
 .to(c,{y:0,scale:1,duration:.7,ease:'power2.inOut',stagger:.05},'+=.9');
onStop(()=>tl.kill());`},

{id:'gsap-path',name:'Path Trace',cat:'reveal',eng:'gsap',txt:0,tags:['svg','motion'],
 css:`.s{position:relative;width:170px;height:110px}
.s svg{width:100%;height:100%}
.s path{fill:none;stroke:#1E222C;stroke-width:2}
.s .lit{stroke:#8BE84A;stroke-width:2.5;stroke-linecap:round}
.s b{position:absolute;width:11px;height:11px;border-radius:50%;background:#8BE84A;
 box-shadow:0 0 16px #8BE84A;top:0;left:0;margin:-5.5px}`,
 js:`const gsap=eng;
const d='M10 90 C 45 10, 110 10, 160 70';
root.innerHTML='<div class="s"><svg viewBox="0 0 170 110">'+
 '<path d="'+d+'"/><path class="lit" d="'+d+'"/></svg><b></b></div>';
const lit=root.querySelector('.lit'),dot=root.querySelector('b'),L=lit.getTotalLength();
gsap.set(lit,{strokeDasharray:L,strokeDashoffset:L});
const a=gsap.to(lit,{strokeDashoffset:0,duration:2,ease:'power2.inOut',repeat:-1,repeatDelay:.7});
const o={p:0};
const b=gsap.to(o,{p:1,duration:2,ease:'power2.inOut',repeat:-1,repeatDelay:.7,
 onUpdate:()=>{const pt=lit.getPointAtLength(o.p*L);
  dot.style.transform='translate('+pt.x+'px,'+pt.y+'px)';}});
onStop(()=>{a.kill();b.kill();});`},

{id:'gsap-split',name:'Word Shuffle',cat:'text',eng:'gsap',txt:1,tags:['stagger','random'],
 css:`.s{display:flex;gap:.03em;font:900 32px/1 Archivo,sans-serif;letter-spacing:-.03em;color:#8BE84A}
.s i{font-style:normal;display:inline-block}`,
 js:`const gsap=eng;
root.innerHTML='<span class="s">'+chars(text)+'</span>';
const t=gsap.fromTo(root.querySelectorAll('.s i'),
 {y:()=>gsap.utils.random(-60,60),x:()=>gsap.utils.random(-40,40),
  opacity:0,rotation:()=>gsap.utils.random(-90,90)},
 {y:0,x:0,opacity:1,rotation:0,duration:1.2,ease:'power4.out',
  stagger:{each:.05,from:'random'},repeat:-1,repeatDelay:1.6});
onStop(()=>t.kill());`},

{id:'gsap-magnetic',name:'Magnetic Pull',cat:'control',eng:'gsap',txt:1,tags:['pointer','button'],
 css:`.s{border:1px solid #476B22;background:#141821;color:#8BE84A;cursor:pointer;
 padding:14px 30px;border-radius:100px;font:600 13px/1 'JetBrains Mono',monospace;
 letter-spacing:.09em;will-change:transform}`,
 js:`const gsap=eng;
root.innerHTML='<button class="s">'+esc(text)+'</button>';
const el=root.querySelector('.s');
const mv=e=>{const b=el.getBoundingClientRect();
 const dx=e.clientX-(b.left+b.width/2),dy=e.clientY-(b.top+b.height/2);
 if(Math.hypot(dx,dy)<120)gsap.to(el,{x:dx*.34,y:dy*.34,duration:.4,ease:'power3.out'});
 else gsap.to(el,{x:0,y:0,duration:.5,ease:'elastic.out(1,.4)'});};
const lv=()=>gsap.to(el,{x:0,y:0,duration:.6,ease:'elastic.out(1,.35)'});
root.addEventListener('pointermove',mv);root.addEventListener('pointerleave',lv);
onStop(()=>{root.removeEventListener('pointermove',mv);root.removeEventListener('pointerleave',lv);
 gsap.killTweensOf(el);});`},

{id:'gsap-marquee',name:'Seamless Loop',cat:'scroll',eng:'gsap',txt:1,tags:['loop','scroll'],
 css:`.s{width:100%;overflow:hidden;
 -webkit-mask:linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent);
 mask:linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)}
.s .t{display:flex;gap:1.3em;white-space:nowrap;width:max-content;
 font:900 27px/1 Archivo,sans-serif;letter-spacing:-.03em;color:#8BE84A}`,
 js:`const gsap=eng;
const o=Array.from({length:6},()=>'<span>'+esc(text)+'</span>').join('');
root.innerHTML='<div class="s"><div class="t">'+o+o+'</div></div>';
const t=root.querySelector('.t');
const tw=gsap.to(t,{xPercent:-50,duration:11,ease:'none',repeat:-1});
root.addEventListener('pointerenter',()=>tw.timeScale(.18));
root.addEventListener('pointerleave',()=>tw.timeScale(1));
onStop(()=>tw.kill());`},

{id:'gsap-wave-dots',name:'Wave Dots',cat:'loader',eng:'gsap',txt:0,tags:['stagger','loop'],
 css:`.s{display:grid;grid-template-columns:repeat(9,1fr);gap:7px;width:180px}
.s b{aspect-ratio:1;border-radius:50%;background:#8BE84A}`,
 js:`const gsap=eng;
root.innerHTML='<div class="s">'+'<b></b>'.repeat(27)+'</div>';
const t=gsap.to(root.querySelectorAll('.s b'),{
 scale:.25,opacity:.2,duration:.85,ease:'sine.inOut',repeat:-1,yoyo:true,
 stagger:{each:.055,grid:[3,9],from:'edges'}});
onStop(()=>t.kill());`},

/* ══════════════════════════════════════════════════════════
   MOTION
   ══════════════════════════════════════════════════════════ */
{id:'motion-spring',name:'Spring Settle',cat:'text',eng:'motion',txt:1,tags:['spring','stagger'],
 css:`.s{display:flex;gap:.03em;font:900 33px/1 Archivo,sans-serif;letter-spacing:-.03em;color:#8B7CFF}
.s i{font-style:normal;display:inline-block}`,
 js:`const{animate,stagger}=eng;
root.innerHTML='<span class="s">'+chars(text)+'</span>';
const L=root.querySelectorAll('.s i');
const run=()=>animate(L,{y:[46,0],opacity:[0,1],scale:[.7,1]},
 {type:'spring',stiffness:220,damping:12,delay:stagger(.06)});
run();const iv=setInterval(run,2600);
onStop(()=>clearInterval(iv));`},

{id:'motion-lift',name:'Lift Stack',cat:'surface',eng:'motion',txt:1,tags:['hover','spring'],
 css:`.s{display:flex;gap:9px}
.s b{width:50px;height:66px;border-radius:5px;background:#141821;border:1px solid #2A3040;
 display:grid;place-items:center;cursor:pointer;font:700 15px/1 Archivo,sans-serif;color:#8B7CFF}`,
 js:`const{animate}=eng;
const cs=(text.replace(/\s/g,'').slice(0,5))||'LOK';
root.innerHTML='<div class="s">'+[...cs].map(c=>'<b>'+esc(c)+'</b>').join('')+'</div>';
root.querySelectorAll('.s b').forEach(el=>{
 el.addEventListener('pointerenter',()=>animate(el,{y:-14,scale:1.1},{type:'spring',stiffness:400,damping:15}));
 el.addEventListener('pointerleave',()=>animate(el,{y:0,scale:1},{type:'spring',stiffness:300,damping:20}));});
animate(root.querySelectorAll('.s b'),{y:[30,0],opacity:[0,1]},
 {delay:i=>i*.07,type:'spring',stiffness:260,damping:18});`},

{id:'motion-morph',name:'Morph Pill',cat:'control',eng:'motion',txt:1,tags:['spring','toggle'],
 css:`.s{display:grid;place-items:center;gap:11px}
.s .p{padding:13px 26px;border-radius:100px;background:#8B7CFF;color:#0A0B0E;
 font:700 13px/1 'JetBrains Mono',monospace;letter-spacing:.09em;cursor:pointer;user-select:none}
.s .h{font:400 9.5px/1 'JetBrains Mono',monospace;color:#565C6E;letter-spacing:.14em;text-transform:uppercase}`,
 js:`const{animate}=eng;
root.innerHTML='<div class="s"><div class="p">'+esc(text)+'</div><span class="h">tap me</span></div>';
const p=root.querySelector('.p');let on=false;
p.addEventListener('click',()=>{on=!on;
 animate(p,on?{borderRadius:'6px',scale:1.16,backgroundColor:'#5EEAD4'}
             :{borderRadius:'100px',scale:1,backgroundColor:'#8B7CFF'},
  {type:'spring',stiffness:380,damping:16});});
animate(p,{scale:[.85,1],opacity:[0,1]},{type:'spring',stiffness:300,damping:18});`},

{id:'motion-trail',name:'Trail Track',cat:'scroll',eng:'motion',txt:1,tags:['loop','stagger'],
 css:`.s{position:relative;width:210px;height:78px;display:grid;place-items:center}
.s .t{font:700 13px/1 'JetBrains Mono',monospace;color:#8B7CFF;letter-spacing:.12em;z-index:2}
.s b{position:absolute;left:0;top:50%;width:9px;height:9px;border-radius:50%;background:#8B7CFF;margin-top:-4.5px}`,
 js:`const{animate,stagger}=eng;
root.innerHTML='<div class="s"><span class="t">'+esc(text)+'</span>'+'<b></b>'.repeat(6)+'</div>';
const a=animate(root.querySelectorAll('.s b'),
 {x:[0,198,0],opacity:[.2,1,.2],scale:[.6,1.2,.6]},
 {duration:2.6,repeat:Infinity,ease:'easeInOut',delay:stagger(.11)});
onStop(()=>a.stop&&a.stop());`},

{id:'motion-bars',name:'Spring Bars',cat:'loader',eng:'motion',txt:0,tags:['spring','stagger'],
 css:`.s{display:flex;align-items:flex-end;gap:6px;height:70px}
.s b{width:10px;background:#8B7CFF;border-radius:3px;height:14px}`,
 js:`const{animate,stagger}=eng;
root.innerHTML='<div class="s">'+'<b></b>'.repeat(9)+'</div>';
const a=animate(root.querySelectorAll('.s b'),{height:['14px','62px','14px']},
 {duration:1.5,repeat:Infinity,ease:'easeInOut',delay:stagger(.09,{from:'center'})});
onStop(()=>a.stop&&a.stop());`},

{id:'motion-reveal',name:'Scroll Reveal',cat:'reveal',eng:'motion',txt:1,tags:['inView','scroll'],
 css:`.s{height:112px;overflow-y:auto;width:100%;border:1px solid #1E222C;border-radius:5px;
 padding:11px;scrollbar-width:thin}
.s .sp{height:74px}
.s b{display:block;padding:11px 13px;margin-bottom:9px;border-radius:4px;background:#141821;
 border:1px solid #2A3040;font:600 13px/1 Archivo,sans-serif;color:#8B7CFF;opacity:0}
.s .h{font:400 9px/1 'JetBrains Mono',monospace;color:#565C6E;letter-spacing:.14em;
 text-transform:uppercase;text-align:center;padding-bottom:8px}`,
 js:`const{inView,animate}=eng;
root.innerHTML='<div class="s"><div class="h">scroll \u2193</div>'+
 Array.from({length:5},(_,i)=>'<b>'+esc(text)+' '+(i+1)+'</b>').join('')+'<div class="sp"></div></div>';
const S=[];
root.querySelectorAll('.s b').forEach(el=>{
 S.push(inView(el,()=>{animate(el,{opacity:[0,1],x:[-26,0]},{duration:.55});},{amount:.4}));});
onStop(()=>S.forEach(s=>typeof s==='function'&&s()));`},

{id:'motion-drag',name:'Drag Spring',cat:'control',eng:'motion',txt:1,tags:['pointer','spring'],
 css:`.s{position:relative;width:190px;height:96px;display:grid;place-items:center;
 border:1px dashed #2A3040;border-radius:6px}
.s .d{padding:12px 22px;border-radius:6px;background:#8B7CFF;color:#0A0B0E;cursor:grab;
 font:700 12px/1 'JetBrains Mono',monospace;letter-spacing:.08em;user-select:none;touch-action:none}
.s .d:active{cursor:grabbing}`,
 js:`const{animate}=eng;
root.innerHTML='<div class="s"><div class="d">'+esc(text)+'</div></div>';
const d=root.querySelector('.d');let on=false,sx=0,sy=0;
const dn=e=>{on=true;sx=e.clientX;sy=e.clientY;d.setPointerCapture(e.pointerId);};
const mv=e=>{if(!on)return;
 d.style.transform='translate('+(e.clientX-sx)+'px,'+(e.clientY-sy)+'px)';};
const up=()=>{if(!on)return;on=false;
 animate(d,{x:0,y:0},{type:'spring',stiffness:300,damping:14});};
d.addEventListener('pointerdown',dn);d.addEventListener('pointermove',mv);
d.addEventListener('pointerup',up);d.addEventListener('pointercancel',up);
onStop(()=>{d.removeEventListener('pointerdown',dn);d.removeEventListener('pointermove',mv);
 d.removeEventListener('pointerup',up);d.removeEventListener('pointercancel',up);});`},

{id:'motion-count',name:'Spring Counter',cat:'loader',eng:'motion',txt:1,tags:['numeric','spring'],
 css:`.s{display:grid;place-items:center;gap:8px}
.s .n{font:700 34px/1 'JetBrains Mono',monospace;color:#8B7CFF}
.s .l{font:400 9.5px/1 'JetBrains Mono',monospace;letter-spacing:.17em;
 text-transform:uppercase;color:#565C6E}`,
 js:`const{animate}=eng;
root.innerHTML='<div class="s"><span class="n">0</span><span class="l">'+esc(text)+'</span></div>';
const n=root.querySelector('.n');
const run=()=>animate(0,4820,{duration:2,ease:'easeOut',
 onUpdate:v=>n.textContent=Math.round(v).toLocaleString()});
run();const iv=setInterval(run,3600);
onStop(()=>clearInterval(iv));`},

{id:'motion-flip-list',name:'Reorder Flip',cat:'reveal',eng:'motion',txt:1,tags:['layout','spring'],
 css:`.s{display:grid;gap:7px;width:170px;cursor:pointer}
.s b{padding:10px 13px;border-radius:5px;background:#141821;border:1px solid #443C7A;
 font:600 12px/1 'JetBrains Mono',monospace;color:#8B7CFF;letter-spacing:.06em}
.s .h{font:400 9px/1 'JetBrains Mono',monospace;color:#565C6E;letter-spacing:.14em;
 text-transform:uppercase;text-align:center}`,
 js:`const{animate}=eng;
const T=esc(text).slice(0,10);
let order=[0,1,2];
const draw=()=>{root.innerHTML='<div class="s">'+order.map(i=>
 '<b data-k="'+i+'">'+T+' '+(i+1)+'</b>').join('')+'<span class="h">tap to shuffle</span></div>';
 root.querySelector('.s').onclick=shuffle;};
const shuffle=()=>{
 const pre={};root.querySelectorAll('.s b').forEach(el=>pre[el.dataset.k]=el.getBoundingClientRect().top);
 order=[order[2],order[0],order[1]];draw();
 root.querySelectorAll('.s b').forEach(el=>{
  const d=pre[el.dataset.k]-el.getBoundingClientRect().top;
  if(d)animate(el,{y:[d,0]},{type:'spring',stiffness:400,damping:26});});};
draw();`},

/* ══════════════════════════════════════════════════════════
   CANVAS / WEBGL
   ══════════════════════════════════════════════════════════ */
{id:'gl-particles',name:'Particle Field',cat:'shader',eng:'gl',txt:0,tags:['canvas','network'],
 css:`.s{width:100%;height:130px;border-radius:5px;overflow:hidden;background:#0A0B0E}
.s canvas{display:block;width:100%;height:100%}`,
 js:`root.innerHTML='<div class="s"><canvas></canvas></div>';
const cv=root.querySelector('canvas'),ctx=cv.getContext('2d');
const r=cv.getBoundingClientRect();
cv.width=Math.max(1,r.width*DPR);cv.height=Math.max(1,r.height*DPR);
const N=Math.min(40,Math.round(r.width/9));
const P=Array.from({length:N},()=>({x:Math.random()*cv.width,y:Math.random()*cv.height,
 vx:(Math.random()-.5)*.45*DPR,vy:(Math.random()-.5)*.45*DPR}));
const LINK=72*DPR;let raf;
const loop=()=>{
 ctx.clearRect(0,0,cv.width,cv.height);
 for(const p of P){p.x+=p.vx;p.y+=p.vy;
  if(p.x<0||p.x>cv.width)p.vx*=-1;if(p.y<0||p.y>cv.height)p.vy*=-1;}
 ctx.lineWidth=DPR*.6;
 for(let i=0;i<N;i++)for(let j=i+1;j<N;j++){
  const dx=P[i].x-P[j].x,dy=P[i].y-P[j].y,d=Math.hypot(dx,dy);
  if(d<LINK){ctx.strokeStyle='rgba(94,234,212,'+(1-d/LINK)*.32+')';
   ctx.beginPath();ctx.moveTo(P[i].x,P[i].y);ctx.lineTo(P[j].x,P[j].y);ctx.stroke();}}
 ctx.fillStyle='#5EEAD4';
 for(const p of P){ctx.beginPath();ctx.arc(p.x,p.y,1.4*DPR,0,7);ctx.fill();}
 raf=requestAnimationFrame(loop);};
loop();onStop(()=>cancelAnimationFrame(raf));`},

{id:'gl-wave',name:'Wave Shader',cat:'shader',eng:'gl',txt:0,tags:['webgl','glsl'],
 css:`.s{width:100%;height:130px;border-radius:5px;overflow:hidden;background:#0A0B0E}
.s canvas{display:block;width:100%;height:100%}
.s .f{display:grid;place-items:center;height:100%;font:400 10px/1.6 'JetBrains Mono',monospace;
 color:#F0B849;text-align:center;padding:14px}`,
 js:`root.innerHTML='<div class="s"><canvas></canvas></div>';
const cv=root.querySelector('canvas');
const gl=cv.getContext('webgl')||cv.getContext('experimental-webgl');
if(!gl){root.querySelector('.s').innerHTML='<div class="f">WebGL unavailable<br>on this device</div>';}
else{
 const r=cv.getBoundingClientRect();cv.width=Math.max(1,r.width);cv.height=Math.max(1,r.height);
 const vs='attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}';
 const fs='precision mediump float;uniform vec2 R;uniform float T;'+
  'void main(){vec2 uv=gl_FragCoord.xy/R;'+
  'float w=sin(uv.x*11.+T*1.6)*.06+sin(uv.x*6.-T*1.1)*.05;'+
  'float d=abs(uv.y-.5-w);float g=smoothstep(.16,0.,d);'+
  'vec3 c=mix(vec3(.04,.04,.055),vec3(.37,.92,.83),g);'+
  'c+=vec3(.55,.49,1.)*smoothstep(.045,0.,d)*.6;gl_FragColor=vec4(c,1.);}';
 const sh=(t,s)=>{const o=gl.createShader(t);gl.shaderSource(o,s);gl.compileShader(o);return o;};
 const pr=gl.createProgram();
 gl.attachShader(pr,sh(gl.VERTEX_SHADER,vs));gl.attachShader(pr,sh(gl.FRAGMENT_SHADER,fs));
 gl.linkProgram(pr);gl.useProgram(pr);
 const b=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,b);
 gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),gl.STATIC_DRAW);
 const lp=gl.getAttribLocation(pr,'p');
 gl.enableVertexAttribArray(lp);gl.vertexAttribPointer(lp,2,gl.FLOAT,false,0,0);
 const uR=gl.getUniformLocation(pr,'R'),uT=gl.getUniformLocation(pr,'T');
 let raf,t0=performance.now();
 const loop=()=>{gl.viewport(0,0,cv.width,cv.height);
  gl.uniform2f(uR,cv.width,cv.height);gl.uniform1f(uT,(performance.now()-t0)/1000);
  gl.drawArrays(gl.TRIANGLES,0,3);raf=requestAnimationFrame(loop);};
 loop();onStop(()=>cancelAnimationFrame(raf));}`},

{id:'gl-plasma',name:'Plasma Shader',cat:'shader',eng:'gl',txt:0,tags:['webgl','glsl'],
 css:`.s{width:100%;height:130px;border-radius:5px;overflow:hidden;background:#0A0B0E}
.s canvas{display:block;width:100%;height:100%}
.s .f{display:grid;place-items:center;height:100%;font:400 10px/1.6 'JetBrains Mono',monospace;
 color:#F0B849;text-align:center;padding:14px}`,
 js:`root.innerHTML='<div class="s"><canvas></canvas></div>';
const cv=root.querySelector('canvas');
const gl=cv.getContext('webgl')||cv.getContext('experimental-webgl');
if(!gl){root.querySelector('.s').innerHTML='<div class="f">WebGL unavailable</div>';}
else{
 const r=cv.getBoundingClientRect();cv.width=Math.max(1,r.width);cv.height=Math.max(1,r.height);
 const vs='attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}';
 const fs='precision mediump float;uniform vec2 R;uniform float T;'+
  'void main(){vec2 uv=(gl_FragCoord.xy-0.5*R)/R.y;'+
  'float v=sin(uv.x*7.+T)+sin(uv.y*7.+T*1.3)+'+
  'sin((uv.x+uv.y)*6.+T*.8)+sin(length(uv)*11.-T*1.6);'+
  'v*=0.25;'+
  'vec3 c=vec3(.37,.92,.83)*(.5+.5*sin(v*3.14))+'+
  'vec3(.55,.49,1.)*(.5+.5*cos(v*3.14+1.6));'+
  'c*=.55;gl_FragColor=vec4(c,1.);}';
 const sh=(t,s)=>{const o=gl.createShader(t);gl.shaderSource(o,s);gl.compileShader(o);return o;};
 const pr=gl.createProgram();
 gl.attachShader(pr,sh(gl.VERTEX_SHADER,vs));gl.attachShader(pr,sh(gl.FRAGMENT_SHADER,fs));
 gl.linkProgram(pr);gl.useProgram(pr);
 const b=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,b);
 gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),gl.STATIC_DRAW);
 const lp=gl.getAttribLocation(pr,'p');
 gl.enableVertexAttribArray(lp);gl.vertexAttribPointer(lp,2,gl.FLOAT,false,0,0);
 const uR=gl.getUniformLocation(pr,'R'),uT=gl.getUniformLocation(pr,'T');
 let raf,t0=performance.now();
 const loop=()=>{gl.viewport(0,0,cv.width,cv.height);
  gl.uniform2f(uR,cv.width,cv.height);gl.uniform1f(uT,(performance.now()-t0)/1000);
  gl.drawArrays(gl.TRIANGLES,0,3);raf=requestAnimationFrame(loop);};
 loop();onStop(()=>cancelAnimationFrame(raf));}`},

{id:'gl-tunnel',name:'Tunnel Shader',cat:'shader',eng:'gl',txt:0,tags:['webgl','glsl'],
 css:`.s{width:100%;height:130px;border-radius:5px;overflow:hidden;background:#0A0B0E}
.s canvas{display:block;width:100%;height:100%}
.s .f{display:grid;place-items:center;height:100%;font:400 10px/1.6 'JetBrains Mono',monospace;
 color:#F0B849;text-align:center;padding:14px}`,
 js:`root.innerHTML='<div class="s"><canvas></canvas></div>';
const cv=root.querySelector('canvas');
const gl=cv.getContext('webgl')||cv.getContext('experimental-webgl');
if(!gl){root.querySelector('.s').innerHTML='<div class="f">WebGL unavailable</div>';}
else{
 const r=cv.getBoundingClientRect();cv.width=Math.max(1,r.width);cv.height=Math.max(1,r.height);
 const vs='attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}';
 const fs='precision mediump float;uniform vec2 R;uniform float T;'+
  'void main(){vec2 uv=(gl_FragCoord.xy-0.5*R)/R.y;'+
  'float a=atan(uv.y,uv.x),d=length(uv);'+
  'float v=sin(a*6.+T*1.2)*.5+.5;'+
  'float rings=sin(1.0/max(d,.04)*2.2-T*2.4)*.5+.5;'+
  'float fog=smoothstep(.0,.55,d);'+
  'vec3 c=mix(vec3(.37,.92,.83),vec3(.55,.49,1.),v)*rings*fog;'+
  'gl_FragColor=vec4(c*.85,1.);}';
 const sh=(t,s)=>{const o=gl.createShader(t);gl.shaderSource(o,s);gl.compileShader(o);return o;};
 const pr=gl.createProgram();
 gl.attachShader(pr,sh(gl.VERTEX_SHADER,vs));gl.attachShader(pr,sh(gl.FRAGMENT_SHADER,fs));
 gl.linkProgram(pr);gl.useProgram(pr);
 const b=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,b);
 gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),gl.STATIC_DRAW);
 const lp=gl.getAttribLocation(pr,'p');
 gl.enableVertexAttribArray(lp);gl.vertexAttribPointer(lp,2,gl.FLOAT,false,0,0);
 const uR=gl.getUniformLocation(pr,'R'),uT=gl.getUniformLocation(pr,'T');
 let raf,t0=performance.now();
 const loop=()=>{gl.viewport(0,0,cv.width,cv.height);
  gl.uniform2f(uR,cv.width,cv.height);gl.uniform1f(uT,(performance.now()-t0)/1000);
  gl.drawArrays(gl.TRIANGLES,0,3);raf=requestAnimationFrame(loop);};
 loop();onStop(()=>cancelAnimationFrame(raf));}`},

{id:'gl-matrix',name:'Code Rain',cat:'shader',eng:'gl',txt:1,tags:['canvas','loop'],
 css:`.s{width:100%;height:130px;border-radius:5px;overflow:hidden;background:#0A0B0E;position:relative}
.s canvas{display:block;width:100%;height:100%}
.s span{position:absolute;inset:0;display:grid;place-items:center;pointer-events:none;
 font:900 22px/1 Archivo,sans-serif;letter-spacing:-.02em;color:#E9EBF1;
 text-shadow:0 0 18px #0A0B0E,0 0 30px #0A0B0E}`,
 js:`root.innerHTML='<div class="s"><canvas></canvas><span>'+esc(text)+'</span></div>';
const cv=root.querySelector('canvas'),ctx=cv.getContext('2d');
const r=cv.getBoundingClientRect();cv.width=Math.max(1,r.width);cv.height=Math.max(1,r.height);
const cw=13,cols=Math.ceil(cv.width/cw),drops=Array.from({length:cols},()=>Math.random()*-30);
const P='ABCDEFGHJKLMNPQRSTUVWXYZ0123456789';
let raf,acc=0,last=performance.now();
ctx.font='12px monospace';
const loop=()=>{
 const now=performance.now();acc+=now-last;last=now;
 if(acc>60){acc=0;
  ctx.fillStyle='rgba(10,11,14,.14)';ctx.fillRect(0,0,cv.width,cv.height);
  ctx.font='12px monospace';
  for(let i=0;i<cols;i++){const d=drops[i];
   if(d>0){ctx.fillStyle='rgba(94,234,212,.85)';
    ctx.fillText(P[(Math.random()*P.length)|0],i*cw,d*15);}
   drops[i]=(d*15>cv.height&&Math.random()>.975)?0:d+1;}}
 raf=requestAnimationFrame(loop);};
loop();onStop(()=>cancelAnimationFrame(raf));`},

{id:'gl-mesh',name:'Gradient Mesh',cat:'shader',eng:'gl',txt:1,tags:['canvas','gradient'],
 css:`.s{width:100%;height:130px;border-radius:5px;overflow:hidden;position:relative;background:#0A0B0E}
.s canvas{display:block;width:100%;height:100%;filter:blur(26px)}
.s span{position:absolute;inset:0;display:grid;place-items:center;pointer-events:none;
 font:900 23px/1 Archivo,sans-serif;letter-spacing:-.03em;color:#fff;text-shadow:0 2px 22px rgba(0,0,0,.65)}`,
 js:`root.innerHTML='<div class="s"><canvas></canvas><span>'+esc(text)+'</span></div>';
const cv=root.querySelector('canvas'),ctx=cv.getContext('2d');
const r=cv.getBoundingClientRect();
cv.width=Math.max(1,r.width/2);cv.height=Math.max(1,r.height/2);
const B=[{c:'#5EEAD4',x:.3,y:.4,sx:.00042,sy:.00061},
 {c:'#8B7CFF',x:.7,y:.6,sx:-.00035,sy:.00048},
 {c:'#FF6B9D',x:.5,y:.3,sx:.00051,sy:-.00039}];
let raf,t0=performance.now();
const loop=()=>{const t=performance.now()-t0;
 ctx.fillStyle='#0A0B0E';ctx.fillRect(0,0,cv.width,cv.height);
 for(const b of B){
  const x=(b.x+Math.sin(t*b.sx)*.3)*cv.width,y=(b.y+Math.cos(t*b.sy)*.3)*cv.height;
  const g=ctx.createRadialGradient(x,y,0,x,y,cv.width*.5);
  g.addColorStop(0,b.c);g.addColorStop(1,'rgba(10,11,14,0)');
  ctx.fillStyle=g;ctx.fillRect(0,0,cv.width,cv.height);}
 raf=requestAnimationFrame(loop);};
loop();onStop(()=>cancelAnimationFrame(raf));`},

{id:'gl-star',name:'Starfield',cat:'shader',eng:'gl',txt:0,tags:['canvas','3d'],
 css:`.s{width:100%;height:130px;border-radius:5px;overflow:hidden;background:#04050A}
.s canvas{display:block;width:100%;height:100%}`,
 js:`root.innerHTML='<div class="s"><canvas></canvas></div>';
const cv=root.querySelector('canvas'),ctx=cv.getContext('2d');
const r=cv.getBoundingClientRect();cv.width=Math.max(1,r.width);cv.height=Math.max(1,r.height);
const cx=cv.width/2,cy=cv.height/2;
const S=Array.from({length:130},()=>({x:(Math.random()-.5)*cv.width*2,
 y:(Math.random()-.5)*cv.height*2,z:Math.random()*cv.width}));
let raf;
const loop=()=>{
 ctx.fillStyle='rgba(4,5,10,.35)';ctx.fillRect(0,0,cv.width,cv.height);
 for(const s of S){s.z-=3.2;
  if(s.z<1){s.z=cv.width;s.x=(Math.random()-.5)*cv.width*2;s.y=(Math.random()-.5)*cv.height*2;}
  const k=128/s.z,px=s.x*k+cx,py=s.y*k+cy;
  if(px<0||px>cv.width||py<0||py>cv.height)continue;
  const sz=(1-s.z/cv.width)*2.4;
  ctx.fillStyle='rgba(94,234,212,'+(1-s.z/cv.width)+')';
  ctx.fillRect(px,py,sz,sz);}
 raf=requestAnimationFrame(loop);};
loop();onStop(()=>cancelAnimationFrame(raf));`},

{id:'gl-ripple',name:'Ripple Canvas',cat:'shader',eng:'gl',txt:0,tags:['canvas','pointer'],
 css:`.s{width:100%;height:130px;border-radius:5px;overflow:hidden;background:#0A0B0E;cursor:crosshair;position:relative}
.s canvas{display:block;width:100%;height:100%}
.s .h{position:absolute;bottom:8px;left:0;right:0;text-align:center;pointer-events:none;
 font:400 9px/1 'JetBrains Mono',monospace;color:#565C6E;letter-spacing:.14em;text-transform:uppercase}`,
 js:`root.innerHTML='<div class="s"><canvas></canvas><div class="h">move / tap</div></div>';
const wrap=root.querySelector('.s'),cv=root.querySelector('canvas'),ctx=cv.getContext('2d');
const r=cv.getBoundingClientRect();cv.width=Math.max(1,r.width);cv.height=Math.max(1,r.height);
const R=[];let raf;
const add=(x,y)=>{if(R.length<28)R.push({x,y,r:0,a:1});};
const mv=e=>{const b=cv.getBoundingClientRect();
 if(Math.random()>.74)add(e.clientX-b.left,e.clientY-b.top);};
const dn=e=>{const b=cv.getBoundingClientRect();add(e.clientX-b.left,e.clientY-b.top);};
wrap.addEventListener('pointermove',mv);wrap.addEventListener('pointerdown',dn);
const loop=()=>{
 ctx.fillStyle='rgba(10,11,14,.16)';ctx.fillRect(0,0,cv.width,cv.height);
 for(let i=R.length-1;i>=0;i--){const p=R[i];p.r+=1.9;p.a-=.014;
  if(p.a<=0){R.splice(i,1);continue;}
  ctx.strokeStyle='rgba(94,234,212,'+p.a+')';ctx.lineWidth=1.3;
  ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,7);ctx.stroke();}
 if(R.length<2&&Math.random()>.965)add(Math.random()*cv.width,Math.random()*cv.height);
 raf=requestAnimationFrame(loop);};
loop();
onStop(()=>{cancelAnimationFrame(raf);wrap.removeEventListener('pointermove',mv);
 wrap.removeEventListener('pointerdown',dn);});`},

{id:'gl-text-particles',name:'Text Particles',cat:'shader',eng:'gl',txt:1,tags:['canvas','text'],
 css:`.s{width:100%;height:130px;border-radius:5px;overflow:hidden;background:#0A0B0E}
.s canvas{display:block;width:100%;height:100%}`,
 js:`root.innerHTML='<div class="s"><canvas></canvas></div>';
const cv=root.querySelector('canvas'),ctx=cv.getContext('2d');
const r=cv.getBoundingClientRect();cv.width=Math.max(1,r.width);cv.height=Math.max(1,r.height);
const off=document.createElement('canvas');off.width=cv.width;off.height=cv.height;
const oc=off.getContext('2d');
let fs=Math.min(46,Math.floor(cv.width/Math.max(3,text.length)*1.65));
oc.fillStyle='#fff';oc.font='900 '+fs+'px Archivo, sans-serif';
oc.textAlign='center';oc.textBaseline='middle';
oc.fillText(text.slice(0,14),cv.width/2,cv.height/2);
const d=oc.getImageData(0,0,cv.width,cv.height).data;
const P=[],gap=4;
for(let y=0;y<cv.height;y+=gap)for(let x=0;x<cv.width;x+=gap){
 if(d[(y*cv.width+x)*4+3]>128)P.push({hx:x,hy:y,
  x:Math.random()*cv.width,y:Math.random()*cv.height,vx:0,vy:0});}
let raf;
const loop=()=>{
 ctx.fillStyle='rgba(10,11,14,.28)';ctx.fillRect(0,0,cv.width,cv.height);
 ctx.fillStyle='#5EEAD4';
 for(const p of P){
  p.vx=(p.vx+(p.hx-p.x)*.014)*.88;p.vy=(p.vy+(p.hy-p.y)*.014)*.88;
  p.x+=p.vx;p.y+=p.vy;
  ctx.fillRect(p.x,p.y,1.7,1.7);}
 raf=requestAnimationFrame(loop);};
loop();onStop(()=>cancelAnimationFrame(raf));`},

{id:'gl-flowfield',name:'Flow Field',cat:'shader',eng:'gl',txt:0,tags:['canvas','noise'],
 css:`.s{width:100%;height:130px;border-radius:5px;overflow:hidden;background:#0A0B0E}
.s canvas{display:block;width:100%;height:100%}`,
 js:`root.innerHTML='<div class="s"><canvas></canvas></div>';
const cv=root.querySelector('canvas'),ctx=cv.getContext('2d');
const r=cv.getBoundingClientRect();cv.width=Math.max(1,r.width);cv.height=Math.max(1,r.height);
ctx.fillStyle='#0A0B0E';ctx.fillRect(0,0,cv.width,cv.height);
const N=90,P=Array.from({length:N},()=>({x:Math.random()*cv.width,y:Math.random()*cv.height}));
let raf,t=0;
const field=(x,y)=>Math.sin(x*.012+t)*Math.cos(y*.014-t*.7)*Math.PI*2;
const loop=()=>{
 t+=.0032;
 ctx.fillStyle='rgba(10,11,14,.045)';ctx.fillRect(0,0,cv.width,cv.height);
 ctx.strokeStyle='rgba(94,234,212,.38)';ctx.lineWidth=.9;
 ctx.beginPath();
 for(const p of P){
  const a=field(p.x,p.y);ctx.moveTo(p.x,p.y);
  p.x+=Math.cos(a)*1.5;p.y+=Math.sin(a)*1.5;
  ctx.lineTo(p.x,p.y);
  if(p.x<0||p.x>cv.width||p.y<0||p.y>cv.height){
   p.x=Math.random()*cv.width;p.y=Math.random()*cv.height;}}
 ctx.stroke();
 raf=requestAnimationFrame(loop);};
loop();onStop(()=>cancelAnimationFrame(raf));`},

{id:'gl-fireworks',name:'Fireworks',cat:'shader',eng:'gl',txt:0,tags:['canvas','particles'],
 css:`.s{width:100%;height:130px;border-radius:5px;overflow:hidden;background:#06070B;cursor:pointer}
.s canvas{display:block;width:100%;height:100%}`,
 js:`root.innerHTML='<div class="s"><canvas></canvas></div>';
const wrap=root.querySelector('.s'),cv=root.querySelector('canvas'),ctx=cv.getContext('2d');
const r=cv.getBoundingClientRect();cv.width=Math.max(1,r.width);cv.height=Math.max(1,r.height);
const C=['#5EEAD4','#8B7CFF','#FF6B9D','#FFB454'];
const P=[];let raf,cd=0;
const boom=(x,y)=>{const c=C[(Math.random()*C.length)|0];
 for(let i=0;i<34;i++){const a=(i/34)*Math.PI*2,s=1+Math.random()*2.4;
  P.push({x,y,vx:Math.cos(a)*s,vy:Math.sin(a)*s,life:1,c});}};
const dn=e=>{const b=cv.getBoundingClientRect();boom(e.clientX-b.left,e.clientY-b.top);};
wrap.addEventListener('pointerdown',dn);
const loop=()=>{
 ctx.fillStyle='rgba(6,7,11,.2)';ctx.fillRect(0,0,cv.width,cv.height);
 if(--cd<=0){cd=52;boom(cv.width*(.2+Math.random()*.6),cv.height*(.2+Math.random()*.45));}
 for(let i=P.length-1;i>=0;i--){const p=P[i];
  p.x+=p.vx;p.y+=p.vy;p.vy+=.035;p.vx*=.985;p.vy*=.985;p.life-=.014;
  if(p.life<=0){P.splice(i,1);continue;}
  ctx.globalAlpha=Math.max(0,p.life);ctx.fillStyle=p.c;
  ctx.fillRect(p.x,p.y,2,2);}
 ctx.globalAlpha=1;
 raf=requestAnimationFrame(loop);};
loop();
onStop(()=>{cancelAnimationFrame(raf);wrap.removeEventListener('pointerdown',dn);});`},

{id:'gl-spiral',name:'Spiral Galaxy',cat:'shader',eng:'gl',txt:0,tags:['canvas','rotate'],
 css:`.s{width:100%;height:130px;border-radius:5px;overflow:hidden;background:#06070B}
.s canvas{display:block;width:100%;height:100%}`,
 js:`root.innerHTML='<div class="s"><canvas></canvas></div>';
const cv=root.querySelector('canvas'),ctx=cv.getContext('2d');
const r=cv.getBoundingClientRect();cv.width=Math.max(1,r.width);cv.height=Math.max(1,r.height);
const cx=cv.width/2,cy=cv.height/2,N=240;
const S=Array.from({length:N},(_,i)=>{
 const arm=i%3,t=(i/N)*7;
 return{a:t+arm*(Math.PI*2/3),d:t*(Math.min(cv.width,cv.height)*.055),
  sz:.6+Math.random()*1.5,o:.25+Math.random()*.65};});
let raf,rot=0;
const loop=()=>{
 ctx.fillStyle='rgba(6,7,11,.32)';ctx.fillRect(0,0,cv.width,cv.height);
 rot+=.0042;
 for(const s of S){
  const a=s.a+rot+s.d*.004;
  const x=cx+Math.cos(a)*s.d,y=cy+Math.sin(a)*s.d*.52;
  ctx.fillStyle='rgba(94,234,212,'+s.o+')';
  ctx.fillRect(x,y,s.sz,s.sz);}
 raf=requestAnimationFrame(loop);};
loop();onStop(()=>cancelAnimationFrame(raf));`},

{id:'gl-lightning',name:'Lightning',cat:'shader',eng:'gl',txt:0,tags:['canvas','random'],
 css:`.s{width:100%;height:130px;border-radius:5px;overflow:hidden;background:#06070B}
.s canvas{display:block;width:100%;height:100%}`,
 js:`root.innerHTML='<div class="s"><canvas></canvas></div>';
const cv=root.querySelector('canvas'),ctx=cv.getContext('2d');
const r=cv.getBoundingClientRect();cv.width=Math.max(1,r.width);cv.height=Math.max(1,r.height);
let raf,cd=0,pts=[];
const gen=()=>{pts=[];let x=cv.width*(.25+Math.random()*.5),y=0;
 pts.push({x,y});
 while(y<cv.height){y+=6+Math.random()*12;x+=(Math.random()-.5)*22;pts.push({x,y});}};
gen();
const loop=()=>{
 ctx.fillStyle='rgba(6,7,11,.26)';ctx.fillRect(0,0,cv.width,cv.height);
 if(--cd<=0){cd=34+Math.random()*40;gen();}
 const a=Math.min(1,cd/22);
 ctx.strokeStyle='rgba(94,234,212,'+a+')';ctx.lineWidth=1.8;
 ctx.shadowBlur=12;ctx.shadowColor='#5EEAD4';
 ctx.beginPath();ctx.moveTo(pts[0].x,pts[0].y);
 for(const p of pts)ctx.lineTo(p.x,p.y);
 ctx.stroke();ctx.shadowBlur=0;
 raf=requestAnimationFrame(loop);};
loop();onStop(()=>cancelAnimationFrame(raf));`},

{id:'gl-blob',name:'Metaball Blob',cat:'shader',eng:'gl',txt:0,tags:['canvas','organic'],
 css:`.s{width:100%;height:130px;border-radius:5px;overflow:hidden;background:#0A0B0E}
.s canvas{display:block;width:100%;height:100%;filter:blur(9px) contrast(22)}`,
 js:`root.innerHTML='<div class="s"><canvas></canvas></div>';
const cv=root.querySelector('canvas'),ctx=cv.getContext('2d');
const r=cv.getBoundingClientRect();
cv.width=Math.max(1,r.width/2);cv.height=Math.max(1,r.height/2);
const B=Array.from({length:5},(_,i)=>({
 px:Math.random()*6.28,py:Math.random()*6.28,
 sx:.0006+Math.random()*.0007,sy:.0007+Math.random()*.0008,
 r:15+i*4}));
let raf,t0=performance.now();
const loop=()=>{const t=performance.now()-t0;
 ctx.fillStyle='#000';ctx.fillRect(0,0,cv.width,cv.height);
 ctx.fillStyle='#5EEAD4';
 for(const b of B){
  const x=cv.width/2+Math.sin(t*b.sx+b.px)*cv.width*.31;
  const y=cv.height/2+Math.cos(t*b.sy+b.py)*cv.height*.33;
  ctx.beginPath();ctx.arc(x,y,b.r,0,7);ctx.fill();}
 raf=requestAnimationFrame(loop);};
loop();onStop(()=>cancelAnimationFrame(raf));`},

{id:'gl-bars',name:'Spectrum Bars',cat:'shader',eng:'gl',txt:0,tags:['canvas','loop'],
 css:`.s{width:100%;height:130px;border-radius:5px;overflow:hidden;background:#0A0B0E}
.s canvas{display:block;width:100%;height:100%}`,
 js:`root.innerHTML='<div class="s"><canvas></canvas></div>';
const cv=root.querySelector('canvas'),ctx=cv.getContext('2d');
const r=cv.getBoundingClientRect();cv.width=Math.max(1,r.width);cv.height=Math.max(1,r.height);
const N=34,V=new Array(N).fill(0),S=Array.from({length:N},()=>Math.random()*6.28);
let raf,t=0;
const loop=()=>{
 t+=.03;
 ctx.clearRect(0,0,cv.width,cv.height);
 const bw=cv.width/N;
 for(let i=0;i<N;i++){
  const target=(Math.sin(t*1.4+S[i])*.5+.5)*(Math.sin(t*.6+i*.3)*.35+.65);
  V[i]+=(target-V[i])*.16;
  const h=V[i]*cv.height*.82;
  const g=ctx.createLinearGradient(0,cv.height,0,cv.height-h);
  g.addColorStop(0,'#2A6B62');g.addColorStop(1,'#5EEAD4');
  ctx.fillStyle=g;
  ctx.fillRect(i*bw+1.4,cv.height-h,bw-2.8,h);}
 raf=requestAnimationFrame(loop);};
loop();onStop(()=>cancelAnimationFrame(raf));`},

{id:'gl-trail',name:'Cursor Trail',cat:'shader',eng:'gl',txt:0,tags:['canvas','pointer'],
 css:`.s{width:100%;height:130px;border-radius:5px;overflow:hidden;background:#0A0B0E;
 cursor:crosshair;position:relative}
.s canvas{display:block;width:100%;height:100%}
.s .h{position:absolute;bottom:8px;left:0;right:0;text-align:center;pointer-events:none;
 font:400 9px/1 'JetBrains Mono',monospace;color:#565C6E;letter-spacing:.14em;text-transform:uppercase}`,
 js:`root.innerHTML='<div class="s"><canvas></canvas><div class="h">move me</div></div>';
const wrap=root.querySelector('.s'),cv=root.querySelector('canvas'),ctx=cv.getContext('2d');
const r=cv.getBoundingClientRect();cv.width=Math.max(1,r.width);cv.height=Math.max(1,r.height);
const N=22,pts=Array.from({length:N},()=>({x:cv.width/2,y:cv.height/2}));
let mx=cv.width/2,my=cv.height/2,raf,t=0;
const mv=e=>{const b=cv.getBoundingClientRect();mx=e.clientX-b.left;my=e.clientY-b.top;};
wrap.addEventListener('pointermove',mv);
const loop=()=>{
 t+=.02;
 if(!wrap.matches(':hover')){mx=cv.width/2+Math.cos(t)*cv.width*.3;
  my=cv.height/2+Math.sin(t*1.3)*cv.height*.3;}
 ctx.fillStyle='rgba(10,11,14,.2)';ctx.fillRect(0,0,cv.width,cv.height);
 pts[0].x+=(mx-pts[0].x)*.32;pts[0].y+=(my-pts[0].y)*.32;
 for(let i=1;i<N;i++){pts[i].x+=(pts[i-1].x-pts[i].x)*.34;
  pts[i].y+=(pts[i-1].y-pts[i].y)*.34;}
 for(let i=0;i<N;i++){
  ctx.fillStyle='rgba(94,234,212,'+(1-i/N)*.9+')';
  ctx.beginPath();ctx.arc(pts[i].x,pts[i].y,(1-i/N)*7+1,0,7);ctx.fill();}
 raf=requestAnimationFrame(loop);};
loop();
onStop(()=>{cancelAnimationFrame(raf);wrap.removeEventListener('pointermove',mv);});`},

{id:'gl-rings',name:'Pulse Rings',cat:'shader',eng:'gl',txt:1,tags:['canvas','loop'],
 css:`.s{width:100%;height:130px;border-radius:5px;overflow:hidden;background:#0A0B0E;position:relative}
.s canvas{display:block;width:100%;height:100%}
.s span{position:absolute;inset:0;display:grid;place-items:center;pointer-events:none;
 font:900 20px/1 Archivo,sans-serif;letter-spacing:-.02em;color:#E9EBF1}`,
 js:`root.innerHTML='<div class="s"><canvas></canvas><span>'+esc(text)+'</span></div>';
const cv=root.querySelector('canvas'),ctx=cv.getContext('2d');
const r=cv.getBoundingClientRect();cv.width=Math.max(1,r.width);cv.height=Math.max(1,r.height);
const cx=cv.width/2,cy=cv.height/2,MAX=Math.min(cv.width,cv.height)*.62;
const N=5,R=Array.from({length:N},(_,i)=>i/N);
let raf;
const loop=()=>{
 ctx.clearRect(0,0,cv.width,cv.height);
 for(let i=0;i<N;i++){
  R[i]+=.0042;if(R[i]>1)R[i]-=1;
  ctx.strokeStyle='rgba(94,234,212,'+(1-R[i])*.7+')';
  ctx.lineWidth=1.6;
  ctx.beginPath();ctx.arc(cx,cy,R[i]*MAX,0,7);ctx.stroke();}
 raf=requestAnimationFrame(loop);};
loop();onStop(()=>cancelAnimationFrame(raf));`}
,

/* ══════════════════════════════════════════════════════════
   THREE.JS — 3D scenes
   ══════════════════════════════════════════════════════════ */
{id:'three-icosa',name:'Wireframe Solid',cat:'three',eng:'three',txt:0,tags:['3d','wireframe'],
 css:`.s{width:100%;height:132px;border-radius:5px;overflow:hidden;background:#0A0B0E}
.s canvas{display:block;width:100%!important;height:100%!important}`,
 js:`const T=eng;
root.innerHTML='<div class="s"></div>';
const host=root.querySelector('.s'),r=host.getBoundingClientRect();
const w=Math.max(1,r.width),h=Math.max(1,r.height);
const sc=new T.Scene();
const cam=new T.PerspectiveCamera(50,w/h,.1,100);cam.position.z=3.4;
const rd=new T.WebGLRenderer({antialias:true,alpha:true});
rd.setPixelRatio(DPR);rd.setSize(w,h);host.appendChild(rd.domElement);
const geo=new T.IcosahedronGeometry(1.25,1);
const mesh=new T.Mesh(geo,new T.MeshBasicMaterial({color:0x5EEAD4,wireframe:true}));
sc.add(mesh);
const glow=new T.Mesh(new T.IcosahedronGeometry(1.22,1),
 new T.MeshBasicMaterial({color:0x2A6B62,transparent:true,opacity:.18}));
sc.add(glow);
let raf;
const loop=()=>{mesh.rotation.x+=.004;mesh.rotation.y+=.006;
 glow.rotation.copy(mesh.rotation);rd.render(sc,cam);raf=requestAnimationFrame(loop);};
loop();
onStop(()=>{cancelAnimationFrame(raf);geo.dispose();rd.dispose();});`},

{id:'three-points',name:'Point Sphere',cat:'three',eng:'three',txt:0,tags:['3d','particles'],
 css:`.s{width:100%;height:132px;border-radius:5px;overflow:hidden;background:#0A0B0E}
.s canvas{display:block;width:100%!important;height:100%!important}`,
 js:`const T=eng;
root.innerHTML='<div class="s"></div>';
const host=root.querySelector('.s'),r=host.getBoundingClientRect();
const w=Math.max(1,r.width),h=Math.max(1,r.height);
const sc=new T.Scene();
const cam=new T.PerspectiveCamera(52,w/h,.1,100);cam.position.z=3.2;
const rd=new T.WebGLRenderer({antialias:true,alpha:true});
rd.setPixelRatio(DPR);rd.setSize(w,h);host.appendChild(rd.domElement);
const N=900,pos=new Float32Array(N*3);
for(let i=0;i<N;i++){
 const th=Math.acos(2*Math.random()-1),ph=Math.random()*Math.PI*2,rr=1.3;
 pos[i*3]=rr*Math.sin(th)*Math.cos(ph);
 pos[i*3+1]=rr*Math.sin(th)*Math.sin(ph);
 pos[i*3+2]=rr*Math.cos(th);}
const g=new T.BufferGeometry();
g.setAttribute('position',new T.BufferAttribute(pos,3));
const pts=new T.Points(g,new T.PointsMaterial({color:0x5EEAD4,size:.032}));
sc.add(pts);
let raf;
const loop=()=>{pts.rotation.y+=.0035;pts.rotation.x+=.0014;
 rd.render(sc,cam);raf=requestAnimationFrame(loop);};
loop();
onStop(()=>{cancelAnimationFrame(raf);g.dispose();rd.dispose();});`},

{id:'three-torus',name:'Torus Knot',cat:'three',eng:'three',txt:0,tags:['3d','geometry'],
 css:`.s{width:100%;height:132px;border-radius:5px;overflow:hidden;background:#0A0B0E}
.s canvas{display:block;width:100%!important;height:100%!important}`,
 js:`const T=eng;
root.innerHTML='<div class="s"></div>';
const host=root.querySelector('.s'),r=host.getBoundingClientRect();
const w=Math.max(1,r.width),h=Math.max(1,r.height);
const sc=new T.Scene();
const cam=new T.PerspectiveCamera(48,w/h,.1,100);cam.position.z=4.2;
const rd=new T.WebGLRenderer({antialias:true,alpha:true});
rd.setPixelRatio(DPR);rd.setSize(w,h);host.appendChild(rd.domElement);
const geo=new T.TorusKnotGeometry(1.05,.32,110,16);
const mat=new T.MeshStandardMaterial({color:0x5EEAD4,roughness:.28,metalness:.75});
const mesh=new T.Mesh(geo,mat);sc.add(mesh);
sc.add(new T.AmbientLight(0x223333,2));
const l1=new T.PointLight(0x5EEAD4,32);l1.position.set(3,3,4);sc.add(l1);
const l2=new T.PointLight(0x8B7CFF,22);l2.position.set(-4,-2,2);sc.add(l2);
let raf;
const loop=()=>{mesh.rotation.x+=.005;mesh.rotation.y+=.008;
 rd.render(sc,cam);raf=requestAnimationFrame(loop);};
loop();
onStop(()=>{cancelAnimationFrame(raf);geo.dispose();mat.dispose();rd.dispose();});`},

{id:'three-cubes',name:'Cube Grid',cat:'three',eng:'three',txt:0,tags:['3d','wave'],
 css:`.s{width:100%;height:132px;border-radius:5px;overflow:hidden;background:#0A0B0E}
.s canvas{display:block;width:100%!important;height:100%!important}`,
 js:`const T=eng;
root.innerHTML='<div class="s"></div>';
const host=root.querySelector('.s'),r=host.getBoundingClientRect();
const w=Math.max(1,r.width),h=Math.max(1,r.height);
const sc=new T.Scene();
const cam=new T.PerspectiveCamera(50,w/h,.1,100);
cam.position.set(0,3.6,4.6);cam.lookAt(0,0,0);
const rd=new T.WebGLRenderer({antialias:true,alpha:true});
rd.setPixelRatio(DPR);rd.setSize(w,h);host.appendChild(rd.domElement);
sc.add(new T.AmbientLight(0xffffff,1.6));
const dl=new T.DirectionalLight(0x5EEAD4,3.2);dl.position.set(2,5,3);sc.add(dl);
const geo=new T.BoxGeometry(.34,.34,.34);
const mat=new T.MeshStandardMaterial({color:0x5EEAD4,roughness:.4,metalness:.35});
const G=8,cubes=[];
for(let x=0;x<G;x++)for(let z=0;z<G;z++){
 const m=new T.Mesh(geo,mat);
 m.position.set((x-G/2+.5)*.48,0,(z-G/2+.5)*.48);
 sc.add(m);cubes.push({m,d:Math.hypot(x-G/2,z-G/2)});}
let raf,t=0;
const loop=()=>{t+=.045;
 for(const c of cubes)c.m.position.y=Math.sin(t-c.d*.6)*.42;
 sc.rotation.y+=.0032;rd.render(sc,cam);raf=requestAnimationFrame(loop);};
loop();
onStop(()=>{cancelAnimationFrame(raf);geo.dispose();mat.dispose();rd.dispose();});`},

{id:'three-blocks',name:'3D Letter Blocks',cat:'three',eng:'three',txt:1,tags:['3d','text'],
 css:`.s{width:100%;height:132px;border-radius:5px;overflow:hidden;background:#0A0B0E}
.s canvas{display:block;width:100%!important;height:100%!important}`,
 js:`const T=eng;
root.innerHTML='<div class="s"></div>';
const host=root.querySelector('.s'),r=host.getBoundingClientRect();
const w=Math.max(1,r.width),h=Math.max(1,r.height);
const sc=new T.Scene();
const cam=new T.PerspectiveCamera(46,w/h,.1,100);cam.position.z=6.2;
const rd=new T.WebGLRenderer({antialias:true,alpha:true});
rd.setPixelRatio(DPR);rd.setSize(w,h);host.appendChild(rd.domElement);
sc.add(new T.AmbientLight(0xffffff,1.4));
const dl=new T.DirectionalLight(0xffffff,2.6);dl.position.set(2,3,5);sc.add(dl);
const L=[...text.replace(/\s/g,'').slice(0,7)];
const geo=new T.BoxGeometry(.72,.72,.72);
const tiles=[];
L.forEach((ch,i)=>{
 const c=document.createElement('canvas');c.width=c.height=128;
 const x=c.getContext('2d');
 x.fillStyle='#0F1116';x.fillRect(0,0,128,128);
 x.fillStyle='#5EEAD4';x.font='900 78px Archivo, sans-serif';
 x.textAlign='center';x.textBaseline='middle';x.fillText(ch,64,68);
 const tex=new T.CanvasTexture(c);
 const m=new T.Mesh(geo,new T.MeshStandardMaterial({map:tex,roughness:.5}));
 m.position.x=(i-(L.length-1)/2)*.92;
 sc.add(m);tiles.push({m,tex,i});});
let raf,t=0;
const loop=()=>{t+=.024;
 for(const o of tiles){o.m.rotation.y=Math.sin(t+o.i*.5)*.85;
  o.m.position.y=Math.sin(t*1.3+o.i*.6)*.17;}
 rd.render(sc,cam);raf=requestAnimationFrame(loop);};
loop();
onStop(()=>{cancelAnimationFrame(raf);geo.dispose();
 tiles.forEach(o=>{o.tex.dispose();o.m.material.dispose();});rd.dispose();});`},

{id:'three-ribbon',name:'Ribbon Wave',cat:'three',eng:'three',txt:0,tags:['3d','mesh'],
 css:`.s{width:100%;height:132px;border-radius:5px;overflow:hidden;background:#0A0B0E}
.s canvas{display:block;width:100%!important;height:100%!important}`,
 js:`const T=eng;
root.innerHTML='<div class="s"></div>';
const host=root.querySelector('.s'),r=host.getBoundingClientRect();
const w=Math.max(1,r.width),h=Math.max(1,r.height);
const sc=new T.Scene();
const cam=new T.PerspectiveCamera(50,w/h,.1,100);
cam.position.set(0,1.9,3.4);cam.lookAt(0,0,0);
const rd=new T.WebGLRenderer({antialias:true,alpha:true});
rd.setPixelRatio(DPR);rd.setSize(w,h);host.appendChild(rd.domElement);
const geo=new T.PlaneGeometry(5,2.4,44,22);
const mat=new T.MeshBasicMaterial({color:0x5EEAD4,wireframe:true,transparent:true,opacity:.72});
const mesh=new T.Mesh(geo,mat);mesh.rotation.x=-Math.PI/2.5;sc.add(mesh);
const base=geo.attributes.position.array.slice();
let raf,t=0;
const loop=()=>{t+=.028;
 const p=geo.attributes.position.array;
 for(let i=0;i<p.length;i+=3){
  p[i+2]=Math.sin(base[i]*1.5+t)*.28+Math.cos(base[i+1]*1.7-t*.8)*.2;}
 geo.attributes.position.needsUpdate=true;
 rd.render(sc,cam);raf=requestAnimationFrame(loop);};
loop();
onStop(()=>{cancelAnimationFrame(raf);geo.dispose();mat.dispose();rd.dispose();});`},

/* ══════════════════════════════════════════════════════════
   MATTER.JS — physics
   ══════════════════════════════════════════════════════════ */
{id:'matter-letters',name:'Falling Letters',cat:'physics',eng:'matter',txt:1,tags:['physics','gravity'],
 css:`.s{width:100%;height:132px;border-radius:5px;overflow:hidden;background:#0A0B0E;
 position:relative;cursor:pointer}
.s canvas{display:block}
.s .h{position:absolute;bottom:7px;left:0;right:0;text-align:center;pointer-events:none;
 font:400 9px/1 'JetBrains Mono',monospace;color:#565C6E;letter-spacing:.14em;text-transform:uppercase}`,
 js:`const M=eng;
root.innerHTML='<div class="s"><div class="h">tap to drop</div></div>';
const host=root.querySelector('.s'),r=host.getBoundingClientRect();
const w=Math.max(1,Math.floor(r.width)),h=132;
const eg=M.Engine.create();eg.gravity.y=.9;
const rn=M.Render.create({element:host,engine:eg,
 options:{width:w,height:h,wireframes:false,background:'transparent',pixelRatio:DPR}});
const walls=[
 M.Bodies.rectangle(w/2,h+22,w*2,44,{isStatic:true,render:{fillStyle:'#1E222C'}}),
 M.Bodies.rectangle(-22,h/2,44,h*2,{isStatic:true,render:{visible:false}}),
 M.Bodies.rectangle(w+22,h/2,44,h*2,{isStatic:true,render:{visible:false}})];
M.Composite.add(eg.world,walls);
const C=['#5EEAD4','#8B7CFF','#FF6B9D','#FFB454'];
const drop=()=>{
 const L=[...text.replace(/\s/g,'').slice(0,7)];
 L.forEach((ch,i)=>{
  const c=document.createElement('canvas');c.width=c.height=64;
  const x=c.getContext('2d');
  x.fillStyle=C[i%C.length];
  x.beginPath();x.roundRect?x.roundRect(4,4,56,56,9):x.rect(4,4,56,56);x.fill();
  x.fillStyle='#0A0B0E';x.font='900 36px Archivo, sans-serif';
  x.textAlign='center';x.textBaseline='middle';x.fillText(ch,32,34);
  const b=M.Bodies.rectangle(w*.5+(i-L.length/2)*22,-30-i*36,26,26,{
   restitution:.55,friction:.24,
   render:{sprite:{texture:c.toDataURL(),xScale:26/64,yScale:26/64}}});
  M.Composite.add(eg.world,b);});};
drop();
const tap=()=>{
 const bodies=M.Composite.allBodies(eg.world).filter(b=>!b.isStatic);
 if(bodies.length>22)M.Composite.remove(eg.world,bodies.slice(0,7));
 drop();};
host.addEventListener('pointerdown',tap);
const runner=M.Runner.create();
M.Runner.run(runner,eg);M.Render.run(rn);
onStop(()=>{host.removeEventListener('pointerdown',tap);
 M.Render.stop(rn);M.Runner.stop(runner);
 M.World.clear(eg.world);M.Engine.clear(eg);
 if(rn.canvas&&rn.canvas.parentNode)rn.canvas.parentNode.removeChild(rn.canvas);
 rn.textures={};});`},

{id:'matter-balls',name:'Bouncy Balls',cat:'physics',eng:'matter',txt:0,tags:['physics','collision'],
 css:`.s{width:100%;height:132px;border-radius:5px;overflow:hidden;background:#0A0B0E;cursor:pointer}
.s canvas{display:block}`,
 js:`const M=eng;
root.innerHTML='<div class="s"></div>';
const host=root.querySelector('.s'),r=host.getBoundingClientRect();
const w=Math.max(1,Math.floor(r.width)),h=132;
const eg=M.Engine.create();eg.gravity.y=.55;
const rn=M.Render.create({element:host,engine:eg,
 options:{width:w,height:h,wireframes:false,background:'transparent',pixelRatio:DPR}});
M.Composite.add(eg.world,[
 M.Bodies.rectangle(w/2,h+20,w*2,40,{isStatic:true,render:{fillStyle:'#1E222C'}}),
 M.Bodies.rectangle(w/2,-20,w*2,40,{isStatic:true,render:{visible:false}}),
 M.Bodies.rectangle(-20,h/2,40,h*2,{isStatic:true,render:{visible:false}}),
 M.Bodies.rectangle(w+20,h/2,40,h*2,{isStatic:true,render:{visible:false}})]);
const C=['#5EEAD4','#8B7CFF','#FF6B9D','#FFB454'];
for(let i=0;i<14;i++){
 const rad=6+Math.random()*9;
 M.Composite.add(eg.world,M.Bodies.circle(
  20+Math.random()*(w-40),Math.random()*60,rad,
  {restitution:.88,friction:.02,
   render:{fillStyle:C[i%C.length]}}));}
const tap=e=>{
 const b=host.getBoundingClientRect();
 M.Composite.allBodies(eg.world).forEach(bd=>{
  if(bd.isStatic)return;
  M.Body.applyForce(bd,bd.position,
   {x:(bd.position.x-(e.clientX-b.left))*.00012,
    y:(bd.position.y-(e.clientY-b.top))*.00012});});};
host.addEventListener('pointerdown',tap);
const runner=M.Runner.create();
M.Runner.run(runner,eg);M.Render.run(rn);
onStop(()=>{host.removeEventListener('pointerdown',tap);
 M.Render.stop(rn);M.Runner.stop(runner);
 M.World.clear(eg.world);M.Engine.clear(eg);
 if(rn.canvas&&rn.canvas.parentNode)rn.canvas.parentNode.removeChild(rn.canvas);
 rn.textures={};});`},

{id:'matter-stack',name:'Tower Collapse',cat:'physics',eng:'matter',txt:0,tags:['physics','stack'],
 css:`.s{width:100%;height:132px;border-radius:5px;overflow:hidden;background:#0A0B0E;cursor:pointer;position:relative}
.s canvas{display:block}
.s .h{position:absolute;bottom:7px;left:0;right:0;text-align:center;pointer-events:none;
 font:400 9px/1 'JetBrains Mono',monospace;color:#565C6E;letter-spacing:.14em;text-transform:uppercase}`,
 js:`const M=eng;
root.innerHTML='<div class="s"><div class="h">tap to knock over</div></div>';
const host=root.querySelector('.s'),r=host.getBoundingClientRect();
const w=Math.max(1,Math.floor(r.width)),h=132;
const eg=M.Engine.create();
const rn=M.Render.create({element:host,engine:eg,
 options:{width:w,height:h,wireframes:false,background:'transparent',pixelRatio:DPR}});
M.Composite.add(eg.world,[
 M.Bodies.rectangle(w/2,h-4,w*2,16,{isStatic:true,render:{fillStyle:'#1E222C'}}),
 M.Bodies.rectangle(-20,h/2,40,h*2,{isStatic:true,render:{visible:false}}),
 M.Bodies.rectangle(w+20,h/2,40,h*2,{isStatic:true,render:{visible:false}})]);
const C=['#5EEAD4','#2A6B62'];
const build=()=>{
 for(let row=0;row<6;row++)for(let col=0;col<4-Math.floor(row/2);col++){
  const bw=22,bh=13;
  M.Composite.add(eg.world,M.Bodies.rectangle(
   w/2+(col-(3-Math.floor(row/2))/2)*(bw+3),h-18-row*(bh+2),bw,bh,
   {restitution:.15,friction:.6,render:{fillStyle:C[row%2]}}));}};
build();
const tap=()=>{
 const B=M.Composite.allBodies(eg.world).filter(b=>!b.isStatic);
 if(!B.length){build();return;}
 M.Body.applyForce(B[B.length-1],B[B.length-1].position,{x:.055,y:-.02});};
host.addEventListener('pointerdown',tap);
const runner=M.Runner.create();
M.Runner.run(runner,eg);M.Render.run(rn);
onStop(()=>{host.removeEventListener('pointerdown',tap);
 M.Render.stop(rn);M.Runner.stop(runner);
 M.World.clear(eg.world);M.Engine.clear(eg);
 if(rn.canvas&&rn.canvas.parentNode)rn.canvas.parentNode.removeChild(rn.canvas);
 rn.textures={};});`},

{id:'matter-pendulum',name:'Newton Cradle',cat:'physics',eng:'matter',txt:0,tags:['physics','constraint'],
 css:`.s{width:100%;height:132px;border-radius:5px;overflow:hidden;background:#0A0B0E}
.s canvas{display:block}`,
 js:`const M=eng;
root.innerHTML='<div class="s"></div>';
const host=root.querySelector('.s'),r=host.getBoundingClientRect();
const w=Math.max(1,Math.floor(r.width)),h=132;
const eg=M.Engine.create();
const rn=M.Render.create({element:host,engine:eg,
 options:{width:w,height:h,wireframes:false,background:'transparent',pixelRatio:DPR}});
const N=5,rad=11,sep=rad*2,x0=w/2-(N-1)*sep/2;
for(let i=0;i<N;i++){
 const b=M.Bodies.circle(x0+i*sep,86,rad,
  {inertia:Infinity,restitution:1,friction:0,frictionAir:0,slop:.5,
   render:{fillStyle:i===0?'#5EEAD4':'#2A6B62'}});
 M.Composite.add(eg.world,b);
 M.Composite.add(eg.world,M.Constraint.create({
  pointA:{x:x0+i*sep,y:14},bodyB:b,
  stiffness:1,length:0,render:{strokeStyle:'#2A3040',lineWidth:1}}));}
const first=M.Composite.allBodies(eg.world)[0];
M.Body.translate(first,{x:-52,y:-30});
const runner=M.Runner.create();
M.Runner.run(runner,eg);M.Render.run(rn);
onStop(()=>{M.Render.stop(rn);M.Runner.stop(runner);
 M.World.clear(eg.world);M.Engine.clear(eg);
 if(rn.canvas&&rn.canvas.parentNode)rn.canvas.parentNode.removeChild(rn.canvas);
 rn.textures={};});`},

{id:'matter-confetti',name:'Confetti Burst',cat:'physics',eng:'matter',txt:0,tags:['physics','celebrate'],
 css:`.s{width:100%;height:132px;border-radius:5px;overflow:hidden;background:#0A0B0E;
 cursor:pointer;position:relative}
.s canvas{display:block}
.s .h{position:absolute;bottom:7px;left:0;right:0;text-align:center;pointer-events:none;
 font:400 9px/1 'JetBrains Mono',monospace;color:#565C6E;letter-spacing:.14em;text-transform:uppercase}`,
 js:`const M=eng;
root.innerHTML='<div class="s"><div class="h">tap anywhere</div></div>';
const host=root.querySelector('.s'),r=host.getBoundingClientRect();
const w=Math.max(1,Math.floor(r.width)),h=132;
const eg=M.Engine.create();eg.gravity.y=.75;
const rn=M.Render.create({element:host,engine:eg,
 options:{width:w,height:h,wireframes:false,background:'transparent',pixelRatio:DPR}});
M.Composite.add(eg.world,M.Bodies.rectangle(w/2,h+60,w*3,40,{isStatic:true,render:{visible:false}}));
const C=['#5EEAD4','#8B7CFF','#FF6B9D','#FFB454','#8BE84A'];
const burst=(x,y)=>{
 const B=M.Composite.allBodies(eg.world).filter(b=>!b.isStatic);
 if(B.length>90)M.Composite.remove(eg.world,B.slice(0,30));
 for(let i=0;i<26;i++){
  const b=M.Bodies.rectangle(x,y,7,4,{
   restitution:.5,frictionAir:.045,
   angle:Math.random()*6.28,render:{fillStyle:C[i%C.length]}});
  const a=(Math.random()*Math.PI)-Math.PI/2-Math.PI/4;
  M.Body.setVelocity(b,{x:Math.cos(a)*7,y:Math.sin(a)*9-3});
  M.Body.setAngularVelocity(b,(Math.random()-.5)*.5);
  M.Composite.add(eg.world,b);}};
const tap=e=>{const b=host.getBoundingClientRect();
 burst(e.clientX-b.left,e.clientY-b.top);};
host.addEventListener('pointerdown',tap);
burst(w/2,h*.62);
const runner=M.Runner.create();
M.Runner.run(runner,eg);M.Render.run(rn);
onStop(()=>{host.removeEventListener('pointerdown',tap);
 M.Render.stop(rn);M.Runner.stop(runner);
 M.World.clear(eg.world);M.Engine.clear(eg);
 if(rn.canvas&&rn.canvas.parentNode)rn.canvas.parentNode.removeChild(rn.canvas);
 rn.textures={};});`},

/* ══════════════════════════════════════════════════════════
   MEDIA — uses the uploaded image
   ══════════════════════════════════════════════════════════ */
{id:'media-tilt',name:'Image Tilt',cat:'media',eng:'css',txt:0,img:1,tags:['image','3d','pointer'],
 css:`.w{perspective:760px;width:172px;height:112px}
.s{width:100%;height:100%;border-radius:7px;overflow:hidden;border:1px solid #2A3040;
 transform-style:preserve-3d;transition:transform .16s ease-out,box-shadow .3s;
 box-shadow:0 10px 30px rgba(0,0,0,.5);position:relative}
.s img{width:100%;height:100%;object-fit:cover;display:block}
.s::after{content:'';position:absolute;inset:0;pointer-events:none;
 background:linear-gradient(120deg,rgba(94,234,212,.22),transparent 55%)}
.s:hover{box-shadow:0 18px 46px rgba(94,234,212,.2)}`,
 js:`root.innerHTML='<div class="w"><div class="s"><img src="'+img+'" alt=""></div></div>';
const w=root.querySelector('.w'),el=root.querySelector('.s');
const mv=e=>{const b=w.getBoundingClientRect();
 const x=(e.clientX-b.left)/b.width-.5,y=(e.clientY-b.top)/b.height-.5;
 el.style.transform='rotateY('+(x*26)+'deg) rotateX('+(-y*26)+'deg) scale(1.04)';};
const lv=()=>el.style.transform='';
w.addEventListener('pointermove',mv);w.addEventListener('pointerleave',lv);
onStop(()=>{w.removeEventListener('pointermove',mv);w.removeEventListener('pointerleave',lv);});`},

{id:'media-duotone',name:'Image Duotone',cat:'media',eng:'gl',txt:0,img:1,tags:['image','canvas','filter'],
 css:`.s{width:100%;height:130px;border-radius:5px;overflow:hidden;background:#0A0B0E}
.s canvas{display:block;width:100%;height:100%;object-fit:cover}`,
 js:`root.innerHTML='<div class="s"><canvas></canvas></div>';
const cv=root.querySelector('canvas'),ctx=cv.getContext('2d');
const r=cv.getBoundingClientRect();cv.width=Math.max(1,r.width);cv.height=Math.max(1,r.height);
const im=new Image();im.crossOrigin='anonymous';
let raf,t=0;
im.onload=()=>{
 const sc=Math.max(cv.width/im.width,cv.height/im.height);
 const dw=im.width*sc,dh=im.height*sc;
 ctx.drawImage(im,(cv.width-dw)/2,(cv.height-dh)/2,dw,dh);
 const d=ctx.getImageData(0,0,cv.width,cv.height);
 const src=new Uint8ClampedArray(d.data);
 const loop=()=>{t+=.012;
  const mixA=[94,234,212],mixB=[139,124,255],mixC=[255,107,157];
  const k=(Math.sin(t)*.5+.5);
  const hi=[mixA[0]*(1-k)+mixC[0]*k,mixA[1]*(1-k)+mixC[1]*k,mixA[2]*(1-k)+mixC[2]*k];
  for(let i=0;i<src.length;i+=4){
   const l=(src[i]*.299+src[i+1]*.587+src[i+2]*.114)/255;
   d.data[i]  =mixB[0]*(1-l)+hi[0]*l;
   d.data[i+1]=mixB[1]*(1-l)+hi[1]*l;
   d.data[i+2]=mixB[2]*(1-l)+hi[2]*l;}
  ctx.putImageData(d,0,0);
  raf=requestAnimationFrame(loop);};
 loop();};
im.src=img;
onStop(()=>cancelAnimationFrame(raf));`},

{id:'media-particles',name:'Image Dissolve',cat:'media',eng:'gl',txt:0,img:1,tags:['image','canvas','particles'],
 css:`.s{width:100%;height:130px;border-radius:5px;overflow:hidden;background:#0A0B0E;cursor:pointer;
 position:relative}
.s canvas{display:block;width:100%;height:100%}
.s .h{position:absolute;bottom:7px;left:0;right:0;text-align:center;pointer-events:none;
 font:400 9px/1 'JetBrains Mono',monospace;color:#565C6E;letter-spacing:.14em;text-transform:uppercase}`,
 js:`root.innerHTML='<div class="s"><canvas></canvas><div class="h">tap to scatter</div></div>';
const wrap=root.querySelector('.s'),cv=root.querySelector('canvas'),ctx=cv.getContext('2d');
const r=cv.getBoundingClientRect();cv.width=Math.max(1,r.width);cv.height=Math.max(1,r.height);
const im=new Image();im.crossOrigin='anonymous';
let raf,P=[];
im.onload=()=>{
 const off=document.createElement('canvas');off.width=cv.width;off.height=cv.height;
 const oc=off.getContext('2d');
 const sc=Math.max(cv.width/im.width,cv.height/im.height);
 const dw=im.width*sc,dh=im.height*sc;
 oc.drawImage(im,(cv.width-dw)/2,(cv.height-dh)/2,dw,dh);
 const d=oc.getImageData(0,0,cv.width,cv.height).data;
 const gap=4;
 for(let y=0;y<cv.height;y+=gap)for(let x=0;x<cv.width;x+=gap){
  const i=(y*cv.width+x)*4;
  if(d[i+3]<40)continue;
  P.push({hx:x,hy:y,x,y,vx:0,vy:0,
   c:'rgb('+d[i]+','+d[i+1]+','+d[i+2]+')'});}
 const scatter=()=>{for(const p of P){
  p.vx+=(Math.random()-.5)*14;p.vy+=(Math.random()-.5)*14;}};
 wrap.addEventListener('pointerdown',scatter);
 onStop(()=>wrap.removeEventListener('pointerdown',scatter));
 const loop=()=>{
  ctx.fillStyle='rgba(10,11,14,.35)';ctx.fillRect(0,0,cv.width,cv.height);
  for(const p of P){
   p.vx=(p.vx+(p.hx-p.x)*.02)*.9;p.vy=(p.vy+(p.hy-p.y)*.02)*.9;
   p.x+=p.vx;p.y+=p.vy;
   ctx.fillStyle=p.c;ctx.fillRect(p.x,p.y,gap-1.2,gap-1.2);}
  raf=requestAnimationFrame(loop);};
 loop();};
im.src=img;
onStop(()=>cancelAnimationFrame(raf));`},

{id:'media-glitch',name:'Image Glitch',cat:'media',eng:'gl',txt:0,img:1,tags:['image','canvas','glitch'],
 css:`.s{width:100%;height:130px;border-radius:5px;overflow:hidden;background:#0A0B0E}
.s canvas{display:block;width:100%;height:100%}`,
 js:`root.innerHTML='<div class="s"><canvas></canvas></div>';
const cv=root.querySelector('canvas'),ctx=cv.getContext('2d');
const r=cv.getBoundingClientRect();cv.width=Math.max(1,r.width);cv.height=Math.max(1,r.height);
const im=new Image();im.crossOrigin='anonymous';
let raf,cd=0;
im.onload=()=>{
 const sc=Math.max(cv.width/im.width,cv.height/im.height);
 const dw=im.width*sc,dh=im.height*sc,ox=(cv.width-dw)/2,oy=(cv.height-dh)/2;
 const loop=()=>{
  ctx.clearRect(0,0,cv.width,cv.height);
  ctx.drawImage(im,ox,oy,dw,dh);
  if(--cd<=0){cd=14+Math.random()*40;}
  if(cd<9){
   for(let i=0;i<7;i++){
    const y=Math.random()*cv.height,hh=4+Math.random()*16;
    const dx=(Math.random()-.5)*36;
    ctx.drawImage(cv,0,y,cv.width,hh,dx,y,cv.width,hh);}
   ctx.globalCompositeOperation='screen';
   ctx.globalAlpha=.35;
   ctx.fillStyle='#5EEAD4';ctx.fillRect(-4,0,cv.width,cv.height);
   ctx.fillStyle='#FF4D8D';ctx.fillRect(4,0,cv.width,cv.height);
   ctx.globalAlpha=1;ctx.globalCompositeOperation='source-over';}
  raf=requestAnimationFrame(loop);};
 loop();};
im.src=img;
onStop(()=>cancelAnimationFrame(raf));`},

{id:'media-reveal',name:'Image Mask Reveal',cat:'media',eng:'css',txt:1,img:1,tags:['image','mask','loop'],
 css:`.s{position:relative;width:172px;height:112px;border-radius:6px;overflow:hidden;
 border:1px solid #2A3040}
.s img{width:100%;height:100%;object-fit:cover;display:block;
 clip-path:inset(0 100% 0 0);animation:rvl 3.6s cubic-bezier(.65,0,.35,1) infinite}
.s u{position:absolute;top:0;bottom:0;width:3px;background:#5EEAD4;
 box-shadow:0 0 14px #5EEAD4;animation:rbar 3.6s cubic-bezier(.65,0,.35,1) infinite}
.s span{position:absolute;left:10px;bottom:9px;font:800 14px/1 Archivo,sans-serif;
 letter-spacing:-.02em;color:#fff;text-shadow:0 2px 12px rgba(0,0,0,.8)}
@keyframes rvl{0%,6%{clip-path:inset(0 100% 0 0)}54%,72%{clip-path:inset(0 0 0 0)}
 100%{clip-path:inset(0 0 0 100%)}}
@keyframes rbar{0%,6%{left:0}54%,72%{left:calc(100% - 3px)}100%{left:calc(100% - 3px);opacity:0}}`,
 js:`root.innerHTML='<div class="s"><img src="'+img+'" alt=""><u></u><span>'+esc(text)+'</span></div>';`},

{id:'media-three',name:'3D Photo Plane',cat:'media',eng:'three',txt:0,img:1,tags:['image','3d','mesh'],
 css:`.s{width:100%;height:132px;border-radius:5px;overflow:hidden;background:#0A0B0E}
.s canvas{display:block;width:100%!important;height:100%!important}`,
 js:`const T=eng;
root.innerHTML='<div class="s"></div>';
const host=root.querySelector('.s'),r=host.getBoundingClientRect();
const w=Math.max(1,r.width),h=Math.max(1,r.height);
const sc=new T.Scene();
const cam=new T.PerspectiveCamera(46,w/h,.1,100);cam.position.z=3.1;
const rd=new T.WebGLRenderer({antialias:true,alpha:true});
rd.setPixelRatio(DPR);rd.setSize(w,h);host.appendChild(rd.domElement);
const loader=new T.TextureLoader();
const tex=loader.load(img);
const geo=new T.PlaneGeometry(3,1.9,34,22);
const mat=new T.MeshBasicMaterial({map:tex,side:T.DoubleSide});
const mesh=new T.Mesh(geo,mat);sc.add(mesh);
const base=geo.attributes.position.array.slice();
let raf,t=0;
const loop=()=>{t+=.026;
 const p=geo.attributes.position.array;
 for(let i=0;i<p.length;i+=3){
  p[i+2]=Math.sin(base[i]*2.2+t)*.14+Math.cos(base[i+1]*2.6-t*.9)*.1;}
 geo.attributes.position.needsUpdate=true;
 mesh.rotation.y=Math.sin(t*.4)*.3;
 rd.render(sc,cam);raf=requestAnimationFrame(loop);};
loop();
onStop(()=>{cancelAnimationFrame(raf);geo.dispose();mat.dispose();tex.dispose();rd.dispose();});`}
];

/* ══════════════════════════════════════════════════════════
   THE ARCHIVE — hidden experimental components
   Unlocked via secret key sequence. Tagged 'archive'.
   ══════════════════════════════════════════════════════════ */
export const ARCHIVE_LIB = [
{id:'archive-spectral',name:'Spectral Analyzer',cat:'shader',eng:'gl',txt:1,tags:['archive','canvas','audio'],
 css:`.s{width:100%;height:130px}`,
 js:`const c=document.createElement('canvas');c.width=280;c.height=130;
 root.appendChild(c);const x=c.getContext('2d');const t=[...Array(64)].map(()=>0);
 const loop=()=>{x.fillStyle='rgba(10,11,14,.18)';x.fillRect(0,0,280,130);x.fillStyle='#5EEAD4';
  for(let i=0;i<t.length;i++){const h=(Math.sin(performance.now()*.003+i*.18)+1)*22+8;
   t[i]+=(h-t[i])*.12;x.fillRect(i*4.3,130-t[i],3.2,t[i]);}raf=requestAnimationFrame(loop);};
 let raf=requestAnimationFrame(loop);
 onStop(()=>cancelAnimationFrame(raf));`},

{id:'archive-morph-grid',name:'Morph Grid',cat:'ambient',eng:'css',txt:0,tags:['archive','grid','morph'],
 css:`.s{display:grid;grid-template-columns:repeat(6,1fr);gap:4px;width:170px}
.s b{aspect-ratio:1;background:#5EEAD4;border-radius:4px;opacity:.7;
 animation:amg 3.2s ease-in-out infinite;animation-delay:calc(var(--i)*.08s)}
@keyframes amg{0%,100%{border-radius:4px;transform:scale(1) rotate(0deg);opacity:.7}
 50%{border-radius:50%;transform:scale(.5) rotate(90deg);opacity:.3}}`,
 js:`root.innerHTML='<div class="s">'+Array.from({length:24},(_,i)=>'<b style="--i:'+i+'"></b>').join('')+'</div>';`},

{id:'archive-cursor-realm',name:'Cursor Realm',cat:'ambient',eng:'three',txt:0,tags:['archive','3d','pointer'],
 css:`.s{width:100%;height:130px}`,
 js:`const{Scene,PerspectiveCamera,WebGLRenderer,BufferGeometry,Points,PointsMaterial,BufferAttribute,AdditiveBlending}=eng;
 const sc=new Scene(),ca=new PerspectiveCamera(60,280/130,.1,200);
 ca.position.z=18;const rd=new WebGLRenderer({alpha:true,antialias:true});
 rd.setSize(280,130);rd.setPixelRatio(Math.min(devicePixelRatio,2));root.appendChild(rd.domElement);
 const g=new BufferGeometry();const p=Float32Array.from({length:2000*3},()=>(Math.random()-.5)*2);
 g.setAttribute('position',new BufferAttribute(p,3));
 const m=new PointsMaterial({color:'#5EEAD4',size:.18,blending:AdditiveBlending,transparent:true,opacity:.7});
 const pt=new Points(g,m);sc.add(pt);
 let mx=0,my=0,raf;
 const loop=(t)=>{const w=280,h=130;
  const target={x:0,y:0};
  if(mx>=0&&my>=0){target.x=(mx/w)*2-1;target.y=-(my/h)*2+1;}
  target.x*=12;target.y*=8;
  for(let i=0;i<2000;i++){const i3=i*3;
   const dx=(target.x+Math.sin(i*.07+t*.001)*4-p[i3])*.014;
   const dy=(target.y+Math.cos(i*.11+t*.001)*3-p[i3+1])*.014;
   const dz=(Math.sin(i*.13+t*.0013)*2-p[i3+2])*.014;
   p[i3]+=dx;p[i3+1]+=dy;p[i3+2]+=dz;}
  g.attributes.position.needsUpdate=true;
  rd.render(sc,ca);raf=requestAnimationFrame(loop);};
 const mv=e=>{const r=rd.domElement.getBoundingClientRect();mx=e.clientX-r.left;my=e.clientY-r.top;};
 rd.domElement.addEventListener('pointermove',mv);loop(0);
 onStop(()=>{cancelAnimationFrame(raf);rd.dispose();rd.domElement.removeEventListener('pointermove',mv);});`},

{id:'archive-thread-veil',name:'Thread Veil',cat:'text',eng:'gsap',txt:1,tags:['archive','text','ribbon'],
 css:`.s{position:relative;width:100%;height:126px;display:grid;place-items:center;overflow:hidden}
.s .t{font:900 32px/1 Archivo,sans-serif;letter-spacing:-.03em;color:#8BE84A;position:relative;z-index:2;
 text-shadow:0 0 30px rgba(139,232,74,.2)}
.s u{position:absolute;inset:0;pointer-events:none}`,
 js:`const gsap=eng;
 root.innerHTML='<div class="s"><span class="t">'+esc(text)+'</span>'+
  Array.from({length:8},()=>'<u style="height:1.5px;background:linear-gradient(90deg,transparent,#8BE84A,transparent)"></u>').join('')+'</div>';
 const lines=[...root.querySelectorAll('.s u')];
 lines.forEach((el,i)=>{gsap.set(el,{top:(10+i*13)+'%',scaleX:.2,opacity:.7});
  gsap.to(el,{scaleX:[.2,1.8,.2],opacity:[.7,.2,.7],duration:3.6+Math.random()*2,
   ease:'sine.inOut',repeat:-1,delay:i*.3});});`},

{id:'archive-vision',name:'Vision Pulse',cat:'text',eng:'motion',txt:1,tags:['archive','text','pulse'],
 css:`.s{display:flex;gap:.03em;font:900 32px/1 Archivo,sans-serif;letter-spacing:-.03em}
.s i{font-style:normal;display:inline-block;color:#8B7CFF;
 filter:blur(2px);opacity:.6}`,
 js:`const{animate,stagger}=eng;
 root.innerHTML='<span class="s">'+chars(text)+'</span>';
 const L=root.querySelectorAll('.s i');
 const run=()=>animate(L,{filter:['blur(2px)','blur(0px)','blur(2px)'],opacity:[.6,1,.6]},
  {duration:2.2,delay:stagger(.03),ease:'easeInOut',repeat:Infinity});
  run();`},

/* ─── TEXT ─── */
{id:'archive-text-dissolve',name:'Text Dissolve',cat:'text',eng:'motion',txt:1,tags:['archive','text','dissolve'],
 css:`.s{display:flex;gap:.03em;font:900 32px/1 Archivo,sans-serif;letter-spacing:-.03em}
.s i{font-style:normal;display:inline-block;color:#E9EBF1}`,
 js:`const{animate,stagger}=eng;
 root.innerHTML='<span class="s">'+chars(text)+'</span>';
 const L=root.querySelectorAll('.s i');
 const run=()=>animate(L,{opacity:[1,0,1],filter:['blur(0px)','blur(6px)','blur(0px)']},
  {duration:3,delay:stagger(.04),ease:'easeInOut',repeat:Infinity});
 run();`},

{id:'archive-text-scramble',name:'Text Scramble',cat:'text',eng:'css',txt:1,tags:['text','scramble','glitch','premium'],
 css:`.s{font:900 32px/1 Archivo,sans-serif;letter-spacing:-.03em;color:#E9EBF1;position:relative}
.s::before{content:attr(data-t);position:absolute;inset:0;color:#5EEAD4;
 animation:scr 2.4s steps(1) infinite;clip-path:inset(0 0 50% 0)}
.s::after{content:attr(data-t);position:absolute;inset:0;color:#FF6B9D;
 animation:scr 2.4s steps(1) infinite .8s;clip-path:inset(50% 0 0 0)}
@keyframes scr{0%,100%{transform:translate(0)}25%{transform:translate(2px,-1px)}50%{transform:translate(-1px,1px)}75%{transform:translate(-2px,-1px)}}`,
 js:`root.innerHTML='<span class="s" data-t="'+esc(text)+'">'+esc(text)+'</span>';`},

{id:'archive-typewriter',name:'Typewriter',cat:'text',eng:'css',txt:1,tags:['archive','text','typewriter'],
 css:`.s{font:400 28px/1.3 JetBrains Mono,monospace;color:#E9EBF1;border-right:2px solid #5EEAD4;
 animation:twBlink .8s step-end infinite;white-space:nowrap;overflow:hidden;max-width:100%}
@keyframes twBlink{50%{border-color:transparent}}`,
 js:`const t=esc(text);root.innerHTML='<span class="s">'+t+'</span>';
 const s=root.querySelector('.s');let i=0,dir=1;
 const iv=setInterval(()=>{i+=dir;if(i>t.length||i<0){dir*=-1;i+=dir;}
  s.textContent=t.slice(0,i);},80);
 onStop(()=>clearInterval(iv));`},

{id:'archive-text-wave',name:'Text Wave',cat:'text',eng:'css',txt:1,tags:['archive','text','wave'],
 css:`.s{display:flex;gap:.04em;font:900 32px/1 Archivo,sans-serif;letter-spacing:-.03em}
.s i{font-style:normal;display:inline-block;color:#E9EBF1;
 animation:tw 2.8s ease-in-out infinite;animation-delay:calc(var(--i)*.06s)}
@keyframes tw{0%,100%{transform:translateY(0)}45%{transform:translateY(-.25em)}60%{transform:translateY(.12em)}}`,
 js:`root.innerHTML='<span class="s">'+chars(text)+'</span>';`},

{id:'archive-text-shimmer',name:'Text Shimmer',cat:'text',eng:'css',txt:1,tags:['text','shimmer','premium'],
 css:`.s{font:900 32px/1 Archivo,sans-serif;letter-spacing:-.03em;
  background:linear-gradient(90deg,#E9EBF1 0%,#5EEAD4 30%,#E9EBF1 60%);
  background-size:300% 100%;-webkit-background-clip:text;background-clip:text;color:transparent;
  animation:shim 3s linear infinite}
@keyframes shim{from{background-position:300% 0}to{background-position:-100% 0}}`,
 js:`root.innerHTML='<span class="s">'+esc(text)+'</span>';`},

{id:'archive-text-spring',name:'Text Spring',cat:'text',eng:'anime',txt:1,tags:['archive','text','spring'],
 css:`.s{display:flex;gap:.04em;font:900 32px/1 Archivo,sans-serif;letter-spacing:-.03em}
.s i{font-style:normal;display:inline-block;color:#E9EBF1}`,
 js:`const{animate,stagger,spring}=eng;
 root.innerHTML='<span class="s">'+chars(text)+'</span>';
 const L=root.querySelectorAll('.s i');
 const run=()=>animate(L,{scale:[.5,1],opacity:[0,1]},
  {duration:1200,delay:stagger(40),easing:spring({bounce:.6}),loop:true,alternate:true});
 run();`},

/* ─── AMBIENT ─── */
{id:'archive-ambient-gradient',name:'Gradient Drift',cat:'ambient',eng:'css',txt:0,tags:['ambient','gradient','premium'],
 css:`.s{width:100%;height:130px;border-radius:6px;
  background:linear-gradient(135deg,#5EEAD4,#8B7CFF,#FF6B9D,#5EEAD4);
  background-size:400% 400%;animation:gd 8s ease infinite}
@keyframes gd{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}`,
 js:`root.innerHTML='<div class="s"></div>';`},

{id:'archive-ambient-aurora',name:'Aurora',cat:'ambient',eng:'gl',txt:0,tags:['archive','ambient','aurora','gl'],
 css:`.s{width:100%;height:130px;border-radius:6px}`,
 js:`const c=document.createElement('canvas');c.width=280;c.height=130;
 root.appendChild(c);const x=c.getContext('2d');
 const loop=(t)=>{const t3=t*.0003;
  x.fillStyle='rgba(10,11,14,.08)';x.fillRect(0,0,280,130);
  for(let i=0;i<5;i++){const yi=i*26+Math.sin(t3+i*1.2)*20+20;
   const g=x.createRadialGradient(140,yi,0,140,yi,60);
   g.addColorStop(0,'rgba(94,234,212,'+(.15+Math.sin(t3+i*.7)*.08)+')');
   g.addColorStop(1,'rgba(94,234,212,0)');
   x.fillStyle=g;x.beginPath();x.arc(140,yi,60,0,Math.PI*2);x.fill();}
  raf=requestAnimationFrame(loop);};
 let raf=requestAnimationFrame(loop);
 onStop(()=>cancelAnimationFrame(raf));`},

{id:'archive-ambient-particles',name:'Particle Float',cat:'ambient',eng:'gl',txt:0,tags:['ambient','particles'],
 css:`.s{width:100%;height:130px;border-radius:6px}`,
 js:`const c=document.createElement('canvas');c.width=280;c.height=130;
 root.appendChild(c);const x=c.getContext('2d');
 const pts=[...Array(40)].map(()=>({x:Math.random()*280,y:Math.random()*130,s:Math.random()*2+1,
  vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3}));
 const loop=()=>{x.fillStyle='rgba(10,11,14,.15)';x.fillRect(0,0,280,130);
  pts.forEach(p=>{p.x+=p.vx;p.y+=p.vy;
   if(p.x<0||p.x>280)p.vx*=-1;if(p.y<0||p.y>130)p.vy*=-1;
   x.fillStyle='rgba(94,234,212,'+(.3+p.s*.15)+')';x.beginPath();
   x.arc(p.x,p.y,p.s,0,Math.PI*2);x.fill();});
  raf=requestAnimationFrame(loop);};
 let raf=requestAnimationFrame(loop);
 onStop(()=>cancelAnimationFrame(raf));`},

{id:'archive-ambient-noise',name:'Organic Noise',cat:'ambient',eng:'gl',txt:0,tags:['archive','ambient','noise'],
 css:`.s{width:100%;height:130px;border-radius:6px}`,
 js:`const c=document.createElement('canvas');c.width=280;c.height=130;
 root.appendChild(c);const x=c.getContext('2d');
 const loop=(t)=>{const t3=t*.0005;
  const img=x.createImageData(280,130);
  for(let i=0;i<img.data.length;i+=4){
   const n=((Math.sin(i*.01+t3)*.5+.5)+(Math.cos(i*.007+t3*.7)*.5+.5))*.5*255;
   img.data[i]=n;img.data[i+1]=n*.6;img.data[i+2]=255-n*.3;img.data[i+3]=255;}
  x.putImageData(img,0,0);
  raf=requestAnimationFrame(loop);};
 let raf=requestAnimationFrame(loop);
 onStop(()=>cancelAnimationFrame(raf));`},

{id:'archive-ambient-rings',name:'Concentric Rings',cat:'ambient',eng:'gl',txt:0,tags:['archive','ambient','rings'],
 css:`.s{width:100%;height:130px;border-radius:6px}`,
 js:`const c=document.createElement('canvas');c.width=280;c.height=130;
 root.appendChild(c);const x=c.getContext('2d');
 const loop=(t)=>{const t3=t*.0004;
  x.fillStyle='rgba(10,11,14,.12)';x.fillRect(0,0,280,130);
  for(let i=0;i<8;i++){const r=20+i*18+Math.sin(t3+i*.8)*8;
   x.strokeStyle='rgba(94,234,212,'+(.08+Math.sin(t3+i*.5)*.06)+')';
   x.lineWidth=1.5;x.beginPath();x.arc(140,65,r,0,Math.PI*2);x.stroke();}
  raf=requestAnimationFrame(loop);};
 let raf=requestAnimationFrame(loop);
 onStop(()=>cancelAnimationFrame(raf));`},

/* ─── SHADER / CANVAS ─── */
{id:'archive-shader-plasma',name:'Plasma',cat:'shader',eng:'gl',txt:0,tags:['shader','plasma'],
 css:`.s{width:100%;height:130px;border-radius:6px}`,
 js:`const c=document.createElement('canvas');c.width=280;c.height=130;
 root.appendChild(c);const x=c.getContext('2d');
 const loop=(t)=>{const t3=t*.0002;const img=x.createImageData(280,130);
  for(let y=0;y<130;y++)for(let x2=0;x2<280;x2++){const i=(y*280+x2)*4;
   const v=Math.sin(x2*.05+t3)+Math.sin(y*.03+t3*.7)+Math.sin((x2+y)*.04+t3*.5);
   img.data[i]=128+Math.sin(v)*127;img.data[i+1]=128+Math.sin(v+2)*127;
   img.data[i+2]=128+Math.sin(v+4)*127;img.data[i+3]=255;}
  x.putImageData(img,0,0);raf=requestAnimationFrame(loop);};
 let raf=requestAnimationFrame(loop);
 onStop(()=>cancelAnimationFrame(raf));`},

{id:'archive-shader-tunnel',name:'Tunnel',cat:'shader',eng:'gl',txt:0,tags:['archive','shader','tunnel'],
 css:`.s{width:100%;height:130px;border-radius:6px}`,
 js:`const c=document.createElement('canvas');c.width=280;c.height=130;
 root.appendChild(c);const x=c.getContext('2d');
 const loop=(t)=>{const t3=t*.0003;const img=x.createImageData(280,130);
  for(let y=0;y<130;y++)for(let x2=0;x2<280;x2++){const i=(y*280+x2)*4;
   const dx=x2-140,dy=y-65;const a=Math.atan2(dy,dx)+t3;
   const d=Math.sqrt(dx*dx+dy*dy);const v=Math.sin(a*6+d*.08+t3)*.5+.5;
   img.data[i]=50+v*200;img.data[i+1]=20+v*100;img.data[i+2]=80+v*170;img.data[i+3]=255;}
  x.putImageData(img,0,0);raf=requestAnimationFrame(loop);};
 let raf=requestAnimationFrame(loop);
 onStop(()=>cancelAnimationFrame(raf));`},

{id:'archive-shader-ripple',name:'Ripple',cat:'shader',eng:'gl',txt:0,tags:['archive','shader','ripple'],
 css:`.s{width:100%;height:130px;border-radius:6px}`,
 js:`const c=document.createElement('canvas');c.width=280;c.height=130;
 root.appendChild(c);const x=c.getContext('2d');
 const loop=(t)=>{const t3=t*.0004;x.fillStyle='rgba(10,11,14,.06)';x.fillRect(0,0,280,130);
  for(let i=0;i<12;i++){const cx=140+Math.sin(t3+i*.9)*80;
   const cy=65+Math.cos(t3+i*1.1)*40;
   const r=16+Math.sin(t3*.7+i*.6)*10;
   x.strokeStyle='rgba(94,234,212,'+(.04+Math.sin(t3+i*.5)*.03)+')';
   x.lineWidth=1.5;x.beginPath();x.arc(cx,cy,r,0,Math.PI*2);x.stroke();}
  raf=requestAnimationFrame(loop);};
 let raf=requestAnimationFrame(loop);
 onStop(()=>cancelAnimationFrame(raf));`},

{id:'archive-shader-warp',name:'Image Warp',cat:'shader',eng:'gl',txt:0,img:1,tags:['archive','shader','warp','image'],
 css:`.s{width:100%;height:130px;border-radius:6px;overflow:hidden}`,
 js:`const img=new Image();img.crossOrigin='anonymous';img.src=img;
 const c=document.createElement('canvas');c.width=280;c.height=130;
 root.appendChild(c);const x=c.getContext('2d');
 img.onload=()=>{const loop=(t)=>{const t3=t*.0002;
   x.clearRect(0,0,280,130);
   for(let i=0;i<20;i++){const sx=Math.sin(i*.3+t3)*40;
    const sy=Math.cos(i*.4+t3*.7)*20;
    x.drawImage(img,i*14+sx,10+sy,16,110,i*14,10,16,110);}
   raf=requestAnimationFrame(loop);};
  let raf=requestAnimationFrame(loop);onStop(()=>cancelAnimationFrame(raf));};
 if(img.complete)img.onload();`},

{id:'archive-shader-spectrum',name:'Spectrum',cat:'shader',eng:'gl',txt:0,tags:['shader','audio','bars'],
 css:`.s{width:100%;height:130px;border-radius:6px}`,
 js:`const c=document.createElement('canvas');c.width=280;c.height=130;
 root.appendChild(c);const x=c.getContext('2d');const b=[...Array(48)].map(()=>0);
 const loop=()=>{x.fillStyle='rgba(10,11,14,.12)';x.fillRect(0,0,280,130);
  for(let i=0;i<b.length;i++){const h=(Math.sin(i*.13+performance.now()*.002)+1)*30+5;
   b[i]+=(h-b[i])*.1;const g=x.createLinearGradient(0,130,0,130-b[i]);
   g.addColorStop(0,'#5EEAD4');g.addColorStop(1,'#8B7CFF');
   x.fillStyle=g;x.fillRect(i*5.8,130-b[i],4.6,b[i]);}
  raf=requestAnimationFrame(loop);};
 let raf=requestAnimationFrame(loop);
  onStop(()=>cancelAnimationFrame(raf));`},

/* ─── THREE.JS ─── */
{id:'archive-three-floating',name:'Floating Geometry',cat:'three',eng:'three',txt:0,tags:['three','ambient'],
 css:`.s{width:100%;height:130px}`,
 js:`const{Scene,PerspectiveCamera,WebGLRenderer,IcosahedronGeometry,DodecahedronGeometry,
  MeshStandardMaterial,Mesh,AmbientLight,DirectionalLight}=eng;
 const sc=new Scene(),ca=new PerspectiveCamera(50,280/130,.1,100);
 ca.position.z=22;const rd=new WebGLRenderer({alpha:true,antialias:true});
 rd.setSize(280,130);rd.setPixelRatio(Math.min(devicePixelRatio,2));root.appendChild(rd.domElement);
 sc.add(new AmbientLight('#404060'));
 const dl=new DirectionalLight('#ffffff',1);dl.position.set(10,10,10);sc.add(dl);
 const meshes=[];
 for(let i=0;i<6;i++){const geo=i%2?new IcosahedronGeometry(1.2,0):new DodecahedronGeometry(1.1,0);
  const mat=new MeshStandardMaterial({color:'#5EEAD4',metalness:.3,roughness:.4,emissive:'#1a3a3a',emissiveIntensity:.2});
  const m=new Mesh(geo,mat);m.position.set(Math.sin(i)*3.5,Math.cos(i*1.3)*2.2,-i*1.5);
  m.rotation.set(Math.random()*6,Math.random()*6,0);sc.add(m);meshes.push(m);}
 const loop=()=>{meshes.forEach((m,i)=>{m.rotation.x+=.005+i*.002;m.rotation.y+=.008-i*.003;});
  rd.render(sc,ca);raf=requestAnimationFrame(loop);};
 let raf=requestAnimationFrame(loop);
 onStop(()=>{cancelAnimationFrame(raf);rd.dispose();});`},

{id:'archive-three-particles',name:'Star Field',cat:'three',eng:'three',txt:0,tags:['three','particles'],
 css:`.s{width:100%;height:130px}`,
 js:`const{Scene,PerspectiveCamera,WebGLRenderer,BufferGeometry,Points,PointsMaterial,
  BufferAttribute,AdditiveBlending}=eng;
 const sc=new Scene(),ca=new PerspectiveCamera(60,280/130,.1,200);
 ca.position.z=30;const rd=new WebGLRenderer({alpha:true});
 rd.setSize(280,130);rd.setPixelRatio(Math.min(devicePixelRatio,2));root.appendChild(rd.domElement);
 const p=new Float32Array(900);
 for(let i=0;i<900;i++)p[i]=Math.random()*60-30;
 const g=new BufferGeometry();g.setAttribute('position',new BufferAttribute(p,3));
 const m=new PointsMaterial({color:'#5EEAD4',size:.15,transparent:true,opacity:.6,blending:AdditiveBlending});
 const P=new Points(g,m);sc.add(P);
 const loop=()=>{const pos=g.attributes.position.array;
  for(let i=0;i<pos.length;i+=3){pos[i+1]-=.01;
   if(pos[i+1]<-20)pos[i+1]=20;}
  pos.needsUpdate=true;rd.render(sc,ca);raf=requestAnimationFrame(loop);};
 let raf=requestAnimationFrame(loop);
 onStop(()=>{cancelAnimationFrame(raf);rd.dispose();});`},

{id:'archive-three-wireframe',name:'Wireframe Sphere',cat:'three',eng:'three',txt:0,tags:['archive','three','wireframe'],
 css:`.s{width:100%;height:130px}`,
 js:`const{Scene,PerspectiveCamera,WebGLRenderer,SphereGeometry,MeshBasicMaterial,Mesh,WireframeGeometry,
  LineSegments,LineBasicMaterial,AdditiveBlending}=eng;
 const sc=new Scene(),ca=new PerspectiveCamera(50,280/130,.1,100);
 ca.position.z=20;const rd=new WebGLRenderer({alpha:true});
 rd.setSize(280,130);rd.setPixelRatio(Math.min(devicePixelRatio,2));root.appendChild(rd.domElement);
 const geo=new SphereGeometry(6,24,18);const wg=new WireframeGeometry(geo);
 const mat=new LineBasicMaterial({color:'#5EEAD4',transparent:true,opacity:.5});
 const line=new LineSegments(wg,mat);sc.add(line);
 const loop=()=>{line.rotation.x+=.003;line.rotation.y+=.005;rd.render(sc,ca);raf=requestAnimationFrame(loop);};
 let raf=requestAnimationFrame(loop);
 onStop(()=>{cancelAnimationFrame(raf);geo.dispose();rd.dispose();});`},

{id:'archive-three-torus',name:'Torus Knot Field',cat:'three',eng:'three',txt:0,tags:['archive','three','knot'],
 css:`.s{width:100%;height:130px}`,
 js:`const{Scene,PerspectiveCamera,WebGLRenderer,TorusKnotGeometry,MeshStandardMaterial,Mesh,
  AmbientLight,DirectionalLight,AdditiveBlending}=eng;
 const sc=new Scene(),ca=new PerspectiveCamera(45,280/130,.1,100);
 ca.position.set(8,6,16);ca.lookAt(0,0,0);
 const rd=new WebGLRenderer({alpha:true});rd.setSize(280,130);
 rd.setPixelRatio(Math.min(devicePixelRatio,2));root.appendChild(rd.domElement);
 sc.add(new AmbientLight('#404060'));
 const dl=new DirectionalLight('#ffffff',1);dl.position.set(5,10,7);sc.add(dl);
 const knots=[];
 for(let i=0;i<4;i++){const g=new TorusKnotGeometry(1.6,.5,64,8);
  const m=new MeshStandardMaterial({color:['#5EEAD4','#8B7CFF','#FF6B9D','#8BE84A'][i],
   metalness:.6,roughness:.2,emissive:'#1a2a3a',emissiveIntensity:.15});
  const k=new Mesh(g,m);k.position.set(i%2===0?-3:3,i<2?-1.5:1.5,0);
  k.scale.set(1,1,1);sc.add(k);knots.push(k);}
 const loop=()=>{knots.forEach((k,i)=>{k.rotation.x+=.004+i*.002;k.rotation.y+=.006-i*.001;});
  rd.render(sc,ca);raf=requestAnimationFrame(loop);};
 let raf=requestAnimationFrame(loop);
 onStop(()=>{cancelAnimationFrame(raf);knots.forEach(k=>{k.geometry.dispose();k.material.dispose();});rd.dispose();});`},

{id:'archive-three-rings',name:'Ring System',cat:'three',eng:'three',txt:0,tags:['archive','three','rings','ambient'],
 css:`.s{width:100%;height:130px}`,
 js:`const{Scene,PerspectiveCamera,WebGLRenderer,RingGeometry,MeshBasicMaterial,Mesh,
  AdditiveBlending,Group}=eng;
 const sc=new Scene(),ca=new PerspectiveCamera(50,280/130,.1,100);
 ca.position.set(0,2,18);ca.lookAt(0,0,0);
 const rd=new WebGLRenderer({alpha:true});rd.setSize(280,130);
 rd.setPixelRatio(Math.min(devicePixelRatio,2));root.appendChild(rd.domElement);
 const group=new Group();sc.add(group);
 for(let i=0;i<12;i++){const r=1.2+i*1.1;
  const geo=new RingGeometry(r-.12,r+.12,48);const hue=i/12*.8+.2;
  const mat=new MeshBasicMaterial({color:'#5EEAD4',transparent:true,opacity:.2+i*.04,
   side:2,blending:AdditiveBlending,depthWrite:false});
  const ring=new Mesh(geo,mat);ring.rotation.x=Math.PI/3+Math.sin(i)*.3;
  ring.rotation.z=i*.25;group.add(ring);}
 const loop=()=>{group.rotation.y+=.004;group.rotation.x=Math.PI/3+Math.sin(Date.now()*.00008)*.05;
  rd.render(sc,ca);raf=requestAnimationFrame(loop);};
 let raf=requestAnimationFrame(loop);
 onStop(()=>{cancelAnimationFrame(raf);rd.dispose();});`},

/* ─── PHYSICS / MATTER.JS ─── */
 {id:'archive-physics-falling',name:'Falling Shapes',cat:'physics',eng:'matter',txt:0,tags:['physics','interactive','premium'],
 css:`.s{width:100%;height:130px;border-radius:6px;overflow:hidden;cursor:pointer}`,
 js:`const M=eng;const{Engine,Render,Runner,Bodies,Body,Composite,Events,Mouse,MouseConstraint}=M;
 const w=280,h=130;
 const engine=Engine.create({gravity:{x:0,y:.6}});
 const render=Render.create({element:root,engine:engine,options:{width:w,height:h,
  wireframes:false,background:'transparent',pixelRatio:DPR}});
 const runner=Runner.create();const wall=(x,y,w2,h2)=>Bodies.rectangle(x,y,w2,h2,{isStatic:true});
 Composite.add(engine.world,[wall(140,-5,290,10),wall(140,135,290,10),wall(-5,65,10,130),wall(285,65,10,130)]);
 const colors=['#5EEAD4','#8B7CFF','#FF6B9D','#8BE84A'];
 let drop=()=>{const shape=Math.random()>.5?'circle':'rectangle';
  const b=shape==='circle'?Bodies.circle(20+Math.random()*240,-10,6+Math.random()*6,
   {restitution:.5,friction:.1,render:{fillStyle:colors[Math.floor(Math.random()*4)]}})
   :Bodies.rectangle(20+Math.random()*240,-10,14+Math.random()*8,14+Math.random()*8,
   {restitution:.4,friction:.1,render:{fillStyle:colors[Math.floor(Math.random()*4)]}});
  Composite.add(engine.world,b);};
 const iv=setInterval(drop,600);drop();drop();drop();
 Render.run(render);Runner.run(runner,engine);
 const tap=()=>{for(let i=0;i<5;i++)drop();};
 root.addEventListener('pointerdown',tap);
 onStop(()=>{clearInterval(iv);Render.stop(render);Runner.stop(runner);
  root.removeEventListener('pointerdown',tap);Engine.clear(engine);
  render.canvas.remove();});`},

{id:'archive-physics-bouncy',name:'Bouncy Letters',cat:'physics',eng:'matter',txt:1,tags:['archive','physics','text'],
 css:`.s{width:100%;height:130px;border-radius:6px;overflow:hidden}`,
 js:`const M=eng;const{Engine,Render,Runner,Bodies,Body,Composite}=M;
 const w=280,h=130;const chars2=[...text];
 const engine=Engine.create({gravity:{x:0,y:.8}});
 const render=Render.create({element:root,engine:engine,options:{width:w,height:h,
  wireframes:false,background:'transparent',pixelRatio:DPR}});
 const runner=Runner.create();
 Composite.add(engine.world,[Bodies.rectangle(140,-5,290,10,{isStatic:true}),
  Bodies.rectangle(140,135,290,10,{isStatic:true}),
  Bodies.rectangle(-5,65,10,130,{isStatic:true}),Bodies.rectangle(285,65,10,130,{isStatic:true})]);
 const letters=chars2.map((c,i)=>Bodies.circle(30+i*20,10+Math.random()*20,8,
  {restitution:.6,friction:.05,render:{fillStyle:'#5EEAD4'}}));
 Composite.add(engine.world,letters);
 const labels=[];const labelIv=setInterval(()=>{
  labels.forEach(l=>{const p=l.body.position;l.el.style.transform='translate('+p.x+'px,'+p.y+'px)';});
  if(letters.some(l=>l.position.y>100)){letters.forEach(l=>Body.setPosition(l,{x:l.position.x,y:10+Math.random()*20}));
   Body.setVelocity(letters[0],{x:0,y:0});}},16);
 Render.run(render);Runner.run(runner,engine);
 onStop(()=>{clearInterval(labelIv);Render.stop(render);Runner.stop(runner);
  Engine.clear(engine);render.canvas.remove();});`},

{id:'archive-physics-chain',name:'Chain Reaction',cat:'physics',eng:'matter',txt:0,tags:['physics','chain','interactive'],
 css:`.s{width:100%;height:130px;border-radius:6px;overflow:hidden;cursor:pointer}`,
 js:`const M=eng;const{Engine,Render,Runner,Bodies,Body,Composite,Constraint,Mouse,MouseConstraint}=M;
 const w=280,h=130;
 const engine=Engine.create({gravity:{x:0,y:.7}});
 const render=Render.create({element:root,engine:engine,options:{width:w,height:h,
  wireframes:false,background:'transparent',pixelRatio:DPR}});
 const runner=Runner.create();const wall=(x,y,w2,h2)=>Bodies.rectangle(x,y,w2,h2,{isStatic:true});
 Composite.add(engine.world,[wall(140,135,290,10)]);
 const anchor=Bodies.rectangle(140,10,10,10,{isStatic:true});
 const links=[];let prev=anchor;
 for(let i=0;i<14;i++){const l=Bodies.circle(140+i*2,20+i*7,5,
  {restitution:.3,friction:.01,render:{fillStyle:i%2?'#5EEAD4':'#8B7CFF'}});
  Composite.add(engine.world,l);links.push(l);
  Composite.add(engine.world,Constraint.create({bodyA:prev,bodyB:l,length:6,stiffness:.9}));
  prev=l;}
 const mouse=Mouse.create(render.canvas);
 const mc=MouseConstraint.create(engine,{mouse,constraint:{stiffness:.2,render:{visible:false}}});
 Composite.add(engine.world,mc);
 render.mouse=mouse;Render.run(render);Runner.run(runner,engine);
 onStop(()=>{Render.stop(render);Runner.stop(runner);Engine.clear(engine);render.canvas.remove();});`},

{id:'archive-physics-slide',name:'Physics Slide',cat:'physics',eng:'matter',txt:0,tags:['archive','physics','slide','interactive'],
 css:`.s{width:100%;height:130px;border-radius:6px;overflow:hidden;cursor:pointer}`,
 js:`const M=eng;const{Engine,Render,Runner,Bodies,Body,Composite,Mouse,MouseConstraint}=M;
 const w=280,h=130;
 const engine=Engine.create({gravity:{x:0,y:.5}});
 const render=Render.create({element:root,engine:engine,options:{width:w,height:h,
  wireframes:false,background:'transparent',pixelRatio:DPR}});
 const runner=Runner.create();
 Composite.add(engine.world,[Bodies.rectangle(10,65,20,130,{isStatic:true,angle:.25}),
  Bodies.rectangle(270,65,20,130,{isStatic:true,angle:-.25}),
  Bodies.rectangle(140,135,290,10,{isStatic:true})]);
 const colors=['#5EEAD4','#8B7CFF','#FF6B9D','#8BE84A','#FFB347'];
 for(let i=0;i<20;i++){const shape=Bodies.circle(30+Math.random()*220,10+Math.random()*20,5+Math.random()*8,
  {restitution:.3+Math.random()*.4,friction:.05+Math.random()*.2,
   render:{fillStyle:colors[Math.floor(Math.random()*colors.length)]}});
  Composite.add(engine.world,shape);}
 const mouse=Mouse.create(render.canvas);
 const mc=MouseConstraint.create(engine,{mouse,constraint:{stiffness:.3,render:{visible:false}}});
 Composite.add(engine.world,mc);render.mouse=mouse;
 Render.run(render);Runner.run(runner,engine);
 onStop(()=>{Render.stop(render);Runner.stop(runner);Engine.clear(engine);render.canvas.remove();});`},

{id:'archive-physics-explode',name:'Explode',cat:'physics',eng:'matter',txt:0,tags:['archive','physics','explosion','interactive'],
 css:`.s{width:100%;height:130px;border-radius:6px;overflow:hidden;cursor:pointer}`,
 js:`const M=eng;const{Engine,Render,Runner,Bodies,Body,Composite}=M;
 const w=280,h=130;
 const engine=Engine.create({gravity:{x:0,y:.1}});
 const render=Render.create({element:root,engine:engine,options:{width:w,height:h,
  wireframes:false,background:'transparent',pixelRatio:DPR}});
 const runner=Runner.create();
 Composite.add(engine.world,[Bodies.rectangle(140,135,290,10,{isStatic:true})]);
 function boom(cx,cy){const colors=['#5EEAD4','#8B7CFF','#FF6B9D','#8BE84A','#FFB347'];
  for(let i=0;i<15;i++){const a=Math.random()*Math.PI*2;
   const s=Bodies.circle(cx,cy,3+Math.random()*4,
    {restitution:.6+Math.random()*.3,friction:.02,
     render:{fillStyle:colors[Math.floor(Math.random()*colors.length)]}});
   Body.setVelocity(s,{x:Math.cos(a)*(3+Math.random()*4),y:Math.sin(a)*(3+Math.random()*4)});
   Composite.add(engine.world,s);}}
  boom(140,30);const tap2=e=>{const r=root.getBoundingClientRect();boom(e.clientX-r.left,e.clientY-r.top);};
  root.addEventListener('pointerdown',tap2);
  Render.run(render);Runner.run(runner,engine);
  onStop(()=>{Render.stop(render);Runner.stop(runner);Engine.clear(engine);
   render.canvas.remove();root.removeEventListener('pointerdown',tap2);});`},

/* ─── CONTROL / INTERACTIVE ─── */
{id:'archive-control-drag',name:'Drag Rotate',cat:'control',eng:'css',txt:0,tags:['archive','control','interactive','drag'],
 css:`.s{width:80px;height:80px;border-radius:12px;background:linear-gradient(135deg,#5EEAD4,#8B7CFF);
  cursor:grab;display:grid;place-items:center;color:#0A0B0E;font:700 10px/1 var(--mono);
  user-select:none;transition:box-shadow .3s;margin:auto;box-shadow:0 4px 20px rgba(94,234,212,.3)}
.s:active{cursor:grabbing}`,
 js:`root.innerHTML='<div class="s">drag me</div>';
 const el=root.querySelector('.s');let mx=0,my=0,dx=0,dy=0,down=false;
 const downStart=e=>{down=true;mx=e.clientX;my=e.clientY;el.style.cursor='grabbing';};
 const onMove=e=>{if(!down)return;dx=e.clientX-mx;dy=e.clientY-my;
  el.style.transform='translate('+dx+'px,'+dy+'px)rotate('+(dx*.3)+'deg)';};
 const onUp=()=>{if(!down)return;down=false;el.style.cursor='grab';
  el.style.transition='transform .4s ease';el.style.transform='';setTimeout(()=>el.style.transition='',400);};
 el.addEventListener('pointerdown',downStart);
 window.addEventListener('pointermove',onMove);
 window.addEventListener('pointerup',onUp);
 onStop(()=>{el.removeEventListener('pointerdown',downStart);
  window.removeEventListener('pointermove',onMove);window.removeEventListener('pointerup',onUp);});`},

{id:'archive-control-hover',name:'Hover Glow',cat:'control',eng:'css',txt:0,tags:['archive','control','interactive','hover'],
 css:`.s{width:120px;height:80px;border-radius:12px;background:var(--bg1);border:1px solid var(--line);
  display:grid;place-items:center;margin:auto;cursor:pointer;transition:all .3s;
  color:var(--ink3);font:700 11px/1 var(--mono);position:relative;overflow:hidden}
.s::before{content:'';position:absolute;inset:-40%;background:radial-gradient(circle,rgba(94,234,212,.3),transparent 70%);
  opacity:0;transition:opacity .4s;pointer-events:none}
.s:hover::before{opacity:1}.s:hover{border-color:#5EEAD4;color:#E9EBF1;box-shadow:0 0 30px rgba(94,234,212,.15)}`,
 js:`root.innerHTML='<div class="s">hover me</div>';`},

{id:'archive-control-tilt',name:'Parallax Tilt',cat:'control',eng:'gl',txt:0,tags:['control','interactive','tilt'],
 css:`.s{width:130px;height:90px;border-radius:12px;background:linear-gradient(135deg,#1a1a2a,#2a1a3a);
  margin:auto;position:relative;overflow:hidden;cursor:pointer;perspective:400px}
.s .inner{position:absolute;inset:0;display:grid;place-items:center;transition:transform .08s;
  color:#5EEAD4;font:700 10px/1 var(--mono);letter-spacing:.05em}
.s .glow{position:absolute;inset:0;background:radial-gradient(circle at 50% 50%,rgba(94,234,212,.12),transparent 70%);
  transition:all .08s;pointer-events:none}`,
 js:`root.innerHTML='<div class="s"><div class="inner">tilt me</div><div class="glow"></div></div>';
 const el=root.querySelector('.s'),inn=root.querySelector('.inner'),gl=root.querySelector('.glow');
 const tiltMove=e=>{const r=el.getBoundingClientRect();
  const x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
  inn.style.transform='rotateX('+(-y*16)+'deg)rotateY('+(x*16)+'deg)';
  gl.style.background='radial-gradient(circle at '+(50+x*30)+'% '+(50+y*30)+'%,rgba(94,234,212,.18),transparent 70%)';};
 const tiltLeave=()=>{inn.style.transform='';gl.style.background='';};
 el.addEventListener('pointermove',tiltMove);
 el.addEventListener('pointerleave',tiltLeave);
 onStop(()=>{el.removeEventListener('pointermove',tiltMove);el.removeEventListener('pointerleave',tiltLeave);});`},

{id:'archive-control-slider',name:'Interactive Slider',cat:'control',eng:'css',txt:0,tags:['archive','control','interactive','slider'],
 css:`.s{width:140px;height:6px;border-radius:3px;background:var(--line);margin:auto;position:relative;cursor:pointer}
.s .thumb{width:18px;height:18px;border-radius:50%;background:linear-gradient(135deg,#5EEAD4,#8B7CFF);
  position:absolute;top:-6px;left:0;cursor:grab;box-shadow:0 0 16px rgba(94,234,212,.3);transition:box-shadow .2s}
.s .track{height:100%;border-radius:3px;background:linear-gradient(90deg,#5EEAD4,#8B7CFF);width:0%}`,
 js:`root.innerHTML='<div class="s"><div class="track"></div><div class="thumb"></div></div>';
 const el=root.querySelector('.s'),th=root.querySelector('.thumb'),tr=root.querySelector('.track');
 let dragging=false;
 const move=e=>{const r=el.getBoundingClientRect();
  let p=((e.clientX||e.touches[0].clientX)-r.left)/r.width;
  p=Math.max(0,Math.min(1,p));th.style.left=(p*100)+'%';tr.style.width=(p*100)+'%';};
 const slidStart=()=>dragging=true;
 const slidMove=e=>{if(dragging)move(e);};
 const slidEnd=()=>{if(dragging)dragging=false;};
 th.addEventListener('pointerdown',slidStart);
 window.addEventListener('pointermove',slidMove);
 window.addEventListener('pointerup',slidEnd);
 onStop(()=>{th.removeEventListener('pointerdown',slidStart);
  window.removeEventListener('pointermove',slidMove);window.removeEventListener('pointerup',slidEnd);});`},

{id:'archive-control-trail',name:'Cursor Trail',cat:'control',eng:'gl',txt:0,tags:['control','interactive','trail'],
 css:`.s{width:100%;height:130px;border-radius:6px;cursor:crosshair}`,
 js:`const c=document.createElement('canvas');c.width=280;c.height=130;
 root.appendChild(c);const x=c.getContext('2d');
 const trail=[];let mx=140,my=65;
 const loop=()=>{x.fillStyle='rgba(10,11,14,.12)';x.fillRect(0,0,280,130);
  trail.push({x:mx,y:my,a:1});if(trail.length>30)trail.shift();
  trail.forEach((p,i)=>{const a=i/trail.length;p.a=a;
   x.fillStyle='rgba(94,234,212,'+(a*.5)+')';
   x.beginPath();x.arc(p.x,p.y,a*6+1,0,Math.PI*2);x.fill();});
  raf=requestAnimationFrame(loop);};
 const trailMove=e=>{const r=c.getBoundingClientRect();mx=e.clientX-r.left;my=e.clientY-r.top;};
 c.addEventListener('pointermove',trailMove);
 let raf=requestAnimationFrame(loop);
 onStop(()=>{cancelAnimationFrame(raf);c.removeEventListener('pointermove',trailMove);});`},

/* ─── MEDIA / IMAGE ─── */
{id:'archive-media-reveal',name:'Image Reveal',cat:'media',eng:'css',txt:0,img:1,tags:['media','image','reveal'],
 css:`.s{width:100%;height:130px;border-radius:6px;overflow:hidden;position:relative;
  background:var(--bg1);display:grid;place-items:center}
.s img{width:100%;height:100%;object-fit:cover;position:absolute;inset:0;
  animation:rev 1.6s cubic-bezier(.2,.9,.3,1) forwards;clip-path:inset(0 100% 0 0)}
@keyframes rev{to{clip-path:inset(0 0 0 0)}}`,
 js:`root.innerHTML='<div class="s"><img src="'+esc(img)+'" alt=""></div>';`},

{id:'archive-media-mosaic',name:'Image Mosaic',cat:'media',eng:'gl',txt:0,img:1,tags:['archive','media','image','mosaic'],
 css:`.s{width:100%;height:130px;border-radius:6px;overflow:hidden}`,
 js:`const img2=new Image();img2.crossOrigin='anonymous';img2.src=img;
 const c=document.createElement('canvas');c.width=280;c.height=130;
 root.appendChild(c);const x=c.getContext('2d');
 img2.onload=()=>{const loop=()=>{x.drawImage(img2,0,0,280,130);
   const d=x.getImageData(0,0,280,130);
   for(let y=0;y<130;y+=6)for(let x2=0;x2<280;x2+=6){const i=(y*280+x2)*4;
    x.fillStyle='rgba(10,11,14,.6)';x.fillRect(x2,y,6,6);
    x.fillStyle='rgba('+d.data[i]+','+d.data[i+1]+','+d.data[i+2]+',.4)';
    x.fillRect(x2+1,y+1,4,4);}
   raf=requestAnimationFrame(loop);};
  let raf=requestAnimationFrame(loop);onStop(()=>cancelAnimationFrame(raf));};
 if(img2.complete)img2.onload();`},

{id:'archive-media-blur',name:'Image Blur',cat:'media',eng:'css',txt:0,img:1,tags:['media','image','blur'],
 css:`.s{width:100%;height:130px;border-radius:6px;overflow:hidden;position:relative}
.s img{width:100%;height:100%;object-fit:cover;position:absolute;inset:0;
  filter:blur(10px);transition:filter 2s ease,transform 2s ease;transform:scale(1.1)}
.s:hover img{filter:blur(0);transform:scale(1)}`,
 js:`root.innerHTML='<div class="s"><img src="'+esc(img)+'" alt=""></div>';`},

{id:'archive-media-particle',name:'Image Particles',cat:'media',eng:'gl',txt:0,img:1,tags:['archive','media','image','particles'],
 css:`.s{width:100%;height:130px;border-radius:6px;overflow:hidden}`,
 js:`const img2=new Image();img2.crossOrigin='anonymous';img2.src=img;
 const c=document.createElement('canvas');c.width=280;c.height=130;
 root.appendChild(c);const x=c.getContext('2d');
 img2.onload=()=>{x.drawImage(img2,0,0,280,130);const d=x.getImageData(0,0,280,130).data;
  const pts=[];for(let i=0;i<3000;i++){const px=Math.floor(Math.random()*280),py=Math.floor(Math.random()*130);
   const di=(py*280+px)*4;pts.push({x:px,y:py,c:[d[di],d[di+1],d[di+2]],vx:(Math.random()-.5)*.2,vy:(Math.random()-.5)*.2});}
  const loop=()=>{x.fillStyle='rgba(10,11,14,.08)';x.fillRect(0,0,280,130);
   pts.forEach(p=>{p.x+=p.vx;p.y+=p.vy;
    if(p.x<0||p.x>280)p.vx*=-1;if(p.y<0||p.y>130)p.vy*=-1;
    x.fillStyle='rgba('+p.c.join()+',.6)';
    x.fillRect(p.x,p.y,2,2);});
   raf=requestAnimationFrame(loop);};
  let raf=requestAnimationFrame(loop);onStop(()=>cancelAnimationFrame(raf));};
 if(img2.complete)img2.onload();`},

/* ─── SURFACE ─── */
{id:'archive-surface-glass',name:'Glass',cat:'surface',eng:'css',txt:0,tags:['surface','glass'],
 css:`.s{width:130px;height:80px;border-radius:12px;margin:auto;
  background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);
  backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);
  display:grid;place-items:center;color:var(--ink2);font:400 10px/1 var(--mono);
  box-shadow:0 8px 32px rgba(0,0,0,.3)}`,
 js:`root.innerHTML='<div class="s">glass</div>';`},

{id:'archive-surface-gradient-border',name:'Gradient Border',cat:'surface',eng:'css',txt:0,tags:['archive','surface','gradient'],
 css:`.s{width:130px;height:80px;border-radius:12px;margin:auto;position:relative;
  display:grid;place-items:center;color:var(--ink2);font:400 10px/1 var(--mono);
  background:var(--bg1);overflow:hidden}
.s::before{content:'';position:absolute;inset:-2px;border-radius:14px;
  background:linear-gradient(135deg,#5EEAD4,#8B7CFF,#FF6B9D,#5EEAD4);
  background-size:300% 300%;animation:gb 4s ease infinite;z-index:-1;mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);
  -webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);
  mask-composite:exclude;-webkit-mask-composite:exclude;padding:2px}
@keyframes gb{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}`,
 js:`root.innerHTML='<div class="s">border</div>';`},

{id:'archive-surface-shimmer',name:'Shimmer Surface',cat:'surface',eng:'css',txt:0,tags:['surface','shimmer'],
 css:`.s{width:130px;height:80px;border-radius:12px;margin:auto;position:relative;overflow:hidden;
  background:linear-gradient(135deg,#1a1a2a,#2a1a3a);display:grid;place-items:center;color:var(--ink2);
  font:400 10px/1 var(--mono)}
.s::after{content:'';position:absolute;inset:0;
  background:linear-gradient(90deg,transparent,rgba(94,234,212,.08),transparent);
  transform:translateX(-100%);animation:shimSurf 3s ease-in-out infinite}
@keyframes shimSurf{0%{transform:translateX(-100%)}50%{transform:translateX(100%)}100%{transform:translateX(100%)}}`,
 js:`root.innerHTML='<div class="s">shimmer</div>';`},
];

export const LIB = [...CSS_LIB, ...ENGINE_LIB, ...ARCHIVE_LIB];

/* ══════════════════════════════════════════════════════════
   LIBRARY CATALOG
   Indexed by name + deep link only. No source rehosted.
   ══════════════════════════════════════════════════════════ */
export const LIBS = [
 {n:'Anime.js',eng:'anime',lic:'MIT',ok:1,pkg:'animejs',
  cdn:'https://cdn.jsdelivr.net/npm/animejs@4/+esm',u:'https://animejs.com',
  d:'~12KB timelines, SVG, stagger with grid and from-center origins. Framework-agnostic. Lok default for CDN fallback builds.',
  fam:[['Core',[['animate','https://animejs.com/documentation/animation'],
   ['Timeline','https://animejs.com/documentation/timeline'],
   ['Stagger','https://animejs.com/documentation/stagger'],
   ['Timer','https://animejs.com/documentation/timer']]],
   ['Motion',[['Draggable','https://animejs.com/documentation/draggable'],
   ['ScrollObserver','https://animejs.com/documentation/scroll'],
   ['Scope','https://animejs.com/documentation/scope'],
   ['SVG utilities','https://animejs.com/documentation/svg'],
   ['Spring easing','https://animejs.com/documentation/easings'],
   ['WAAPI adapter','https://animejs.com/documentation/web-animation-api']]]]},

 {n:'GSAP',eng:'gsap',lic:'VERIFY',pkg:'gsap',
  cdn:'https://cdn.jsdelivr.net/npm/gsap@3/+esm',u:'https://gsap.com/docs/v3/',
  d:'The only engine that truly pins on scroll. Timelines, ScrollTrigger, Flip, SplitText. Heavier and non-treeshaking — earn it with 3+ features.',
  fam:[['Core',[['gsap.to / from','https://gsap.com/docs/v3/GSAP/gsap.to()'],
   ['Timeline','https://gsap.com/docs/v3/GSAP/Timeline'],
   ['Easing','https://gsap.com/docs/v3/Eases'],
   ['Utils','https://gsap.com/docs/v3/GSAP/UtilityMethods']]],
   ['Scroll',[['ScrollTrigger','https://gsap.com/docs/v3/Plugins/ScrollTrigger/'],
   ['ScrollSmoother','https://gsap.com/docs/v3/Plugins/ScrollSmoother/'],
   ['Observer','https://gsap.com/docs/v3/Plugins/Observer/'],
   ['ScrollTo','https://gsap.com/docs/v3/Plugins/ScrollToPlugin']]],
   ['Plugins',[['Flip','https://gsap.com/docs/v3/Plugins/Flip/'],
   ['SplitText','https://gsap.com/docs/v3/Plugins/SplitText/'],
   ['MotionPath','https://gsap.com/docs/v3/Plugins/MotionPathPlugin'],
   ['Draggable','https://gsap.com/docs/v3/Plugins/Draggable/'],
   ['MorphSVG','https://gsap.com/docs/v3/Plugins/MorphSVGPlugin'],
   ['DrawSVG','https://gsap.com/docs/v3/Plugins/DrawSVGPlugin'],
   ['Text','https://gsap.com/docs/v3/Plugins/TextPlugin']]]]},

 {n:'Motion',eng:'motion',lic:'MIT',ok:1,pkg:'motion',
  cdn:'https://cdn.jsdelivr.net/npm/motion@12/+esm',u:'https://motion.dev/docs',
  d:'~12KB springs, layout animations and gestures. First-class React, works in vanilla and Vue. Lok default for React work.',
  fam:[['Animation',[['animate','https://motion.dev/docs/animate'],
   ['stagger','https://motion.dev/docs/stagger'],
   ['spring','https://motion.dev/docs/spring'],
   ['Easing','https://motion.dev/docs/easing-functions']]],
   ['Scroll & view',[['scroll','https://motion.dev/docs/scroll'],
   ['inView','https://motion.dev/docs/inview'],
   ['useScroll','https://motion.dev/docs/react-use-scroll']]],
   ['React',[['motion component','https://motion.dev/docs/react-motion-component'],
   ['AnimatePresence','https://motion.dev/docs/react-animate-presence'],
   ['Layout animations','https://motion.dev/docs/react-layout-animations'],
   ['Gestures','https://motion.dev/docs/react-gestures'],
   ['Reorder','https://motion.dev/docs/react-reorder'],
   ['useAnimate','https://motion.dev/docs/react-use-animate']]]]},

 {n:'Three.js',eng:'three',lic:'MIT',ok:1,pkg:'three',
  cdn:'https://cdn.jsdelivr.net/npm/three@0.160/+esm',u:'https://threejs.org/docs/',
  d:'WebGL, shaders and 3D. The open answer to Spline-style scenes — you own the scene graph instead of renting a runtime.',
  fam:[['Core',[['Scene','https://threejs.org/docs/#api/en/scenes/Scene'],
   ['PerspectiveCamera','https://threejs.org/docs/#api/en/cameras/PerspectiveCamera'],
   ['WebGLRenderer','https://threejs.org/docs/#api/en/renderers/WebGLRenderer'],
   ['BufferGeometry','https://threejs.org/docs/#api/en/core/BufferGeometry']]],
   ['Geometry',[['Box','https://threejs.org/docs/#api/en/geometries/BoxGeometry'],
   ['Icosahedron','https://threejs.org/docs/#api/en/geometries/IcosahedronGeometry'],
   ['TorusKnot','https://threejs.org/docs/#api/en/geometries/TorusKnotGeometry'],
   ['Plane','https://threejs.org/docs/#api/en/geometries/PlaneGeometry'],
   ['Points','https://threejs.org/docs/#api/en/objects/Points']]],
   ['Materials & light',[['ShaderMaterial','https://threejs.org/docs/#api/en/materials/ShaderMaterial'],
   ['MeshStandardMaterial','https://threejs.org/docs/#api/en/materials/MeshStandardMaterial'],
   ['CanvasTexture','https://threejs.org/docs/#api/en/textures/CanvasTexture'],
   ['TextureLoader','https://threejs.org/docs/#api/en/loaders/TextureLoader']]],
   ['React',[['React Three Fiber','https://r3f.docs.pmnd.rs/'],
   ['Drei helpers','https://drei.docs.pmnd.rs/'],
   ['Examples','https://threejs.org/examples/']]]]},

 {n:'Matter.js',eng:'matter',lic:'MIT',ok:1,pkg:'matter-js',
  cdn:'https://cdn.jsdelivr.net/npm/matter-js@0.20/+esm',u:'https://brm.io/matter-js/docs/',
  d:'2D rigid-body physics. Gravity, collisions, constraints. The fastest route to motion that feels physical rather than tweened.',
  fam:[['Core',[['Engine','https://brm.io/matter-js/docs/classes/Engine.html'],
   ['Render','https://brm.io/matter-js/docs/classes/Render.html'],
   ['Runner','https://brm.io/matter-js/docs/classes/Runner.html'],
   ['Composite','https://brm.io/matter-js/docs/classes/Composite.html']]],
   ['Bodies',[['Bodies','https://brm.io/matter-js/docs/classes/Bodies.html'],
   ['Body','https://brm.io/matter-js/docs/classes/Body.html'],
   ['Constraint','https://brm.io/matter-js/docs/classes/Constraint.html'],
   ['MouseConstraint','https://brm.io/matter-js/docs/classes/MouseConstraint.html'],
   ['Composites','https://brm.io/matter-js/docs/classes/Composites.html']]]]},

 {n:'Magic UI',lic:'MIT',ok:1,reg:'@magicui/blur-fade',u:'https://magicui.design/docs/components',
  d:'150+ free animated React components built on Motion and Tailwind. The widest-adopted animation layer in the shadcn ecosystem.',
  fam:[['Text',[['Text Animate','https://magicui.design/docs/components/text-animate'],
   ['Blur Fade','https://magicui.design/docs/components/blur-fade'],
   ['Typing Animation','https://magicui.design/docs/components/typing-animation'],
   ['Number Ticker','https://magicui.design/docs/components/number-ticker'],
   ['Sparkles Text','https://magicui.design/docs/components/sparkles-text'],
   ['Animated Gradient Text','https://magicui.design/docs/components/animated-gradient-text'],
   ['Hyper Text','https://magicui.design/docs/components/hyper-text'],
   ['Word Rotate','https://magicui.design/docs/components/word-rotate']]],
   ['Layout',[['Bento Grid','https://magicui.design/docs/components/bento-grid'],
   ['Marquee','https://magicui.design/docs/components/marquee'],
   ['Dock','https://magicui.design/docs/components/dock'],
   ['File Tree','https://magicui.design/docs/components/file-tree'],
   ['Terminal','https://magicui.design/docs/components/terminal'],
   ['Hero Video Dialog','https://magicui.design/docs/components/hero-video-dialog']]],
   ['Effects',[['Animated Beam','https://magicui.design/docs/components/animated-beam'],
   ['Border Beam','https://magicui.design/docs/components/border-beam'],
   ['Shine Border','https://magicui.design/docs/components/shine-border'],
   ['Magic Card','https://magicui.design/docs/components/magic-card'],
   ['Meteors','https://magicui.design/docs/components/meteors'],
   ['Neon Gradient Card','https://magicui.design/docs/components/neon-gradient-card'],
   ['Orbiting Circles','https://magicui.design/docs/components/orbiting-circles'],
   ['Confetti','https://magicui.design/docs/components/confetti'],
   ['Globe','https://magicui.design/docs/components/globe']]],
   ['Backgrounds',[['Retro Grid','https://magicui.design/docs/components/retro-grid'],
   ['Ripple','https://magicui.design/docs/components/ripple'],
   ['Dot Pattern','https://magicui.design/docs/components/dot-pattern'],
   ['Grid Pattern','https://magicui.design/docs/components/grid-pattern'],
   ['Particles','https://magicui.design/docs/components/particles'],
   ['Warp Background','https://magicui.design/docs/components/warp-background']]],
   ['Buttons',[['Shimmer Button','https://magicui.design/docs/components/shimmer-button'],
   ['Rainbow Button','https://magicui.design/docs/components/rainbow-button'],
   ['Shiny Button','https://magicui.design/docs/components/shiny-button'],
   ['Pulsating Button','https://magicui.design/docs/components/pulsating-button'],
   ['Ripple Button','https://magicui.design/docs/components/ripple-button'],
   ['Interactive Hover Button','https://magicui.design/docs/components/interactive-hover-button']]]]},

 {n:'React Bits',lic:'VERIFY',reg:'@reactbits/blur-text',u:'https://reactbits.dev',
  d:'Kinetic text and background effects for React. Strong catalog of per-character text treatments and full-bleed backgrounds.',
  fam:[['Text animations',[['Blur Text','https://reactbits.dev/text-animations/blur-text'],
   ['Split Text','https://reactbits.dev/text-animations/split-text'],
   ['Shiny Text','https://reactbits.dev/text-animations/shiny-text'],
   ['Gradient Text','https://reactbits.dev/text-animations/gradient-text'],
   ['Decrypted Text','https://reactbits.dev/text-animations/decrypted-text'],
   ['Scramble Text','https://reactbits.dev/text-animations/scrambled-text'],
   ['Count Up','https://reactbits.dev/text-animations/count-up'],
   ['Rotating Text','https://reactbits.dev/text-animations/rotating-text'],
   ['Falling Text','https://reactbits.dev/text-animations/falling-text'],
   ['True Focus','https://reactbits.dev/text-animations/true-focus']]],
   ['Animations',[['Animated Content','https://reactbits.dev/animations/animated-content'],
   ['Blob Cursor','https://reactbits.dev/animations/blob-cursor'],
   ['Click Spark','https://reactbits.dev/animations/click-spark'],
   ['Magnet','https://reactbits.dev/animations/magnet'],
   ['Pixel Trail','https://reactbits.dev/animations/pixel-trail'],
   ['Star Border','https://reactbits.dev/animations/star-border']]],
   ['Backgrounds',[['Aurora','https://reactbits.dev/backgrounds/aurora'],
   ['Particles','https://reactbits.dev/backgrounds/particles'],
   ['Waves','https://reactbits.dev/backgrounds/waves'],
   ['Threads','https://reactbits.dev/backgrounds/threads'],
   ['Dot Grid','https://reactbits.dev/backgrounds/dot-grid'],
   ['Silk','https://reactbits.dev/backgrounds/silk'],
   ['Iridescence','https://reactbits.dev/backgrounds/iridescence']]],
   ['Components',[['Carousel','https://reactbits.dev/components/carousel'],
   ['Dock','https://reactbits.dev/components/dock'],
   ['Spotlight Card','https://reactbits.dev/components/spotlight-card'],
   ['Tilted Card','https://reactbits.dev/components/tilted-card'],
   ['Infinite Scroll','https://reactbits.dev/components/infinite-scroll'],
   ['Stack','https://reactbits.dev/components/stack']]]]},

 {n:'Kokonut UI',lic:'VERIFY',reg:'@kokonut/glitch-text',u:'https://kokonutui.com/docs/components',
  d:'Interaction-driven components on React 19 + Tailwind v4 + shadcn conventions. Strong on glitch text and marketing blocks.',
  fam:[['Texts',[['Glitch Text','https://kokonutui.com/docs/texts/glitch-text'],
   ['Type Writer','https://kokonutui.com/docs/texts/type-writer'],
   ['Sparkles Text','https://kokonutui.com/docs/texts/sparkles-text'],
   ['Dynamic Text','https://kokonutui.com/docs/texts/dynamic-text'],
   ['Gradual Spacing','https://kokonutui.com/docs/texts/gradual-spacing']]],
   ['Components',[['Card','https://kokonutui.com/docs/components/card-05'],
   ['Button','https://kokonutui.com/docs/components/btn-01'],
   ['Input','https://kokonutui.com/docs/components/input-01'],
   ['Toast','https://kokonutui.com/docs/components/toast-01'],
   ['AI Prompt','https://kokonutui.com/docs/components/ai-prompt'],
   ['File Upload','https://kokonutui.com/docs/components/file-upload']]]]},

 {n:'Aceternity UI',lic:'VERIFY',reg:'@aceternity/component',u:'https://ui.aceternity.com/components',
  d:'Maximalist hero-scale effects for React + Tailwind + Motion. Reach for it when one section has to carry the entire page.',
  fam:[['Hero effects',[['Hero Parallax','https://ui.aceternity.com/components/hero-parallax'],
   ['Background Beams','https://ui.aceternity.com/components/background-beams'],
   ['Aurora Background','https://ui.aceternity.com/components/aurora-background'],
   ['Spotlight','https://ui.aceternity.com/components/spotlight'],
   ['Vortex','https://ui.aceternity.com/components/vortex'],
   ['Wavy Background','https://ui.aceternity.com/components/wavy-background']]],
   ['Text',[['Text Generate Effect','https://ui.aceternity.com/components/text-generate-effect'],
   ['Typewriter Effect','https://ui.aceternity.com/components/typewriter-effect'],
   ['Flip Words','https://ui.aceternity.com/components/flip-words'],
   ['Text Reveal Card','https://ui.aceternity.com/components/text-reveal-card']]],
   ['Cards & layout',[['3D Card Effect','https://ui.aceternity.com/components/3d-card-effect'],
   ['Card Hover Effect','https://ui.aceternity.com/components/card-hover-effect'],
   ['Bento Grid','https://ui.aceternity.com/components/bento-grid'],
   ['Infinite Moving Cards','https://ui.aceternity.com/components/infinite-moving-cards'],
   ['Sticky Scroll Reveal','https://ui.aceternity.com/components/sticky-scroll-reveal'],
   ['Tracing Beam','https://ui.aceternity.com/components/tracing-beam']]]]},

 {n:'Lenis',lic:'MIT',ok:1,pkg:'lenis',u:'https://lenis.darkroom.engineering',
  d:'Smooth-scroll layer that sits under any engine above. Pairs especially well with GSAP ScrollTrigger.',
  fam:[['Core',[['Getting started','https://lenis.darkroom.engineering'],
   ['GitHub','https://github.com/darkroomengineering/lenis']]]]},

 {n:'shadcn/ui',lic:'MIT',ok:1,reg:'init',u:'https://ui.shadcn.com/docs',
  d:'The code-distribution layer everything plugs into. CLI v4 ships an agent skill; the MCP server lets AI install from any registry.',
  fam:[['Platform',[['Components','https://ui.shadcn.com/docs/components'],
   ['Registry','https://ui.shadcn.com/docs/registry'],
   ['MCP Server','https://ui.shadcn.com/docs/mcp'],
   ['Namespaces','https://ui.shadcn.com/docs/registry/namespace'],
   ['Registry directory','https://ui.shadcn.com/docs/registry/directory'],
   ['llms.txt','https://ui.shadcn.com/llms.txt']]]]}
];

export const PKGS = [
 {id:'npm', f:p=>'npm install '+p,  r:c=>'npx shadcn@latest add '+c},
 {id:'pnpm',f:p=>'pnpm add '+p,     r:c=>'pnpm dlx shadcn@latest add '+c},
 {id:'yarn',f:p=>'yarn add '+p,     r:c=>'yarn dlx shadcn@latest add '+c},
 {id:'bun', f:p=>'bun add '+p,      r:c=>'bunx shadcn@latest add '+c},
 {id:'cdn', f:(p,c)=>c?("import * as lib from '"+c+"'"):'// no CDN build listed',
            r:()=>'// registry components install via the CLI'}
];


