// Added a blur effect in the header

const qs = (selector) => document.querySelector(selector);

const selectors = {
  header: qs("header"),
  benefits: qs(".benefits"),
  services: qs(".services"),
  portfolio: qs(".portfolio"),
  testimonials: qs(".testimonials"),
  faq: qs(".faq"),
  contact: qs(".contact"),
};

const { header, benefits, services, portfolio, testimonials, faq, contact } =
  selectors;

const listOpacity = [benefits, services, portfolio, testimonials, faq, contact];

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

  requestAnimationFrame(() => {
    listOpacity.forEach((section) => {
      let rect = section.getBoundingClientRect();
      const widthHeight = window.innerHeight;

      const start = widthHeight;
      const end = widthHeight / 2;

      let progress = (start - rect.top) / (start - end);

      progress = Math.max(0, Math.min(1, progress));
      section.style.setProperty("--progress", progress);
    });
  });
});

window.addEventListener("scroll", () => console.log("Scroll detectado!"));

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
