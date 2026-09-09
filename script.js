const scenes = [
  {
    caption: "Noche. Mar abierto. Dos figuras y una superficie improvisada.",
    hint: "Una historia de amor ambientada en un famoso viaje que termina en tragedia.",
    answer: ["titanic"],
    title: "Titanic",
    build: `<div class="sky"></div><div class="stars"></div><div class="moon"></div><div class="water"></div><div class="rock"></div><div class="silhouette"></div>`
  },
  {
    caption: "Una mansión enorme, una puerta y una luz que no parece del todo normal.",
    hint: "Un clásico del cine de terror con una familia aislada en un hotel.",
    answer: ["el resplandor", "the shining"],
    title: "El resplandor",
    build: `<div class="mansion"></div><div class="house"></div><div class="window w1"></div><div class="window w2"></div><div class="window w3"></div><div class="door"></div><div class="fog"></div>`
  },
  {
    caption: "Arena hasta el horizonte. Una figura observa una construcción gigantesca.",
    hint: "Un arqueólogo, reliquias y aventuras; esta vez, una de sus entregas más recordadas.",
    answer: ["indiana jones", "en busca del arca perdida", "raiders of the lost ark"],
    title: "Indiana Jones",
    build: `<div class="desert"></div><div class="sun"></div><div class="pyramid"></div><div class="shadow"></div><div class="explorer"></div>`
  },
  {
    caption: "Una ciudad nocturna, luces de neón y un coche esperando en la lluvia.",
    hint: "Ciencia ficción de estética cyberpunk: replicantes y un detective.",
    answer: ["blade runner"],
    title: "Blade Runner",
    build: `<div class="city"></div><div class="city-light"></div><div class="neon"></div><div class="neon-text">CITY</div><div class="car"></div><div class="wheel a"></div><div class="wheel b"></div>`
  },
  {
    caption: "El espacio profundo. Una nave silenciosa atraviesa la oscuridad.",
    hint: "Un clásico de ciencia ficción donde una computadora de la nave tiene un papel clave.",
    answer: ["2001", "2001: una odisea del espacio", "2001 una odisea del espacio"],
    title: "2001: Una odisea del espacio",
    build: `<div class="spaceship"></div><div class="planet"></div><div class="ship"></div>`
  },
  {
    caption: "Un gran salón, música, un vestido espectacular y un baile que lo cambia todo.",
    hint: "Una princesa, una noche especial y un zapato que se convierte en la pista decisiva.",
    answer: ["cenicienta", "cinderella"],
    title: "Cenicienta",
    build: `<div class="ballroom"></div><div class="chandelier"></div><div class="dancer"></div>`
  },
  {
    caption: "Un bosque oscuro. Un camino. Una pequeña luz que guía a alguien.",
    hint: "Una aventura fantástica en la que un grupo emprende un viaje para destruir un objeto muy poderoso.",
    answer: ["el señor de los anillos", "the lord of the rings", "la comunidad del anillo"],
    title: "El Señor de los Anillos",
    build: `<div class="forest"></div><div class="tree t1"></div><div class="tree t2"></div><div class="tree t3"></div><div class="path"></div><div class="lantern"></div><div class="figure"></div>`
  },
  {
    caption: "Una mesa, velas y una cena elegante. Alguien espera una sorpresa.",
    hint: "Una comedia romántica ambientada en Nueva York, con una escena de restaurante especialmente famosa.",
    answer: ["cuando harry encontro a sally", "when harry met sally"],
    title: "Cuando Harry encontró a Sally",
    build: `<div class="desks"></div><div class="table"></div><div class="plates p1"></div><div class="plates p2"></div><div class="candles"></div><div class="person-a"></div><div class="person-b"></div>`
  }
];

let current = 0;
let score = 0;
let answered = false;
let usedHint = false;

