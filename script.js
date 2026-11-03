"use strict";

/* =====================================================
   EDIT ME: Daily Love Notes (30) and bonus compliments (30)
   Add or remove lines freely. The counter updates itself.
   ===================================================== */
const LOVE_NOTES = [
  "Good morning meri jaan. Aaj bhi uthte he sabse pehle aapka khayal aaya. Bs ye batana tha 🌷",
  "Apko pta he me aapki video call ka kitna wait krta hu? Din ka sabse best part wohi hota he 🥹",
  "Please don't overthink aaj. Me yahin hu, or mera pyaar bilkul same he. Even stronger.",
  "Aapki smile dekh ke mera poora din ban jata he. Aaj thori si zyada smile krna, mere liye 😭",
  "Kabhi kabhi me bs aapki tasveer dekhta rehta hu or soch ta hu, itni pretty kaise ho aap 🫠",
  "Aap busy hothe hein toh bhi koi issue nhi. Bs itna yaad rakhna ke me wait krta hu apka ❤️",
  "Hamare future me bohot sari normal si mornings hongi. Chai, breakfast, or aap. That's my dream.",
  "Aapki awaaz sunna mere liye medicine jesa he. Mera mood kharab ho toh bs aapki voice chahiye.",
  "Aaj bs ek reminder: aap important hein. Bohot zyada. Kisi bhi din, kisi bhi mood me.",
  "Mera dil krta he abhi aapke paas aa jau or bs side me baith ke aapko dekhta rahu 🥹",
  "Movie night yaad aa rahi he. Next time me bhi aapke sath popcorn khaunga, pakka promise.",
  "Aap hee mera sab kuch hein. Ye line me roz bol sakta hu or phir bhi kam lagegi 💗",
  "Allah kasam, aapke bina din adhoora lagta he. Bs jaldi se aapke paas aana he mujhe.",
  "Aaj apna khayal rakhna, paani peena, or khana time pe khana. Me yahan se check krunga 😭",
  "Mujhe aapki choti choti baatein bhi yaad rehti hein. Wo sab mere liye bohot special hein.",
  "Aapki eyes me kuch hai jo me explain nhi kar sakta. Bs dekhta rehta hu or kho jata hu 🫠",
  "Agar aaj aapka mood acha nhi he, toh koi baat nhi. Me hu na. Bs mujhse baat kr lena ❤️",
  "Hamara chota sa ghar, hamari family, hamare choti choti plans. Me roz imagine krta hu.",
  "Aap meri life ki sabse beautiful cheez hein. Seriously. Me ye kabhi bhoolunga nhi.",
  "Jab aap hasti hein na, mujhe lagta he sab kuch theek ho jayega. Aaj bhi zyada hasna 🌷",
  "Me aapko kabhi miss out nhi hone dunga. Chahe door hu, me aapke liye time nikalunga.",
  "Ek din me aapko bohot sare kisses dunga. Abhi virtual wale se kaam chalao 😭💋",
  "Aapko pta he me aapse kabhi bore nhi hota? Aap bs baatein krti rahein, me sunta rahunga.",
  "Aap meri priority hein, always. Please ye baat kabhi doubt mat krna meri jaan.",
  "Kal raat video call pe aapko dekha, or abhi tak wohi chehra mere dimag me he 🥹",
  "Aaj ka plan: aapko yaad krna, aap pe proud hona, or aapko dher saara love bhejna ❤️",
  "Aapke sath har ordinary din bhi special lagta he. Bs yehi chahiye mujhe life me.",
  "Bohot pagal hu me apke liye. Or honestly? Me is pagalpan se bilkul khush hu 😭",
  "Aap thak gayi ho toh thora rest kr lena. Or yaad rakhna, aap bohot acha kr rahi hein.",
  "Apko jitna lagta he me aapse pyaar krta hu, na, wo usse bhi zyada he. Pakka. 💗"
];

const BONUS_LINES = [
  "Aap bohot pretty hein, bs ye batana tha.", "Apki smile meri weakness he 😭",
  "Aapki awaaz sunna sabse best lagta he.", "Aap itni cute kyun hein? Unfair he.",
  "Aapki eyes me me kho jata hu 🫠", "Aap meri favourite person hein.",
  "Aap beautiful hein, andar se bhi or bahar se bhi.", "Aapko dekh ke me hamesha khush ho jata hu.",
  "Aap bohot precious hein mere liye.", "Aapki hasi sunna mera favourite sound he.",
  "Aap mere liye sabse special hein.", "Aapka dimag or dil dono bohot khoobsurat hein.",
  "Aap ke bina main bore ho jata hu.", "Aap jese koi nhi, seriously.",
  "Aap meri sukoon ki jagah hein.", "Aapki choti choti harkatein mujhe pagal krti hein 😭",
  "Aap hamesha mere dil me hein.", "Aapse baat krna mera favourite habit he.",
  "Aap bohot strong hein, proud of you.", "Aapko dekh ke mera din bann jata he.",
  "Aap meri duniya hein 🌷", "Aapki care krna mujhe bohot pasand he.",
  "Aap sach me ek gift hein mere liye.", "Aap pe bohot pyaar aata he mujhe.",
  "Aap sabse alag or sabse special hein.", "Aapki muskurahat meri morning bana deti he.",
  "Aap meri jaan hein, or hamesha rahengi.", "Aapko miss krna bhi mujhe pyara lagta he.",
  "Aap jaisi wife milna meri luck he.", "Aap bohot bohot loved hein, never forget 💗"
];

