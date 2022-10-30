// Global Variables
const inquirer = require("inquirer");
const fs = require("fs");
const newEmployees = [];
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");

//Function to create questions about the manager
function createMananger() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is the Manager's Name?",
      },
      {
        type: "input",
        name: "managerId",
        message: "What is the Manager's ID?",
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is the Manager's Email?",
      },
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is the Manager's office number?",
      },
    ])
    .then((answers) => {
      const newManager = new Manager(
        answers.managerName,
        answers.managerId,
        answers.managerEmail,
        answers.managerOfficeNumber
      );
      newEmployees.push(newManager);
      generateEmployeeInfo();
    });
}

//Function used to create the Engineer employee
function createEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is the Engineers's Name?",
      },
      {
        type: "input",
        name: "engineerId",
        message: "What is the Engineer's ID?",
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is the Engineer's Email?",
      },
      {
        type: "input",
        name: "engineerGitHub",
        message: "What is the Engineer's GitHub name?",
      },
    ])
    .then((answers) => {
      const newEngineer = new Engineer(
        answers.engineerName,
        answers.engineerId,
        answers.engineerEmail,
        answers.engineerGitHub
      );
      newEmployees.push(newEngineer);
      generateEmployeeInfo();
    });
}

// Questions to create the Intern employee
function createIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "What is the Intern's Name?",
      },
      {
        type: "input",
        name: "internId",
        message: "What is the Intern's ID?",
      },
      {
        type: "input",
        name: "internEmail",
        message: "What is the Intern's Email?",
      },
      {
        type: "input",
        name: "internSchool",
        message: "What is the school does the  Intern attend?",
      },
    ])
    .then((answers) => {
      const newIntern = new Intern(
        answers.internName,
        answers.internId,
        answers.internEmail,
        answers.internSchool
      );
      newEmployees.push(newIntern);
      generateEmployeeInfo();
    });
}

// Questions to create am Employee
function createEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "employeeName",
        message: "What is the Employee's Name?",
      },
      {
        type: "input",
        name: "employeeId",
        message: "What is the Employee's ID?",
      },
      {
        type: "input",
        name: "employeeEmail",
        message: "What is the Employee's Email?",
      },
    ])
    .then((answers) => {
      const newEmployee = new Employee(
        answers.employeeName,
        answers.employeeId,
        answers.employeeEmail
      );
      newEmployees.push(newEmployee);
      generateEmployeeInfo();
    });
}

// Function used to start the process of creating a employee card
// based on the choices that are gave.
function generateEmployeeInfo() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "employeeChoices",
        message: "Which Employee would you like to create",
        choices: ["Employee", "Manager", "Engineer", "Intern", "None"],
      },
    ])
    .then((answers) => {
      if (answers.employeeChoices === "Employee") {
        createEmployee();
      } else if (answers.employeeChoices === "Manager") {
        createMananger();
      } else if (answers.employeeChoices === "Engineer") {
        createEngineer();
      } else if (answers.employeeChoices === "Intern") {
        createIntern();
      } else {
        generateHtml();
      }
    });
}

// function used to take the answers to the employee questions and create a html document.
function generateHtml() {
  function generateLastProperty(employee) {
    if (employee.getRole() == "Manager") {
      return `<li id="inputhree" class="list-group-item">Office Number: ${employee.officenumber}</li>`;
    } else if (employee.getRole() == "Engineer") {
      return `<li id="inputthree" class="list-group-item">GitHub: ${employee.gitHub}</li>`;
    } else if (employee.getRole() == "Intern") {
      return `<li id="inputthree" class="list-group-item">School: ${employee.school}</li>`;
    } else {
      return "";
    }
  }

  function generateName(employee) {
    if (employee.getRole() == "Manager") {
      return `<h3>${employee.getName()}</h3>
              <h4>☕Manager</h4>`;
    } else if (employee.getRole() == "Engineer") {
      return `<h3>${employee.getName()}</h3>
      <h4> 🤓Engineer</h4>`;
    } else if (employee.getRole() == "Intern") {
      return `<h3>${employee.getName()}</h3>
      <h4>🎓Intern</h4>`;
    } else {
      return "";
    }
  }
  const htmlCard = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
      <link rel="stylesheet" type="text/css" href="./style.css" />
      <title>Team Member Generator</title>
    </head>
    <body>
      <header id="header">
        <h1 class="blocktext">My Team</h1>
      </header>
      <div id="employeeContainer" class="row row-cols-1 row-cols-md-5">
      ${newEmployees
        .map((employee) => {
          return `<div class="card" style="width: 18rem;">
          <div id="name" class="card-header">
           ${generateName(employee)}
          </div>
          <ul class="list-group list-group-flush">
            <li id="inputone" class="list-group-item">ID: ${employee.getId()}</li>
            <li class="list-group-item">Email: ${employee.getEmail()}</li>
            ${generateLastProperty(employee)}
          </ul>
        </div>`;
        })
        .join("\n")}
    
      
    
      </div>
    </body>
  </html>
  `;
  fs.writeFile("./dist/index.html", htmlCard, () => {
    console.log("Html has been successfully created");
  });
}

generateEmployeeInfo();
