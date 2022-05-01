// Get Libraries
const inquirer = require("inquirer");
const fs = require("fs");

// Get classes required.
const Employee = require("./Employee");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

// The Generator class is responsible for the running of the program

class Generator {
  // Save a reference for `this` in `this` as `this` will change inside of inquirer
  constructor() {
    this.runNumber = 0;
    this.employees = [];
    this.employee = {};
    this.HTML = '';
    // Create arrays of questions for user input
    this.managerQuestions = [
      {
        type: 'input',
        message: 'Enter manager Name',
        name: 'managerName',
      },
      {
        type: 'input',
        message: 'Enter manager ID',
        name: 'managerID',
      },
      {
        type: 'input',
        message: 'Enter manager Email',
        name: 'managerEmail',
      },
      {
        type: 'input',
        message: 'Enter manager Office Number',
        name: 'managerOfficeNumber',
      }
    ];

    this.engineerQuestions = [
      {
        type: 'input',
        message: 'Enter engineer Name',
        name: 'name',
      },
      {
        type: 'input',
        message: 'Enter engineer ID',
        name: 'id',
      },
      {
        type: 'input',
        message: 'Enter engineer Email',
        name: 'email',
      },
      {
        type: 'input',
        message: 'Enter engineer GitHub Username',
        name: 'gitHub',
      }
    ];

    this.internQuestions = [
      {
        type: 'input',
        message: 'Enter intern Name',
        name: 'name',
      },
      {
        type: 'input',
        message: 'Enter intern ID',
        name: 'id',
      },
      {
        type: 'input',
        message: 'Enter intern Email',
        name: 'email',
      },
      {
        type: 'input',
        message: 'Enter intern school',
        name: 'school',
      }
    ];

  }

  startGenerator() {
    // Ask the inquirer questions
    inquirer
      .prompt(this.managerQuestions)
      .then((response) => {
        this.employee = new Manager(response.managerName, response.managerID, response.managerEmail, response.managerOfficeNumber);
        this.employees.push(this.employee);
      })
      .then(() => {
        this.addEmployeesQuestion();
      })
  }

  addEmployeesQuestion() {
    let addEmployeeQuestion = [
      {
        type: 'list',
        message: 'What would you like to do next?',
        name: 'employeeTypeChoice',
        choices: ['Add Engineer', 'Add Intern', 'Finish'],
      }
    ];
    inquirer
      .prompt(addEmployeeQuestion)
      .then(response => response.employeeTypeChoice)
      .then((choice) => {
        switch (choice) {
          case 'Add Engineer':
            this.addEngineer();
            break;
          case 'Add Intern':
            this.addIntern();
            break;
          case 'Finish':
            this.endProgram();
            break;
        }
      })
  }

  addEngineer() {
    inquirer
      .prompt(this.engineerQuestions)
      .then((response) => {
        this.employee = new Engineer(response.name, response.id, response.email, response.gitHub);
        this.employees.push(this.employee);
        console.log(this.employees)
      })
      .then(() => {
        this.addEmployeesQuestion();
      })
  }

  addIntern() {
    inquirer
      .prompt(this.internQuestions)
      .then((response) => {
        this.employee = new Intern(response.name, response.id, response.email, response.school);
        this.employees.push(this.employee);
        console.log(this.employees)
      })
      .then(() => {
        this.addEmployeesQuestion();
      })
  }

  endProgram() {
    this.writeTotalHTML();
    try {
      fs.writeFileSync('./dist/sample.html', this.HTML)
      // Quit program
      this.quit();
    } catch (err) {
      console.error(err)
    }

  }

  writeTotalHTML() {
    let allCardsHTML = '';
    // Write Cards
    for (let person of this.employees) {

      let newCardHTML = person.writeHTML();
      allCardsHTML = allCardsHTML + '\n' + newCardHTML;
    }
    this.HTML = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>
    
    <body>
        <header>
            <div class="d-flex justify-content-center bg-light">
                <nav class="navbar navbar-light bg-light">
                    <span class="navbar-brand mb-0 h1 text-center">
                        <h1 class="text-center">My Team</h1>
                    </span>
                </nav>
            </div>
        </header>
    
        <main class="d-flex justify-content-around flex-wrap">
        ${allCardsHTML}
        </main>
    
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
            crossorigin="anonymous"></script>
    </body>
    
    </html>`

  }



  // Logs goodbye and exits the node app
  quit() {
    console.log("HTML File written.\nGoodbye!\n");
    process.exit(0);
  }

  print() {
    console.log(this.employee)
  }
}

module.exports = Generator;