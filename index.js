const inquirer = require('inquirer')
const newEmployees = []
const Manager = require('./lib/Manager')

function createMananger(){
    inquirer.prompt ([
        {
            type: 'input',
            name: 'managerName',
            message: "What is the Manager's Name "
        },
        {
            type: 'input',
            name: 'managerId',
            message: "What is the Manager's ID "
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "What is the Manager's Email "
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: "What is the Manager's office number "
        },
        
    ]).then((answers)=>{
        const newManager = new Manager(answer.managerName, answers.managerId,
            answers.managerEmail, answers.managerOfficeNumber)
            newEmployees.push(newManager)
    })
}