/******************** SONGS ********************/

const nameBand = 'LED ZEPELLIN';

const nameSongs = [
  "STAIRWAY TO HEAVEN",
  "KASHMIR",
  "BLACK DOG",
  "WHOLE LOTTA LOVE",
  "DAZED AND CONFUSED",
  "BABE I'M GONNA LEAVE YOU",
  "ALL MY LOVE",
  "IMMIGRANT SONG",
  "WHEN THE LEVEE BREAKS",
  "ROCK AND ROLL",
  "HEARTBREAKER",
  "SINCE I'VE BEEN LOVING YOU",
  "NO QUARTER",
  "ACHILLES LAST STAND",
  "IN MY TIME OF DYING",
  "IN THE LIGHT",
  "TEN YEARS GONE",
  "GOOD TIMES BAD TIMES",
  "NOBODY FAULT BUT MINE",
  "IN THE EVENING",
];


const arraySongs = [
  'songs/n1.mp3',
  'songs/n2.mp3',
  'songs/n3.mp3',
  'songs/n4.mp3',
  'songs/n5.mp3',
  'songs/n6.mp3',
  'songs/n7.mp3',
  'songs/n8.mp3',
  'songs/n9.mp3',
  'songs/n10.mp3',
  'songs/n11.mp3',
  'songs/n12.mp3',
  'songs/n13.mp3',
  'songs/n14.mp3',
  'songs/n15.mp3',
  'songs/n16.mp3',
  'songs/n17.mp3',
  'songs/n18.mp3',
  'songs/n19.mp3',
  'songs/n20.mp3'
];

/******************** MEDIA SESSION CONFIG ********************/
const playlist = [
  { title: nameSongs[0], artist: nameBand, url: arraySongs[0] },
  { title: nameSongs[1], artist: nameBand, url: arraySongs[1] },
  { title: nameSongs[2], artist: nameBand, url: arraySongs[2] },
  { title: nameSongs[3], artist: nameBand, url: arraySongs[3] },
  { title: nameSongs[4], artist: nameBand, url: arraySongs[4] },
  { title: nameSongs[5], artist: nameBand, url: arraySongs[5] },
  { title: nameSongs[6], artist: nameBand, url: arraySongs[6] },
  { title: nameSongs[7], artist: nameBand, url: arraySongs[7] },
  { title: nameSongs[8], artist: nameBand, url: arraySongs[8] },
  { title: nameSongs[9], artist: nameBand, url: arraySongs[9] },
  { title: nameSongs[10], artist: nameBand, url: arraySongs[10] },
  { title: nameSongs[11], artist: nameBand, url: arraySongs[11] },
  { title: nameSongs[12], artist: nameBand, url: arraySongs[12] },
  { title: nameSongs[13], artist: nameBand, url: arraySongs[13] },
  { title: nameSongs[14], artist: nameBand, url: arraySongs[14] },
  { title: nameSongs[15], artist: nameBand, url: arraySongs[15] },
  { title: nameSongs[16], artist: nameBand, url: arraySongs[16] },
  { title: nameSongs[17], artist: nameBand, url: arraySongs[17] },
  { title: nameSongs[18], artist: nameBand, url: arraySongs[18] },
  { title: nameSongs[19], artist: nameBand, url: arraySongs[19] }
];

function toCapitalize(text = '') {
  return text
    .split(' ')
    .map(el => {
      if (el.length === 0) return '';
      if (el.length < 2)
        return `${el[0].toUpperCase()}${el.slice(1).toLowerCase()}`;
      let secondLetter =
        el[0] === '(' ? el[1].toUpperCase() : el[1].toLowerCase();
      return `${el[0].toUpperCase()}${secondLetter}${el
        .slice(2)
        .toLowerCase()}`;
    })
    .join(' ')
    .replace(/\s+/g, ' ');
}

function updateMetadata(currentIndex = 0) {
  let currentUrl =
    window
      .getComputedStyle(
        document.querySelectorAll('.card')[currentIndex].querySelector('.img')
      )
      .getPropertyValue('background-image') ?? '1';
  let indexPosition = currentUrl.search(/\/n\d/);
  let imageNumber = currentUrl
    .slice(indexPosition + 2, indexPosition + 3)
    .trim();

  navigator.mediaSession.metadata = new MediaMetadata({
    title: `${toCapitalize(playlist[currentIndex].title)}`,
    artist: `${toCapitalize(playlist[currentIndex].artist)}`,
    artwork: [
      {
        src: `assets/n${imageNumber}.avif`,
        sizes: '128x128',
        type: 'image/avif'
      }
    ]
  });
}

