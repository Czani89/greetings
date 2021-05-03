let nameText = document.querySelector(".name");
let greetRad = document.querySelector(".rad");
let countRad = document.querySelector(".counter");
let button = document.querySelector(".greetMe");
let resetButton = document.querySelector(".btnReset");
let greetSpan = document.querySelector(".greet");


// var counter = 0;
var parsedNames = {};

//retrive names from localstorage


var greetMe = greet();

button.addEventListener("click", function () {
  var lowerName = nameText.value


  var langDiv = document.getElementById("lang");

  var radGroup = langDiv.getElementsByTagName("input")

  console.log(radGroup);

  console.log(nameText.value);
  console.log(typeof (nameText.value));

  if (nameText.value === "") {
    alert("Please enter your name")
  }
  else {
    greetMe.setName(lowerName.toLowerCase());
  }

  var flagChecked = false;

  for (var i = 0; i < radGroup.length; i++) {
    if (radGroup[i].checked) {
      let selectLanguage = document.querySelector("input[name='greeting']:checked").value;
      greetMe.languages(selectLanguage, greetMe.getName());
      flagChecked = true;
    }
  }

  if (!flagChecked) {
    alert("Please select a language")
  }

  console.log(greetMe.newM());

  localStorage.setItem("names", JSON.stringify(greetMe.newM()))

  if (localStorage["names"]) {
    parsedNames = JSON.parse(localStorage.getItem("names"))
  }

  console.log(parsedNames);

  countRad.innerHTML = greetMe.counter()

  greetSpan.innerHTML = greetMe.greetPerson();

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


