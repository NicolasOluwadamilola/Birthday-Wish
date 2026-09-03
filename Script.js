// ==============================================
// script.js  –  SPA logic + tears + music
// ==============================================

// ----- TEARS (falling) -----
const tearsContainer = document.getElementById('tearsContainer');

function createTear() {
  const tear = document.createElement('div');
  tear.classList.add('tear');
  const w = window.innerWidth;
  tear.style.left = (Math.random() * w) + 'px';
  tear.style.animationDuration = (4.5 + Math.random() * 7) + 's';
  tear.style.height = (18 + Math.random() * 34) + 'px';
  tear.style.opacity = 0.2 + Math.random() * 0.45;
  tearsContainer.appendChild(tear);
  setTimeout(() => tear.remove(), 12000);
}

// spawn tears at intervals
setInterval(createTear, 280);
// also create a few immediately
for (let i = 0; i < 12; i++) {
  setTimeout(createTear, i * 120);
}

// ----- SPA PAGES (apology narrative) -----
const pages = [
  {
    id: 0,
    name: 'My Dearest 💔',
    heading: 'I\'m So Sorry',
    message: `I've been doing a lot of thinking, and I realize I made a mistake.\nI let my pride get in the way, and I hurt you.\nI know saying "sorry" might not fix everything, but I need you to know that my regret is real.\nPlease know that you mean more to me than my ego ever did.\nI miss you. I miss us.`,
    song: 'raindancecut.mp3',
    bg: 'linear-gradient(145deg, #1e2b36, #3a4f60)'
  },
  {
    id: 1,
    name: 'To You 🌹',
    heading: 'I Was Wrong',
    message: `I've had time to reflect, and I see things differently now.\nI was selfish, and I didn't appreciate you the way I should have.\nYou deserved better from me. I'm not making excuses, just trying to be honest.\nI hope you can find it in your heart to forgive me.`,
    song: 'reflective-guitar.mp3',
    bg: 'linear-gradient(145deg, #2d4050, #4a6478)'
  },
  {
    id: 2,
    name: 'For You 💖',
    heading: 'I Miss Your Smile',
    message: `The silence feels so loud without you.\nI miss your laugh, your voice, the way you make everything seem brighter.\nThe thought of losing you is the worst pain I've known.\nI'm here, ready to listen, ready to change, ready to do better.\nI just need a chance.`,
    song: 'gentle-strings.mp3',
    bg: 'linear-gradient(145deg, #3a5568, #5a7a8e)'
  },
  {
    id: 3,
    name: 'Always & Forever ❤️',
    heading: 'Can We Try Again?',
    message: `I know things won't be the same overnight, and I'm not asking for that.\nAll I'm asking for is a chance to earn back your trust.\nI want to show you that you are my priority.\nI want to be the person you deserve.\nI'm sorry for everything, and I promise to do better.\nWith all my love.`,
    song: 'hopeful-piano.mp3',
    bg: 'linear-gradient(145deg, #4a6a7e, #6e8fa3)'
  }
];

// ----- DOM refs -----
const container = document.getElementById('pageContainer');
const music = document.getElementById('bgMusic');
const startScreen = document.getElementById('startScreen');

let currentPage = 0;

// ----- LOAD PAGE -----
function loadPage(index) {
  const page = pages[index];
  if (!page) return;

  // build HTML
  const isLast = (index === pages.length - 1);
  const btnHtml = isLast
    ? `<button id="restartBtn" style="margin-top: 30px; letter-spacing: 1.5px;">Start Over 💫</button>`
    : `<button id="nextBtn">Read On ❤️</button>`;

  container.innerHTML = `
    <h1 class="name">${page.name}</h1>
    <h2 class="glow">${page.heading}</h2>
    <p class="handwriting">${page.message}</p>
    ${btnHtml}
  `;

  // update background with smooth transition
  document.body.style.background = page.bg;

  // music
  if (page.song) {
    music.src = page.song;
    music.play().catch(() => {});
  }

  // ----- event listeners for buttons -----
  if (!isLast) {
    const nextBtn = document.getElementById('nextBtn');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        currentPage++;
        loadPage(currentPage);
      });
    }
  } else {
    const restartBtn = document.getElementById('restartBtn');
    if (restartBtn) {
      restartBtn.addEventListener('click', () => {
        currentPage = 0;
        loadPage(currentPage);
      });
    }
  }

  // re-trigger typing animation: remove and re-add class
  const msgEl = container.querySelector('.handwriting');
  if (msgEl) {
    msgEl.style.animation = 'none';
    msgEl.offsetHeight; // reflow
    msgEl.style.animation = 'typing 3.8s steps(50, end) forwards, blink 0.9s step-end 4';
  }
}

// ----- START SCREEN -----
startScreen.addEventListener('click', () => {
  startScreen.classList.add('hidden');
  music.play().catch(() => {});
  // start tears if not already
});

// initial load
loadPage(currentPage);

// ----- handle window resize for tears (optional) -----
window.addEventListener('resize', () => {
  // no need to reposition, tears flow freely
});