updateMetadata();

navigator.mediaSession.setActionHandler('play', () => {
  $audio.play();
  navigator.mediaSession.playbackState = 'playing';
});

navigator.mediaSession.setActionHandler('pause', () => {
  $audio.pause();
  navigator.mediaSession.playbackState = 'paused';
});

navigator.mediaSession.setActionHandler('seekbackward', details => {
  $audio.currentTime = Math.max($audio.currentTime - 10, 0);
});

navigator.mediaSession.setActionHandler('seekto', details => {
  if (details.fastSeek && 'fastSeek' in $audio) {
    $audio.fastSeek(details.seekTime);
  } else {
    $audio.currentTime = details.seekTime;
  }
});

navigator.mediaSession.setActionHandler('seekforward', details => {
  $audio.currentTime = Math.min($audio.currentTime + 10, $audio.duration);
});

function previousTrack(currentIndex) {
  navigator.mediaSession.setActionHandler('previoustrack', () => {
    currentIndex = (currentIndex - 1 + playlist.length) % playlist.length;
    updateMetadata(currentIndex); // Actualizar la metadata
    blockPlayPauseStopBUTTON();
    _removeClassBlockedButtonNextSiblings(currentIndex);
    $audio.pause();
    $audio.currentTime = 0;
    $audio.src = arraySongs[currentIndex];
    $audio.loop = false;
    actualButtonPlayActive(currentIndex);
    nextTrack(currentIndex);
    showTitle(currentIndex)
  });
}

function nextTrack(currentIndex) {
  navigator.mediaSession.setActionHandler('nexttrack', () => {
    currentIndex = (currentIndex + 1) % playlist.length;
    updateMetadata(currentIndex); // Actualizar la metadata
    blockPlayPauseStopBUTTON();
    _removeClassBlockedButtonNextSiblings(currentIndex);
    $audio.pause();
    $audio.currentTime = 0;
    $audio.src = arraySongs[currentIndex];
    $audio.loop = false;
    actualButtonPlayActive(currentIndex);
    previousTrack(currentIndex);
  });
}

/******************** GLOBAL  ********************/
const d = document;
const $ = el => d.querySelector(el);
const $$ = el => d.querySelectorAll(el);
let regExP = /^(?![\s0-9\-_])[\w\s\-]{1,20}(?<![\-])$/;
let listNumbersSongs = [];

const $audio = d.createElement('audio');

const navRandomButton = '.nav-random-button';
const navMomentaryListButton = '.nav-list-momentary';
const navPlayButton = '.nav-play-button';
const navArrowDownButton = '.nav-arrow-down';

const cardPlayButtonClass = '.card-playbutton';
const cardPauseButtonClass = '.card-pausebutton';
const cardStopButtonClass = '.card-stopbutton';
const cardLoopButtonClass = '.card-infinitybutton';
const cardPlayListButton = '.card-playlistbutton';

const headerColors = {
  0: ['#ee82ee', '#87ceeb', '#00ff7f', '#ffd700'],
  1: ['#ffd700', '#20b2aa', '#87cefa', '#ff1b6b'],
  2: ['#ff1b6b', '#ff00ff', '#32cd32', '#f5ccd9'],
  3: ['#e81cff', '#f5ccd9', '#7fffd4', '#05c9fa'],
  4: ['#05c9fa', '#adff2f', '#dda0dd', '#f0e68c'],
  5: ['#f0e68c', '#ff5858', '#00bfff', '#00ff7f'],
  6: ['#50c878', '#e4f61e', '#ff1493', '#ff5858'],
  7: ['#e4f61e', '#87ceeb', '#00ff7f', '#ffeda0'],
  8: ['#ffeda0', '#4169e1', '#98ff98', '#f4762d'],
  9: ['#ff00ff', '#fff44f', '#50c878', '#0061ff'],
  10: ['#00ff87', '#0061ff', '#60efff', '#ff1b6b'],
  11: ['#84ffc9', '#4169e1', '#eca0ff', '#00ff7f'],
  12: ['#e9d022', '#f86594', '#fffbaf', '#f4762d'],
  13: ['#f4762d', '#ede342', '#5b6cf9', '#60efff'],
  14: ['#3d05dd', '#e0a9bb', '#f40752', '#84ffc9'],
  15: ['#b429f9', '#e0a9bb', '#26c5f3', '#4169e1']
};

