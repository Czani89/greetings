let nameText = document.querySelector(".name");
let greetRad = document.querySelector(".rad");
let countRad = document.querySelector(".counter");
let button = document.querySelector(".greetMe");
let resetButton = document.querySelector(".btnReset");
let greetSpan = document.querySelector(".greet");
let alertMessage = document.querySelector(".message")


// var counter = 0

//retrive names from localstorage


var greetMe = greet();

button.addEventListener("click", function () {
  var lowerName = nameText.value


  var langDiv = document.getElementById("lang");

  var radGroup = langDiv.getElementsByTagName("input")

  console.log(nameText.value);
  console.log(typeof (nameText.value));

  if (nameText.value === "" && !greetRad.checked) {
    alertMessage.innerHTML = "Please enter your name and select language!"
  } else if (nameText.value === "") {
    alertMessage.innerHTML = "Please enter your name!"
  } else if (!greetRad.checked) {
    alertMessage.innerHTML = "Please select language!"
  }
  else {
    greetMe.setName(lowerName.toLowerCase());
    let selectLanguage = document.querySelector("input[name='greeting']:checked").value;
    greetMe.languages(selectLanguage, greetMe.getName());
  }

  localStorage.setItem("names", JSON.stringify(greetMe.newM()))

  countRad.innerHTML = greetMe.counter()

  greetSpan.innerHTML = greetMe.greetPerson();

  nameText.value = "";
});

if (localStorage["names"]) {
  nameMap = JSON.parse(localStorage.getItem("names"))
}

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


