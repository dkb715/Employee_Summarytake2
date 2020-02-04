//Defined Variables
const inquirer = require("inquirer");



inquirer
//User prompt in the terminal

function promptUser() {
    return inquirer.prompt([{
        //specifies type of question
        type: "input",
        message: "Enter your GitHub username:",
        default: "dkb715",
        //object to call from on input to generate user specified github portfolio
        name: "username",
      }, 
      {
        type: "list",
        message: "What's your favorite color?",
        //object to call from when generating colors
        name: "favColor",
        choices: ['blue', 'pink', 'red', 'green']
      }]);
    
}