/******************** FUNCTIONS ********************/

const generateStars = (totalStars, selector, size, duration) => {
  const shadowLayers = [];

  for (let i = 0; i < totalStars; i++) {
    const x = Math.floor(Math.random() * 100);
    const y = Math.floor(Math.random() * 100);
    shadowLayers.push(`
      ${x}vw ${y}vh 0 #fff,
      ${x}vw ${y + 100}vh 0 #fff
    `);
  }

  const star = document.querySelector(selector);
  star.style.setProperty('--shadow-layer', shadowLayers.join(','));
  star.style.setProperty('--size', size);
  star.style.setProperty('--duration', duration);
};

const blockPlayPauseStopBUTTON = () => {
  [...$$('.card-pausebutton')].forEach(el => el.classList.add('blocked'));
  [...$$('.card-stopbutton')].forEach(el => el.classList.add('blocked'));
  [...$$('.card-infinitybutton')].forEach(el => el.classList.add('blocked'));
};

const removeClassBlockedButtonNextSiblings = el => {
  [...el.closest('.card-right-buttons').querySelectorAll('button')].forEach(
    btn => btn.classList.remove('blocked')
  );
};

const _removeClassBlockedButtonNextSiblings = index => {
  [
    ...$$('.card')
      [index].querySelector('.card-right-buttons')
      .querySelectorAll('button')
  ].forEach(btn => btn.classList.remove('blocked'));
};

const actualButtonPlayActive = (index = 0) => {
  let element = $$('.card')[index].querySelector(cardPlayButtonClass);

  [...$$('.card-btn-active')].forEach(el => {
    el.classList.remove('card-btn-active');
  });
  element.classList.add('card-btn-active');

  [...$$('.input-range')].forEach(el => {
    el.style.display = 'none';
  });
  const $inputRange = element.closest('.card').querySelector('.img input');
  $inputRange.style.display = 'block';

  setTimeout(() => {
    $audio.play();
  }, 30);

  $audio.ontimeupdate = function () {
    $inputRange.max = Math.floor(this.duration);
    $inputRange.value = this.currentTime;
  };

  d.addEventListener('input', e => {
    if (e.target === $inputRange) {
      actualButtonPlayActive(index);
      $audio.currentTime = e.target.value;
      $audio.play();
    }
  });
};

const toKebabCase = (sentence = '') => {
  let words = sentence.trim().split(' ');
  return words.length === 1
    ? words.join('').toLowerCase()
    : words.join('-').toLowerCase();
};

const putTitle = (nameBand, title) => (d.title = `${nameBand} - ${title}`);

const showTitle = elIndex => {
  putTitle(nameBand, nameSongs[elIndex]);
};

const playAllSongs = (songs, selector) => {
  if (listNumbersSongs?.length > 0) {
    let arrayCards = listNumbersSongs.map(i => $$('.card')[i]);
    let arrayColors = listNumbersSongs.map(
      i => $$('.card')[i].dataset.colorCard
    );
    arrayCards.forEach((card, i) => (card.style.color = arrayColors[i]));
    listNumbersSongs = [];
  }

  let index = 0;
  const $btnsPlay = $$(selector);

  const nextSong = () => {
    blockPlayPauseStopBUTTON();

    if (index < songs.length) {
      if ($audio.src) {
        $audio.pause();
        $audio.currentTime = 0;
      }
      $audio.src = songs[index];
      removeClassBlockedButtonNextSiblings($btnsPlay[index]);
      showTitle(index);

      actualButtonPlayActive(index);
      updateMetadata(index);

      function actualAudio(currentIndex) {
        updateMetadata(currentIndex);
        blockPlayPauseStopBUTTON();
        _removeClassBlockedButtonNextSiblings(currentIndex);
        $audio.pause();
        $audio.currentTime = 0;
        $audio.src = arraySongs[currentIndex];
        $audio.loop = false;
        actualButtonPlayActive(currentIndex);
        showTitle(currentIndex)
      }

      function previousTrack(currentIndex) {
        navigator.mediaSession.setActionHandler('previoustrack', () => {
          index--;
          currentIndex =
            (currentIndex - 1 + playlist.length) % playlist.length;
          if (index === -1) index = currentIndex + 1;
          nextTrack(currentIndex);
          actualAudio(currentIndex);
        });
      }

      function nextTrack(currentIndex) {
        navigator.mediaSession.setActionHandler('nexttrack', () => {
          index++;
          currentIndex = (currentIndex + 1) % playlist.length;
          previousTrack(currentIndex);
          actualAudio(currentIndex);
        });
      }

      previousTrack(index);
      nextTrack(index);

      showTitle(index);
      index++;
      $audio.onended = nextSong;
    } else {
      location.reload();
    }
  };

  nextSong();
};

