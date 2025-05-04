let d = document;

console.group("Reference");
console.log(
  "Loader Circle ->",
  "https://uiverse.io/NlghtM4re/ordinary-mouse-17"
);
console.log("Switch ->", "https://uiverse.io/csemszepp/soft-pug-40");
console.log("Rain ->", "https://youtu.be/YhXxBhInJMI?si=Ib56mu0h76sQz9WJ");
console.log("Svg ->", "https://svgsilh.com/es/4caf50/image/1227913.html");
console.groupEnd();

function autocomplete(inpt, elArray) {
  let currentFocus;

  inpt.addEventListener("input", function (e) {
    let a,
      b,
      i,
      val = this.value;
    closeAllLists();
    if (!val) return false;
    currentFocus = -1;

    a = document.createElement("div");
    a.setAttribute("class", "autocomplete-items");
    a.setAttribute("id", "autocomplete-list");

    let miContador = 0;
    this.parentNode.appendChild(a);

    for (i = 0; i < elArray.length && miContador < 6; i++) {
      if (
        elArray[i][0].substr(0, val.length).toUpperCase() === val.toUpperCase()
      ) {
        b = document.createElement("a");
        b.setAttribute("href", elArray[i][1]);
        b.innerHTML = `<strong>${elArray[i][0].substr(0, val.length)}</strong>`;
        b.innerHTML += elArray[i][0].substr(val.length);
        b.innerHTML += `<input type='hidden' value="${elArray[i][0]}"></input>`;

        b.addEventListener("click", function (e) {
          inpt.value = this.querySelector("input").value;
          closeAllLists();
        });

        a.appendChild(b);
        miContador++;
      }
    }
  }); /* fin */

  inpt.addEventListener("keydown", function (e) {
    let x = document.getElementById("autocomplete-list");
    if (x) x = x.querySelectorAll("a");
    if (e.key === "ArrowDown") {
      currentFocus++;
      addActive(x);
    } else if (e.key === "ArrowUp") {
      currentFocus--;
      addActive(x);
    } else if (e.key === "Enter") {
      e.preventDefault();

      if (currentFocus > -1) {
        if (x) x[currentFocus].click();
      }
    }
  }); /* fin */

  function addActive(x) {
    if (!x) return false;

    removeActive(x);

    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = x.length - 1;

    x[currentFocus].classList.add("autocomplete-active");
  } /* fin */

  function removeActive(x) {
    for (let i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  } /* fin */

  function closeAllLists(elm) {
    let $autocompletes = document.querySelectorAll(".autocomplete-items");

    for (let i = 0; i < $autocompletes.length; i++) {
      if (elm !== $autocompletes[i] && elm !== inpt) {
        $autocompletes[i].parentNode.removeChild($autocompletes[i]);
      }
    }
  } /* fin */

  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  }); /* fin */
} /* fin autocomplete function */

