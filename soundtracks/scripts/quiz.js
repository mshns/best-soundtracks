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
  localStorage.setItem("language", langSelect.value)
});

// quiz

const quizOptions = document.querySelector('.quiz__options')

