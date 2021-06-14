// Starter file provided by Instructor (03/09/2021) AC

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const employees = [];

//prompts user for next employee type
menu = () => {
    inquirer.prompt(
        {
            type: 'list',
            message: 'Next Employee?',
            choices: ['Engineer', 'Intern', 'I do not have any more employees'],
            name: 'next'
        })
        .then((response) => {
            switch (response.next) {
                case 'Engineer': addEngineer();
                    break;

                case 'Intern': addIntern();
                    break;
                //if engineer or intern not selected, sends all input data to render function to generate page HTML
                default: {
                    const htmlData = render(employees);
                    renderSite(htmlData);
                }
            }
        });
};

const renderSite = (htmlData) => {
    const outputPath = './output'
    //checks if output directory exists. if (err) create directory
    fs.access(outputPath, fs.constants.F_OK, (err) => {
        if (err) {
            fs.mkdirSync(outputPath, (err) => {
                if (err) throw err;
            });
            fs.writeFile(`${outputPath}/team.html`, htmlData, (err) => {
                if (err) throw err;
            });
        } else {
            fs.writeFile(`${outputPath}/team.html`, htmlData, (err) => {
                if (err) throw err;
            });
        }
    });
}

//builds engineer and adds to employees []
const addEngineer = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter engineer name:',
            name: "name",
        },
        {
            type: "input",
            message: 'Enter engineer id:',
            name: 'id',
        },
        {
            type: "input",
            message: 'Enter engineer email:',
            name: 'email',
        },
        {
            type: "input",
            message: 'Enter engineer github username:',
            name: 'github',
        }

    ])
        //saves engineer info then sends user to menu to select next employee
        .then((response) => {
            const newEngineer = new Engineer(response.name, response.id, response.email, response.github);
            employees.push(newEngineer);
            menu();
        });

}

//builds intern and adds to employees []
const addIntern = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter intern name:',
            name: "name",
        },
        {
            type: "input",
            message: 'Enter intern id:',
            name: 'id',
        },
        {
            type: "input",
            message: 'Enter intern email:',
            name: 'email',
        },
        {
            type: "input",
            message: 'Enter intern school:',
            name: 'school',
        }

    ])
        //saves intern info then sends user to menu to select next employee
        .then((response) => {
            const newIntern = new Intern(response.name, response.id, response.email, response.school);
            employees.push(newIntern);
            menu();
        });

}


//builds mandatory manager and adds to employees []
init = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter manager name:',
            name: "name",
        },
        {
            type: "input",
            message: 'Enter manager id:',
            name: 'id',
        },
        {
            type: "input",
            message: 'Enter manager email:',
            name: 'email',
        },
        {
            type: "input",
            message: 'Enter manager Office Number:',
            name: 'office',
        }

    ])
        //saves manager info and sends user to menu to select next employee
        .then((response) => {
            const newManager = new Manager(response.name, response.id, response.email, response.office);
            employees.push(newManager);
            menu();
        });

}
init();