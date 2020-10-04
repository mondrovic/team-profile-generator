const inquirer = require("inquirer");
const Employee = require("./Employee");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const generatePage = require("../src/page-template");
const writeFile = require("../src/write-site");

// creates class object for main logic
class Generate {
  constructor() {
    this.employee;
    this.employeeData = [];
  }

  initialize() {
    // gets name and email for Employee constructor.
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "Please type in the employee's name",
        },
        {
          type: "input",
          name: "email",
          message: "Please input the employee's email address",
        },
        {
          type: "input",
          name: "id",
          message: "Input the employee's unique ID",
        },
      ])
      // creates employee object then runs function for getting additional info
      .then((data) => {
        this.employee = new Employee(data.name, data.id, data.email);
        this.roleData();
      });
  }

  // runs after initial employee object is setup
  roleData() {
    // picks role
    inquirer
      .prompt({
        type: "list",
        name: "role",
        message: "Choose a role for the employee",
        choices: ["Manager", "Engineer", "Intern"],
      })
      // takes role into a promise to check which was selected then gives prompts based on which was selected
      .then((roleCheck) => {
        // ++++MANAGER CHECK++++ gets phone number and creates manager object
        if (roleCheck.role === "Manager") {
          inquirer
            .prompt([
              {
                type: "input",
                name: "phone",
                message:
                  "Input a phone number with no punctuation. e.g. 1234567890",
              },
              {
                type: "confirm",
                name: "confirmAddEmployee",
                message: "Do you want to add another employee?",
                default: false,
              },
            ])
            .then((newManager) => {
              // creates new manager object then pushes to array
              const manager = new Manager(
                this.employee.name,
                this.employee.id,
                this.employee.email,
                (this.employee.phone = newManager.phone)
              );
              this.employeeData.push(manager);

              // asks if user wants to run again
              this.promptAgain(newManager.confirmAddEmployee);
            });
          // ++++ ENGINEER CHECK++++ gets github information
        } else if (roleCheck.role === "Engineer") {
          inquirer
            .prompt({
              type: "input",
              name: "github",
              message: "Please input the Engineer's GitHub username",
            })
            .then((newEngineer) => {
              // creates new engineer object then pushes it to array
              const engineer = new Engineer(
                this.employee.name,
                this.employee.id,
                this.employee.email,
                (this.employee.github = newEngineer.github)
              );
              this.employeeData.push(engineer);
              // asks if user wants to run again
              this.promptAgain(newEngineer.confirmAddEmployee);
            });
          // ++++ INTERN CHECK++++ gets school information
        } else {
          inquirer
            .prompt([
              {
                type: "input",
                name: "school",
                message: "Please input the name of the intern's school",
              },
              {
                type: "confirm",
                name: "confirmAddEmployee",
                message: "Do you want to add another employee?",
                default: false,
              },
            ])
            .then((newIntern) => {
              // creates new intern object and pushes to array
              const intern = new Intern(
                this.employee.name,
                this.employee.id,
                this.employee.email,
                (this.employee.school = newIntern.school)
              );
              this.employeeData.push(intern);
              // asks if user wants to run again
              this.promptAgain(newIntern.confirmAddEmployee);
            });
        }
        // END OF ROLE CHECK
      });
  }

  promptAgain(employeeObj) {
    if (employeeObj) {
      console.log(this.employeeData);
      return this.initialize(this.employeeData);
    } else {
      console.log(this.employeeData);
      return this.employeeData;
    }
  }
}

module.exports = Generate;
