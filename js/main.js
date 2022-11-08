const button = document.getElementById("btn");
const color = document.querySelector(".color");
const colors = ["#FF5733", "#F9FF33", "#3371FF", "red", "green", "black"];

button.addEventListener("click", () => {
  let hexcolor = colors[getRandomNumber()];
  document.body.style.backgroundColor = hexcolor;
  color.textContent = hexcolor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
