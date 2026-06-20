const heartCursor = document.getElementById("heart-cursor");

document.addEventListener("mousemove", (e) => {
  heartCursor.style.left = e.clientX + "px";
  heartCursor.style.top  = e.clientY + "px";
});
document.addEventListener("mouseleave", () => { heartCursor.style.opacity = "0"; });
document.addEventListener("mouseenter", () => { heartCursor.style.opacity = "1"; });
