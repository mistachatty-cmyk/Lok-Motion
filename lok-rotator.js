/*!
 * Lok Rotator v1.0 — passive brand/word rotator
 * Zero dependencies. ~3KB. MIT.
 * Lok Services · https://github.com/mistachatty-cmyk/Lok-Motion
 *
 * USAGE — declarative:
 *   <span data-lok-rotate='["LOK SERVICES","LOKBOOK","TRYL"]'
 *         data-effect="glitch" data-interval="3000"></span>
 *   <script type="module">
 *     import { autoInit } from './lok-rotator.js'; autoInit();
 *   <\/script>
 *
 * USAGE — programmatic:
 *   import { LokRotator } from './lok-rotator.js';
 *   const r = new LokRotator(el, {
 *     words: ['LOK SERVICES','TRYL'],
 *     effect: 'glitch',        // fade|slide|flip|glitch|scramble|type|blur|wave|split
 *     interval: 3200,
 *     duration: 620,
 *     shuffle: false,
 *     pauseOnHover: true,
 *     startIndex: 0,
 *     onChange: (word, i) => {}
 *   });
 *   r.pause(); r.play(); r.next(); r.set(2); r.destroy();
 *
 * Works on any element, including <input> placeholders (set target:'placeholder').
 * Respects prefers-reduced-motion — falls back to instant swap.
 */

const REDUCED = typeof matchMedia !== 'undefined'
  && matchMedia('(prefers-reduced-motion: reduce)').matches;

const POOL = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&@';
const rnd = n => (Math.random() * n) | 0;

const DEFAULTS = {
  words: [],
  effect: 'fade',
  interval: 3000,
  duration: 600,
  shuffle: false,
  pauseOnHover: true,
  startIndex: 0,
  target: 'text',        // 'text' | 'placeholder' | 'value'
  autoplay: true,
  onChange: null
};

/* ── effects ────────────────────────────────────────────── */
const EFFECTS = {
  fade(el, next, o, write) {
    return anim(el, o.duration, [
      { at: 0,   css: { opacity: '1', transform: 'none' } },
      { at: .45, css: { opacity: '0', transform: 'translateY(-6px)' }, then: () => write(next) },
      { at: .55, css: { opacity: '0', transform: 'translateY(6px)' } },
      { at: 1,   css: { opacity: '1', transform: 'none' } }
    ]);
  },
  // (other effects omitted for brevity — full file included in repo)
};

function wait(ms) { return new Promise(r => setTimeout(r, ms)); }
function frames(endAt, dur, onFrame, onDone) {
  return new Promise(res => {
    const start = endAt - dur;
    let raf;
    const tick = () => {
      const p = Math.min(1, (performance.now() - start) / dur);
      onFrame(p);
      if (p < 1) raf = requestAnimationFrame(tick);
      else { onDone && onDone(); res(); }
    };
    raf = requestAnimationFrame(tick);
  });
}
function anim(el, dur, keys) {
  return new Promise(res => {
    const start = performance.now();
    let fired = new Set();
    const tick = () => {
      const p = Math.min(1, (performance.now() - start) / dur);
      let a = keys[0], b = keys[keys.length - 1];
      for (let i = 0; i < keys.length - 1; i++) {
        if (p >= keys[i].at && p <= keys[i + 1].at) { a = keys[i]; b = keys[i + 1]; break; }
      }
      keys.forEach((k, i) => { if (k.then && !fired.has(i) && p >= k.at) { fired.add(i); k.then(); } });
      const span = (b.at - a.at) || 1;
      const t = ease((p - a.at) / span);
      Object.keys(b.css).forEach(prop => { el.style[prop] = lerpStyle(a.css[prop], b.css[prop], t); });
      if (p < 1) requestAnimationFrame(tick);
      else {
        keys.forEach((k, i) => { if (k.then && !fired.has(i)) k.then(); });
        Object.keys(keys[keys.length - 1].css).forEach(prop => {
          el.style[prop] = keys[keys.length - 1].css[prop];
        });
        res();
      }
    };
    requestAnimationFrame(tick);
  });
}
const ease = t => t < .5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
function lerpStyle(from, to, t) { const nums = s => (String(s).match(/-?[\d.]+/g) || []).map(Number); const a = nums(from), b = nums(to); if (!a.length || a.length !== b.length) return t < .5 ? from : to; let i = 0; return String(to).replace(/-?[\d.]+/g, () => { const v = a[i] + (b[i] - a[i]) * t; i++; return Math.round(v * 1000) / 1000; }); }
const escapeHTML = s => String(s).replace(/[&<>\"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
function read(el, o) { if (o.target === 'placeholder') return el.placeholder || ''; if (o.target === 'value') return el.value || ''; return el.textContent || ''; }

export class LokRotator { /* full class in repo */ }
export function autoInit(root = document) { /* full autoInit in repo */ }
export const EFFECT_NAMES = Object.keys(EFFECTS);
export default LokRotator;
