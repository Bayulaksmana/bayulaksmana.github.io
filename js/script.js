// Toogle untuk mengaktifkan list menu (Garis 3 buka menu)

const navbarNav = document.querySelector(".navbar-nav");

// Toggle hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// Toggle mengaktifkan search
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// togle mengaktifkan user
const registerCard = document.querySelector(".register-card");

document.querySelector("#user-button").onclick = (e) => {
  registerCard.classList.toggle("active");
  e.preventDefault();
};

// klik diluar sidebar untuk menghilangkan hamburger menu

const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const rg = document.querySelector("#user-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!rg.contains(e.target) && !registerCard.contains(e.target)) {
    registerCard.classList.remove("active");
  }
});

//klik untuk menampilkan deskripsi
const prestasiDeskripsi = document.querySelector("#deskripsi-prestasi");
const prestasiButton = document.querySelector(".deskripsi-button");

prestasiButton.onclick = (e) => {
  prestasiDeskripsi.style.display = "flex";
  e.preventDefault();
};

// Klik tombol close modal box
document.querySelector(".modal .close-icon").onclick = (e) => {
  prestasiDeskripsi.style.display = "none";
};
