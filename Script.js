/* =========================================================
   MUSIC PLAYER (from original)
   ========================================================= */

const music = document.getElementById("bgMusic");
const startScreen = document.getElementById("startScreen");

// List of songs for each page (customize these)
const songs = [
    "apology-song-1.mp3",  // Page 1
    "apology-song-2.mp3",  // Page 2
    "apology-song-3.mp3",  // Page 3
    "apology-song-4.mp3",  // Page 4
    "apology-song-5.mp3",  // Page 5
    "apology-final.mp3"    // Page 6
];

// Start music when user taps the screen
startScreen.addEventListener("click", () => {
    music.play().catch(() => {});
    startScreen.style.display = "none";
});

// Change music when page changes
function changeMusic(pageNumber) {
    if (pageNumber >= 1 && pageNumber <= songs.length) {
        music.src = songs[pageNumber - 1];
        music.load();
        music.play().catch(() => {});
    }
}

/* =========================================================
   PAGE NAVIGATION
   ========================================================= */

let currentPage = 1;

function showPage(number) {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    const target = document.getElementById("page" + number);
    if (target) {
        target.classList.add("active");
        currentPage = number;
        window.scrollTo(0, 0);
        changeMusic(number);
    }
}

/* =========================================================
   ANSWER LOGIC
   ========================================================= */

let answerChosen = false;

function yesAnswer() {
    if (answerChosen) return;

    answerChosen = true;
    showPage(6);
    createHearts();

    // Update WhatsApp link with personalized message
    const btn = document.querySelector(".whatsapp-btn");
    if (btn) {
        btn.href = "https://wa.me/2348012345678?text=I%20said%20yes.%20I'm%20ready%20to%20talk.%20❤️";
    }
}

function noAnswer() {
    if (answerChosen) return;

    const button = document.querySelector(".choice:not(.yes)");
    const messages = [
        "Are you sure? 😅",
        "Really? 🥺",
        "Please reconsider? 💕",
        "I'll make it up to you! 🙏"
    ];

    let index = 0;
    const interval = setInterval(() => {
        button.textContent = messages[index];
        button.style.transform = "scale(1.05)";
        index++;

        if (index >= messages.length) {
            clearInterval(interval);
            setTimeout(() => {
                button.textContent = "No";
                button.style.transform = "";
            }, 800);
        }
    }, 600);
}

/* =========================================================
   FLOATING HEARTS
   ========================================================= */

function createHearts() {
    const container = document.getElementById("hearts");

    if (container.children.length > 0) return;

    const symbols = ["♥", "❤", "💕", "💖", "💗"];
    for (let i = 0; i < 25; i++) {
        const heart = document.createElement("div");

        heart.className = "heart";
        heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        heart.style.left = Math.random() * 100 + "%";
        heart.style.animationDelay = (Math.random() * 8) + "s";
        heart.style.animationDuration = (6 + Math.random() * 8) + "s";
        heart.style.fontSize = (20 + Math.random() * 30) + "px";
        heart.style.opacity = 0.3 + Math.random() * 0.4;

        container.appendChild(heart);
    }
}

/* =========================================================
   AUTO-PLAY ON PAGE LOAD (optional)
   ========================================================= */

// Uncomment to auto-play music when page loads (may not work on mobile)
/*
document.addEventListener('DOMContentLoaded', () => {
    music.play().catch(() => {});
});
*/

/* =========================================================
   PREVENT DOUBLE NAVIGATION
   ========================================================= */

let isNavigating = false;

document.querySelectorAll('.primary-btn, .choice').forEach(btn => {
    btn.addEventListener('click', () => {
        // Debounce navigation
        if (isNavigating) return;
        isNavigating = true;
        setTimeout(() => {
            isNavigating = false;
        }, 500);
    });
});

console.log('💔 Apology website loaded with music');
console.log('🎵 Music will play after tapping the start screen');
