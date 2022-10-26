const inquirer = require("inquirer");
const newEmployees = [];
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");

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
        answer.managerName,
        answers.managerId,
        answers.managerEmail,
        answers.managerOfficeNumber
      );
      newEmployees.push(newManager);
    });
}

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
        answer.engineerName,
        answers.engineerId,
        answers.engineerEmail,
        answers.engineerGitHub
      );
      newEmployees.push(newEngineer);
    });
}

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
        answer.internName,
        answers.internId,
        answers.internEmail,
        answers.internSchool
      );
      newEmployees.push(newIntern);
    });
}

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
        answer.employeeName,
        answers.employeeId,
        answers.employeeEmail
      );
      newEmployees.push(newEmployee);
    });
}

function generateEmployeeInfo() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "employeeChoices",
        message: "Which Employee would you like to create",
        choices: ["Employee", "Manager", "Engineer", "Intern"],
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
      }
    });
}

generateEmployeeInfo();
