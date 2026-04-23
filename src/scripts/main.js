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

//Show nav menu in mobile
const buttonMenu = document.querySelector(".icon-menu");
const nav = document.querySelector("nav");

buttonMenu.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
});

//Change background and color from Mobile Menu
const linkMenuMobile = document.querySelectorAll("nav ul li");

const getLink = (selector, parent = document) => parent.querySelector(selector);

linkMenuMobile.forEach((item) => {
  item.addEventListener("mouseover", () => {
    getLink("a", item)?.classList.add("nav-active-text");
    item.classList.add("nav-active-bg");
  });

  item.addEventListener("mouseout", () => {
    getLink("a", item)?.classList.remove("nav-active-text");
    item.classList.remove("nav-active-bg");
  });

  item.addEventListener("click", () => {
    nav.classList.remove("nav-active");
  });
});
