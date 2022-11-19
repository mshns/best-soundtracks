import soundtracksData from "./soundtracks.js";
import translationData from "./translation.js";

// language and translation

const langSelect = document.querySelector(".header__select");

if (localStorage.getItem("language_mshns")) langSelect.value = localStorage.language_mshns;

const logoTitle = document.querySelector(".logo__title");
const navLink = document.querySelectorAll(".nav__link");
const questionsLevel = document.querySelectorAll(".questions__item");
const secretImg = document.querySelector('.player__img');
const score = document.querySelector('.score');
const trackTitle = document.querySelector('.track__title');
const options = document.querySelectorAll('.options__item');
const trackDuration = document.querySelector('.time__duration');
const quizAnswer = document.querySelector('.quiz__answer');
const btnLevel = document.querySelector('.button__level');
const buttonLevel = document.querySelector('.button__level');
const footerLink = document.querySelector(".footer__link");
const copyright = document.querySelector(".footer__copyright");

let name = 'nameEn';
let track = 'trackEn';
let author = 'authorEn';
let description = 'descriptionEn';
let level = 0;
let scoreCount = 0;
let scorePlus = 5;
let secret = getSecret(0, soundtracksData[level].length - 1);
let isWin = false;

function translate() {
  logoTitle.innerHTML = translationData[0][langSelect.value];
  navLink[0].innerHTML = translationData[1][langSelect.value];
  navLink[1].innerHTML = translationData[2][langSelect.value];
  questionsLevel[0].innerHTML = translationData[3][langSelect.value];
  questionsLevel[1].innerHTML = translationData[4][langSelect.value];
  questionsLevel[2].innerHTML = translationData[5][langSelect.value];
  questionsLevel[3].innerHTML = translationData[6][langSelect.value];
  questionsLevel[4].innerHTML = translationData[7][langSelect.value];
  questionsLevel[5].innerHTML = translationData[8][langSelect.value];

  score.innerHTML = translationData[11][langSelect.value] + scoreCount;
  buttonLevel.innerHTML = translationData[12][langSelect.value];

  footerLink.innerHTML = translationData[9][langSelect.value];
  copyright.innerHTML = translationData[10][langSelect.value];

  if (langSelect.value === 'russian') {
    name = 'nameRu';
    track = 'trackRu';
    author = 'authorRu';
    description = 'descriptionRu';
  } else {
    name = 'nameEn';
    track = 'trackEn';
    author = 'authorEn';
    description = 'descriptionEn';
  }
  setOptions();
  clearAnswer();
}
translate();

langSelect.addEventListener('change', () => {
  translate();
  localStorage.setItem("language_mshns", langSelect.value);
});

// quiz

