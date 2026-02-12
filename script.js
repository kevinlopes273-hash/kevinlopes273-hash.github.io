const app = document.getElementById("app");
const message = document.getElementById("message");
const music = document.getElementById("music");

// 📅 FECHA QUE SE CONOCIERON
const startDate = new Date("2025-06-15");

let step = 0;
let musicStarted = false;

const messages = [
  "Cuando llegaste, todo cambió…",
  "Un momento donde no buscaba ninguna relacion…",
  "pero con tu energia entro a mi vida…",
  "dias", // 👈 contador intermedio
  "y todos estos momentos juntos🌸",
  "Los he disfrutado como nunca te imaginas ❤️",
  "Y aún nos falta mucho por delante…",
  "Key…",
  "Quiero que seas tu esa persona que comparta mi vida❤️",
  "final"
];

const photos = [
  "fotos/1.jpg",
  "fotos/2.jpg",
  "fotos/3.jpg",
  "fotos/4.jpg",
  "fotos/5.jpg",
  "fotos/6.jpg",
  "fotos/7.jpg",
  "fotos/8.jpg"
];

app.addEventListener("click", () => {

  // 🎵 música
  if (!musicStarted) {
    music.play();
    musicStarted = true;
  }

  // 📳 vibración
  if (navigator.vibrate) {
    navigator.vibrate(40);
  }

  // 🌸❤️ efecto flotante
  createFloating();

  if (step >= messages.length) return;

  // 📸 foto
  if (photos[step]) {
    app.style.backgroundImage = `url(${photos[step]})`;
  }

  // 💬 mensaje
  if (messages[step] === "dias") {
    message.innerHTML = middleDaysMessage();
  } else if (messages[step] === "final") {
    message.innerHTML = finalMessage();
  } else {
    message.innerHTML = messages[step];
  }

  step++;
});

// 🌸❤️ flotantes
function createFloating() {
  const el = document.createElement("div");
  el.classList.add("floating");
  el.innerText = Math.random() > 0.5 ? "🌸" : "❤️";
  el.style.left = Math.random() * 90 + "%";
  el.style.top = "70%";
  app.appendChild(el);
  setTimeout(() => el.remove(), 3000);
}

// ❤️ corazones iniciales
for (let i = 0; i < 6; i++) {
  createAutoHeart();
}

function createAutoHeart() {
  const heart = document.createElement("div");
  heart.classList.add("auto-heart");
  heart.innerText = "❤️";
  heart.style.left = Math.random() * 90 + "%";
  heart.style.animationDelay = Math.random() * 5 + "s";
  app.appendChild(heart);
}

// 📅 días desde que se conocieron
function daysTogether() {
  const today = new Date();
  const diffTime = today - startDate;
  return Math.floor(diffTime / (1000 * 60 * 60 * 24));
}

// 💖 mensaje intermedio
function middleDaysMessage() {
  return `
    <div style="font-size: 1.1em;">Desde ese día han pasado…</div>
    <div style="font-size: 2.5em; margin-top: 10px;">
      ${daysTogether()} días❤️
    </div>
  `;
}

// 💖 mensaje final

