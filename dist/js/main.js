"use strict";

// DOM ELEMENTS
const body = document.querySelector("body");
const menuIcon = document.querySelector(".hamburger-menu");
const menuNavbar = document.querySelector(".menu-navbar");
const overlay = document.querySelector(".overlay");

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
