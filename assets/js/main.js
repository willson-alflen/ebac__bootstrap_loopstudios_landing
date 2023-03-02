let heroNav = document.querySelector("#hero-navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0 && window.scrollY < 720) {
    heroNav.classList.add("bgChangeScroll");
    heroNav.classList.remove("bgChangeScroll700");
  } else if (window.scrollY >= 720) {
    heroNav.classList.remove("bgChangeScroll");
    heroNav.classList.add("bgChangeScroll700");
  } else {
    heroNav.classList.remove("bgChangeScroll");
    heroNav.classList.remove("bgChangeScroll700");
  }
});
