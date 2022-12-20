const slides = document.querySelector(".slider").children;
const indicatorImgs = document.querySelector(".indicator").children;

for (let i = 0; i < indicatorImgs.length; i++) {
  indicatorImgs[i].addEventListener("click", function () {
    for (let j = 0; j < indicatorImgs.length; j++) {
      indicatorImgs[j].classList.remove("active");
    }

    indicatorImgs[i].classList.add("active");

    const id = indicatorImgs[i].getAttribute("data-id");
    for (let k = 0; k < slides.length; k++) {
      slides[k].classList.remove("active");
    }

    slides[id].classList.add("active");
  });
}
