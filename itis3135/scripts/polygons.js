// Function takes user input and returns a polygon corresponding to a number(1-10)
function getShape() {
    let num = document.getElementById('num').value;
    if (validateEntry(num) == 1) {
        alert("The Magic Horse says its a Henagon!");
    } else if (validateEntry(num) == 2) {
        alert("The Magic Horse says its a Digon!");
    } else if (validateEntry(num) == 3) {
        alert("The Magic Horse says its a Trigon!");
    } else if (validateEntry(num) == 4) {
        alert("The Magic Horse says its a Tetragon");
    } else if (validateEntry(num) == 5) {
        alert("The Magic Horse says its a Pentagon!");
    } else if (validateEntry(num) == 6) {
        alert("The Magic Hprse says its a Hexagon!");
    } else if (validateEntry(num) == 7) {
        alert("The Magic Horse says its a Heptagon!");
    } else if (validateEntry(num) == 8) {
        alert("The Magic Horse says its a Octagon!");
    } else if (validateEntry(num) == 9) {
        alert("The Magic Horse says its a Enneagon!");
    } else if (validateEntry(num) == 10) {
        alert("The Magic Horse says its a Decagon!");
    } else {
        alert(validateEntry(num));
    }
}

// Function to check that user input is valid
function validateEntry(validInput) {
    if (validInput >= 0 && validInput <= 10) {
        return validInput;
    } else if(validInput >= -10 && validInput <= 0) {
        return validInput * -1;
    }
     else {
        return "Error! User input is invalid.";
    }
}