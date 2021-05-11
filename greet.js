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
  let regex = /[a-zA-Z]{15}/

  if (nameText.value && selectLanguageRad && regex.test(nameText.value) === true) {
    var selectLanguage = selectLanguageRad.value

    greetMe.setName(nameText.value);

    greetSpan.innerHTML = greetMe.languages(selectLanguage, nameText.value);

    selectLanguageRad.checked = false;

  } else {
    if (nameText.value === "" && !selectLanguageRad) {
      alertMessage.innerHTML = "Please enter your name and select language!";
      setTimeout(function () { alertMessage.innerHTML = ""; }, 3000);
    } else if (!nameText.value) {
      alertMessage.innerHTML = "Please enter your name!";
      selectLanguageRad.checked = false;
      setTimeout(function () { alertMessage.innerHTML = ""; }, 3000);
    } else if (!selectLanguageRad) {
      alertMessage.innerHTML = "Please select language!";
      setTimeout(function () { alertMessage.innerHTML = ""; }, 3000);
    }
    else if (regex.test(nameText.value) === false) {
      alertMessage.innerHTML = "Please enter valid name!";
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





