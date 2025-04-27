let button = document.querySelectorAll(".button");
let body = document.querySelector("body");
let resetbutton = document.querySelector('#rst');

button.forEach((btn) => {
  btn.addEventListener("click", () => {
    body.style.backgroundColor = btn.id;
  });
});
resetbutton.addEventListener('click', () => {
    body.style.backgroundColor = "antiquewhite";
});
