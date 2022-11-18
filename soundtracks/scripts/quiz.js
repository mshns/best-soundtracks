import soundtracksData from "./soundtracks.js";
import translationData from "./translation.js";

// language and translation

const langSelect = document.querySelector(".header__select");

if (localStorage.getItem("language")) langSelect.value = localStorage.language;

const logoTitle = document.querySelector(".logo__title");
const navLink = document.querySelectorAll(".nav__link");
const questionsLevel = document.querySelectorAll(".questions__item");
const score = document.querySelector('.score');
const buttonLevel = document.querySelector('.button__level')
const footerLink = document.querySelector(".footer__link");
const copyright = document.querySelector(".footer__copyright");

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

  score.innerHTML = translationData[11][langSelect.value];
  buttonLevel.innerHTML = translationData[12][langSelect.value];

  footerLink.innerHTML = translationData[9][langSelect.value];
  copyright.innerHTML = translationData[10][langSelect.value];
}
translate();

langSelect.addEventListener('change', () => {
  translate();
  localStorage.setItem("language", langSelect.value);
});

// quiz

const quizOptions = document.querySelector('.options__list');

let level = 0;

function setOptions() {
  soundtracksData[level].forEach((element, index) => {
    const li = document.createElement('li');
    li.classList.add('options__item');

    li.innerHTML = soundtracksData[level][index].nameEn;
    quizOptions.append(li);
  });
}
setOptions()


const quizAnswer = document.querySelector('.quiz__answer');

function setAnswer() {
  quizAnswer.innerHTML = '';

  const divInfo = document.createElement('div');
  divInfo.classList.add('answer__info');
  quizAnswer.append(divInfo);

  const divImg = document.createElement('div');
  divImg.classList.add('answer__img');
  divImg.style.backgroundImage = soundtracksData[0][0].image;
  divInfo.append(divImg);

  const divDetails = document.createElement('div');
  divDetails.classList.add('answer__details');
  divInfo.append(divDetails);

  const h2 = document.createElement('h2');
  h2.classList.add('answer__title');
  h2.innerHTML = soundtracksData[0][0].nameEn;
  divDetails.append(h2);

  const trackH3 = document.createElement('h3');
  trackH3.classList.add('answer__subtitle');
  trackH3.innerHTML = soundtracksData[0][0].trackEn;
  divDetails.append(trackH3);

  const authorH3 = document.createElement('h3');
  authorH3.classList.add('answer__subtitle');
  authorH3.innerHTML = soundtracksData[0][0].authorEn;
  divDetails.append(authorH3);

  const divPlayer = document.createElement('div');
  divPlayer.classList.add('answer__player');
  divDetails.append(divPlayer);

  const divBtnPlay = document.createElement('div');
  divBtnPlay.classList.add('answer-button__play');
  divPlayer.append(divBtnPlay);

  const divTrack = document.createElement('div');
  divTrack.classList.add('answer__track');
  divPlayer.append(divTrack);

  const inputProgress = document.createElement('input');
  inputProgress.classList.add('answer__track');
  divTrack.append(inputProgress);

  const divControl = document.createElement('div');
  divControl.classList.add('answer-track__control');
  divTrack.append(divControl);

  const divVolume = document.createElement('div');
  divVolume.classList.add('answer-track__volume');
  divControl.append(divVolume);

  const divBtnVolume = document.createElement('div');
  divBtnVolume.classList.add('answer-button__volume');
  divVolume.append(divBtnVolume);

  const inputVolume = document.createElement('input');
  inputVolume.classList.add('answer-button__level');
  divVolume.append(inputVolume);

  const divTime = document.createElement('div');
  divTime.classList.add('answer__time');
  divControl.append(divTime);

  const divTimeProgress = document.createElement('div');
  divTimeProgress.classList.add('answer-time__progress');
  divTime.append(divTimeProgress);

  const divTimeDuration = document.createElement('div');
  divTimeDuration.classList.add('answer-time__duration');
  divTime.append(divTimeDuration);

  const description = document.createElement('p');
  description.classList.add('answer__description');
  description.innerHTML = soundtracksData[0][0].descriptionEn;
  quizAnswer.append(description);
}
setAnswer();
