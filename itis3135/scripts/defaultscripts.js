function welcomeMessage() {
    let name = document.querySelector("#name");
    let feeling = document.querySelector("#feeling");
    let greetings = document.querySelector("#greetings");
    greetings.innerHTML = "The Hernandez Syndicate welcomes you, " + " " + name.value + "! " + "We're glad you are doing " + " " + feeling.value + "!";
}

function bounty() {
    let bountyName = document.querySelector("#bountyName");
    let bountyPrice = document.querySelector("#bountyPrice");
    let bountyMessage = document.querySelector("#bountyMessage");
    bountyMessage.innerHTML = "A bounty has been set on " + " " + bountyName.value + ", with a price of " + "$" + bountyPrice.value;
}

function clearDebt() {
    document.getElementById('debt').style.display = 'none';
    let debtMessage = document.querySelector("#debtMessage");
    debtMessage.innerHTML = "Your debt has been cleared";
}

function tax() {
    let productPrice = document.querySelector("#productPrice");
    let ncTax = (+productPrice.value) * .0475;
    let total = (+productPrice.value) + ncTax
    document.getElementById("finalProductcost").innerHTML = "Total price of product: " + total.toFixed(2);
}

function multiply() {
    let num1 = document.querySelector("#num1");
    let num2 = document.querySelector("#num2");
    let numTotal = document.querySelector("#numTotal");
    numTotal.innerHTML = "Total: " + (num1.value * num2.value);
}

function support() {
    document.getElementById('debt').style.display = 'none';
    let waitTime = Math.round(Math.random() * 100);
    let customerSupport = document.querySelector("#customerSupport");
    customerSupport.innerHTML = "Connecting with customer support..." + " Approximate wait time: " + waitTime + " Minutes";
}