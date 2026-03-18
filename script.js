const audio = new Audio("raindancecut.mp3");
audio.loop = true;

window.onload = () => {
  let isPlaying = localStorage.getItem("musicPlaying");

  if (!isPlaying) {
    audio.play().then(() => {
      localStorage.setItem("musicPlaying", "true");
    }).catch(() => {});
  } else {
    audio.play().catch(() => {});
  }
};



function createRibbon() {
  const ribbon = document.createElement("div");
  ribbon.classList.add("ribbon");

  ribbon.style.left = Math.random() * window.innerWidth + "px";
  ribbon.style.animationDuration = (3 + Math.random() * 5) + "s";
  ribbon.style.opacity = Math.random();

  document.querySelector(".ribbons").appendChild(ribbon);

  setTimeout(() => {
    ribbon.remove();
  }, 8000);
}

setInterval(createRibbon, 200);

const startScreen = document.getElementById("startScreen");
const music = document.getElementById("bgMusic");

startScreen.addEventListener("click", () => {
  music.play();           // Safari now allows it
  startScreen.style.display = "none"; // Remove overlay
});
