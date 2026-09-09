const allScenes = [
  {
    caption: "Mar abierto de noche. Dos personas se aferran a una superficie mientras el océano las rodea.",
    hint: "Un famoso transatlántico y una historia de amor marcada por una tragedia.",
    answer: ["titanic"], title: "Titanic",
    build: `<div class="scene-art titanic"><div class="sea"></div><div class="stars"></div><div class="moon"></div><div class="ship"></div><div class="iceberg"></div><div class="couple"></div></div>`
  },
  {
    caption: "Un pasillo de hotel vacío, una puerta entreabierta y una luz fría al fondo.",
    hint: "Una familia aislada en un hotel durante el invierno.",
    answer: ["el resplandor","the shining"], title: "El resplandor",
    build: `<div class="scene-art shining"><div class="hotel-wall"></div><div class="hall"></div><div class="door"></div><div class="carpet"></div><div class="light"></div><div class="axe-mark"></div></div>`
  },
  {
    caption: "Desierto, ruinas antiguas y un aventurero frente a un gran templo.",
    hint: "Un arqueólogo famoso que busca reliquias y vive grandes aventuras.",
    answer: ["indiana jones","en busca del arca perdida","raiders of the lost ark"], title: "Indiana Jones",
    build: `<div class="scene-art indiana"><div class="desert"></div><div class="sun"></div><div class="temple"></div><div class="pillar"></div><div class="adventurer"></div><div class="whip"></div></div>`
  },
  {
    caption: "Una megaciudad futurista, lluvia y neones reflejados sobre el asfalto.",
    hint: "Ciencia ficción cyberpunk sobre replicantes y un detective.",
    answer: ["blade runner"], title: "Blade Runner",
    build: `<div class="scene-art bladerunner"><div class="future-sky"></div><div class="buildings"></div><div class="rain"></div><div class="neon-sign"></div><div class="flying-car"></div><div class="street"></div></div>`
  },
  {
    caption: "Una nave blanca viaja por el espacio junto a un enorme planeta.",
    hint: "Ciencia ficción clásica en la que una computadora llamada HAL es fundamental.",
    answer: ["2001","2001: una odisea del espacio","2001 una odisea del espacio"], title: "2001: Una odisea del espacio",
    build: `<div class="scene-art space"><div class="space-bg"></div><div class="planet-big"></div><div class="planet-ring"></div><div class="spaceship-clear"></div><div class="stars2"></div></div>`
  },
  {
    caption: "Un enorme salón de baile, un vestido elegante y una noche que parece mágica.",
    hint: "Una joven pierde un zapato después de asistir a un baile.",
    answer: ["cenicienta","cinderella"], title: "Cenicienta",
    build: `<div class="scene-art cinderella"><div class="ballroom-bg"></div><div class="chandelier-clear"></div><div class="stairs"></div><div class="princess"></div><div class="dress"></div><div class="shoe"></div></div>`
  },
  {
    caption: "Un bosque oscuro. Un pequeño grupo sigue un sendero iluminado.",
    hint: "Un grupo debe llevar un objeto muy poderoso hasta un lugar donde pueda ser destruido.",
    answer: ["el señor de los anillos","the lord of the rings","la comunidad del anillo"], title: "El Señor de los Anillos",
    build: `<div class="scene-art lotr"><div class="forest-bg"></div><div class="mountains"></div><div class="trees"></div><div class="path-clear"></div><div class="traveler"></div><div class="lantern-clear"></div></div>`
  },
  {
    caption: "Un restaurante de Nueva York, una mesa para dos y una conversación inolvidable.",
    hint: "Comedia romántica famosa por una escena muy divertida en un restaurante.",
    answer: ["cuando harry encontro a sally","when harry met sally"], title: "Cuando Harry encontró a Sally",
    build: `<div class="scene-art harrysally"><div class="restaurant"></div><div class="booth"></div><div class="table-clear"></div><div class="person-left"></div><div class="person-right"></div><div class="speech"></div></div>`
  },
  {
    caption: "Una casa suburbana, una bicicleta y un niño mirando hacia el cielo.",
    hint: "Un extraterrestre perdido intenta volver a casa con ayuda de unos niños.",
    answer: ["e.t.","et el extraterrestre","e t el extraterrestre"], title: "E.T. el extraterrestre",
    build: `<div class="scene-art et"><div class="suburb-sky"></div><div class="moon-big"></div><div class="hill"></div><div class="bike"></div><div class="kid"></div><div class="et-figure"></div></div>`
  },
  {
    caption: "Una carretera desierta y un coche clásico que parece no tener conductor.",
    hint: "Un conductor huye mientras un camión misterioso lo persigue durante kilómetros.",
    answer: ["el diablo sobre ruedas","duel"], title: "El diablo sobre ruedas",
    build: `<div class="scene-art duel"><div class="road-sky"></div><div class="road"></div><div class="truck"></div><div class="car-red"></div><div class="dust"></div></div>`
  },
  {
    caption: "Un joven descubre que puede entrar en un mundo extraño detrás de una puerta secreta.",
    hint: "Fantasía stop-motion sobre una puerta que lleva a una versión inquietante de otra familia.",
    answer: ["coraline","coraline y la puerta secreta"], title: "Coraline",
    build: `<div class="scene-art coraline"><div class="wallpaper"></div><div class="secret-door"></div><div class="blue-room"></div><div class="button-eye"></div><div class="girl"></div></div>`
  },
  {
    caption: "Una ciudad llena de luces, un taxi y una larga noche que acaba de empezar.",
    hint: "Un taxista de Los Ángeles se ve atrapado en una noche con un asesino.",
    answer: ["collateral"], title: "Collateral",
    build: `<div class="scene-art collateral"><div class="la-sky"></div><div class="city-blocks"></div><div class="taxi"></div><div class="passenger"></div><div class="streetlight"></div></div>`
  },
  {
    caption: "Un parque de dinosaurios donde una enorme criatura aparece detrás de una valla.",
    hint: "Un parque temático pierde el control de sus dinosaurios clonados.",
    answer: ["jurassic park","parque jurasico"], title: "Jurassic Park",
    build: `<div class="scene-art jurassic"><div class="jungle"></div><div class="mountain"></div><div class="fence"></div><div class="dino-head"></div><div class="jeep"></div><div class="rain-lines"></div></div>`
  },
  {
    caption: "Una cafetería retro, una hamburguesa y dos criminales hablando tranquilamente.",
    hint: "Película de Quentin Tarantino con una conversación famosa sobre una hamburguesa.",
    answer: ["pulp fiction"], title: "Pulp Fiction",
    build: `<div class="scene-art pulp"><div class="diner-bg"></div><div class="booth-red"></div><div class="milkshake"></div><div class="suit-person"></div><div class="suit-person2"></div><div class="briefcase"></div></div>`
  },
  {
    caption: "Un pequeño apartamento, luces cálidas y un maletín misterioso sobre una mesa.",
    hint: "Un thriller de Christopher Nolan que juega con el tiempo y la memoria.",
    answer: ["memento"], title: "Memento",
    build: `<div class="scene-art memento"><div class="room"></div><div class="desk"></div><div class="photo"></div><div class="polaroids"></div><div class="man"></div><div class="tattoo-note"></div></div>`
  },
  {
    caption: "Un tren nocturno atraviesa un paisaje nevado mientras alguien observa por la ventana.",
    hint: "Película de misterio ambientada en un tren donde todos son sospechosos.",
    answer: ["asesinato en el orient express","murder on the orient express"], title: "Asesinato en el Orient Express",
    build: `<div class="scene-art orient"><div class="snow-sky"></div><div class="mountain-snow"></div><div class="train"></div><div class="train-window"></div><div class="snowfall"></div></div>`
  },
  {
    caption: "Una granja tranquila, un campo y un cielo donde aparecen luces extrañas.",
    hint: "Un granjero recibe visitas misteriosas del cielo y descubre una señal.",
    answer: ["encuentros en la tercera fase","close encounters of the third kind"], title: "Encuentros en la tercera fase",
    build: `<div class="scene-art encounters"><div class="farm-sky"></div><div class="stars3"></div><div class="mountain-dark"></div><div class="farmhouse"></div><div class="ufo-lights"></div></div>`
  },
  {
    caption: "Un enorme tiburón se acerca a una pequeña barca en el océano.",
    hint: "Un pueblo costero vive aterrorizado por un gran depredador marino.",
    answer: ["tiburon","jaws"], title: "Tiburón",
    build: `<div class="scene-art jaws"><div class="ocean"></div><div class="sunset"></div><div class="boat"></div><div class="shark"></div><div class="waves"></div></div>`
  },
  {
    caption: "Una habitación infantil, juguetes por todas partes y una aventura diminuta.",
    hint: "Los juguetes cobran vida cuando los humanos no están mirando.",
    answer: ["toy story"], title: "Toy Story",
    build: `<div class="scene-art toystory"><div class="wall-blue"></div><div class="floor"></div><div class="clouds"></div><div class="toybox"></div><div class="cowboy"></div><div class="rocket"></div></div>`
  },
  {
    caption: "Una ciudad bajo la lluvia, un paraguas y una figura con gabardina.",
    hint: "Un clásico del cine negro con un detective privado y un misterio.",
    answer: ["el halcon maltes","the maltese falcon"], title: "El halcón maltés",
    build: `<div class="scene-art maltese"><div class="noir-sky"></div><div class="city-noir"></div><div class="rain-noir"></div><div class="detective"></div><div class="falcon"></div></div>`
  },
  {
    caption: "Un barco pirata navega entre nubes oscuras y un mar embravecido.",
    hint: "Una aventura de piratas con un capitán excéntrico y un barco legendario.",
    answer: ["piratas del caribe","pirates of the caribbean"], title: "Piratas del Caribe",
    build: `<div class="scene-art pirates"><div class="storm-sky"></div><div class="ocean-dark"></div><div class="pirate-ship"></div><div class="moon-pirate"></div><div class="skull-flag"></div></div>`
  },
  {
    caption: "Una habitación llena de espejos donde una bailarina ensaya obsesivamente.",
    hint: "Un thriller psicológico sobre una bailarina que busca la perfección.",
    answer: ["black swan"], title: "Black Swan",
    build: `<div class="scene-art blackswan"><div class="studio"></div><div class="mirror"></div><div class="ballerina"></div><div class="feathers"></div><div class="spotlight"></div></div>`
  },
  {
    caption: "Una mansión victoriana, una luna enorme y una criatura que se acerca.",
    hint: "Película de monstruos donde un científico crea vida a partir de restos humanos.",
    answer: ["frankenstein"], title: "Frankenstein",
    build: `<div class="scene-art frankenstein"><div class="gothic-sky"></div><div class="castle"></div><div class="lightning"></div><div class="lab"></div><div class="monster"></div></div>`
  },
  {
    caption: "Un pasillo de instituto, taquillas y un grupo de estudiantes con secretos.",
    hint: "Comedia adolescente sobre un grupo que pasa un sábado castigado en el instituto.",
    answer: ["el club de los cinco","the breakfast club"], title: "El club de los cinco",
    build: `<div class="scene-art breakfast"><div class="school-wall"></div><div class="lockers"></div><div class="floor-school"></div><div class="students"></div><div class="school-clock"></div></div>`
  },
  {
    caption: "Una ciudad de cuento, una casa sobre un acantilado y un coche volador.",
    hint: "Película de animación japonesa sobre una joven y un castillo que puede moverse.",
    answer: ["el castillo ambulante","howl's moving castle"], title: "El castillo ambulante",
    build: `<div class="scene-art howl"><div class="anime-sky"></div><div class="hills"></div><div class="moving-castle"></div><div class="cloud"></div><div class="girl-hat"></div></div>`
  },
  {
    caption: "Un corredor iluminado por tubos blancos y una figura que se acerca lentamente.",
    hint: "Ciencia ficción de terror ambientada en una nave espacial.",
    answer: ["alien","alien el octavo pasajero"], title: "Alien",
    build: `<div class="scene-art alien"><div class="ship-corridor"></div><div class="pipes"></div><div class="warning"></div><div class="alien-figure"></div><div class="mist"></div></div>`
  },
  {
    caption: "Una pista de baile llena de luces y una pareja girando bajo un foco.",
    hint: "Musical sobre un pianista y una actriz que intentan triunfar en Los Ángeles.",
    answer: ["la la land"], title: "La La Land",
    build: `<div class="scene-art lalaland"><div class="purple-sky"></div><div class="city-hills"></div><div class="stars4"></div><div class="dancer-a"></div><div class="dancer-b"></div><div class="streetlight-la"></div></div>`
  },
  {
    caption: "Un hotel lujoso, una recepción impecable y un botones corriendo por un pasillo.",
    hint: "Comedia de Wes Anderson con un legendario conserje de hotel.",
    answer: ["el gran hotel budapest","the grand budapest hotel"], title: "El Gran Hotel Budapest",
    build: `<div class="scene-art grandbudapest"><div class="pink-sky"></div><div class="hotel-pink"></div><div class="mountains-pink"></div><div class="bellboy"></div><div class="hotel-sign"></div></div>`
  },
  {
    caption: "Una carretera entre montañas, un coche amarillo y un grupo de viajeros.",
    hint: "Película de aventuras sobre un grupo que busca un tesoro y sigue un mapa.",
    answer: ["los goonies","the goonies"], title: "Los Goonies",
    build: `<div class="scene-art goonies"><div class="coast-sky"></div><div class="mountains-coast"></div><div class="road-goonies"></div><div class="car-goonies"></div><div class="treasure-map"></div></div>`
  },
  {
    caption: "Un gran salón con relojes, escaleras y una niña que entra en un mundo imposible.",
    hint: "Una niña persigue a un conejo y acaba en un mundo lleno de personajes extraños.",
    answer: ["alicia en el pais de las maravillas","alice in wonderland"], title: "Alicia en el País de las Maravillas",
    build: `<div class="scene-art alice"><div class="wonderland-sky"></div><div class="giant-mushroom"></div><div class="cards"></div><div class="rabbit"></div><div class="alice-figure"></div></div>`
  },
  {
    caption: "Un avión aterriza en una isla tropical donde algo enorme se mueve entre los árboles.",
    hint: "Una expedición llega a una isla dominada por un gigantesco gorila.",
    answer: ["king kong"], title: "King Kong",
    build: `<div class="scene-art kingkong"><div class="jungle-sky"></div><div class="jungle-foliage"></div><div class="mountain-king"></div><div class="kong"></div><div class="explorer-king"></div></div>`
  },
  {
    caption: "Un laboratorio lleno de cables y pantallas. Una máquina empieza a funcionar.",
    hint: "Un científico viaja en el tiempo usando un coche modificado.",
    answer: ["regreso al futuro","back to the future"], title: "Regreso al futuro",
    build: `<div class="scene-art backfuture"><div class="lab-wall"></div><div class="clock"></div><div class="delorean"></div><div class="electric"></div><div class="scientist"></div></div>`
  }
];

let scenes = [];

function startRound() {
  scenes = [...allScenes].sort(() => Math.random() - 0.5).slice(0, 6);
  current = 0;
  score = 0;
  scoreEl.textContent = "0";
  resultEl.hidden = true;
  gameEl.hidden = false;
  renderScene();
}

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
  startRound();
  window.scrollTo({top: gameEl.offsetTop - 20, behavior:"smooth"});
});

startRound();
