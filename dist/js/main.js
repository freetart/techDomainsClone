"use strict";

// carousels
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
new Glide(".glide2", spotlightCarousel).mount();

const newsCarousel = {
  type: "carousel",
  autoplay: 2000,
  perView: 4,
};
new Glide(".glide3", newsCarousel).mount();
