"use strict";

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
