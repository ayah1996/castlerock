let toggleBtn = document.querySelector("#navbar-toggle");
let collapse = document.querySelector("#navbar-collapse");

let collapseFilter = document.querySelector("#filter-collapse");
let filterBtn = document.querySelector("#filter-btn");
let closeBtn = document.querySelector("#close-btn");

toggleBtn.addEventListener("click", () => {
  collapse.classList.toggle("hidden");
  collapse.classList.toggle("flex");
});

filterBtn.addEventListener("click", () => {
  collapseFilter.classList.toggle("hidden");
  collapseFilter.classList.toggle("flex");
});

closeBtn.addEventListener("click", () => {
  collapseFilter.classList.toggle("hidden");
});
