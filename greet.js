let nameText = document.querySelector(".name");
let greetRad = document.querySelector(".rad");
let countRad = document.querySelector(".counter");
let button = document.querySelector(".btn");
let greetSpan = document.querySelector(".greet");

var counter = 0;
button.addEventListener("click", function () {
  let selectLanguage = greetRad.querySelector("input[name='greeting']:checked")
    .value;

  console.log(selectLanguage);
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
  } else {
    greetSpan.value = "";
  }

  greetSpan.innerHTML = greetSpan.value;

  countRad.innerHTML = counter;
});
