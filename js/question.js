// Tab title flicker
const titles = ["🥺 please say yes","💕 do you love me?","🐻 the bear is waiting","🥺 please say yes"];
let titleIdx = 0;
setInterval(() => {
  titleIdx = (titleIdx + 1) % titles.length;
  document.title = titles[titleIdx];
}, 1800);

// Peek bear
const peekBear = document.getElementById("peek-bear");
setTimeout(() => peekBear.classList.add("peeking"), 800);
setInterval(() => peekBear.classList.toggle("peeking"), 3500);

// Yes grows, No shrinks over time
const yesBtn = document.getElementById("yes-btn");
const noBtn  = document.getElementById("no-btn");
let yesFontSize = 1.2;
setInterval(() => {
  yesFontSize = Math.min(yesFontSize + 0.06, 2.2);
  yesBtn.style.fontSize = yesFontSize + "rem";
}, 1200);

// No button behaviour
let noClicks = 0;
const noMessages = [
  "are you sure? 🥺",
  "please reconsider 😭",
  "the bear is crying 😢",
  "FINE. but the bear is upset 🐻💔"
];
const noMsgEl = document.getElementById("no-message");

noBtn.addEventListener("click", () => {
  noClicks++;
  if (noClicks === 1) {
    playScream();
    triggerJumpScare();
    const rect = noBtn.getBoundingClientRect();
    noBtn.style.position = "fixed";
    noBtn.style.left   = rect.left + "px";
    noBtn.style.top    = rect.top  + "px";
    noBtn.style.margin = "0";
    setTimeout(teleportButton, 50);
  }
  const msgIdx = Math.min(noClicks - 1, noMessages.length - 1);
  noMsgEl.style.opacity = "0";
  setTimeout(() => {
    noMsgEl.textContent = noMessages[msgIdx];
    noMsgEl.style.opacity = "1";
  }, 200);
});

noBtn.addEventListener("mouseenter", () => { if (noClicks >= 1) teleportButton(); });
noBtn.addEventListener("touchstart", (e) => {
  if (noClicks >= 1) { e.preventDefault(); teleportButton(); }
}, { passive: false });

function teleportButton() {
  const bw = noBtn.offsetWidth + 20;
  const bh = noBtn.offsetHeight + 20;
  noBtn.style.transition = "left 0.15s ease, top 0.15s ease";
  noBtn.style.left = Math.max(10, Math.random() * (window.innerWidth  - bw)) + "px";
  noBtn.style.top  = Math.max(10, Math.random() * (window.innerHeight - bh)) + "px";
  showSkeptic();
}

const skepticEmojis = ["🤨","🙄","😒","😑","🫤","😤"];
function showSkeptic() {
  const s = document.createElement("div");
  s.style.cssText = "position:fixed;font-size:2.8rem;z-index:300;pointer-events:none;transition:transform 0.3s cubic-bezier(0.34,1.56,0.64,1),opacity 0.25s ease;";
  s.textContent = skepticEmojis[Math.floor(Math.random() * skepticEmojis.length)];
  const edge = Math.floor(Math.random() * 4);
  const pos  = 15 + Math.random() * 70;
  let startT, endT;
  if (edge === 0)      { s.style.left = pos+"vw"; s.style.top    = "-3.5rem"; startT = "translateY(0)";    endT = "translateY(3.5rem)"; }
  else if (edge === 1) { s.style.right= "-3.5rem";s.style.top    =  pos+"vh"; startT = "translateX(0)";    endT = "translateX(-3.5rem)"; }
  else if (edge === 2) { s.style.left = pos+"vw"; s.style.bottom = "-3.5rem"; startT = "translateY(0)";    endT = "translateY(-3.5rem)"; }
  else                 { s.style.left = "-3.5rem";s.style.top    =  pos+"vh"; startT = "translateX(0)";    endT = "translateX(3.5rem)"; }
  s.style.transform = startT; s.style.opacity = "0";
  document.body.appendChild(s);
  requestAnimationFrame(() => requestAnimationFrame(() => { s.style.transform = endT; s.style.opacity = "1"; }));
  setTimeout(() => {
    s.style.transform = startT; s.style.opacity = "0";
    setTimeout(() => s.remove(), 300);
  }, 900);
}

function triggerJumpScare() {
  const js    = document.getElementById("jumpscare");
  const emoji = document.getElementById("scare-emoji");
  js.style.display = "flex";
  js.offsetHeight;
  js.classList.add("active");
  const scareEmojis = ["👻","😱","💀","🕷️","🫨"];
  let eIdx = 0;
  const cycle = setInterval(() => {
    eIdx = (eIdx + 1) % scareEmojis.length;
    emoji.textContent = scareEmojis[eIdx];
    emoji.style.animation = "none";
    emoji.offsetHeight;
    emoji.style.animation = "";
  }, 260);
  setTimeout(() => {
    clearInterval(cycle);
    js.classList.remove("active");
    js.classList.add("fade-out");
    setTimeout(() => { js.style.display = "none"; js.classList.remove("fade-out"); emoji.textContent = "👻"; }, 400);
  }, 1500);
}

// Wire yes button
yesBtn.addEventListener("click", onYes);