const playRandomSongs = (songs, selector) => {
  if (listNumbersSongs?.length > 0) {
    let arrayCards = listNumbersSongs.map(i => $$('.card')[i]);
    let arrayColors = listNumbersSongs.map(
      i => $$('.card')[i].dataset.colorCard
    );
    arrayCards.forEach((card, i) => (card.style.color = arrayColors[i]));
    listNumbersSongs = [];
  }

  let unArray = [],
    i,
    valor;

  for (i = 0; i < songs.length; i++) {
    do {
      valor = Math.floor(Math.random() * songs.length);
    } while (unArray.includes(valor));

    unArray.push(valor);
  }

  let index = 0;
  const $btnsPlay = $$(selector);
  const nextSong = () => {
    blockPlayPauseStopBUTTON();

    if (index < songs.length) {
      if ($audio.src) {
        $audio.pause();
        $audio.currentTime = 0;
      }
      $audio.src = songs[unArray[index]];
      removeClassBlockedButtonNextSiblings($btnsPlay[unArray[index]]);
      showTitle(unArray[index]);

      actualButtonPlayActive(unArray[index]);
      updateMetadata(unArray[index]);

      function actualAudio(currentIndex) {
        $audio.pause();
        blockPlayPauseStopBUTTON();
        _removeClassBlockedButtonNextSiblings(unArray[currentIndex]);
        $audio.currentTime = 0;
        $audio.src = arraySongs[unArray[currentIndex]];
        $audio.loop = false;
        updateMetadata(unArray[currentIndex]);
        actualButtonPlayActive(unArray[currentIndex]);
        showTitle(unArray[currentIndex])
      }

      function previousTrackOfRandomSongs(currentIndex) {
        navigator.mediaSession.setActionHandler('previoustrack', () => {
          index--;
          currentIndex =
            (currentIndex - 1 + playlist.length) % playlist.length;
          if (index === -1) index = currentIndex + 1;
          nextTrackOfRandomSongs(currentIndex);
          actualAudio(currentIndex);
        });
      }

      function nextTrackOfRandomSongs(currentIndex) {
        navigator.mediaSession.setActionHandler('nexttrack', () => {
          index++;
          currentIndex = (currentIndex + 1) % playlist.length;
          previousTrackOfRandomSongs(currentIndex);
          actualAudio(currentIndex);
        });
      }

      previousTrackOfRandomSongs(index);
      nextTrackOfRandomSongs(index);
      index++;
      $audio.onended = nextSong;
    } else {
      location.reload();
    }
  };

  nextSong();
};

const removeClassNavButtonActive = () => {
  [...$$('.nav-btn-active')].forEach(el =>
    el.classList.remove('nav-btn-active')
  );
};

