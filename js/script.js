let sectionLink = document.querySelectorAll(".section__link");
let arrow = document.querySelectorAll(".link__arrow");
let mobileMenu = document.querySelector(".mobile-menu");
let hamburger = document.querySelector(".hamburger");
let buttonDelete = document.querySelector(".button--delete");
let mobileMenuLink = document.querySelectorAll(".mobile-menu__link");

console.log(sectionLink);

sectionLink.forEach((item, index) => {
  if (index % 2 !== 0) {
    item.style.flexDirection = "row-reverse";
  }
});

arrow.forEach((item, index) => {
  if (index % 2 !== 0) {
    item.style.transform = "rotate(180deg)";
    item.style.marginRight = "75px";
  }
});

hamburger.addEventListener("click", () => {
  mobileMenu.classList.add("mobile-menu__active");
});

buttonDelete.addEventListener("click", () => {
  mobileMenu.classList.remove("mobile-menu__active");
});

mobileMenuLink.forEach((item) => {
  item.addEventListener("click", () => {
    mobileMenu.classList.remove("mobile-menu__active");
  });
});
