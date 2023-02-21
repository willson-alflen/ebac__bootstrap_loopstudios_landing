let heroNav = document.querySelector("#hero-navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    heroNav.classList.add("bgChangeScroll");
  } else {
    heroNav.classList.remove("bgChangeScroll");
  }
});