const playSelectedSongs = (songs, selector, listNumber) => {
  let index = 0;
  const $btnsPlay = $$(selector);

  const nextSong = () => {
    blockPlayPauseStopBUTTON();

    if (index < songs.length) {
      if ($audio.src) {
        $audio.pause();
        $audio.currentTime = 0;
      }
      $audio.src = songs[index];
      removeClassBlockedButtonNextSiblings($btnsPlay[listNumber[index]]);
      showTitle(listNumber[index]);

      actualButtonPlayActive(listNumber[index]);
      updateMetadata(listNumber[index]);

      function actualAudio(currentIndex) {
        $audio.pause();
        blockPlayPauseStopBUTTON();
        _removeClassBlockedButtonNextSiblings(listNumber[currentIndex]);
        $audio.currentTime = 0;
        $audio.src = arraySongs[listNumber[currentIndex]];
        $audio.loop = false;
        updateMetadata(listNumber[currentIndex]);
        actualButtonPlayActive(listNumber[currentIndex]);
        showTitle(listNumber[currentIndex]);
      }

      function previousTrackOfSelectedSongs(currentIndex) {
        navigator.mediaSession.setActionHandler('previoustrack', () => {
          index--;
          currentIndex =
            (currentIndex - 1 + listNumber.length) % listNumber.length;

          if (index === -1) index = currentIndex + 1;
          nextTrackOfSelectedSongs(currentIndex);
          actualAudio(currentIndex);
        });
      }

      function nextTrackOfSelectedSongs(currentIndex) {
        navigator.mediaSession.setActionHandler('nexttrack', () => {
          index++;
          currentIndex = (currentIndex + 1) % listNumber.length;
          previousTrackOfSelectedSongs(currentIndex);
          actualAudio(currentIndex);
        });
      }

      previousTrackOfSelectedSongs(index);
      nextTrackOfSelectedSongs(index);

      index++;
      $audio.onended = nextSong;
    } else {
      window.history.replaceState(null, null, window.location.pathname);
      location.reload();
    }
  };

  nextSong();
};

/******************** EXECUTING FUNCTIONS ********************/
generateStars(200, '.star-1', '2px', '20s');

(function headerCustomProperties() {
  const { body } = document;
  let numberRandom = Math.floor(
    Math.random() * Object.keys(headerColors).length
  );
  const [color1, color2, color3, color4] = headerColors[numberRandom];
  body.style.setProperty('--color1', color1);
  body.style.setProperty('--color2', color2);
  body.style.setProperty('--color3', color3);
  body.style.setProperty('--color4', color4);
})();

(function addTitlesToCards() {
  $$('.card-right-top').forEach(
    (title, index) => (title.textContent = nameSongs[index])
  );
})();

(function addHrefAndDownloads() {
  [...$$('.anchor-download')].forEach((el, i) => {
    el.href = `songs/n${i + 1}.mp3`;
    let nameBandFirstChar = nameBand[0].toUpperCase();
    let nameBandComplete = nameBand.substring(1).toLowerCase();
    el.download = `${nameBandFirstChar}${nameBandComplete} - ${toCapitalize(
      nameSongs[i]
    )}`;
  });
})();

(function getHref() {
  localStorage.setItem('playbackUrl', location.href);
})();

