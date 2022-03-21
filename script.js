const boxedNumbers = document.querySelector('.boxedNumbers');
const startGame = document.querySelector('.startGame');

let arrayNumeriCpu = [];
let arrayNumeriUtente = [];

startGame.addEventListener("click", () => {
    arrayNumeriCpu = generateDefaultsNumbers(arrayNumeriCpu, boxedNumbers);
    setTimeout(() => {
        toggleElement(boxedNumbers, true, "hidden")
        setTimeout(() => {
            arrayNumeriUtente = askNumbers()
            checkNumbersInArray(arrayNumeriUtente, arrayNumeriCpu);
            toggleElement(boxedNumbers, false, "hidden")
        }, 1000)
    }, 4500);
})



//funzioni ------------------------------------------------------------------------------------

/**
 * Generate a random number between 1 and 100, and append it to the array
 * @param array - the array that will be populated with the random numbers.
 * @param boxedHtmlNumbers - The HTML element that will contain the numbers.
 * @returns The array of numbers.
 */
const generateDefaultsNumbers = (array, boxedHtmlNumbers) => {
    let numberCpu;
    do {
        numberCpu = (generateRandomNumber(1, 100));
        if (boxedHtmlNumbers) {
            appendHtml(boxedHtmlNumbers, numberCpu, "box")
        }
        array.push(numberCpu);
    } while (array.length < 5);
    return array;
}


/**
 * Generate a random number between a minimum and maximum value
 * @param min - the minimum number that can be generated.
 * @param max - The maximum number that can be generated.
 * @returns A random number between 1 and 100.
 */
const generateRandomNumber = (min, max) => {
    const range = (max - min) + 1;
    const numeroRandom = Math.floor(Math.random() * range + min);
    return numeroRandom;
}


/**
 * Create a new div element, set its innerText property to the given string, and add the given class to
 * it. 
 * If an element is provided, append the new div to that element
 * @param el - The element to append the HTML to.
 * @param str - The string to be appended to the DOM.
 * @param cls - The class name to be added to the div.
 */
const appendHtml = (el, str, cls) => {
    var div = document.createElement('div');
    div.innerText = str;
    div.className = cls;
    div.id = str;
    if (el) {
        el.appendChild(div);
    }
}

/**
 * Toggle element by adding or removing a class to it
 * @param element - The element to hide.
 * @param functionName - Boolean true = add , false = remove
 * @param className - The element to hide.
 */
function toggleElement(element, functionName, className) {
    if (element) {
        if (functionName) {
            element.classList.add(className);
        } else {
            element.classList.remove(className);
        }
    }
}


/**
 * Ask numbers to user and return an array with only numbers
 * @returns The array of numbers
 */
const askNumbers = () => {
    arrayNumbers = [];
    let questionedNumber;
    do {
        questionedNumber = parseInt(prompt('Inserisci un numero'));
        if (!isNaN(questionedNumber) || questionedNumber !== 0) {
            arrayNumbers.push(questionedNumber);
        }
    } while (arrayNumbers.length < 5)
    return arrayNumbers;
}

/**
 * Given two arrays, check if they have the same length and if each element in the first array is equal
 * to the corresponding element in the second array
 * @param userNumbers - The array of numbers that the user has entered.
 * @param defaultCpuNumbers - The default CPU numbers that are available on the system.
 */
const checkNumbersInArray = (userNumbers, defaultCpuNumbers) => {
    if (userNumbers.length > 0 &&
        defaultCpuNumbers.length > 0 &&
        userNumbers.length === defaultCpuNumbers.length
    ) {
        for (let i = 0; i < defaultCpuNumbers.length; i++) {
            const defaultNumber = defaultCpuNumbers[i]
            const userNumber = userNumbers[i];
            if (defaultNumber === userNumber) {
                findAndAddClass(defaultNumber, "green")
            } else {
                findAndAddClass(defaultNumber, "red")
            }
        }
    }
}


/**
 * Given a string, find the first instance of a substring and return the index of the substring
 * @param el - the element to be found
 * @param cls - "red"
 */
const findAndAddClass = (el, cls) => {
    const findElement = document.getElementById(el)
    if (findElement) {
        findElement.className = `${findElement.className} ${cls}`
    }
}