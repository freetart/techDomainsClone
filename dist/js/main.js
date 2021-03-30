"use strict";

// hamburger menu
const menuIcon = document.querySelector(".hamburger-menu");
const menuNavbar = document.querySelector(".menu-navbar");
const overlay = document.querySelector(".overlay");
const body = document.querySelector("body");

menuIcon.addEventListener("click", () => {
  menuNavbar.classList.toggle("change");
  if (menuNavbar.classList.contains("change")) {
    overlay.classList.remove("hidden");
    body.style.overflowY = "hidden";
  } else {
    overlay.classList.add("hidden");
    body.style.overflowY = "auto";
  }
});

overlay.addEventListener("click", () => {
  menuNavbar.classList.remove("change");
  overlay.classList.add("hidden");
  body.style.overflowY = "auto";
});

// hero search
const textDisplay = document.querySelector(".hero-input");
const phrases = ["habibdev.tech", "traversymedia.tech", "codehawke.tech"];
let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;

function loop() {
  isEnd = false;
  textDisplay.placeholder = currentPhrase.join("");

  if (i < phrases.length) {
    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
      textDisplay.placeholder = currentPhrase.join("");
    }

    if (isDeleting && j <= phrases[i].length) {
      currentPhrase.pop(phrases[i][j]);
      j--;
      textDisplay.placeholder = currentPhrase.join("");
    }

    if (j == phrases[i].length) {
      isEnd = true;
      isDeleting = true;
    }

    if (isDeleting && j === 0) {
      currentPhrase = [];
      isDeleting = false;
      i++;
      if (i === phrases.length) {
        i = 0;
      }
    }
  }
  const spedUp = Math.random() * (80 - 50) + 50;
  const normalSpeed = Math.random() * (300 - 200) + 200;
  const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed;
  setTimeout(loop, time);
}
loop();

// carousels
const width = window.innerWidth;

const storiesCarousel = {
  type: "carousel",
  autoplay: 8000,
  hoverpause: true,
};
new Glide(".glide1", storiesCarousel).mount();

const spotlightCarousel = {
  type: "carousel",
  autoplay: 4000,
  hoverpause: true,
  perView: 3,
};
if (width <= 650) {
  spotlightCarousel.perView = 2;
}
if (width <= 400) {
  spotlightCarousel.perView = 1;
}
new Glide(".glide2", spotlightCarousel).mount();

const newsCarousel = {
  type: "carousel",
  autoplay: 2000,
  perView: 4,
};
if (width <= 650) {
  newsCarousel.perView = 2;
}
new Glide(".glide3", newsCarousel).mount();

window.addEventListener("resize", () => {
  if (width <= 650) {
    location.reload();
  }
});
