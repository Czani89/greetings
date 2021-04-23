let nameText = document.querySelector(".name");
let greetRad = document.querySelector(".rad");
let countRad = document.querySelector(".counter");
let button = document.querySelector(".greetMe");
let resetButton = document.querySelector(".btnReset");
let greetSpan = document.querySelector(".greet");

var counter = 0;
var peopleGreeted = {};
button.addEventListener("click", function () {
  let selectLanguage = document.querySelector("input[name='greeting']:checked")
    .value;

  if (selectLanguage) {
    if (selectLanguage === "english") {
      greetSpan.value = "Good morning, " + nameText.value;
      counter++;
    } else if (selectLanguage === "afrikaans") {
      greetSpan.value = "Goie more, " + nameText.value;
      counter++;
    } else if (selectLanguage === "xhosa") {
      greetSpan.value = "Molo, " + nameText.value;
      counter++;
    }
  }

  localStorage["store"] = counter;
  greetSpan.innerHTML = greetSpan.value;
  countRad.innerHTML = counter;
  nameText.value = " ";
});

resetButton.addEventListener("click", function () {
  localStorage.clear();
  localStorage.removeItem(counter);
  counter = 0;
  countRad.innerHTML = 0;
});
if (localStorage["store"]) {
  counter = Number(localStorage["store"]);
}
localStorage.clear();
