"use strict";

// DOM ELEMENTS
const body = document.querySelector("body");
const menuIcon = document.querySelector(".hamburger-menu");
const menuNavbar = document.querySelector(".menu-navbar");
const overlay = document.querySelector(".overlay");

const textDisplay = document.querySelector(".hero-input");

const counters = document.querySelectorAll(".counter");
const statsNumbers = document.querySelector(".stats-numbers");

const width = window.innerWidth;

// hero search
const heroSearch = () => {
  const phrases = ["habibdev.tech", "traversy.tech", "codehawke.tech"];
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
};
heroSearch();

// stats counter
const statsCounter = () => {
  const options = { rootMargin: "1px" };
  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.target) {
        countStats();
      }
    });
  }, options);
  observer.observe(statsNumbers);

  function countStats() {
    counters.forEach((counter) => {
      counter.innerText = "0";

      const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const c = +counter.innerText;

        const increment = target / 200;

        if (c < target) {
          counter.innerText = `${Math.ceil(c + increment)}`;
          setTimeout(updateCounter, 1);
        } else {
          counter.innerText = target;
        }
      };

      updateCounter();
    });
  }
};
statsCounter();

// carousels
const storiesCarousel = () => {
  const storiesCarouselObj = {
    type: "carousel",
    autoplay: 8000,
    hoverpause: true,
  };
  new Glide(".glide1", storiesCarouselObj).mount();
};
storiesCarousel();

const spotlightCarousel = () => {
  const spotlightCarouselObj = {
    type: "carousel",
    autoplay: 4000,
    hoverpause: true,
    perView: 3,
  };
  if (width <= 650) {
    spotlightCarouselObj.perView = 2;
  }
  if (width <= 400) {
    spotlightCarouselObj.perView = 1;
  }
  new Glide(".glide2", spotlightCarouselObj).mount();
};
spotlightCarousel();

const newsCarousel = () => {
  const newsCarouselObj = {
    type: "carousel",
    autoplay: 2000,
    perView: 4,
  };
  if (width <= 650) {
    newsCarouselObj.perView = 2;
  }
  new Glide(".glide3", newsCarouselObj).mount();
};
newsCarousel();

// EVENT LISTENERS
// hamburger menu
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

// for carousels responsiveness
window.addEventListener("resize", () => {
  if (width <= 650) {
    location.reload();
  }
});
