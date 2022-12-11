const fullImg = document.querySelector(".full-img");
const smallImg = document.querySelectorAll(".gallery img");
const modal = document.querySelector(".modal");

// console.log(smallImg);
smallImg.forEach(function (img) {
  img.addEventListener("click", function () {
    modal.classList.add("open");
    fullImg.classList.add("open");

    // Changing the images dynamically
    const oriiiginalQuality = img.getAttribute("alt");
    fullImg.src = `img/full/${oriiiginalQuality}.jpg`;
  });
});

modal.addEventListener("click", function (e) {
  if (e.target.classList.contains("modal")) {
    modal.classList.remove("open");
    fullImg.classList.remove("open");
  }
});