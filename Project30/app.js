const progress = document.querySelector(".progress-done");

setTimeout(function () {
  progress.style.width = progress.getAttribute("data-done") + "%";
  progress.style.opacity = 1;
}, 500);
