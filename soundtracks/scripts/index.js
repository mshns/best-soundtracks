import soundtracksData from "./soundtracks.js";
import translationData from "./translation.js";
// language

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

const trackTitle = document.querySelector(".track__title");
const trackDuration = document.querySelector(".time__duration");


const sliderImg = document.querySelectorAll(".slider__img");
const sliderName = document.querySelectorAll(".slider__name");
const sliderTitle = document.querySelectorAll(".slider__title");
const sliderSubtitle = document.querySelectorAll(".slider__subtitle");
const sliderDescription = document.querySelectorAll(".slider__description");

let slideNum = 0;

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

  sliderImg[0].style.backgroundImage = soundtracksData[0][slidePrev].image;
  sliderImg[1].style.backgroundImage = soundtracksData[0][slideNum].image;
  sliderImg[2].style.backgroundImage = soundtracksData[0][slideNext].image;

  sliderName[0].innerHTML = soundtracksData[0][slidePrev][name];
  sliderName[1].innerHTML = soundtracksData[0][slideNum][name];
  sliderName[2].innerHTML = soundtracksData[0][slideNext][name];

  sliderTitle[0].innerHTML = soundtracksData[0][slidePrev][track];
  sliderTitle[1].innerHTML = soundtracksData[0][slideNum][track];
  sliderTitle[2].innerHTML = soundtracksData[0][slideNext][track];

  sliderSubtitle[0].innerHTML = soundtracksData[0][slidePrev][author];
  sliderSubtitle[1].innerHTML = soundtracksData[0][slideNum][author];
  sliderSubtitle[2].innerHTML = soundtracksData[0][slideNext][author];

  sliderDescription[0].innerHTML = soundtracksData[0][slidePrev][description];
  sliderDescription[1].innerHTML = soundtracksData[0][slideNum][description];
  sliderDescription[2].innerHTML = soundtracksData[0][slideNext][description];

  trackTitle.innerHTML = soundtracksData[0][slideNum][author] + " — " + soundtracksData[0][slideNum][track];
  trackDuration.innerHTML = soundtracksData[0][slideNum].duration;
}
setSlider();

const buttonLeft = document.querySelector(".slider__button_left");
const buttonRight = document.querySelector(".slider__button_right");
const slider = document.querySelector(".slider__list");
const leftSlide = document.querySelector(".slider__item_left");
const centerSlide = document.querySelector(".slider__item_center");
const rightSlide = document.querySelector(".slider__item_right");

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
});
