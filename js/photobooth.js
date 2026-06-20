const photoBooth   = document.getElementById("photo-booth");
const photoVideo   = document.getElementById("photo-video");
const photoCanvas  = document.getElementById("photo-canvas");
const photoResult  = document.getElementById("photo-result");
const photoFlash   = document.getElementById("photo-flash");
const cornerHearts = document.getElementById("photo-corner-hearts");
const snapBtn      = document.getElementById("snap-btn");
const retakeBtn    = document.getElementById("retake-btn");
const saveBtn      = document.getElementById("save-btn");
let camStream      = null;

document.getElementById("photo-booth-trigger").addEventListener("click", openBooth);
document.getElementById("close-booth-btn").addEventListener("click", shutBooth);

async function openBooth() {
  photoBooth.style.display  = "flex";
  photoResult.style.display = "none";
  photoVideo.style.display  = "block";
  retakeBtn.style.display   = "none";
  saveBtn.style.display     = "none";
  snapBtn.style.display     = "inline-block";
  cornerHearts.classList.remove("show");
  try {
    camStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" }, audio: false });
    photoVideo.srcObject = camStream;
  } catch {
    alert("Camera access denied 🥺 please allow camera access!");
    shutBooth();
  }
}

function shutBooth() {
  photoBooth.style.display = "none";
  if (camStream) { camStream.getTracks().forEach(t => t.stop()); camStream = null; }
}

snapBtn.addEventListener("click", () => {
  const w = photoVideo.videoWidth  || 640;
  const h = photoVideo.videoHeight || 480;
  photoCanvas.width  = w;
  photoCanvas.height = h;
  const ctx = photoCanvas.getContext("2d");

  // Draw mirrored frame
  ctx.save();
  ctx.scale(-1, 1);
  ctx.drawImage(photoVideo, -w, 0, w, h);
  ctx.restore();

  // Bottom gradient
  const grad = ctx.createLinearGradient(0, h * 0.72, 0, h);
  grad.addColorStop(0, "rgba(0,0,0,0)");
  grad.addColorStop(1, "rgba(194,24,91,0.55)");
  ctx.fillStyle = grad;
  ctx.fillRect(0, h * 0.72, w, h * 0.28);

  // Corner hearts
  const heartSize = Math.round(w / 8);
  const pad = Math.round(heartSize * 0.35);
  ctx.font = `${heartSize}px serif`;
  ctx.textBaseline = "top";  ctx.textAlign = "left";  ctx.fillText("💕", pad, pad);
  ctx.textAlign = "right";                             ctx.fillText("💕", w - pad, pad);
  ctx.textBaseline = "bottom";                         ctx.fillText("💕", w - pad, h - pad);
  ctx.textAlign = "left";                              ctx.fillText("💕", pad, h - pad);

  // "I love you" text
  const textSize = Math.round(w / 12);
  ctx.font = `bold ${textSize}px Georgia, serif`;
  ctx.textAlign = "center"; ctx.textBaseline = "bottom";
  ctx.shadowColor = "rgba(233,30,140,0.9)"; ctx.shadowBlur = 18;
  ctx.fillStyle = "white";
  ctx.fillText("I love you ♥", w / 2, h - pad * 0.6);
  ctx.shadowBlur = 0;

  // Flash
  photoFlash.style.opacity = "1";
  setTimeout(() => { photoFlash.style.opacity = "0"; }, 120);

  const dataUrl = photoCanvas.toDataURL("image/png");
  photoResult.src             = dataUrl;
  photoResult.style.transform = "";
  photoResult.style.display   = "block";
  photoVideo.style.display    = "none";
  saveBtn.href                = dataUrl;
  snapBtn.style.display       = "none";
  retakeBtn.style.display     = "inline-block";
  saveBtn.style.display       = "inline-block";
});

retakeBtn.addEventListener("click", () => {
  photoResult.style.display = "none";
  photoVideo.style.display  = "block";
  snapBtn.style.display     = "inline-block";
  retakeBtn.style.display   = "none";
  saveBtn.style.display     = "none";
  cornerHearts.classList.remove("show");
});
