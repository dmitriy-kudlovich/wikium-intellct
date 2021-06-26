let row = document.querySelectorAll(".section__row");
let sectionLink = document.querySelectorAll(".section__link");
let arrow = document.querySelectorAll(".link__arrow");

console.log(sectionLink);

row.forEach((item, index) => {
  if (index % 2 !== 0) {
    item.style.flexDirection = "row-reverse";
  }
});

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
