"use strict";

const imgButton = document.querySelector(".excersiceOne__img");
console.log(imgButton.classList.contains("borderRedActive"));

//excersiceOne
imgButton.addEventListener("click", () => {
  if (!imgButton.classList.contains("borderRedActive")) {
    imgButton.classList.add("borderRedActive");
  } else {
    imgButton.classList.remove("borderRedActive");
  }
});
