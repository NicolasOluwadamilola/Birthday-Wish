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
    message: `I’ve been meaning to say this for a while, and I honestly don’t know the perfect way to start.\n I know I ignored your message for almost two weeks now, and I’m sorry. \n I was really upset by what happened, and at the time I felt like distancing myself was the only way I could deal with how angry I was. \nBut looking back, I know I let that silence go on for far too long.`,
    song: 'Chicago.mp3',
    bg: 'linear-gradient(145deg, #1e2b36, #3a4f60)'
  },
  {
    id: 1,
    name: 'To You 🌹',
    heading: 'I Was Wrong',
    message: `What you said really hurt and pissed me off, and I won’t pretend that it didn’t affect me.\n I needed some time to process how I felt because I didn’t trust myself to respond without saying something out of anger.\n But I also realise that being hurt doesn’t justify shutting you out completely.`,
    song: 'Chicago.mp3',
    bg: 'linear-gradient(145deg, #2d4050, #4a6478)'
  },
  {
    id: 2,
    name: 'Always & Forever ❤️',
    heading: 'Can We Try Again?',
    message: `I’m genuinely sorry for how I handled it. You didn’t deserve to be met with silence for this long, regardless of how upset I was. \nI could have handled the situation with more maturity, and I take responsibility for that. I’m not sending this because I suddenly think what happened was okay or because my feelings have disappeared.\n I’m sending it because I know I could have handled my feelings and communicated them much better.`,
    song: 'Sade.mp3',
    bg: 'linear-gradient(145deg, #4a6a7e, #6e8fa3)'
  },
  // ----- FORGIVE PAGE (id: 4) -----
  {
    id: 3,
    name: 'One Last Question 💫',
    heading: 'Do You Forgive Me?',
    message: `More than anything, I’m just really sorry. I’m sorry for letting things get to this point and for creating this distance between us.\n I miss how things were between us before all of this happened—the way we talked, the way we were with each other, and just having you close to me. I know we can’t simply erase what happened, but I honestly wish we could get back to that place again.\n I want us to be okay. I want us to find our way back to each other and feel like us again.\n I’m truly sorry. Can we takk?`,
    song: 'Julius.mp3',
    bg: 'linear-gradient(145deg, #2a4050, #4a6a7e)',
    isForgivePage: true
  },
  // ----- CELEBRATORY PAGE (id: 5) -----
  {
    id:5,
    name: 'You Said Yes! 🎉',
    heading: 'Thank You',
    message: `You have no idea how much this means to me.\nI promise I'll do my best to make it up to you.\nI love you. ❤️`,
    song: 'Julius.mp3',
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
    const phoneNumber = '2349061331551'; // <-- CHANGE THIS
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