/* ---------- helpers ---------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- opening screen ---------- */
const intro = $("#intro"), main = $("#main");
$("#openBtn").addEventListener("click", () => {
  intro.classList.add("opening");
  setTimeout(() => {
    intro.hidden = true;
    main.hidden = false;
    main.classList.add("show");
    window.scrollTo(0, 0);
    startFloaters();
    setupReveal();
  }, 900);
});

/* ---------- floating hearts & flowers ---------- */
let floaterTimer = null;
function startFloaters() {
  if (reduceMotion || floaterTimer) return;
  const box = $("#floaters"), icons = ["♡", "❤", "🌷", "🌸", "✦", "💗"];
  const spawn = () => {
    const el = document.createElement("span");
    el.className = "floater";
    el.textContent = icons[Math.floor(Math.random() * icons.length)];
    el.style.cssText = `--x:${Math.random() * 100}%;--s:${14 + Math.random() * 18}px;--d:${9 + Math.random() * 8}s;` +
      `--dx:${(Math.random() - .5) * 120}px;--r:${(Math.random() - .5) * 90}deg;color:#D58A9B`;
    box.appendChild(el);
    setTimeout(() => el.remove(), 18000);
  };
  for (let i = 0; i < 6; i++) setTimeout(spawn, i * 300);
  floaterTimer = setInterval(spawn, 1100);
}

/* ---------- scroll reveal ---------- */
function setupReveal() {
  const items = $$(".sec .sec-title, .sec .card, .letter, .gifts, .future, .future-note, .bye p, .bye .btn");
  items.forEach(el => el.classList.add("reveal"));
  if (!("IntersectionObserver" in window)) { items.forEach(el => el.classList.add("in")); return; }
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }), { threshold: .12 });
  items.forEach(el => io.observe(el));
}

/* ---------- DAILY LOVE NOTE (date-based, no Math.random) ---------- */
function dayNumber(d) {
  // Local calendar date -> whole days since 1970-01-01. Same date = same number on every device.
  return Math.floor(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / 86400000);
}
function noteIndex(d, length) {
  return ((dayNumber(d) % length) + length) % length;
}
let shownDay = null;
function renderDaily() {
  const now = new Date(), dn = dayNumber(now);
  if (dn === shownDay) return;           // same day: keep the same message
  shownDay = dn;
  const i = noteIndex(now, LOVE_NOTES.length);
  const b = noteIndex(now, BONUS_LINES.length);
  $("#dailyDate").textContent = now.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
  $("#dailyMsg").textContent = LOVE_NOTES[i];
  $("#dailyCount").textContent = `Love Note ${String(i + 1).padStart(2, "0")} / ${LOVE_NOTES.length}`;
  const bonus = $("#bonus");
  bonus.textContent = BONUS_LINES[(b + 7) % BONUS_LINES.length];
  bonus.hidden = true;
  $("#moreLove").setAttribute("aria-expanded", "false");
}
$("#moreLove").addEventListener("click", e => {
  const bonus = $("#bonus"), open = bonus.hidden;
  bonus.hidden = !open;
  e.currentTarget.setAttribute("aria-expanded", String(open));
  if (open) burst(e.currentTarget, 8);
});
renderDaily();
setInterval(renderDaily, 30000);   // catches midnight while the page stays open
document.addEventListener("visibilitychange", () => { if (!document.hidden) renderDaily(); });
window.addEventListener("focus", renderDaily);

