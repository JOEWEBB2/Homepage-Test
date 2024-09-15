const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});
