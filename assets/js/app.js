"use strict";

//excersiceOne
const imgButton = document.querySelector(".excersiceOne__img");

imgButton.addEventListener("click", () => {
  if (!imgButton.classList.contains("borderRedActive")) {
    imgButton.classList.add("borderRedActive");
  } else {
    imgButton.classList.remove("borderRedActive");
  }
});

//excersiceTwo
const stickerInputOne = document.querySelector("#stickerInput1");
const stickerInputTwo = document.querySelector("#stickerInput2");
const stickerInputThree = document.querySelector("#stickerInput3");
const totalNumberSticker = document.querySelector("#totalNumberSticker");
const stickerWarning = document.querySelector(".stickerWarning");
const buttonStickers = document.querySelector(".buttonStickers");

buttonStickers.addEventListener("click", () => {
  const inputOne = Number(stickerInputOne.value);
  const inputTwo = Number(stickerInputTwo.value);
  const inputThree = Number(stickerInputThree.value);
  const inputValueSum = inputOne + inputTwo + inputThree;

  if (
    stickerInputOne.value >= 1 &&
    stickerInputTwo.value >= 1 &&
    stickerInputThree.value >= 1
  ) {
    totalNumberSticker.textContent = inputValueSum;
  }
  if (inputValueSum > 10) {
    stickerWarning.classList.remove("hidden");
  } else {
    stickerWarning.classList.add("hidden");
  }
});

//excersiceThree
const selectOne = document.querySelector(".selectOne");
const selectTwo = document.querySelector(".selectTwo");
const selectThree = document.querySelector(".selectThree");
const selectPasswordResponse = document.querySelector(
  ".selectPasswordResponse"
);
const buttonPassword = document.querySelector(".buttonPassword");

selectPasswordResponse.classList.add("hidden");

buttonPassword.addEventListener("click", () => {
  selectPasswordResponse.classList.add("hidden");

  if (
    selectOne.value === "9" &&
    selectTwo.value === "1" &&
    selectThree.value === "1"
  ) {
    selectPasswordResponse.classList.remove("hidden");
    selectPasswordResponse.textContent = "Password 1 correcto";
  } else if (
    selectOne.value === "7" &&
    selectTwo.value === "1" &&
    selectThree.value === "4"
  ) {
    selectPasswordResponse.classList.remove("hidden");
    selectPasswordResponse.textContent = "Password 2 correcto";
  } else {
    selectPasswordResponse.classList.remove("hidden");
    selectPasswordResponse.innerHTML = "Pasword incorrecto";
  }
});
