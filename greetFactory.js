function greet(existingNames) {
    var greeting = "";
    var newNames = "";
    var nameMap = existingNames || {};
    // var checks = [];

    function setName(parsedName) {
        if (nameMap[parsedName] === undefined) {
            nameMap[parsedName] = 0;
            newNames = parsedName;
        } else {
            nameMap[parsedName]++
        }

    }

    function getName() {
        return newNames;
    }

    function languages(select, names) {
        var lowerName = names.toLowerCase();
        var capitalName = lowerName[0].toUpperCase() + lowerName.slice(1, lowerName.length);

        if (select === "english") {
            // nameMap.existingNames[0]++
            return greeting = `Good morning, ${capitalName}!`

        } else if (select === "afrikaans") {

            return greeting = `Goeie more, ${capitalName}!`

        } else if (select === "xhosa") {

            return greeting = `Molo, ${capitalName}!`

        }
    }

    // function counter() {
    //     var names = Object.keys(nameMap)
    //     return names.length
    // }
    // console.log();
    function greetPerson() {
        return greeting
    }

    function newMap() { return nameMap }


    // function checker() {
    //     for (let i = 0; i < checks.length; i++) {
    //         let trimmedName = checks[i].trim();
    //         if (trimmedName.toLowerCase() === greetMe.getName().toLowerCase()) {
    //             counter++;
    //         }

    //     }
    //     if (counter = 0) {
    //         checks.push(greetMe.getName());
    //     }
    // }



    // function namesIn() {
    //     var nameArray = Object.keys(name)
    // }
    // function namesOut() {
    //     return nameArray.length
    // }

    function setLocal() {
        localStorage.setItem("names", JSON.stringify(nameMap))
    }

    function local() {
        if (localStorage["names"]) {
            nameMap = JSON.parse(localStorage.getItem("names"))
        }
    }

    function counter() {
        var names = Object.keys(nameMap)
        return names.length
    }


    return {
        languages,
        setName,
        getName,
        greetPerson,
        counter,
        local,
        setLocal,
        newMap
        // checker,
        // checked
        // namesIn,
        // namesOut
    }

}