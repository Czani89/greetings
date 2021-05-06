let nameText = document.querySelector(".name");
let greetRad = document.querySelector(".rad");
let countRad = document.querySelector(".counter");
let button = document.querySelector(".greetMe");
let resetButton = document.querySelector(".btnReset");
let greetSpan = document.querySelector(".greet");
let alertMessage = document.querySelector(".message")


var greetMe = greet();

button.addEventListener("click", function () {
  alertMessage.innerHTML = "";
  greetSpan.innerHTML = "";

  if (nameText.value && greetRad.checked) {
    var selectLanguage = document.querySelector("input[name='greeting']:checked").value;

    greetMe.setName(nameText.value);

    greetSpan.innerHTML = greetMe.languages(selectLanguage, greetMe.getName());
   
    // for (let i = 0; i < nameMap.length; i++) {
    //   if (nameMap[i] === lowerName && selectLanguage === "english") {
    //     nameMap.lowerName[0]++;
    //   }
    // }

    greetRad.checked = false;

  } else {
    if (nameText.value === "" && !greetRad.checked) {
      alertMessage.innerHTML = "Please enter your name and select language!";

    } else if (nameText.value === "") {
      alertMessage.innerHTML = "Please enter your name!";
      greetRad.checked = false;
    } else if (!greetRad.checked) {
      alertMessage.innerHTML = "Please select language!";

    }
  }


  localStorage.setItem("names", JSON.stringify(greetMe.newM()))

  if (localStorage["names"]) {
    nameMap = JSON.parse(localStorage.getItem("names"))
  }
  console.log(nameMap);
  function counter() {
    var names = Object.keys(greetMe.newM())
    return names.length
  }

  countRad.innerHTML = counter()

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


