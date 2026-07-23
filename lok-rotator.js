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

/* ── effects ──────────────────────────────────────────────
   Each returns a Promise that resolves when the swap is done.
   Signature: (el, next, opt, write) => Promise                */
const EFFECTS = {

  fade(el, next, o, write) {
    return anim(el, o.duration, [
      { at: 0,   css: { opacity: '1', transform: 'none' } },
      { at: .45, css: { opacity: '0', transform: 'translateY(-6px)' }, then: () => write(next) },
      { at: .55, css: { opacity: '0', transform: 'translateY(6px)' } },
      { at: 1,   css: { opacity: '1', transform: 'none' } }
    ]);
  },

  slide(el, next, o, write) {
    return anim(el, o.duration, [
      { at: 0,   css: { opacity: '1', transform: 'translateX(0)' } },
      { at: .45, css: { opacity: '0', transform: 'translateX(-14px)' }, then: () => write(next) },
      { at: .55, css: { opacity: '0', transform: 'translateX(14px)' } },
      { at: 1,   css: { opacity: '1', transform: 'translateX(0)' } }
    ]);
  },

  blur(el, next, o, write) {
    return anim(el, o.duration, [
      { at: 0,   css: { opacity: '1', filter: 'blur(0px)' } },
      { at: .45, css: { opacity: '0', filter: 'blur(9px)' }, then: () => write(next) },
      { at: 1,   css: { opacity: '1', filter: 'blur(0px)' } }
    ]);
  },

  flip(el, next, o, write) {
    el.style.transformStyle = 'preserve-3d';
    return anim(el, o.duration, [
      { at: 0,   css: { opacity: '1', transform: 'rotateX(0deg)' } },
      { at: .48, css: { opacity: '.15', transform: 'rotateX(90deg)' }, then: () => write(next) },
      { at: 1,   css: { opacity: '1', transform: 'rotateX(0deg)' } }
    ]);
  },

  glitch(el, next, o, write) {
    const cur = read(el, o);
    const len = Math.max(cur.length, next.length);
    const end = performance.now() + o.duration;
    const base = el.style.textShadow;
    return frames(end, o.duration, p => {
      if (p < .62) {
        let out = '';
        for (let i = 0; i < len; i++) {
          out += Math.random() < p * 1.4
            ? (next[i] || '')
            : (Math.random() < .3 ? POOL[rnd(POOL.length)] : (cur[i] || next[i] || ''));
        }
        write(out);
        const j = (1 - p) * 3;
        el.style.textShadow =
          `${(Math.random() - .5) * j}px 0 rgba(255,0,90,.7), ${(Math.random() - .5) * j}px 0 rgba(0,255,220,.7)`;
      } else {
        write(next);
        el.style.textShadow = base;
      }
    }, () => { write(next); el.style.textShadow = base; });
  },

  scramble(el, next, o, write) {
    const end = performance.now() + o.duration;
    const t = [...next];
    return frames(end, o.duration, p => {
      write(t.map((c, i) => {
        if (c === ' ') return ' ';
        return p * t.length > i + .5 ? c : POOL[rnd(POOL.length)];
      }).join(''));
    }, () => write(next));
  },

  type(el, next, o, write) {
    const cur = read(el, o);
    const end = performance.now() + o.duration;
    return frames(end, o.duration, p => {
      if (p < .5) write(cur.slice(0, Math.ceil(cur.length * (1 - p * 2))));
      else        write(next.slice(0, Math.ceil(next.length * ((p - .5) * 2))));
    }, () => write(next));
  },

  wave(el, next, o, write) {
    return anim(el, o.duration, [
      { at: 0,   css: { opacity: '1', transform: 'translateY(0) scale(1)' } },
      { at: .44, css: { opacity: '0', transform: 'translateY(-10px) scale(.94)' }, then: () => write(next) },
      { at: .7,  css: { opacity: '1', transform: 'translateY(4px) scale(1.03)' } },
      { at: 1,   css: { opacity: '1', transform: 'translateY(0) scale(1)' } }
    ]);
  },

  split(el, next, o, write) {
    // per-character stagger; requires text target and innerHTML access
    if (o.target !== 'text') return EFFECTS.fade(el, next, o, write);
    const dur = o.duration;
    const out = [...next].map((c, i) =>
      `<span style="display:inline-block;opacity:0;transform:translateY(14px);` +
      `transition:opacity ${dur * .5}ms ease,transform ${dur * .5}ms cubic-bezier(.16,1,.3,1);` +
      `transition-delay:${i * 26}ms">${c === ' ' ? '&nbsp;' : escapeHTML(c)}</span>`
    ).join('');
    el.style.opacity = '0';
    return wait(dur * .35).then(() => {
      el.innerHTML = out;
      el.style.opacity = '1';
      requestAnimationFrame(() => {
        [...el.children].forEach(s => { s.style.opacity = '1'; s.style.transform = 'none'; });
      });
      return wait(dur * .65 + [...next].length * 26);
    });
  }
};

