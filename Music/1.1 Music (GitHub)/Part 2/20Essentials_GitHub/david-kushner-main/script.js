/* =======================SET======================= */
const nameBand = "DAVID KUSHNER";

let nameSongs = [
	"DAYLIGHT (SLOWED + REVERB)", /*1*/
	"DEAD MAN", /*2*/
	"DAYLIGHT", /*3*/
	"MR. FORGETTABLE", /*4*/
	"MISERABLE MAN ", /*5*/
	"BURN", /*6*/
	"ELK GROVE", /*7*/
	"HERO", /*8*/
	"SKIN AND BONES", /*9*/
	"HUMANKIND", /*10*/
	"OOOWOOO", /*11*/
	"LOOK BACK & LAUGH", /*12*/
	"CANNON BEACH", /*13*/
	"CIGARETTES", /*14*/
	"HERO (CINEMATIC)", /*15*/
	"DAYLIGHT (ACOUSTIC)", /*16*/
	"HERO (SLOWED + REVERB)", /*17*/
	"SKIN AND BONES (RADIO EDIT)", /*18*/
	"DAYLIGHT (CINEMATIC)", /*19*/
	"DAYLIGHT (INSTRUMENTAL)", /*20*/
]

/* ================================================= */

let putTitle = (titulo = `${nameBand} - 20 SONGS`) => (d.title = titulo);
let d = document;
putTitle();

let $metaDescription = d.querySelector("meta[name=description][content]");
$metaDescription.content = `Dive into the legacy of "${nameBand}" through 20 of their most iconic songs, exploring their influence on the music scene. Please note that this site is an educational and creative project, which does not benefit financially.`;

let canciones = [
  "CANCIONES/N1.mp3",
  "CANCIONES/N2.mp3",
  "CANCIONES/N3.mp3",
  "CANCIONES/N4.mp3",
  "CANCIONES/N5.mp3",
  "CANCIONES/N6.mp3",
  "CANCIONES/N7.mp3",
  "CANCIONES/N8.mp3",
  "CANCIONES/N9.mp3",
  "CANCIONES/N10.mp3",
  "CANCIONES/N11.mp3",
  "CANCIONES/N12.mp3",
  "CANCIONES/N13.mp3",
  "CANCIONES/N14.mp3",
  "CANCIONES/N15.mp3",
  "CANCIONES/N16.mp3",
  "CANCIONES/N17.mp3",
  "CANCIONES/N18.mp3",
  "CANCIONES/N19.mp3",
  "CANCIONES/N20.mp3",
];

function agregarTitulos() {
  let $allTitulos = d.querySelectorAll("h2.titulo");
  $allTitulos.forEach(
    (titulo, indice) => (titulo.textContent = nameSongs[indice])
  );
}

let $audio = d.createElement("audio");

function reproducirUnaCancion(songs, btnplay, btnpause, btnstop, btnloop) {
  let $btnsPlay = d.querySelectorAll(btnplay),
    containerSTO;
  remover();

  d.addEventListener("click", (e) => {
    if (e.target.matches(btnplay)) {
      remover();
      let $botonPausa = e.target.nextElementSibling,
        $botonStop = $botonPausa.nextElementSibling,
        $botonLoop = $botonStop.nextElementSibling;

      $botonPausa.style.pointerEvents = "auto";
      $botonStop.style.pointerEvents = "auto";
      $botonLoop.style.pointerEvents = "auto";

      let elemento = e.target,
        $btnsPlayArray = Array.from($btnsPlay),
        elIndex = $btnsPlayArray.indexOf(elemento);

      let audioActual = d.createElement("audio");
      audioActual.src = songs[elIndex];

      if ($audio.src && $audio.src !== audioActual.src) {
        $audio.pause();
        $audio.currentTime = 0;
        $audio.src = songs[elIndex];
      }

      if (!$audio.src) {
        $audio.src = songs[elIndex];
      }

      containerSTO = setTimeout(() => {
        $audio.play();
      }, 30);

      elemento.disabled = true;

      d.querySelectorAll(btnplay).forEach((elm) => {
        elm.classList.remove("btn-active");
        elm.closest(".card").classList.remove("card-active");
      });

      elemento.classList.add("btn-active");
      elemento.closest(".card").classList.add("card-active");

      mostrarTitulo(elIndex);

      removerAnchorActivo();
    } else if (e.target.matches(btnpause)) {
      $audio.pause();
      d.querySelector(btnplay).disabled = false;
    } else if (e.target.matches(btnstop)) {
      clearTimeout(containerSTO);
      $audio.pause();
      $audio.currentTime = 0;
      d.querySelector(btnplay).disabled = false;
    } else if (e.target.matches(btnloop)) {
      if ($audio.loop) {
        $audio.loop = false;
        e.target.classList.remove("btn-active");
      } else {
        $audio.loop = true;
        e.target.classList.add("btn-active");
      }
    }
  });
}

