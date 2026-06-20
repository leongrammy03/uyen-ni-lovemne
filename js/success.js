function onYes() {
  peekBear.style.display = "none";
  document.getElementById("main-view").style.display = "none";
  noBtn.style.display = "none";
  document.getElementById("success").style.display = "flex";

  // Visit counter
  const count = parseInt(localStorage.getItem("loveYesCount") || "0") + 1;
  localStorage.setItem("loveYesCount", count);
  if (count > 1) document.getElementById("visit-count").textContent = "she's said yes " + count + " times now 🥹";

  // Bear animation sequence
  const bear = document.getElementById("bear");
  bear.classList.add("run");
  setTimeout(() => {
    bear.classList.remove("run");
    bear.classList.add("spin");
    setTimeout(() => { bear.classList.remove("spin"); bear.classList.add("sit"); }, 600);
  }, 900);

  // Fade in text
  setTimeout(() => document.getElementById("success-msg").classList.add("show"), 100);
  setTimeout(() => document.getElementById("hearts-row").classList.add("show"), 100);
  setTimeout(() => document.getElementById("sub-msg").classList.add("show"), 100);

  confettiBurst();

  // Music
  const audio = document.getElementById("mine-audio");
  audio.currentTime = 40;
  audio.volume = 0.85;
  audio.play().catch(() => {});

  spawnHearts();
  setInterval(spawnHearts, 3000);

  // Reveal action buttons
  setTimeout(() => {
    document.getElementById("photo-booth-trigger").classList.add("show");
    document.getElementById("cal-trigger").classList.add("show");
  }, 2800);

  // Push notification
  fetch("https://ntfy.sh/" + NTFY_TOPIC, {
    method: "POST",
    headers: {
      "Title": "She said YES!!",
      "Tags": "heart,tada",
      "Priority": "urgent"
    },
    body: "Your girlfriend just clicked YES on your page! 🥹🎉"
  }).then(r => console.log("ntfy:", r.status)).catch(e => console.error("ntfy:", e));
}
