import translationData from "./translation.js";

// language and translation

const langSelect = document.querySelector(".header__select");

if (localStorage.getItem("language")) langSelect.value = localStorage.language;

const logoTitle = document.querySelector(".logo__title");
const navLink = document.querySelectorAll(".nav__link");
const footerLink = document.querySelector(".footer__link");
const copyright = document.querySelector(".footer__copyright");

function translate() {
  logoTitle.innerHTML = translationData[0][langSelect.value];
  navLink[0].innerHTML = translationData[1][langSelect.value];
  navLink[1].innerHTML = translationData[2][langSelect.value];

  footerLink.innerHTML = translationData[9][langSelect.value];
  copyright.innerHTML = translationData[10][langSelect.value];
}
translate();

langSelect.addEventListener('change', () => {
  translate();
  localStorage.setItem("language", langSelect.value)
});

const main = document.querySelector(".main");
main.innerHTML = 'ghbdtnbrb';