function tocarTodasLasCanciones(canciones) {
  let index = 0,
    $card = d.querySelectorAll(".card"),
    $btnsPlay = d.querySelectorAll(".BTNPLAY");

  function siguienteCancion() {
    $card.forEach((card) => card.classList.remove("card-active"));
    $btnsPlay.forEach((btn) => btn.classList.remove("btn-active"));

    remover();

    if (index < canciones.length) {
      if ($audio.src) {
        $audio.pause();
        $audio.currentTime = 0;
      }

      $audio.src = canciones[index];
      $card[index].classList.add("card-active");
      $btnsPlay[index].classList.add("btn-active");
      $btnsPlay[index].nextElementSibling.style.pointerEvents = "auto";
      $btnsPlay[
        index
      ].nextElementSibling.nextElementSibling.style.pointerEvents = "auto";
      $btnsPlay[
        index
      ].nextElementSibling.nextElementSibling.nextElementSibling.style.pointerEvents =
        "auto";
      mostrarTitulo(index);
      $audio.play();
      index++;
      $audio.onended = siguienteCancion;
    }
  }

  siguienteCancion();
}

function cancionesRandom(arrayDeCanciones) {
  let unArray = [],
    i,
    valor;

  for (i = 0; i < arrayDeCanciones.length; i++) {
    do {
      valor = Math.floor(Math.random() * canciones.length);
    } while (unArray.includes(valor));

    unArray.push(valor);
  }

  let index = 0,
    $card = d.querySelectorAll(".card"),
    $btnsPlay = d.querySelectorAll(".BTNPLAY");

  function tocarCancion() {
    $card.forEach((card) => card.classList.remove("card-active"));
    $btnsPlay.forEach((btn) => btn.classList.remove("btn-active"));

    if (index < arrayDeCanciones.length) {
      if ($audio.src) {
        $audio.pause();
        $audio.currentTime = 0;
      }

      $audio.src = arrayDeCanciones[unArray[index]];
      $card[unArray[index]].classList.add("card-active");
      $btnsPlay[unArray[index]].classList.add("btn-active");
      $btnsPlay[unArray[index]].nextElementSibling.style.pointerEvents = "auto";
      $btnsPlay[
        unArray[index]
      ].nextElementSibling.nextElementSibling.style.pointerEvents = "auto";
      $btnsPlay[
        unArray[index]
      ].nextElementSibling.nextElementSibling.nextElementSibling.style.pointerEvents =
        "auto";
      mostrarTitulo(unArray[index]);
      $audio.play();
      index++;
      $audio.onended = tocarCancion;
    }
  }
  tocarCancion();
}

d.addEventListener("DOMContentLoaded", (e) => {
  reproducirUnaCancion(
    canciones,
    ".BTNPLAY",
    ".BTNPAUSE",
    ".BTNSTOP",
    ".BTNLOOP"
  );
  agregarTitulos();
});

d.addEventListener("click", (e) => {
  if (e.target.matches(".createPlaylist")) {
    e.target.classList.toggle("activeAnchor");
    d.querySelector(".mensaje").classList.toggle("showMessage");

    d.querySelector(".sonidosRandom").style.pointerEvents = "none";
    d.querySelector(".tocarTodo").style.pointerEvents = "none";

    let elementoEmoji = e.target.children[0];
    if (elementoEmoji.classList.contains("img3")) {
      elementoEmoji.classList.remove("img3");
      elementoEmoji.classList.add("img6");
      crearCheckList();
    } else {
      elementoEmoji.classList.remove("img6");
      elementoEmoji.classList.add("img3");
      seleccionarInputsActivos(canciones);
      d.querySelector(".sonidosRandom").style.pointerEvents = "none";
      d.querySelector(".tocarTodo").style.pointerEvents = "none";
    }
  }
  if (e.target.matches(".tocarTodo")) {
    tocarTodasLasCanciones(canciones);
    removerAnchorActivo();
    e.target.classList.add("activeAnchor");
  }
  if (e.target.matches(".sonidosRandom")) {
    cancionesRandom(canciones);
    removerAnchorActivo(e.target);
    e.target.classList.add("activeAnchor");
  }
  if (e.target.matches(".reload")) {
    window.location.reload(false);
  }
});