let bands = [
  /* ======================= A ======================= */
  [
    "Al Bano e Romina Power",
    "https://20essentials.github.io/al-bano-and-romina-power/",
  ],
  ["Ana Gabriel", "https://20essentials.github.io/ana-gabriel/"],
  ["Agnes Obel", "https://20essentials.github.io/agnes-obel/"],
  ["Avenida Larco - OST", "https://20essentials.github.io/avenida-larco-ost/"],
  ["Alex Bueno", "https://20essentials.github.io/alex-bueno/"],
  ["Axol", "https://20essentials.github.io/axol/"],
  ["Arcangel", "https://20essentials.github.io/arcangel/"],
  ["Autechre", "https://20essentials.github.io/autechre/"],
  ["Alphex Twin", "https://20essentials.github.io/alphex-twin/"],
  ["Alexander Rybak", "https://20essentials.github.io/alexander-rybak/"],

  /* ======================= B ======================= */
  ["Barren Gates", "https://20essentials.github.io/barren-gates/"],
  ["Bonobo", "https://20essentials.github.io/bonobo/"],
  ["Bruno Mars", "https://20essentials.github.io/bruno-mars/"],
  ["Bag Raiders", "https://20essentials.github.io/bag-raiders/"],
  ["Beyoncé", "https://20essentials.github.io/beyonce/"],
  ["Boston", "https://20essentials.github.io/boston/"],
  ["Benson Boone", "https://20essentials.github.io/benson-boone/"],
  ["Bob Dylan", "https://20essentials.github.io/bob-dylan/"],
  ["Breaking Bad", "https://20essentials.github.io/breaking-bad-ost/"],

  /* ======================= C ======================= */
  ["Cher", "https://20essentials.github.io/cher/ "],
  ["Camilo Sesto", "https://20essentials.github.io/camilo-sesto/"],
  ["Chino y Nacho", "https://20essentials.github.io/chino-y-nacho/"],
  ["Can", "https://20essentials.github.io/can/"],
  ["Chuck Berry", "https://20essentials.github.io/chuck-berry/"],
  ["Clint Mansell", "https://20essentials.github.io/clint-mansell/"],
  ["Clovis Reyes", "https://20essentials.github.io/clovis-reyes/"],
  ["Craspore", "https://20essentials.github.io/craspore/"],
  ["Calvin Harris", "https://20essentials.github.io/calvin-harris/"],
  ["Croixx", "https://20essentials.github.io/croixx/"],
  [
    "Cigarettes After Sex",
    "https://20essentials.github.io/cigarettes-after-sex/",
  ],
  ["Coez", "https://20essentials.github.io/coez/"],

  /* ======================= D ======================= */
  ["Deorro", "https://20essentials.github.io/deorro/"],
  ["David Lyme", "https://20essentials.github.io/david-lyme/"],
  ["Defqwop", "https://20essentials.github.io/defqwop/"],
  ["Danny Ocean", "https://20essentials.github.io/danny-ocean/"],
  ["Drake", "https://20essentials.github.io/dr4ke/"],
  ["Disfigure", "https://20essentials.github.io/disfigure/"],
  ["Don Omar", "https://20essentials.github.io/don-omar/"],
  ["Daddy Yankee", "https://20essentials.github.io/da-dddy-yan-kee/"],
  ["Daughter", "https://20essentials.github.io/daughter/"],

  /* ======================= E ======================= */
  ["Enrique Iglesias", "https://20essentials.github.io/enrique-iglesias/"],
  ["Elton John", "https://20essentials.github.io/elton-john/"],
  ["Edd Sheeran", "https://20essentials.github.io/edd-sheeran/"],
  ["Eva Ayllon + Los Kipus", "https://20essentials.github.io/eva-ayllon/"],
  ["Enigma", "https://20essentials.github.io/enigma/"],
  [
    "El Último De La Fila",
    "https://20essentials.github.io/el-ultimo-de-la-fila/",
  ],

  /* ======================= F ======================= */
  ["French Montana", "https://20essentials.github.io/french-montana/"],
  ["Final Fantasy VII - OST", "https://20essentials.github.io/final-fantasy-7-ost/"],
  ["Fatboy Slim", "https://20essentials.github.io/fatboy-slim/"],
  ["Fantom ‘87", "https://20essentials.github.io/fantom-87/"],
  ["Fuego", "https://20essentials.github.io/fuego/"],

  /* ======================= G ======================= */
  ["Gaitán Castro", "https://20essentials.github.io/duo-hermanos-gaitan/"],
  ["Glwzbll", "https://20essentials.github.io/glwzbll/"],
  ["Grouplove", "https://20essentials.github.io/grouplove/"],

  /* ======================= H ======================= */
  ["Harry Styles", "https://20essentials.github.io/harry-styles/"],
  ["Ha-ash", "https://20essentials.github.io/ha-ash/"],
  ["Hiroyuki Sawano", "https://20essentials.github.io/sawano-hiroyuki/"],
  ["Hardwell", "https://20essentials.github.io/hardwell/ "],
  ["Hibou", "https://20essentials.github.io/hibou/"],
  ["How To Train Your Dragon - Ost", "https://20essentials.github.io/how-to-train-your-dragon/"],

  /* ======================= I ======================= */
  ["Ivan", "https://20essentials.github.io/ivan/"],
  ["Interpol", "https://20essentials.github.io/interpol/"],
  ["Icona Pop", "https://20essentials.github.io/icona-pop/"],
  ["Iced Earth", "https://20essentials.github.io/iced-earth/"],

  /* ======================= J ======================= */
  ["John Newman", "https://20essentials.github.io/john-newman/"],
  ["JCole", "https://20essentials.github.io/jcole/"],
  ["Janji", "https://20essentials.github.io/janji/"],
  ["Jaymes Young", "https://20essentials.github.io/james-young/"],
  ["Jim Yosef", "https://20essentials.github.io/jim-yosef/"],
  ["John Williams", "https://20essentials.github.io/john-williams/"],
  ["Joy Division", "https://20essentials.github.io/joy-division/"],
  ["Jamiroquai", "https://20essentials.github.io/jamiroquai/"],
  ["Jo Cohen", "https://20essentials.github.io/jo-cohen/"],
  ["Johnny Steele", "https://20essentials.github.io/terrence-mann/"],
  ["Jet", "https://20essentials.github.io/jet/"],
  ["Juan Gabriel", "https://20essentials.github.io/juan-gabriel/"],

  /* ======================= K ======================= */
  ["Kavinsky", "https://20essentials.github.io/kavinsky/"],
  ["Kanye West", "https://20essentials.github.io/kanye-west/"],
  ["Kmfdm", "https://20essentials.github.io/kmfdm/"],
  ["Kaiser Chiefs", "https://20essentials.github.io/kaiser-chiefs/"],

  /* ======================= L ======================= */
  ["Lenny Kravitz", "https://20essentials.github.io/lenny-kravitz/"],
  ["Lady Gaga", "https://20essentials.github.io/lady-gaga/"],
  ["Luther Vandross", "https://20essentials.github.io/luther-v/"],
  ["Luis Enrique", "https://20essentials.github.io/luis-enrique/"],
  ["Lucha Reyes", "https://20essentials.github.io/lucha-reyes/"],
  ["Laura Branigan", "https://20essentials.github.io/laura-branigan/"],
  ["Le Castle Vania", "https://20essentials.github.io/le-castle-vania/"],
  ["Lcd SoundSystem", "https://20essentials.github.io/lcd_soundsystem/"],
  ["Lisa", "https://20essentials.github.io/lisa/"],
  ["League Of Legends - Ost", "https://20essentials.github.io/lol-ost/"],
  ["L.O.L - OST", "https://20essentials.github.io/lol-ost/"],
  ["LazerPunk", "https://20essentials.github.io/lazerpunk/"],
  ["Lana del Rey", "https://20essentials.github.io/lana-del-rey/"],

  /* ======================= M ======================= */
  ["Marilyn Manson", "https://20essentials.github.io/marilyn-manson/"],
  ["Masterboy", "https://20essentials.github.io/masterboy/"],
  ["Marlon Roudette", "https://20essentials.github.io/marlon-roudette/"],
  ["Modest Mouse", "https://20essentials.github.io/modest-mouse/"],
  ["Miguel Bosé", "https://20essentials.github.io/miguel-bose/"],
  ["Mr. Kitty", "https://20essentials.github.io/mr-kitty/"],
  ["Mike Menna", "https://20essentials.github.io/mike-menna/"],
  ["Miki Gonzales", "https://20essentials.github.io/miki-gonzales/"],
  ["Macklemore", "https://20essentials.github.io/macklemore/"],
  ["Marwa Loud", "https://20essentials.github.io/marwa-loud/"],
  ["Matrix - Ost", "https://20essentials.github.io/matrix-ost/"],

  /* ======================= N ======================= */
  ["Noisestorm", "https://20essentials.github.io/noisestorm/"],
  ["NickelBack", "https://20essentials.github.io/nickelback/ "],
  ["Narvent", "https://20essentials.github.io/narvent/"],
  ["Neon Rox", "https://20essentials.github.io/neon-rox/"],

  /* ======================= O ======================= */
  ["Ofdream", "https://20essentials.github.io/ofdream/"],
  [
    "Of Monsters and Men",
    "https://20essentials.github.io/of-monsters-and-men/",
  ],
  ["Oneheart", "https://20essentials.github.io/oneheart/"],

  /* ======================= P ======================= */
  ["Pat Benatar", "https://20essentials.github.io/pat-benatar/"],
  [
    "Pedro Suárez-Vértiz",
    "https://20essentials.github.io/pedro-suarez-vertiz/",
  ],
  ["Pastel Ghost", "https://20essentials.github.io/pastel-ghost/"],
  ["Paul MacCartney", "https://20essentials.github.io/paul-maccartney/"],
  ["Pedro Capo", "https://20essentials.github.io/pedro-capo/"],
  ["Pepe Vásquez", "https://20essentials.github.io/pepe-vasquez/"],
  ["Prince Royce", "https://20essentials.github.io/princ3-royce/"],
  ["Pearl Jam", "https://20essentials.github.io/pearl-jam/"],
  ["Power Rangers - Wild Force - OST", "https://20essentials.github.io/power-rangers-wild-force/"],
  ["Power Rangers - Jungle Fury - OST", "https://20essentials.github.io/power-rangers-jungle-fury/"],
  ["Pachelbel", "https://20essentials.github.io/pachelbel/"],
  ["Prismo", "https://20essentials.github.io/prismo/"],

  /* ======================= Q ======================= */

  /* ======================= R ======================= */
  ["Rocio Dúrcal", "https://20essentials.github.io/rocio-durcal/"],
  ["Rocio Jurado", "https://20essentials.github.io/rocio-jurado"],
  ["Ray Sepulveda", "https://20essentials.github.io/ray-sepulveda/"],
  ["Rude", "https://20essentials.github.io/rude/"],
  ["Rupert Holmes", "https://20essentials.github.io/rupert-holmes/"],
  ["Ryan Gosling", "https://20essentials.github.io/ryan-gosling/"],
  ["Romeo Santos", "https://20essentials.github.io/romeo-santos/"],
  ["Rancid", "https://20essentials.github.io/rancid/"],
  ["Rush", "https://20essentials.github.io/rush/"],
  ["Robert Miles", "https://20essentials.github.io/robert-miles/"],
  ["Resident Evil - OST", "https://20essentials.github.io/resident-evil-ost/"],
  ["Ráfaga", "https://20essentials.github.io/rafaga/"],

  /* ======================= S ======================= */
  ["Skyrim - OST", "https://20essentials.github.io/skyrim-ost/"],
  ["Selena Gomez", "https://20essentials.github.io/selena-gomez/"],
  ["Spider-man - Ost", "https://20essentials.github.io/spider-man-ost/"],
  ["Sawano Hiroyuki", "https://20essentials.github.io/sawano-hiroyuki/"],
  ["Stevie Wonder", "https://20essentials.github.io/stevie-wonder/"],
  ["Sia", "https://20essentials.github.io/sia/"],
  ["Shakira", "https://20essentials.github.io/shakira/"],
  ["Spandau Ballet", "https://20essentials.github.io/spandau-ballet/"],
  ["Skrillex", "https://20essentials.github.io/skrillex/"],
  ["Studio Killers", "https://20essentials.github.io/studio-killers/"],
  ["Steve Lacy", "https://20essentials.github.io/st3ve-lacy/"],
  ["Sigur Rós", "https://20essentials.github.io/sigur-ros/"],
  ["Sandra", "https://20essentials.github.io/sandra/"],
  ["Surf Curse", "https://20essentials.github.io/surf-curse/"],
  

  /* ======================= T ======================= */
  ["Terrence Mann", "https://20essentials.github.io/terrence-mann/"],
  ["Tyler Bates", "https://20essentials.github.io/tyler-bates/"],
  [
    "The Dark Knight - Ost",
    "https://20essentials.github.io/the-dark-knight-ost/",
  ],

  /* ======================= U ======================= */

  /* ======================= V ======================= */
  ["Vampire Weekend", "https://20essentials.github.io/vampire-weekend/"],
  ["Viti Ruiz", "https://20essentials.github.io/viti-ruiz/"],
  ["Vicetone", "https://20essentials.github.io/vicetone/"],
  ["Vanze", "https://20essentials.github.io/vanze/"],

  /* ======================= W ======================= */
  ["War", "https://20essentials.github.io/war/"],
  ["Wafia", "https://20essentials.github.io/wafia/"],
  ["Wookid", "https://20essentials.github.io/woodkid/"],
  
  /* ======================= X ======================= */
  
  /* ======================= Y ======================= */
  ["Your Lie in April - OST", "https://20essentials.github.io/your-lie-in-april/"],

  /* ======================= Z ======================= */
  ["Zambo Cavero", "https://20essentials.github.io/zambo-cavero/"],
];

autocomplete(document.getElementById("myInput"), bands);
d.querySelector(".nBands").innerHTML = bands.length;
d.querySelector(".nSongs").innerHTML = bands.length * 20;
d.getElementById("myInput").focus();

/* ======================= LLUVIA ======================= */
let amount = 100;

function rain() {
  let body = document.body,
    i = 0;

  while (i < amount) {
    let drop = document.createElement("i");

    let size = Math.random() * 5;
    let posX = Math.floor(Math.random() * document.documentElement.clientWidth);
    let delay = Math.random() * -20;
    let duration = Math.random() * 5;

    drop.style.width = 0.2 + size + "px";
    drop.style.left = posX + "px";
    drop.style.animationDelay = delay + "s";
    drop.style.animationDuration = 1 + duration + "s";

    body.appendChild(drop);
    i++;
  }
}

rain();

/* ======================= SWITCH CHECK  ======================= */
d.addEventListener("input", (e) => {
  let $checkBoxSwitch = d.getElementById("switch1");

  if (e.target === $checkBoxSwitch) {
    if (e.target.checked) {
      amount += 1;
      rain();
    } else {
      amount += 1;
      rain();
    }
  }
});
