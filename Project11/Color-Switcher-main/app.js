const body = document.body;
let color = document.querySelector(".color");
let switchbtn = document.querySelector(".switch");

switchbtn.addEventListener("click", function () {
  let color1 = getNumberRandom();
  let color2 = getNumberRandom();
  let color3 = getNumberRandom();

  let colorstring = `rgb(${color1},${color2},${color3})`;
  //   console.log(colorstring);

  body.style.backgroundColor = colorstring;
  color.innerHTML = colorstring;
});

function getNumberRandom() {
  return Math.floor(Math.random() * 256);
}
