let toggleBtn = document.querySelector("#toggleBtn");
let mobileMenu = document.querySelector("#mobile-menu");
let outlineMenu = document.querySelector("#outlineMenu");
let outlineX = document.querySelector("#outlineX");

let collapseFilter = document.querySelector("#filter-collapse");
let filterBtn = document.querySelector("#filter-btn");
let closeBtn = document.querySelector("#close-btn");

toggleBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  outlineMenu.classList.toggle("hidden");
  outlineX.classList.toggle("hidden");
  // mobileMenu.classList.toggle("block");
  // console.log("f");
});

filterBtn.addEventListener("click", () => {
  collapseFilter.classList.toggle("hidden");
  collapseFilter.classList.toggle("flex");
});

closeBtn.addEventListener("click", () => {
  collapseFilter.classList.toggle("hidden");
});
