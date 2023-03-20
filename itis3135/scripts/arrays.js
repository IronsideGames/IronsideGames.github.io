// Hernandez Syndicate information
const hsEmployees = ["Michael Hernandez", "Christopher Overstreet", "Luis Martinez", "Cole Overstreet", "John Michael Gulledge", "Gabriel Clark", "Fernando Gonzalez"];
const employeeSalaries = [24000, 18000, 90000, 13000, 15000, 75000, 102000];

// displayResults function
function displayResults() {
    let average = 0;
    let maxSalary = Math.max(...employeeSalaries);
    for (let i = 0; i < employeeSalaries.length; i++) {
        average += employeeSalaries[i];
    }
    average = parseInt(average / employeeSalaries.length);

    document.getElementById("results").innerHTML = `<h2>Results:</h2><p>Average Salary: $${average}</p><p>Highest Salary: $${maxSalary}</p>`;
}

// displaySalary function
function displaySalary() {
    const salaryTable = document.createElement("table");
    salaryTable.innerHTML +=
        `<tr>
        <th>Name</th>
        <th>Salary</th>
    </tr>`
    for (let i = 0; i < employeeSalaries.length; i++) {
        salaryTable.innerHTML +=
            `<tr>
            <td>${hsEmployees[i]}</td>
            <td>${employeeSalaries[i]}</td>
        </tr>`
    }

    document.getElementById("results").innerHTML = ``;
    document.getElementById("results").insertBefore(salaryTable, null);
}

// addSalary function
function addSalary() {
    var newEmployeeName = document.getElementById("newEmployeeName").value;
    document.getElementById("newEmployeeName").value = "";
    document.getElementById("newEmployeeName").focus();
    var newEmployeeSalary = document.getElementById("newEmployeeSalary").value;
    document.getElementById("newEmployeeSalary").value = "";

    if (newEmployeeSalary != NaN && newEmployeeSalary > 0 && newEmployeeName != "") {
        hsEmployees.push(newEmployeeName);
        employeeSalaries.push(parseFloat(newEmployeeSalary));
    }
    else {
        window.alert("Error! Invalid user input.")
    }
}