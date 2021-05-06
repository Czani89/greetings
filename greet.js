let nameText = document.querySelector(".name");
let greetRad = document.querySelector(".rad");
let countRad = document.querySelector(".counter");
let button = document.querySelector(".greetMe");
let resetButton = document.querySelector(".btnReset");
let greetSpan = document.querySelector(".greet");
let alertMessage = document.querySelector(".message")


var greetMe = greet();
var nameMap2 = 0
button.addEventListener("click", function () {
  alertMessage.innerHTML = "";
  greetSpan.innerHTML = "";

  var selectLanguageRad = document.querySelector("input[name='greeting']:checked")

  if (nameText.value && selectLanguageRad.value) {
    var selectLanguage = document.querySelector("input[name='greeting']:checked").value;

    greetMe.setName(nameText.value);

    greetSpan.innerHTML = greetMe.languages(selectLanguage, nameText.value);

    greetRad.checked = false;

  } else {
    if (nameText.value === "" && !greetRad.checked) {
      alertMessage.innerHTML = "Please enter your name and select language!";
      setTimeout(function () { alertMessage.innerHTML = ""; }, 3000);
    } else if (nameText.value === "") {
      alertMessage.innerHTML = "Please enter your name!";
      greetRad.checked = false;
      setTimeout(function () { alertMessage.innerHTML = ""; }, 3000);
    } else if (!greetRad.checked) {
      alertMessage.innerHTML = "Please select language!";
      setTimeout(function () { alertMessage.innerHTML = ""; }, 3000);
    }
  }

  localStorage.setItem("names", JSON.stringify(greetMe.newMap()))


  countRad.innerHTML = greetMe.counter()

  nameText.value = "";
});

if (localStorage["names"]) {
  nameMap2 = JSON.parse(localStorage.getItem("names"))

  countRad.innerHTML = Object.keys(nameMap2).length
}

resetButton.addEventListener("click", function () {
  localStorage.clear();
  location.reload();

});





