// 🎀 Tears (was Ribbons) - Creates falling tear elements
function createTear() {
  const tear = document.createElement("div");
  tear.classList.add("ribbon"); // Keep class name for CSS
  tear.style.left = Math.random() * window.innerWidth + "px";
  tear.style.animationDuration = (4 + Math.random() * 6) + "s"; // Slightly slower fall
  tear.style.opacity = 0.3 + Math.random() * 0.5;
  tear.style.height = (20 + Math.random() * 30) + "px"; // Varying tear sizes
  document.querySelector(".ribbons").appendChild(tear);
  setTimeout(() => tear.remove(), 10000); // Longer lifecycle
}
setInterval(createTear, 300); // Create a new tear every 300ms

// 🌟 SPA Pages Data - Apology Theme
const pages = [
  {
    id: 1,
    name: "My Dearest 💔",
    heading: "I'm So Sorry",
    message: "I've been doing a lot of thinking, and I realize I made a mistake. \nI let my pride get in the way, and I hurt you. \nI know saying 'sorry' might not fix everything, but I need you to know that my regret is real.\nPlease know that you mean more to me than my ego ever did.\nI miss you. I miss us.",
    song: "sad-piano-apology.mp3", // Replace with your audio file
    bg: "linear-gradient(135deg, #2c3e50, #4a6274)"
  },
  {
    id: 2,
    name: "To You 🌹",
    heading: "I Was Wrong",
    message: "I've had time to reflect, and I see things differently now.\nI was selfish, and I didn't appreciate you the way I should have.\nYou deserved better from me. I'm not making excuses, just trying to be honest.\nI hope you can find it in your heart to forgive me.",
    song: "reflective-guitar.mp3", // Replace with your audio file
    bg: "linear-gradient(135deg, #4a6274, #6a8a9e)"
  },
  {
    id: 3,
    name: "For You 💖",
    heading: "I Miss Your Smile",
    message: "The silence feels so loud without you.\nI miss your laugh, your voice, the way you make everything seem brighter.\nThe thought of losing you is the worst pain I've known.\nI'm here, ready to listen, ready to change, ready to do better.\nI just need a chance.",
    song: "gentle-strings.mp3", // Replace with your audio file
    bg: "linear-gradient(135deg, #6a8a9e, #8aacb9)"
  },
  {
    id: 4,
    name: "Always & Forever ❤️",
    heading: "Can We Try Again?",
    message: "I know things won't be the same overnight, and I'm not asking for that.\nAll I'm asking for is a chance to earn back your trust.\nI want to show you that you are my priority.\nI want to be the person you deserve.\nI'm sorry for everything, and I promise to do better.\nWith all my love.",
    song: "hopeful-piano.mp3", // Replace with your audio file
    bg: "linear-gradient(135deg, #8aacb9, #aac8d8)"
  }
];

// 🌟 SPA Logic
let currentPage = 0;
const container = document.querySelector(".page-container");
const music = document.getElementById("bgMusic");

function loadPage(index) {
  const page = pages[index];
  container.innerHTML = `
    <h1 class="name">${page.name}</h1>
    <h2 class="glow">${page.heading}</h2>
    <p class="handwriting">${page.message}</p>
    ${index < pages.length - 1 ? '<button id="nextBtn">Read On ❤️</button>' : '<button id="restartBtn" style="margin-top: 30px;">Start Over 💫</button>'}
  `;
  document.body.style.background = page.bg;

  // Smooth music transition
  music.src = page.song;
  music.play().catch(() => {});

  if(index < pages.length - 1){
    document.getElementById("nextBtn").addEventListener("click", () => {
      currentPage++;
      loadPage(currentPage);
    });
  } else {
    // Add listener for restart button
    document.getElementById("restartBtn").addEventListener("click", () => {
      currentPage = 0;
      loadPage(currentPage);
    });
  }
}

// Initialize first page
loadPage(currentPage);

const startScreen = document.getElementById("startScreen");

startScreen.addEventListener("click", () => {
  music.play().catch(()=>{});
  startScreen.style.display = "none";
});
