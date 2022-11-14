import soundtracksData from "./soundtracks.js";

// slider

const sliderImg = document.querySelectorAll(".slider__img");
const sliderName = document.querySelectorAll(".slider__name");
const sliderTitle = document.querySelectorAll(".slider__title");
const sliderSubtitle = document.querySelectorAll(".slider__subtitle");
const sliderDescription = document.querySelectorAll(".slider__description");

function setSlider (lang) {
  sliderImg[0].style.backgroundImage = soundtracksData[0][0].image;
  sliderImg[1].style.backgroundImage = soundtracksData[0][1].image;
  sliderImg[2].style.backgroundImage = soundtracksData[0][2].image;

  sliderName[0].innerHTML = soundtracksData[0][0].nameEn;
  sliderName[1].innerHTML = soundtracksData[0][1].nameEn;
  sliderName[2].innerHTML = soundtracksData[0][2].nameEn;

  sliderTitle[0].innerHTML = soundtracksData[0][0].trackEn;
  sliderTitle[1].innerHTML = soundtracksData[0][1].trackEn;
  sliderTitle[2].innerHTML = soundtracksData[0][2].trackEn;

  sliderSubtitle[0].innerHTML = soundtracksData[0][0].authorEn;
  sliderSubtitle[1].innerHTML = soundtracksData[0][1].authorEn;
  sliderSubtitle[2].innerHTML = soundtracksData[0][2].authorEn;

  sliderDescription[0].innerHTML = soundtracksData[0][0].descriptionEn;
  sliderDescription[1].innerHTML = soundtracksData[0][1].descriptionEn;
  sliderDescription[2].innerHTML = soundtracksData[0][2].descriptionEn;
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
  const leftContent = leftSlide.innerHTML;
  const rightContent = rightSlide.innerHTML;

  if (animationEvent.animationName === "move-left") {
    slider.classList.remove("transition-left");
    centerSlide.innerHTML = leftContent;
  } else {
    slider.classList.remove("transition-right");
    centerSlide.innerHTML = rightContent;
  }

  buttonLeft.addEventListener("click", moveLeft);
  buttonRight.addEventListener("click", moveRight);
});
