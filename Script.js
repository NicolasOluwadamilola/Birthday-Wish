@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,500;1,600&family=Inter:wght@300;400;500;600&display=swap');

:root {
    --bg: #0b0306;
    --bg2: #1b070d;
    --pink: #ff5573;
    --pink-light: #ff9aae;
    --text: #f7e9ec;
    --muted: #b99ba2;
    --card-bg: rgba(255, 255, 255, 0.03);
    --border-color: rgba(255, 170, 185, 0.15);
}

* {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    margin: 0;
    padding: 0;
}

html, body {
    margin: 0;
    min-height: 100%;
    background: var(--bg);
    color: var(--text);
    font-family: "Inter", sans-serif;
    overflow-x: hidden;
}

/* Page Styles */
.page {
    min-height: 100svh;
    width: 100%;
    position: relative;
    display: none;
    overflow: hidden;
    background:
        radial-gradient(circle at 20% 15%, rgba(120, 15, 42, .25), transparent 35%),
        radial-gradient(circle at 80% 75%, rgba(105, 8, 30, .20), transparent 38%),
        linear-gradient(145deg, #17050a 0%, #080205 55%, #18050b 100%);
}

.page.active {
    display: flex;
    animation: fadeIn 0.6s ease;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

.page::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    opacity: .35;
    background-image:
        radial-gradient(circle, rgba(255,255,255,.8) 0 1px, transparent 1.5px);
    background-size: 180px 180px;
    background-position: 20px 30px;
}

/* Content */
.content {
    width: min(92%, 760px);
    margin: auto;
    position: relative;
    z-index: 2;
    text-align: center;
    padding: 40px 0;
}

/* Typography */
.kicker {
    letter-spacing: .38em;
    font-size: 12px;
    font-weight: 500;
    color: #b99ba2;
    text-transform: uppercase;
    display: inline-flex;
    align-items: center;
    gap: 14px;
}

.kicker::before {
    content: "";
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #9e2943;
    box-shadow: 0 0 15px rgba(255,60,100,.45);
}

h1 {
    margin: 62px 0 22px;
    font-family: "Cormorant Garamond", serif;
    font-size: clamp(60px, 14vw, 108px);
    font-weight: 500;
    line-height: .9;
    letter-spacing: -.04em;
    background: linear-gradient(135deg, #f7e9ec, #ff9aae);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

.subtitle {
    max-width: 620px;
    margin: 0 auto;
    color: #dccbd0;
    font-size: clamp(21px, 5vw, 30px);
    line-height: 1.5;
    font-weight: 300;
}

.section-label {
    letter-spacing: .42em;
    font-size: 13px;
    color: #b99ba2;
    text-transform: uppercase;
}

/* Progress */
.progress {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin: 30px 0 20px;
}

.progress span {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #3c2028;
    transition: all 0.3s ease;
}

.progress span.active {
    width: 32px;
    border-radius: 20px;
    background: var(--pink);
    box-shadow: 0 0 20px rgba(255,75,108,.5);
}

/* Buttons */
.primary-btn {
    border: 0;
    cursor: pointer;
    font: 600 18px "Inter", sans-serif;
    margin-top: 45px;
    min-width: 200px;
    padding: 18px 40px;
    border-radius: 999px;
    color: white;
    background: linear-gradient(135deg, #f34767, #e72e51);
    box-shadow:
        0 0 0 1px rgba(255,255,255,.08),
        0 15px 45px rgba(239,48,81,.25);
    transition: transform .2s, box-shadow .2s;
}

.primary-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 18px 55px rgba(239,48,81,.4);
}

.primary-btn:active {
    transform: translateY(0px);
}

.footer-label {
    margin-top: 60px;
    color: #70565d;
    letter-spacing: .34em;
    font-size: 11px;
    text-transform: uppercase;
}

/* Message Cards */
.message-content {
    padding: 40px 0;
}

.message-card {
    max-width: 680px;
    margin: 30px auto 40px;
    padding: 40px 45px;
    background: var(--card-bg);
    border-radius: 20px;
    border: 1px solid var(--border-color);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    text-align: left;
}

.message-card p {
    color: #e5d4d8;
    font-size: clamp(18px, 3.5vw, 22px);
    line-height: 1.9;
    font-weight: 300;
    margin: 0 0 30px;
}

.message-card p:last-child {
    margin-bottom: 0;
}

.message-card strong {
    color: #ff9aae;
    font-weight: 600;
}

.final-message {
    text-align: center;
}

.apology-text {
    font-family: "Cormorant Garamond", serif;
    font-size: clamp(32px, 6vw, 48px) !important;
    font-weight: 500;
    color: #ff9aae !important;
    text-align: center;
}

.question {
    margin: 30px auto 0;
    color: #ff9daf;
    font: italic 600 clamp(28px, 5vw, 42px)/1.3 "Cormorant Garamond", serif;
    text-align: center;
}

/* Choices */
.choices {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 30px;
    flex-wrap: wrap;
}

.choice {
    min-width: 140px;
    padding: 16px 35px;
    border-radius: 999px;
    background: transparent;
    color: #d7c1c6;
    border: 1px solid rgba(255, 160, 180, .25);
    transition: all .2s ease;
    cursor: pointer;
    font: 600 17px "Inter", sans-serif;
}

.choice.yes {
    color: white;
    background: #ef3d5f;
    border-color: transparent;
    box-shadow: 0 12px 40px rgba(239,61,95,.25);
}

.choice:hover {
    transform: translateY(-2px);
}

.choice.yes:hover {
    transform: translateY(-2px) scale(1.02);
}

.choice:active {
    transform: translateY(0px) scale(0.98);
}

/* Final Page */
.final-content {
    width: min(92%, 700px);
}

.hearts {
    position: absolute;
    inset: 0;
    pointer-events: none;
    overflow: hidden;
}

.heart {
    position: absolute;
    font-size: 30px;
    opacity: .5;
    filter: blur(.3px);
    animation: float 8s linear infinite;
}

@keyframes float {
    from { transform: translateY(110vh) rotate(0deg); opacity: 0; }
    15% { opacity: .55; }
    85% { opacity: .45; }
    to { transform: translateY(-15vh) rotate(20deg); opacity: 0; }
}

.final-title {
    margin: 40px 0 35px;
    font-size: clamp(80px, 20vw, 150px);
    background: linear-gradient(90deg, #fff, #ff9db0);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

.final-text {
    color: #e8d6da;
    font-size: clamp(21px, 5vw, 30px);
    line-height: 1.55;
    font-weight: 300;
}

.final-subtitle {
    margin: 30px 0 50px;
    color: #ff9db0;
    font: italic 500 28px "Cormorant Garamond", serif;
}

.whatsapp-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    width: min(100%, 420px);
    padding: 20px 30px;
    border-radius: 999px;
    color: white;
    text-decoration: none;
    font: 600 18px "Inter", sans-serif;
    background: linear-gradient(135deg, #ff6681, #f64c6d);
    box-shadow: 0 15px 50px rgba(245,60,95,.3);
    transition: transform .2s, box-shadow .2s;
}

.whatsapp-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 20px 60px rgba(245,60,95,.45);
}

.whatsapp-btn:active {
    transform: translateY(0px);
}

.sealed {
    margin-top: 50px;
    color: #765b63;
    letter-spacing: .4em;
    font-size: 11px;
    text-transform: uppercase;
}

/* Responsive */
@media (max-width: 600px) {
    .content {
        padding: 30px 0;
    }

    h1 {
        margin-top: 40px;
    }

    .message-card {
        padding: 30px 25px;
    }

    .message-card p {
        font-size: 17px;
        line-height: 1.7;
    }

    .primary-btn {
        min-width: 160px;
        padding: 16px 32px;
        font-size: 16px;
        margin-top: 35px;
    }

    .choices {
        gap: 12px;
    }

    .choice {
        min-width: 120px;
        padding: 14px 28px;
        font-size: 15px;
    }

    .final-title {
        margin: 30px 0 25px;
    }

    .whatsapp-btn {
        padding: 18px 25px;
        font-size: 16px;
        width: 100%;
    }

    .progress span {
        width: 8px;
        height: 8px;
    }

    .progress span.active {
        width: 28px;
    }

    /* Start Screen Mobile */
    #startScreen span {
        font-size: 1.4rem !important;
    }
}

@media (max-height: 700px) {
    .content {
        padding-top: 25px;
        padding-bottom: 25px;
    }

    h1 {
        margin-top: 30px;
    }

    .message-card {
        padding: 25px 30px;
        margin: 20px auto 30px;
    }

    .footer-label {
        margin-top: 35px;
    }
}