function getSecret(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setOptions() {
  soundtracksData[level].forEach((element, index) => {
    options[index].innerHTML = soundtracksData[level][index][name];
  });
  trackTitle.innerHTML = '* * * * *';
  trackDuration.innerHTML = soundtracksData[level][secret].duration;
}
setOptions();

let trackAnswer = 0;

options.forEach((element, index) => {
  element.addEventListener('click', () => {
    trackAnswer = index;
    setAnswer(index);
    clearPlayerAnswer();
    if (index === secret && !isWin) {
      options[index].classList.add('right');
      btnLevel.classList.add('active');
      scoreCount += scorePlus;
      secretImg.style.backgroundImage = soundtracksData[level][secret].image;
      trackTitle.innerHTML = soundtracksData[level][secret][name];
      score.innerHTML = translationData[11][langSelect.value] + scoreCount;
      clearPlayer();
      sound.src = '../../assets/sound/right.mp3';
      sound.play();
      isWin = true;
    } else if (!isWin) {
      sound.src = '../../assets/sound/wrong.mp3';
      sound.play();
      options[index].classList.add('wrong');
      scorePlus--;
    }
  });
});

btnLevel.addEventListener('click', () => {
  level++;
  if (level > 5) {
    localStorage.setItem("score_mshns", scoreCount);
    document.location.href = '../score/';
  } else {
    secret = getSecret(0, soundtracksData[level].length - 1);
    options.forEach(element => {
    element.classList.remove('right');
    element.classList.remove('wrong');
    element.classList.remove('disable');
    });
    clearAnswer();
    setOptions();
    clearPlayer();
    clearPlayerAnswer();
    questionsLevel[level - 1].classList.remove('questions__item_active');
    questionsLevel[level].classList.add('questions__item_active');
    scorePlus = 5;
    isWin = false;
    btnLevel.classList.toggle('active');
    secretImg.style.backgroundImage = '';
  }
});

clearAnswer();

const divBtnPlay = document.createElement('div');
const inputProgress = document.createElement('input');
divBtnPlay.classList.add('answer-button__play');
inputProgress.classList.add('answer-track__progress');
const divTimeProgress = document.createElement('div');
const divBtnVolume = document.createElement('div');
const inputVolume = document.createElement('input');

function setAnswer(index) {
  quizAnswer.innerHTML = '';

  const divInfo = document.createElement('div');
  divInfo.classList.add('answer__info');
  quizAnswer.append(divInfo);

  const divImg = document.createElement('div');
  divImg.classList.add('answer__img');
  divImg.style.backgroundImage = soundtracksData[level][index].image;
  divInfo.append(divImg);

  const divDetails = document.createElement('div');
  divDetails.classList.add('answer__details');
  divInfo.append(divDetails);

  const h2 = document.createElement('h2');
  h2.classList.add('answer__title');
  h2.innerHTML = soundtracksData[level][index][name];
  divDetails.append(h2);

  const trackH3 = document.createElement('h3');
  trackH3.classList.add('answer__subtitle');
  trackH3.innerHTML = soundtracksData[level][index][track];
  divDetails.append(trackH3);

  const authorH3 = document.createElement('h3');
  authorH3.classList.add('answer__subtitle');
  authorH3.innerHTML = soundtracksData[level][index][author];
  divDetails.append(authorH3);

  const divPlayer = document.createElement('div');
  divPlayer.classList.add('answer__player');
  divDetails.append(divPlayer);

  divBtnPlay.addEventListener('click', playAudioAnswer);
  divPlayer.append(divBtnPlay);

  const divTrack = document.createElement('div');
  divTrack.classList.add('answer__track');
  divPlayer.append(divTrack);

  inputProgress.setAttribute('type', 'range');
  inputProgress.setAttribute('min', '0');
  inputProgress.setAttribute('max', '100');
  inputProgress.setAttribute('value', '0');
  inputProgress.setAttribute('step', '1');
  inputProgress.addEventListener('click', trackRangeAnswer);
  divTrack.append(inputProgress);

  const divControl = document.createElement('div');
  divControl.classList.add('answer-track__control');
  divTrack.append(divControl);

  const divVolume = document.createElement('div');
  divVolume.classList.add('answer-track__volume');
  divControl.append(divVolume);

  divBtnVolume.classList.add('answer-button__volume');
  divBtnVolume.addEventListener('click', volumLevelAnswer);
  divVolume.append(divBtnVolume);

  inputVolume.classList.add('answer-button__level');
  inputVolume.setAttribute('type', 'range');
  inputVolume.setAttribute('min', '0');
  inputVolume.setAttribute('max', '1');
  inputVolume.setAttribute('value', '.6');
  inputVolume.setAttribute('step', '.05');
  inputVolume.addEventListener('click', changeVolumAnswer);
  divVolume.append(inputVolume);

  const divTime = document.createElement('div');
  divTime.classList.add('answer__time');
  divControl.append(divTime);

  divTimeProgress.classList.add('answer-time__progress');
  divTimeProgress.innerHTML = '00:00';
  divTime.append(divTimeProgress);

  const divTimeDuration = document.createElement('div');
  divTimeDuration.classList.add('answer-time__duration');
  divTimeDuration.innerHTML = soundtracksData[level][index].duration;
  divTime.append(divTimeDuration);

  const p = document.createElement('p');
  p.classList.add('answer__description');
  p.innerHTML = soundtracksData[level][index][description];
  quizAnswer.append(p);
}

function clearAnswer() {
  quizAnswer.innerHTML = '';
  const message = document.createElement('p');
  message.classList.add('answer__message');
  message.innerHTML = translationData[13][langSelect.value];
  quizAnswer.append(message);
}

// player

const audio = new Audio();
let isPlay = false;
let pauseTime = 0;
let newInterval;

const play = document.querySelector('.player-button__play');
const trackCurrentTime = document.querySelector('.time__progress');

function playAudio() {
  play.classList.toggle('pause');
  if (isPlayAnswer) clearPlayerAnswer();
  if (!isPlay) {
    audio.src = soundtracksData[level][secret].audio;
    audio.currentTime = pauseTime;
    audio.play();
    isPlay = true;
    newInterval = setInterval(trackProgress, 1000);
    trackRange.disabled = false;
  } else {
    pauseTime = audio.currentTime;
    audio.pause();
    isPlay = false;
    clearInterval(newInterval)
    trackRange.disabled = true;
  }
}

play.addEventListener('click', playAudio);

const trackRange = document.querySelector('.track__progress')

function trackProgress() {
  trackRange.value = (Math.floor(audio.currentTime) * 100) / Math.floor(audio.duration);

  let minCurrentTime = Math.floor(audio.currentTime / 60).toString().padStart(2, '0');
  let secCurrentTime = Math.floor(audio.currentTime % 60).toString().padStart(2, '0');
  trackCurrentTime.innerHTML = minCurrentTime + ':' + secCurrentTime;

  if (audio.currentTime === audio.duration) clearPlayer();
}

function clearPlayer() {
  play.classList.remove('pause');
  audio.pause();
  clearInterval(newInterval);
  isPlay = false;
  trackRange.value = 0;
  pauseTime = 0;
  trackCurrentTime.innerHTML = '00:00';
  trackRange.disabled = true;
}

trackRange.addEventListener ('click', () => {
  audio.currentTime = trackRange.value / 100 * audio.duration;
});

const volumeButton = document.querySelector('.player-button__volume');
const volumeLevel = document.querySelector('.player-button__level');

let volumeSave = .6;

audio.volume = volumeLevel.value;

volumeButton.addEventListener('click', () => {
  if (audio.muted === false) {
    volumeSave = volumeLevel.value;
    audio.muted = true;
    volumeLevel.value = 0;
  } else {
    audio.muted = false;
    volumeLevel.value = volumeSave;
  }
  volumeButton.classList.toggle('muted');
});

volumeLevel.addEventListener('change', () => {
  audio.volume = volumeLevel.value;
});

// sound and second player

const sound = new Audio();

const audioAnswer = new Audio();
let isPlayAnswer = false;
let pauseTimeAnswer = 0;
let newIntervalAnswer;

function playAudioAnswer() {
  divBtnPlay.classList.toggle('pause');
  if (isPlay) clearPlayer();
  if (!isPlayAnswer) {
    audioAnswer.src = soundtracksData[level][trackAnswer].audio;
    audioAnswer.currentTime = pauseTimeAnswer;
    audioAnswer.play();
    isPlayAnswer = true;
    newIntervalAnswer = setInterval(trackProgressAnswer, 1000);
    inputProgress.disabled = false;
  } else {
    pauseTimeAnswer = audioAnswer.currentTime;
    audioAnswer.pause();
    isPlayAnswer = false;
    clearInterval(newIntervalAnswer)
    inputProgress.disabled = true;
  }
}

function trackProgressAnswer() {
  inputProgress.value = (Math.floor(audioAnswer.currentTime) * 100) / Math.floor(audioAnswer.duration);

  let minCurrentTime = Math.floor(audioAnswer.currentTime / 60).toString().padStart(2, '0');
  let secCurrentTime = Math.floor(audioAnswer.currentTime % 60).toString().padStart(2, '0');
  divTimeProgress.innerHTML = minCurrentTime + ':' + secCurrentTime;

  if (audioAnswer.currentTime === audioAnswer.duration) clearPlayerAnswer();
}

function trackRangeAnswer() {
  audioAnswer.currentTime = inputProgress.value / 100 * audioAnswer.duration;
}

function clearPlayerAnswer() {
  divBtnPlay.classList.remove('pause');
  audioAnswer.pause();
  clearInterval(newIntervalAnswer);
  isPlayAnswer = false;
  inputProgress.value = 0;
  pauseTimeAnswer = 0;
  divTimeProgress.innerHTML = '00:00';
  inputProgress.disabled = true;
}

function volumLevelAnswer() {
  if (audioAnswer.muted === false) {
  audioAnswer.muted = true;
  inputVolume.value = 0;
} else {
  audioAnswer.muted = false;
  inputVolume.value = volumeSave;
}
divBtnVolume.classList.toggle('muted');
}

function changeVolumAnswer() {
  audioAnswer.volume = inputVolume.value;
}