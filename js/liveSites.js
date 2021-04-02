// DOM ELEMENTS
const allBtn = document.getElementById("all");
const brandsBtn = document.getElementById("brands");
const startupsBtn = document.getElementById("startups");
const conferenceBtn = document.getElementById("conference");

const liveSitesCard = document.querySelectorAll(".live-sites-card");

const showAllCards = () => {
  brandsBtn.classList.remove("active");
  startupsBtn.classList.remove("active");
  conferenceBtn.classList.remove("active");

  allBtn.classList.add("active");

  liveSitesCard.forEach((card) => {
    if (card.classList.contains("live-sites-card")) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
};

const filterBrands = () => {
  allBtn.classList.remove("active");
  startupsBtn.classList.remove("active");
  conferenceBtn.classList.remove("active");

  brandsBtn.classList.add("active");

  liveSitesCard.forEach((card) => {
    if (card.classList.contains("brands")) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
};

const filterStartups = () => {
  allBtn.classList.remove("active");
  brandsBtn.classList.remove("active");
  conferenceBtn.classList.remove("active");

  startupsBtn.classList.add("active");

  liveSitesCard.forEach((card) => {
    if (card.classList.contains("startups")) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
};

const filterConference = () => {
  allBtn.classList.remove("active");
  brandsBtn.classList.remove("active");
  startupsBtn.classList.remove("active");

  conferenceBtn.classList.add("active");

  liveSitesCard.forEach((card) => {
    if (card.classList.contains("conference")) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
};

// EVENT LISTENERS
allBtn.addEventListener("click", showAllCards);
brandsBtn.addEventListener("click", filterBrands);
startupsBtn.addEventListener("click", filterStartups);
conferenceBtn.addEventListener("click", filterConference);
