let pos = document.documentElement;

pos.addEventListener("mousemove", (e) => {
  pos.style.setProperty("--1", e.clientX + "px");
  pos.style.setProperty("--2", e.clientY + "px");
  pos.style.border("8px solid #0000FF");
});
