import translationData from "./translation.js";

// language and translation

const langSelect = document.querySelector(".header__select");

if (localStorage.getItem("language_mshns")) langSelect.value = localStorage.language_mshns;

const logoTitle = document.querySelector(".logo__title");
const navLink = document.querySelectorAll(".nav__link");
const footerLink = document.querySelector(".footer__link");
const copyright = document.querySelector(".footer__copyright");

const congrats = document.querySelector(".main__congrats");
const result = document.querySelector(".main__result");
const points = document.querySelector(".main__points");

const content = document.querySelector(".main__content");

function translate() {
  logoTitle.innerHTML = translationData[0][langSelect.value];
  navLink[0].innerHTML = translationData[1][langSelect.value];
  navLink[1].innerHTML = translationData[2][langSelect.value];

  footerLink.innerHTML = translationData[9][langSelect.value];
  copyright.innerHTML = translationData[10][langSelect.value];

  congrats.innerHTML = translationData[14][langSelect.value];
  result.innerHTML = localStorage.score_mshns + ' ' + translationData[15][langSelect.value] + ' 30';
  points.innerHTML = translationData[16][langSelect.value];
  setContent();
}
translate();

langSelect.addEventListener('change', () => {
  translate();
  localStorage.setItem("language_mshns", langSelect.value)
});

function setContent() {
  content.innerHTML = '';
  if (localStorage.score_mshns === '30') {
    const div = document.createElement('div');
    div.innerHTML = translationData[17][langSelect.value];
    content.append(div);
  } else {
    const a = document.createElement('a');
    a.classList.add('content__link');
    a.setAttribute('href','../../pages/quiz');
    a.setAttribute('title','Quiz');
    a.innerHTML = translationData[18][langSelect.value];
    content.append(a);
  }
}