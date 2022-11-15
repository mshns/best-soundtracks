import soundtracksData from "./soundtracks.js";
import translationData from "./translation.js";

// language and translation

const langSelect = document.querySelector(".header__select");

if (localStorage.getItem("language")) langSelect.value = localStorage.language;

const logoTitle = document.querySelector(".logo__title");
const navLink = document.querySelectorAll(".nav__link");
const sliderMenuBtn = document.querySelectorAll(".slider-menu__button");
const footerLink = document.querySelector(".footer__link");
const copyright = document.querySelector(".footer__copyright");

function translate() {
  logoTitle.innerHTML = translationData[0][langSelect.value];
  navLink[0].innerHTML = translationData[1][langSelect.value];
  navLink[1].innerHTML = translationData[2][langSelect.value];
  sliderMenuBtn[0].innerHTML = translationData[3][langSelect.value];
  sliderMenuBtn[1].innerHTML = translationData[4][langSelect.value];
  sliderMenuBtn[2].innerHTML = translationData[5][langSelect.value];
  sliderMenuBtn[3].innerHTML = translationData[6][langSelect.value];
  sliderMenuBtn[4].innerHTML = translationData[7][langSelect.value];
  sliderMenuBtn[5].innerHTML = translationData[8][langSelect.value];
  footerLink.innerHTML = translationData[9][langSelect.value];
  copyright.innerHTML = translationData[10][langSelect.value];
}
translate();

langSelect.addEventListener('change', () => {
  setSlider();
  translate();
  localStorage.setItem("language", langSelect.value)
});

// slider

let category = 0;
let slideNum = 0;

const trackTitle = document.querySelector(".track__title");
const trackDuration = document.querySelector(".time__duration");
const trackCurrentTime = document.querySelector(".time__progress");

const sliderImg = document.querySelectorAll(".slider__img");
const sliderName = document.querySelectorAll(".slider__name");
const sliderTitle = document.querySelectorAll(".slider__title");
const sliderSubtitle = document.querySelectorAll(".slider__subtitle");
const sliderDescription = document.querySelectorAll(".slider__description");

sliderMenuBtn.forEach((element, index) => {
  element.addEventListener('click', () => {
    sliderMenuBtn.forEach(element => {
      element.classList.remove('slider-menu__button_active');
    });
    element.classList.add('slider-menu__button_active');
    category = index;
    slideNum = 0;
    setSlider();
  });
});

function setSlider() {
  let slideNext = slideNum + 1;
  if (slideNext === soundtracksData[0].length) slideNext = 0;
  let slidePrev = slideNum - 1;
  if (slidePrev === -1) slidePrev = soundtracksData[0].length - 1;

  let name = 'nameEn';
  let track = 'trackEn';
  let author = 'authorEn';
  let description = 'descriptionEn';

  if (langSelect.value === 'russian') {
    name = 'nameRu';
    track = 'trackRu';
    author = 'authorRu';
    description = 'descriptionRu';
  }

  sliderImg[0].style.backgroundImage = soundtracksData[category][slidePrev].image;
  sliderImg[1].style.backgroundImage = soundtracksData[category][slideNum].image;
  sliderImg[2].style.backgroundImage = soundtracksData[category][slideNext].image;

  sliderName[0].innerHTML = soundtracksData[category][slidePrev][name];
  sliderName[1].innerHTML = soundtracksData[category][slideNum][name];
  sliderName[2].innerHTML = soundtracksData[category][slideNext][name];

  sliderTitle[0].innerHTML = soundtracksData[category][slidePrev][track];
  sliderTitle[1].innerHTML = soundtracksData[category][slideNum][track];
  sliderTitle[2].innerHTML = soundtracksData[category][slideNext][track];

  sliderSubtitle[0].innerHTML = soundtracksData[category][slidePrev][author];
  sliderSubtitle[1].innerHTML = soundtracksData[category][slideNum][author];
  sliderSubtitle[2].innerHTML = soundtracksData[category][slideNext][author];

  sliderDescription[0].innerHTML = soundtracksData[category][slidePrev][description];
  sliderDescription[1].innerHTML = soundtracksData[category][slideNum][description];
  sliderDescription[2].innerHTML = soundtracksData[category][slideNext][description];

  trackTitle.innerHTML = soundtracksData[category][slideNum][author] + " — " + soundtracksData[0][slideNum][track];
  trackDuration.innerHTML = soundtracksData[category][slideNum].duration;
}
setSlider();

const buttonLeft = document.querySelector(".slider__button_left");
const buttonRight = document.querySelector(".slider__button_right");
const slider = document.querySelector(".slider__list");

const moveLeft = () => {
  slider.classList.add("transition-left");
  buttonLeft.removeEventListener("click", moveLeft);
  buttonRight.removeEventListener("click", moveRight);
};

const moveRight = () => {
  slider.classList.add("transition-right");
  buttonLeft.removeEventListener("click", moveLeft);
  buttonRight.removeEventListener("click", moveRight);
};

buttonLeft.addEventListener("click", moveLeft);
buttonRight.addEventListener("click", moveRight);

slider.addEventListener("animationend", function (animationEvent) {
  if (animationEvent.animationName === "move-left") {
    slider.classList.remove("transition-left");
    slideNum--;
    if (slideNum === -1) slideNum = soundtracksData[0].length - 1;
  } else {
    slider.classList.remove("transition-right");
    slideNum++;
    if (slideNum === soundtracksData[0].length) slideNum = 0;
  }

  buttonLeft.addEventListener("click", moveLeft);
  buttonRight.addEventListener("click", moveRight);

  setSlider();
  clearPlayer();
});

// player

const audio = new Audio();
let isPlay = false;
let pauseTime = 0;
let newInterval;
const play = document.querySelector('.player-button__play');

function playAudio() {
  play.classList.toggle('pause');
  if (!isPlay) {
    audio.src = soundtracksData[category][slideNum].audio;
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

audio.volume = volumeLevel.value;

volumeButton.addEventListener('click', () => {
  if (audio.muted === false) {
    audio.muted = true;
    volumeLevel.value = 0;
  } else {
    audio.muted = false;
    volumeLevel.value = .6;
  }
  volumeButton.classList.toggle('muted');
});

volumeLevel.addEventListener('change', () => {
  audio.volume = volumeLevel.value;
});


