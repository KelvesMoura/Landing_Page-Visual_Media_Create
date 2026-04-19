// Added a blur effect in the header
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

//Added the year in the footer
document.querySelector("#year").textContent = new Date().getFullYear();