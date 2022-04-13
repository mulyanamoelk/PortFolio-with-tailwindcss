//navbar

Window.onscroll = function () {
  const header = document.querySelector("header");
  const fixednav = header.offsetTop;
  if (Window.pageYOffset > fixednav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixd");
  }
};
//ini untuk bagian hamburder
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});
