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
  },
  // ----- FORGIVE PAGE (id: 4) -----
  {
    id: 4,
    name: 'One Last Question 💫',
    heading: 'Do You Forgive Me?',
    message: `I know I don't deserve it, but I'm asking with all my heart.\nCan you find it in you to forgive me?`,
    song: 'hopeful-piano.mp3',
    bg: 'linear-gradient(145deg, #2a4050, #4a6a7e)',
    isForgivePage: true
  },
  // ----- CELEBRATORY PAGE (id: 5) -----
  {
    id: 5,
    name: 'You Said Yes! 🎉',
    heading: 'Thank You',
    message: `You have no idea how much this means to me.\nI promise I'll spend every day making it up to you.\nI love you. ❤️`,
    song: 'celebratory.mp3',
    bg: 'linear-gradient(145deg, #2a5a4a, #4a8a7a)',
    isCelebratory: true
  },
  // ----- GOODBYE PAGE (id: 6) -----
  {
    id: 6,
    name: 'I Understand 💔',
    heading: 'Goodbye',
    message: `I know I hurt you deeply, and I respect your decision.\nI'll always cherish the memories we shared.\nMaybe in another life.\nTake care of yourself. 🌹`,
    song: 'goodbye.mp3',
    bg: 'linear-gradient(145deg, #2a2a3a, #3a3a4a)',
    isGoodbye: true
  }
];

// ----- DOM refs -----
const container = document.getElementById('pageContainer');
const music = document.getElementById('bgMusic');
const startScreen = document.getElementById('startScreen');

let currentPage = 0;
let noClickCount = 0; // track "No" clicks for forgiveness page

// ----- LOAD PAGE -----
function loadPage(index) {
  const page = pages[index];
  if (!page) return;

  // ---- SPECIAL PAGES ----
  if (page.isForgivePage) {
    renderForgivePage(page);
    return;
  }

  if (page.isCelebratory) {
    renderCelebratoryPage(page);
    return;
  }

  if (page.isGoodbye) {
    renderGoodbyePage(page);
    return;
  }

  // ---- NORMAL PAGE ----
  const isLast = (index === pages.length - 1);
  const btnHtml = isLast
    ? `<button id="nextBtn" style="margin-top: 30px; letter-spacing: 1.5px;">Continue 💫</button>`
    : `<button id="nextBtn">Read On ❤️</button>`;

  container.innerHTML = `
    <h1 class="name">${page.name}</h1>
    <h2 class="glow">${page.heading}</h2>
    <p class="handwriting">${page.message}</p>
    ${btnHtml}
  `;

  // update background
  document.body.style.background = page.bg;

  // music
  if (page.song) {
    music.src = page.song;
    music.play().catch(() => {});
  }

  // ---- event listeners ----
  const nextBtn = document.getElementById('nextBtn');
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentPage++;
      loadPage(currentPage);
    });
  }

  // re-trigger typing animation
  const msgEl = container.querySelector('.handwriting');
  if (msgEl) {
    msgEl.style.animation = 'none';
    msgEl.offsetHeight;
    msgEl.style.animation = 'typing 3.8s steps(50, end) forwards, blink 0.9s step-end 4';
  }
}