/******************** EVENT DELEGATION ********************/
d.addEventListener('click', e => {
  /******************** EVENT DELEGATION CARDS ********************/
  if (e.target.matches(cardPlayButtonClass)) {
    if (listNumbersSongs?.length > 0) {
      let arrayCards = listNumbersSongs.map(i => $$('.card')[i]);
      let arrayColors = listNumbersSongs.map(
        i => $$('.card')[i].dataset.colorCard
      );
      arrayCards.forEach((card, i) => (card.style.color = arrayColors[i]));
      listNumbersSongs = [];
    }

    blockPlayPauseStopBUTTON();
    const index = [...$$(cardPlayButtonClass)].indexOf(e.target);
    _removeClassBlockedButtonNextSiblings(index);

    let audioActual = d.createElement('audio');
    audioActual.src = arraySongs[index];

    if (!$audio.src) {
      $audio.src = arraySongs[index];
    }

    if ($audio.src !== audioActual.src) {
      $audio.pause();
      $audio.currentTime = 0;
      $audio.src = arraySongs[index];
      $audio.loop = false;
    }

    actualButtonPlayActive(index);
    updateMetadata(index);
    previousTrack(index);
    nextTrack(index);
    showTitle(index);

    if ($audio.loop) {
      e.target.nextElementSibling.nextElementSibling.nextElementSibling.classList.toggle(
        'card-btn-active'
      );
      return;
    }

    return;
  }

  if (e.target.matches(cardPauseButtonClass)) {
    $audio.pause();
    e.target.previousElementSibling.classList.remove('card-btn-active');
    e.target.classList.add('card-btn-active');
    return;
  }

  if (e.target.matches(cardStopButtonClass)) {
    $audio.pause();
    $audio.currentTime = 0;
    blockPlayPauseStopBUTTON();
    e.target.previousElementSibling.previousElementSibling.classList.remove(
      'card-btn-active'
    );
    return;
  }

  if (e.target.matches(cardLoopButtonClass)) {
    if ($audio.loop) {
      $audio.loop = false;
      e.target.classList.remove('card-btn-active');
      return;
    }
    $audio.loop = true;
    e.target.classList.add('card-btn-active');
  }

  if (e.target.matches(cardPlayListButton)) {
    localStorage.setItem('playbackUrl', location.href);
    let index = [...$$('.card')].indexOf(e.target.closest('.card'));
    let lastLetterUrl = localStorage.getItem('playbackUrl').at(-1);
    let urlPuro =
      lastLetterUrl === '/'
        ? localStorage.getItem('playbackUrl')
        : `${localStorage.getItem('playbackUrl')}/`;

    let url = `${urlPuro}songs/n${index + 1}.mp3`;
    let currentNameSong = [...$$('.card')][index].querySelector(
      '.card-right-top'
    ).innerHTML;

    localStorage.setItem('lastCurrentNameSong', currentNameSong);
    localStorage.setItem('lastCurrentURLSong', url);
    RenderPlaylistItems();
    $('.am-modal').showModal();
  }

  if (e.target.matches('.cerrar')) {
    let $containerModal = $('.container-modal');
    e.target.parentElement.close();
    $('.am-modal')
      .querySelector('.container-add-playlist')
      .classList.remove('mode-active');
    d.getElementById('agregarPlaylistInput').value = '';
  }
  if (e.target.matches('.container-add-playlist')) {
    e.target.classList.add('mode-active');
    d.getElementById('agregarPlaylistInput').focus();
    return;
  }
  if (e.target.matches('.container-inputs input[type=submit]')) {
    let input = e.target.previousElementSibling.previousElementSibling;
    let inputValor =
      e.target.previousElementSibling.previousElementSibling.value.trim();

    if (comprobeExistThisProperty(inputValor)) {
      input.classList.remove('valid');
      input.classList.add('invalid');
      return;
    }

    if (!regExP.test(inputValor) || comprobeExistThisProperty(input)) {
      return;
    }

    if (!localStorage.getItem('listname-cards')) {
      localStorage.setItem(
        'listname-cards',
        JSON.stringify({
          [`${inputValor}`]: ''
        })
      );
      RenderPlaylistItems();
      input.value = '';
      return;
    }

    let objectListNameCards = JSON.parse(
      localStorage.getItem('listname-cards')
    );
    let newObjectListNameCards = JSON.stringify({
      ...objectListNameCards,
      [`${inputValor}`]: ''
    });

    localStorage.setItem('listname-cards', newObjectListNameCards);
    RenderPlaylistItems();
    $('.container-modal').scrollTop = $('.container-modal').scrollHeight;
    input.value = '';
  }
  /******************** EVENT DELEGATION NAV ********************/
  if (e.target.matches(navPlayButton)) {
    removeClassNavButtonActive();
    e.target.classList.add('nav-btn-active');
    playAllSongs(arraySongs, cardPlayButtonClass);
    return;
  }
  if (e.target.matches(navRandomButton)) {
    removeClassNavButtonActive();
    e.target.classList.add('nav-btn-active');
    playRandomSongs(arraySongs, cardPlayButtonClass);
    return;
  }
  if (e.target.matches(navMomentaryListButton)) {
    listNumbersSongs = [];
    $('.tooltip').classList.toggle('tooltip-active');
    e.target.classList.add('nav-btn-active');

    if (e.target.classList.contains('nav-btn-active')) {
      let allCards = [...$$('.card')];

      removeClassNavButtonActive();
      e.target.classList.add('nav-btn-active');
      pickCards(allCards, listNumbersSongs);
      return;
    }

    return;
  }
  if (e.target.matches(navArrowDownButton)) {
    if ($audio.src) {
      e.target.classList.add('nav-btn-active');
      let arrayButtons = [...$$('.card-playbutton')];
      let $btnPlayActive = $('.card-playbutton.card-btn-active');
      if (!$btnPlayActive?.closest('.card')) {
        return;
      }
      let indexActual = arrayButtons.indexOf($btnPlayActive) + 1;
      e.target.href = `#song-${indexActual}`;

      $btnPlayActive.closest('.card').classList.add('targeado');
      setTimeout(() => {
        $btnPlayActive.closest('.card').classList.remove('targeado');
        e.target.classList.remove('nav-btn-active');
        history.replaceState(null, '', location.pathname);
      }, 3000);
    }
    return;
  }
});

