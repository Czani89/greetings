let nameText = document.querySelector(".name");
let greetRad = document.querySelector(".rad");
let countRad = document.querySelector(".counter");
let button = document.querySelector(".greetMe");
let resetButton = document.querySelector(".btnReset");
let greetSpan = document.querySelector(".greet");
let alertMessage = document.querySelector(".message")

// var getNames = localStorage.getItem("names")

// var counter = 0

//retrive names from localstorage


var greetMe = greet();

button.addEventListener("click", function () {
  var lowerName = nameText.value


  if (lowerName) {
    greetMe.setName(lowerName.toLowerCase());
    var selectLanguage = document.querySelector("input[name='greeting']:checked").value;
    greetMe.languages(selectLanguage, greetMe.getName());

  } else {
    if (nameText.value === "" && !greetRad.checked) {
      alertMessage.innerHTML = "Please enter your name and select language!"
    } else if (nameText.value === "") {
      alertMessage.innerHTML = "Please enter your name!"
    } else if (!greetRad.checked) {
      alertMessage.innerHTML = "Please select language!"
    }
  }


  localStorage.setItem("names", JSON.stringify(greetMe.newM()))

  if (localStorage["names"]) {
    nameMap = JSON.parse(localStorage.getItem("names"))
  }

  function counter() {
    var names = Object.keys(greetMe.newM())
    return names.length
  }

  countRad.innerHTML = counter()

  greetSpan.innerHTML = greetMe.languages(selectLanguage, lowerName);

  nameText.value = "";
});



// if (localStorage.getItem("names") === undefined) {
//   parsedNames = [];
// } else {
//   parsedNames = JSON.parse(setItem("names", parsedNames))
// }
resetButton.addEventListener("click", function () {
  localStorage.clear();
  location.reload();
  countRad.innerHTML = 0;
});