// ----- RENDER FORGIVE PAGE -----
function renderForgivePage(page) {
  container.innerHTML = `
    <h1 class="name">${page.name}</h1>
    <h2 class="glow">${page.heading}</h2>
    <p class="handwriting" style="animation: typing 2.8s steps(40, end) forwards, blink 0.9s step-end 4;">${page.message}</p>
    <div class="forgive-buttons">
      <button class="btn-yes" id="forgiveYes">Yes ❤️</button>
      <button class="btn-no" id="forgiveNo">No 💔</button>
    </div>
    <div id="sureMessage" style="margin-top: 16px; min-height: 40px;"></div>
  `;

  document.body.style.background = page.bg;
  if (page.song) {
    music.src = page.song;
    music.play().catch(() => {});
  }

  // re-trigger typing
  const msgEl = container.querySelector('.handwriting');
  if (msgEl) {
    msgEl.style.animation = 'none';
    msgEl.offsetHeight;
    msgEl.style.animation = 'typing 2.8s steps(40, end) forwards, blink 0.9s step-end 4';
  }

  // ---- YES button ----
  document.getElementById('forgiveYes').addEventListener('click', () => {
    // go to celebratory page (index 5)
    currentPage = 5;
    loadPage(currentPage);
  });

  // ---- NO button ----
  const noBtn = document.getElementById('forgiveNo');
  const sureMsg = document.getElementById('sureMessage');

  noBtn.addEventListener('click', () => {
    noClickCount++;

    if (noClickCount === 1) {
      sureMsg.innerHTML = `<div class="sure-message">Are you sure? 😔</div>`;
      noBtn.textContent = 'Yes, I\'m Sure';
      noBtn.style.borderColor = 'rgba(210, 150, 150, 0.7)';
    } else if (noClickCount === 2) {
      sureMsg.innerHTML = `<div class="sure-message">Please... think again. 💔</div>`;
      noBtn.textContent = 'I\'m Sure';
    } else if (noClickCount >= 3) {
      // redirect to goodbye page (index 6)
      currentPage = 6;
      loadPage(currentPage);
    }
  });
}

// ----- RENDER CELEBRATORY PAGE -----
function renderCelebratoryPage(page) {
  container.innerHTML = `
    <span class="celebratory-emoji">🎉❤️🎉</span>
    <h1 class="name" style="font-size: 3rem;">${page.name}</h1>
    <h2 class="glow" style="font-size: 1.4rem;">${page.heading}</h2>
    <p class="handwriting" style="animation: typing 2.8s steps(40, end) forwards, blink 0.9s step-end 4;">${page.message}</p>
    <button id="tellToMyFace" style="margin-top: 30px; padding: 14px 40px; font-size: 1.1rem;">
      Tell Me To My Face 💬
    </button>
  `;

  document.body.style.background = page.bg;
  if (page.song) {
    music.src = page.song;
    music.play().catch(() => {});
  }

  // re-trigger typing
  const msgEl = container.querySelector('.handwriting');
  if (msgEl) {
    msgEl.style.animation = 'none';
    msgEl.offsetHeight;
    msgEl.style.animation = 'typing 2.8s steps(40, end) forwards, blink 0.9s step-end 4';
  }

  // ---- WhatsApp redirect ----
  document.getElementById('tellToMyFace').addEventListener('click', () => {
    // Replace with your WhatsApp number (without +)
    const phoneNumber = '2348123456789'; // <-- CHANGE THIS
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  });
}

// ----- RENDER GOODBYE PAGE -----
function renderGoodbyePage(page) {
  container.innerHTML = `
    <h1 class="name" style="font-size: 2.8rem;">${page.name}</h1>
    <h2 class="glow" style="font-size: 1.2rem; opacity: 0.6;">${page.heading}</h2>
    <div class="goodbye-message">${page.message}</div>
    <button id="restartFromGoodbye" style="margin-top: 30px; letter-spacing: 1.5px;">
      Start Over 💫
    </button>
  `;

  document.body.style.background = page.bg;
  if (page.song) {
    music.src = page.song;
    music.play().catch(() => {});
  }

  document.getElementById('restartFromGoodbye').addEventListener('click', () => {
    currentPage = 0;
    noClickCount = 0;
    loadPage(currentPage);
  });
}

// ----- START SCREEN -----
startScreen.addEventListener('click', () => {
  startScreen.classList.add('hidden');
  music.play().catch(() => {});
});

// ----- INITIAL LOAD -----
loadPage(currentPage);

// ----- resize handler -----
window.addEventListener('resize', () => {});
