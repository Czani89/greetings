function greet(existingNames) {
    var greeting = "";
    var newNames = "";
    var nameMap = existingNames || {};
    let regex = /[a-zA-Z]/

    function setName(parsedName) {
        if (regex.test(parsedName) === true) {
            var lowerParsedName = parsedName.toLowerCase();
            if (nameMap[lowerParsedName] === undefined) {
                nameMap[lowerParsedName] = 0;
                newNames = lowerParsedName;
            }
            else {
                nameMap[lowerParsedName]++
            }
        }
    }

    function getName() {
        return newNames;
    }

    function languages(select, names) {
        var lowerName = names.toLowerCase();
        var capitalName = lowerName[0].toUpperCase() + lowerName.slice(1, lowerName.length);

        if (select === "english") {
            return greeting = `Good morning, ${capitalName}!`
        } else if (select === "afrikaans") {
            return greeting = `Goeie more, ${capitalName}!`
        } else if (select === "xhosa") {
            return greeting = `Molo, ${capitalName}!`
        }
    }

    function newMap() { return nameMap }

    function counter() {
        var names = Object.keys(nameMap)
        return names.length
    }

    return {
        languages,
        setName,
        getName,
        counter,
        newMap
    }
}