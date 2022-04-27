// ----------------------------------------------------------
// - Make navigation bar jumb wheen scroll to position 700  -
// ----------------------------------------------------------
const navbar = document.querySelector("#navigation");
window.addEventListener("scroll", () => {
  if (this.scrollY >= 700) {
    navbar.classList.add("navigation--scroll");
  }
  if (this.scrollY < 500) {
    navbar.classList.remove("navigation--scroll");
  }
});