const sceneEl = document.getElementById("scene");
const captionEl = document.getElementById("sceneCaption");
const hintEl = document.getElementById("hint");
const answerEl = document.getElementById("answer");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");
const checkBtn = document.getElementById("checkBtn");
const skipBtn = document.getElementById("skipBtn");
const hintBtn = document.getElementById("hintBtn");
const progressBar = document.getElementById("progressBar");
const questionNumber = document.getElementById("questionNumber");
const scoreEl = document.getElementById("score");
const gameEl = document.getElementById("game");
const resultEl = document.getElementById("result");
const finalTitle = document.getElementById("finalTitle");
const finalText = document.getElementById("finalText");
const restartBtn = document.getElementById("restartBtn");

function normalize(text) {
  return text.toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s:]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function renderScene() {
  const s = scenes[current];
  sceneEl.innerHTML = s.build;
  captionEl.textContent = s.caption;
  hintEl.hidden = true;
  hintEl.textContent = s.hint;
  answerEl.value = "";
  answerEl.disabled = false;
  checkBtn.disabled = false;
  nextBtn.disabled = true;
  skipBtn.disabled = false;
  hintBtn.disabled = false;
  feedbackEl.textContent = "";
  feedbackEl.className = "feedback";
  answered = false;
  usedHint = false;
  questionNumber.textContent = `ESCENA ${current + 1} / ${scenes.length}`;
  progressBar.style.width = `${((current + 1) / scenes.length) * 100}%`;
  answerEl.focus();
}

function finishRound(correct, skipped = false) {
  answered = true;
  answerEl.disabled = true;
  checkBtn.disabled = true;
  skipBtn.disabled = true;
  hintBtn.disabled = true;
  nextBtn.disabled = false;

  if (correct) {
    const points = usedHint ? 5 : 10;
    score += points;
    scoreEl.textContent = score;
    feedbackEl.textContent = `¡Correcto! Era ${scenes[current].title}. +${points} puntos`;
    feedbackEl.className = "feedback good";
  } else {
    feedbackEl.textContent = skipped
      ? `La respuesta era: ${scenes[current].title}.`
      : `No es esa. La respuesta era: ${scenes[current].title}.`;
    feedbackEl.className = "feedback bad";
  }
}

function checkAnswer() {
  if (answered) return;
  const guess = normalize(answerEl.value);
  if (!guess) {
    feedbackEl.textContent = "Escribe una respuesta primero.";
    feedbackEl.className = "feedback bad";
    return;
  }
  const correct = scenes[current].answer.some(a => normalize(a) === guess || normalize(a).includes(guess) || guess.includes(normalize(a)));
  finishRound(correct);
}

function nextScene() {
  current++;
  if (current >= scenes.length) {
    gameEl.hidden = true;
    resultEl.hidden = false;
    const percent = Math.round((score / (scenes.length * 10)) * 100);
    finalTitle.textContent = score >= 65 ? "¡Eres de película!" : score >= 40 ? "Buen ojo cinéfilo" : "Hay que ver más cine 😄";
    finalText.textContent = `Has conseguido ${score} puntos de un máximo de ${scenes.length * 10}. Puntuación relativa: ${percent}%.`;
  } else {
    renderScene();
    window.scrollTo({top: gameEl.offsetTop - 20, behavior:"smooth"});
  }
}

checkBtn.addEventListener("click", checkAnswer);
answerEl.addEventListener("keydown", e => { if (e.key === "Enter") checkAnswer(); });
skipBtn.addEventListener("click", () => { if (!answered) finishRound(false, true); });
hintBtn.addEventListener("click", () => {
  if (answered) return;
  usedHint = true;
  hintEl.hidden = false;
  hintBtn.textContent = "💡 Pista mostrada";
});
nextBtn.addEventListener("click", nextScene);
restartBtn.addEventListener("click", () => {
  current = 0;
  score = 0;
  scoreEl.textContent = "0";
  resultEl.hidden = true;
  gameEl.hidden = false;
  renderScene();
  window.scrollTo({top: gameEl.offsetTop - 20, behavior:"smooth"});
});

renderScene();