/* ---------- QUIZ ---------- */
const QUIZ = [
  { q: "What's my favourite thing to do when we're on a video call?", a: [
    ["Just stare at you.", "Haan bilkul, me bs dekhta rehta hu 😭 Mujhe pta bhi nhi chalta time kaise guzar jata he."],
    ["Listen to you talk.", "Aapki baatein sunna mera favourite he. Aap bolti rahein, me sunta rahunga 🥹"],
    ["Admire your face.", "Correct-ish! Aapka chehra dekh ke dil khush ho jata he 🫠"],
    ["All of these.", "Perfect answer, Mrs. Mine! Aap mujhe bohot acha jaanti hein ❤️"]] },
  { q: "What's one of my favourite memories with you?", a: [
    ["Our first video call.", "Aww wo din! Me kitna nervous tha, but best day ever 🥹"],
    ["Watching a movie together.", "Movie nights meri favourite hein. Aapke sath bs baithna he mujhe 🎬"],
    ["Our random late-night conversations.", "Wo raat ki baatein, bs wohi sab se zyada yaad aati hein 😭"],
    ["Every little moment with you.", "Ye hee sach he. Aapke sath har moment special he ❤️"]] },
  { q: "What do I imagine the most about our future?", a: [
    ["Spending ordinary days together.", "Haan, normal si life, bs aapke sath. Wohi sab kuch he 🌷"],
    ["Going on little dates.", "Little dates, random walks, or aap ka haath. Bs yehi chahiye 🫶🏻"],
    ["Having our own peaceful little home.", "Hamara chota sa peaceful ghar. Me roz ye imagine krta hu 🏡"],
    ["ALL OF THESE.", "Boom! Aap to genius hein, meri jaan 😭❤️"]] },
  { q: "What's something I could never get bored of?", a: [
    ["Looking at you.", "Kabhi bore nhi hounga, seriously. Aap bohot pretty hein 🫠"],
    ["Listening to your voice.", "Aapki voice meri favourite sound he, Allah kasam 🥹"],
    ["Talking to you.", "Aapse baat krna mera favourite habit he 💗"],
    ["Everything about you.", "Exactly. Everything. Aap me sab kuch he jo mujhe pasand he ❤️"]] },
  { q: "What happens when you say you're going to sleep?", a: [
    ["I say goodnight and sleep.", "Ok shayad, but pehle thori der me aapko miss bhi krta hu 😭"],
    ["I ask you to stay a little longer.", "Haan, bs 5 min or! Me clingy hu, pta he 🥹"],
    ["I start missing you already.", "Bilkul sahi. Aap so jaoge or me aapko miss krunga 🫠"],
    ["ALL OF THESE 😭", "Aap ne to mera dil padh liya. Perfect score ❤️"]] }
];
let qi = 0;
const optsBox = $("#quizOpts"), replyEl = $("#quizReply"), nextBtn = $("#quizNext");
function showQuestion() {
  const item = QUIZ[qi];
  $("#quizProgress").textContent = `Question ${qi + 1} of ${QUIZ.length}`;
  $("#quizQ").textContent = item.q;
  replyEl.textContent = "";
  nextBtn.hidden = true;
  nextBtn.textContent = qi === QUIZ.length - 1 ? "See my result ♡" : "Next ♡";
  optsBox.innerHTML = "";
  item.a.forEach(([label, reply]) => {
    const b = document.createElement("button");
    b.type = "button"; b.className = "opt"; b.textContent = label;
    b.addEventListener("click", () => {
      $$(".opt", optsBox).forEach(o => (o.disabled = true));
      b.classList.add("picked");
      replyEl.textContent = reply;
      nextBtn.hidden = false;
      nextBtn.focus({ preventScroll: true });
    });
    optsBox.appendChild(b);
  });
}
nextBtn.addEventListener("click", () => {
  if (qi < QUIZ.length - 1) { qi++; showQuestion(); return; }
  $("#quizProgress").hidden = $("#quizQ").hidden = optsBox.hidden = replyEl.hidden = nextBtn.hidden = true;
  const done = $("#quizDone"); done.hidden = false;
  burst($(".trophy"), 20);
});
$("#quizAgain").addEventListener("click", () => {
  qi = 0;
  $("#quizDone").hidden = true;
  $("#quizProgress").hidden = $("#quizQ").hidden = optsBox.hidden = replyEl.hidden = false;
  showQuestion();
});
showQuestion();

/* ---------- GIFT CARDS ---------- */
$$(".gift-card").forEach(card => {
  $(".gc-back", card).textContent = card.dataset.msg;
  card.addEventListener("click", () => {
    const open = card.classList.toggle("open");
    card.setAttribute("aria-expanded", String(open));
    if (open) burst(card, 6);
  });
});

/* ---------- FINAL KISS ---------- */
$("#kissBtn").addEventListener("click", e => {
  const m = $("#kissMsg");
  m.textContent = "MUAAAAAAHHHH 😭❤️ I LOVE YOUUUU!";
  m.classList.remove("show"); void m.offsetWidth; m.classList.add("show");
  burst(e.currentTarget, 24, ["💋", "❤️", "💗", "🌷"]);
});

/* ---------- heart burst ---------- */
function burst(el, n, icons = ["❤️", "💗", "🌷", "✨"]) {
  if (reduceMotion) return;
  const r = el.getBoundingClientRect(), cx = r.left + r.width / 2, cy = r.top + r.height / 2;
  for (let i = 0; i < n; i++) {
    const s = document.createElement("span");
    s.className = "burst";
    s.textContent = icons[i % icons.length];
    const ang = Math.random() * Math.PI * 2, dist = 60 + Math.random() * 120;
    s.style.cssText = `left:${cx}px;top:${cy}px;--bx:${Math.cos(ang) * dist}px;--by:${Math.sin(ang) * dist - 40}px`;
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 1500);
  }
}