d.addEventListener('visibilitychange', function () {
  if (!d.hidden) {
    localStorage.setItem('playbackUrl', location.href);
  } else {
    history.replaceState(null, '', location.pathname + location.search);
  }
});

d.addEventListener('change', e => {
  if (e.target.matches(`input[type=checkbox]`)) {
    let currentNameSong = localStorage.getItem('lastCurrentNameSong');
    let url = localStorage.getItem('lastCurrentURLSong');
    let currentId = e.target.id;
    let objectListNameCards = JSON.parse(
      localStorage.getItem('listname-cards')
    );
    if (!objectListNameCards) return;
    let clase = e.target.getAttribute('data-clase');
    let $output = $(`.${clase}`);

    if (e.target.checked) {
      let newObject = {
        ...objectListNameCards,
        [`${currentId}`]: [
          ...objectListNameCards[currentId],
          [`${nameBand} - ${currentNameSong}`, url]
        ]
      };

      localStorage.setItem('listname-cards', JSON.stringify(newObject));

      $output.innerHTML = Number($output.innerHTML) + 1;
      RenderPlaylistItems();
      return;
    }

    let indiceReal = null;
    for (let i = 0; i < objectListNameCards[currentId].length; i++) {
      if (
        objectListNameCards[currentId][i][0] ===
        `${nameBand} - ${currentNameSong}`
      ) {
        indiceReal = i;
        break;
      }
    }

    let newArrray = objectListNameCards[`${currentId}`].toSpliced(
      indiceReal,
      1
    );

    let newObject = {
      ...objectListNameCards,
      [`${currentId}`]: [...newArrray]
    };

    localStorage.setItem('listname-cards', JSON.stringify(newObject));
    $output.innerHTML = Number($output.innerHTML) - 1;
    RenderPlaylistItems();
    return;
  }
});

d.addEventListener('input', e => {
  if (e.target.matches('#agregarPlaylistInput')) {
    let $output = $('.container-inputs output');
    $output.innerHTML = e.target.value.length;

    if (e.target.value.length === 0) {
      e.target.classList.remove('valid');
      e.target.classList.remove('invalid');
      return;
    }

    if (
      regExP.test(e.target.value) &&
      !comprobeExistThisProperty(e.target.value)
    ) {
      e.target.classList.remove('invalid');
      e.target.classList.add('valid');
    } else {
      e.target.classList.remove('valid');
      e.target.classList.add('invalid');
    }
  }
});

d.addEventListener('keydown', e => {
  if (e.target.matches('#agregarPlaylistInput')) {
    if (e.key !== 'Enter') return;
    let input = e.target;
    let inputValor = e.target.value.trim();

    if (comprobeExistThisProperty(inputValor)) {
      input.classList.remove('valid');
      input.classList.add('invalid');
      return;
    }

    if (!regExP.test(inputValor) || comprobeExistThisProperty(input)) {
      return;
    }

    if (!localStorage.getItem('listname-cards')) {
      localStorage.setItem(
        'listname-cards',
        JSON.stringify({
          [`${inputValor}`]: ''
        })
      );
      RenderPlaylistItems();
      input.value = '';
      return;
    }

    let objectListNameCards = JSON.parse(
      localStorage.getItem('listname-cards')
    );
    let newObjectListNameCards = JSON.stringify({
      ...objectListNameCards,
      [`${inputValor}`]: ''
    });

    localStorage.setItem('listname-cards', newObjectListNameCards);
    RenderPlaylistItems();
    $('.container-modal').scrollTop = $('.container-modal').scrollHeight;
    input.value = '';
  }
});

/******************** MODAL FUNCTIONS ********************/

function existThisSongInSomePlaylist(currentName) {
  let nameCurrent = currentName ?? '';
  if (localStorage.getItem('listname-cards')) {
    let objetoNamePlaylists = JSON.parse(
      localStorage.getItem('listname-cards')
    );
    let playlistsWhereExistsCurrenName = [];
    let namesPlaylists = [];

    for (let property in objetoNamePlaylists) {
      namesPlaylists = [...namesPlaylists, property];
    }

    for (let i = 0; i < namesPlaylists.length; i++) {
      let currentPlaylist = namesPlaylists[i];
      let multiArrayCurrent = objetoNamePlaylists[currentPlaylist];

      for (let j = 0; j < multiArrayCurrent.length; j++) {
        if (multiArrayCurrent[j].includes(`${nameBand} - ${nameCurrent}`)) {
          playlistsWhereExistsCurrenName.push(currentPlaylist);
          break;
        }
      }
    }

    return playlistsWhereExistsCurrenName;
  }
}