function removerAnchorActivo() {
  d.querySelectorAll(".activeAnchor").forEach((el) =>
    el.classList.remove("activeAnchor")
  );
}

function crearCheckList() {
  let $containerButtons = d.querySelectorAll(".container-buttons");

  for (i = 0; i < $containerButtons.length; i++) {
    let $inputNuevo = d.createElement("input");
    $inputNuevo.setAttribute("type", "radio");
    $inputNuevo.setAttribute("class", "chequi");
    $inputNuevo.setAttribute("value", `${i}`);
    $containerButtons[i].appendChild($inputNuevo);
  }
}

function seleccionarInputsActivos(songs) {
  let $radios = d.querySelectorAll("[type=radio]"),
    i,
    arrayDeValores = [];
  for (i = 0; i < $radios.length; i++) {
    if ($radios[i].checked) {
      let valor = Number($radios[i].value);
      arrayDeValores.push(valor);
    }
  }

  d.querySelectorAll(".card").forEach((el) => {
    for (let i = 0; i < arrayDeValores.length; i++) {
      d.querySelectorAll(".card")[arrayDeValores[i]].classList.add("mostrar");
      d.querySelectorAll(".card")[arrayDeValores[i]].style.order = `-${
        arrayDeValores.length - i
      }`;
    }
    if (!el.classList.contains("mostrar")) {
      el.style.visibility = "hidden";
    }
  });
  d.querySelectorAll(".chequi").forEach(
    (el) => (el.style.visibility = "hidden")
  );

  ($card = d.querySelectorAll(".card")),
    ($btnsPlay = d.querySelectorAll(".BTNPLAY"));
  let index = 0;
  function reproducir() {
    $card.forEach((card) => card.classList.remove("card-active"));
    $btnsPlay.forEach((btn) => btn.classList.remove("btn-active"));

    remover();

    if (index < arrayDeValores.length) {
      if ($audio.src) {
        $audio.pause();
        $audio.currentTime = 0;
      }

      $audio.src = songs[arrayDeValores[index]];
      $audio.play();
      $card[arrayDeValores[index]].classList.add("card-active");
      $btnsPlay[arrayDeValores[index]].classList.add("btn-active");
      $btnsPlay[arrayDeValores[index]].nextElementSibling.style.pointerEvents =
        "auto";
      $btnsPlay[
        arrayDeValores[index]
      ].nextElementSibling.nextElementSibling.style.pointerEvents = "auto";
      $btnsPlay[
        arrayDeValores[index]
      ].nextElementSibling.nextElementSibling.nextElementSibling.style.pointerEvents =
        "auto";
      mostrarTitulo(arrayDeValores[index]);
      index++;

      $audio.onended = reproducir;
    } else {
      window.location.reload(false);
    }
  }

  reproducir();
}

function remover() {
  let $btnPause = d.querySelectorAll(".BTNPAUSE");
  for (let j = 0; j < $btnPause.length; j++) {
    $btnPause[j].style.pointerEvents = "none";
  }
  let $btnstop = d.querySelectorAll(".BTNSTOP");
  for (let j = 0; j < $btnstop.length; j++) {
    $btnstop[j].style.pointerEvents = "none";
  }
  let $btnloop = d.querySelectorAll(".BTNLOOP");
  for (let j = 0; j < $btnloop.length; j++) {
    $btnloop[j].style.pointerEvents = "none";
    $btnloop[j].classList.remove("btn-active");
  }
}

function mostrarTitulo(elIndex) {
  let $h2ConTitleSong = d.querySelectorAll(".container-text"),
    titulo = "";
  titulo += `${nameBand} -> ${$h2ConTitleSong[
    elIndex
  ].firstElementChild.innerHTML.trim()}`;
  putTitle(titulo);
}