/* ── tiny animation helpers ── */
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
      // find bracketing keyframes
      let a = keys[0], b = keys[keys.length - 1];
      for (let i = 0; i < keys.length - 1; i++) {
        if (p >= keys[i].at && p <= keys[i + 1].at) { a = keys[i]; b = keys[i + 1]; break; }
      }
      keys.forEach((k, i) => {
        if (k.then && !fired.has(i) && p >= k.at) { fired.add(i); k.then(); }
      });
      const span = (b.at - a.at) || 1;
      const t = ease((p - a.at) / span);
      Object.keys(b.css).forEach(prop => {
        el.style[prop] = lerpStyle(a.css[prop], b.css[prop], t);
      });
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

function lerpStyle(from, to, t) {
  const nums = s => (String(s).match(/-?[\d.]+/g) || []).map(Number);
  const a = nums(from), b = nums(to);
  if (!a.length || a.length !== b.length) return t < .5 ? from : to;
  let i = 0;
  return String(to).replace(/-?[\d.]+/g, () => {
    const v = a[i] + (b[i] - a[i]) * t; i++;
    return Math.round(v * 1000) / 1000;
  });
}

const escapeHTML = s => String(s).replace(/[&<>"]/g,
  c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

function read(el, o) {
  if (o.target === 'placeholder') return el.placeholder || '';
  if (o.target === 'value') return el.value || '';
  return el.textContent || '';
}

/* ── main class ── */
export class LokRotator {
  constructor(el, opts = {}) {
    this.el = typeof el === 'string' ? document.querySelector(el) : el;
    if (!this.el) throw new Error('LokRotator: element not found');
    this.o = { ...DEFAULTS, ...opts };
    if (!this.o.words.length) this.o.words = [read(this.el, this.o)].filter(Boolean);
    this.i = this.o.startIndex;
    this.running = false;
    this.busy = false;
    this._timer = null;

    this._write = txt => {
      if (this.o.target === 'placeholder') this.el.placeholder = txt;
      else if (this.o.target === 'value') this.el.value = txt;
      else this.el.textContent = txt;
    };

    this._write(this.o.words[this.i]);

    if (this.o.pauseOnHover) {
      this._enter = () => this.pause();
      this._leave = () => this.play();
      this.el.addEventListener('pointerenter', this._enter);
      this.el.addEventListener('pointerleave', this._leave);
    }
    this._vis = () => document.hidden ? this._stopTimer() : (this.running && this._startTimer());
    document.addEventListener('visibilitychange', this._vis);

    if (this.o.autoplay) this.play();
  }

  _startTimer() {
    this._stopTimer();
    this._timer = setTimeout(() => this.next().then(() => {
      if (this.running) this._startTimer();
    }), this.o.interval);
  }
  _stopTimer() { clearTimeout(this._timer); this._timer = null; }

  play()  { if (!this.running) { this.running = true; this._startTimer(); } return this; }
  pause() { this.running = false; this._stopTimer(); return this; }

  async next() {
    if (this.busy || this.o.words.length < 2) return this;
    const n = this.o.shuffle
      ? (() => { let k; do { k = rnd(this.o.words.length); } while (k === this.i); return k; })()
      : (this.i + 1) % this.o.words.length;
    return this.set(n);
  }

  async set(index) {
    if (this.busy) return this;
    this.busy = true;
    this.i = ((index % this.o.words.length) + this.o.words.length) % this.o.words.length;
    const word = this.o.words[this.i];
    try {
      if (REDUCED) this._write(word);
      else await (EFFECTS[this.o.effect] || EFFECTS.fade)(this.el, word, this.o, this._write);
      this.o.onChange && this.o.onChange(word, this.i);
    } finally { this.busy = false; }
    return this;
  }

  words(list) { this.o.words = list.slice(); this.i = 0; this._write(list[0]); return this; }
  effect(name) { this.o.effect = name; return this; }

  destroy() {
    this.pause();
    document.removeEventListener('visibilitychange', this._vis);
    if (this._enter) {
      this.el.removeEventListener('pointerenter', this._enter);
      this.el.removeEventListener('pointerleave', this._leave);
    }
    return this;
  }
}

/* ── declarative init ── */
export function autoInit(root = document) {
  const out = [];
  root.querySelectorAll('[data-lok-rotate]').forEach(el => {
    let words;
    try { words = JSON.parse(el.dataset.lokRotate); }
    catch { words = el.dataset.lokRotate.split('|').map(s => s.trim()); }
    out.push(new LokRotator(el, {
      words,
      effect:       el.dataset.effect || 'fade',
      interval:    +el.dataset.interval || 3000,
      duration:    +el.dataset.duration || 600,
      shuffle:      el.dataset.shuffle === 'true',
      target:       el.dataset.target || 'text',
      pauseOnHover: el.dataset.pauseOnHover !== 'false'
    }));
  });
  return out;
}

export const EFFECT_NAMES = Object.keys(EFFECTS);
export default LokRotator;