function RenderPlaylistItems() {
  if (localStorage.getItem('listname-cards')) {
    let currentName = localStorage.getItem('lastCurrentNameSong');
    let objectNames = JSON.parse(localStorage.getItem('listname-cards'));
    let $template = $('.template-modal-fila').content;
    let $tituloModal = $('.tituto-modal');
    $tituloModal.innerHTML = `Save ${currentName} in..`;
    let myFragment = d.createDocumentFragment();
    let $containerModal = $('.container-modal');
    $containerModal.innerHTML = '';
    let arrayCorriente = existThisSongInSomePlaylist(currentName);
    let guardarKey = null;

    for (let key in objectNames) {
      let clon = $template.cloneNode(true);
      clon.querySelector('input').id = key;
      clon.querySelector('input').dataset.clase = toKebabCase(key);
      clon.querySelector('label').setAttribute('for', key);
      clon.querySelector('label').innerHTML = key;
      clon.querySelector('output').setAttribute('class', toKebabCase(key));
      clon.querySelector('output').innerHTML = objectNames[key].length;
      if (objectNames[key].length === 20) {
        clon.querySelector('input[type=checkbox]').disabled = 'true';
        guardarKey = key;
      }
      myFragment.appendChild(clon);
    }

    $containerModal.appendChild(myFragment);

    for (let i = 0; i < arrayCorriente.length; i++) {
      let checkboxCurrent = toKebabCase(arrayCorriente[i]);
      let checkboxActual = $containerModal.querySelector(
        `[data-clase='${checkboxCurrent}']`
      );
      checkboxActual.checked = true;
      checkboxActual.disabled = false;
    }
  }
}

d.addEventListener('DOMContentLoaded', () => {
  blockPlayPauseStopBUTTON();
  putTitle(nameBand, '20 ESSENTIALS');
});

function findDuplicates(array, element) {
  let filterArray = array.filter(el => el === element);
  return filterArray.length;
}

(function addDataAttributeColor() {
  [...$$('.card')].forEach(el => {
    el.dataset.colorCard = getComputedStyle(el).getPropertyValue('color');
  });
})();

function pickCards(allCards, listNumbersSongs) {
  d.addEventListener('click', e => {
    if (e.target.matches('.card *')) {
      let actualCard = e.target.closest('.card');
      let index = allCards.indexOf(actualCard);

      if ($('.tooltip').classList.contains('tooltip-active')) {
        listNumbersSongs.push(index);

        if (findDuplicates(listNumbersSongs, index) > 1) {
          actualCard.style.color = actualCard.dataset.colorCard;
          let newArray = listNumbersSongs.filter(el => el !== index);
          listNumbersSongs = newArray;
          return;
        }

        actualCard.style.color = '#fff';
      }
    }

    if (e.target.matches('.tooltip')) {
      e.target.classList.remove('tooltip-active');
      $('.nav-list-momentary').classList.remove('nav-btn-active');
      let canciones = listNumbersSongs.map(el => arraySongs[el]);
      playSelectedSongs(canciones, cardPlayButtonClass, listNumbersSongs);

      [...$$('.card')].forEach(el => (el.style.color = el.dataset.colorCard));
      listNumbersSongs.forEach(el => {
        [...$$('.card')][el].style.color = '#fff';
      });
    }
  });
}

function comprobeExistThisProperty(nameProperty) {
  if (localStorage.getItem('listname-cards')) {
    let object = JSON.parse(localStorage.getItem('listname-cards'));
    return object.hasOwnProperty(nameProperty) ? true : false;
  }
}

window.addEventListener('storage', e => {
  if (localStorage.getItem('listname-cards')) {
    if (e.key === 'listname-cards') {
      localStorage.setItem('listname-cards', e.newValue);
      RenderPlaylistItems();
    }
  }
});

/******************** REMOVE ANIMATION VIEW() OF CARDS ********************/

const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('stopped-animation');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

cards.forEach(card => observer.observe(card));
