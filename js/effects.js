// Ambient background hearts
const bgEmojis = ["❤️","💕","🌸","✨","💗","🩷"];
function spawnBgHeart() {
  const h = document.createElement("div");
  h.className = "bg-heart";
  h.textContent = bgEmojis[Math.floor(Math.random() * bgEmojis.length)];
  h.style.left = (Math.random() * 100) + "vw";
  h.style.bottom = "-2rem";
  const dur = 7 + Math.random() * 8;
  h.style.animationDuration = dur + "s";
  document.body.appendChild(h);
  setTimeout(() => h.remove(), dur * 1000 + 500);
}
for (let i = 0; i < 6; i++) setTimeout(spawnBgHeart, i * 900);
setInterval(spawnBgHeart, 1400);

// Confetti burst
function confettiBurst() {
  const colors = ["#e91e8c","#f48fb1","#ff80ab","#fff","#ffd6e7","#c2185b","#ffcdd2"];
  for (let i = 0; i < 80; i++) {
    setTimeout(() => {
      const c = document.createElement("div");
      c.className = "confetti-piece";
      c.style.background = colors[Math.floor(Math.random() * colors.length)];
      c.style.left = (20 + Math.random() * 60) + "vw";
      c.style.top  = "-10px";
      c.style.width  = (6 + Math.random() * 8) + "px";
      c.style.height = (6 + Math.random() * 8) + "px";
      c.style.borderRadius = Math.random() > 0.5 ? "50%" : "2px";
      const dur = 1.5 + Math.random() * 2;
      c.style.animationDuration = dur + "s";
      c.style.animationDelay = (Math.random() * 0.6) + "s";
      document.body.appendChild(c);
      setTimeout(() => c.remove(), (dur + 1) * 1000);
    }, i * 18);
  }
}

// Floating hearts (after yes)
function spawnHearts() {
  const emojis = ["❤️","💕","💖","💗","🧸","💓","✨","🌸"];
  for (let i = 0; i < 8; i++) {
    setTimeout(() => {
      const h = document.createElement("div");
      h.className = "heart-float";
      h.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      h.style.left = (5 + Math.random() * 90) + "vw";
      h.style.bottom = "-2rem";
      h.style.animationDuration = (2.5 + Math.random() * 1.5) + "s";
      document.body.appendChild(h);
      setTimeout(() => h.remove(), 4000);
    }, i * 200);
  }
}

// Sparkle trail on yes-btn hover
const sparkleEmojis = ["✨","💖","🌸","💫","⭐"];
document.getElementById("yes-btn").addEventListener("mousemove", (e) => {
  if (Math.random() > 0.4) return;
  const s = document.createElement("div");
  s.className = "sparkle";
  s.textContent = sparkleEmojis[Math.floor(Math.random() * sparkleEmojis.length)];
  s.style.left = (e.clientX + (Math.random() * 20 - 10)) + "px";
  s.style.top  = (e.clientY + (Math.random() * 20 - 10)) + "px";
  document.body.appendChild(s);
  setTimeout(() => s.remove(), 700);
});
