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


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

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
            default: 'smartypants'
        },
        {
            type: "input",
            message: 'Enter engineer id:',
            name: 'id',
            default: '456'
        },
        {
            type: "input",
            message: 'Enter engineer email:',
            name: 'email',
            default: 'e@email.com'
        },
        {
            type: "input",
            message: 'Enter engineer github username:',
            name: 'github',
            default: 'myrepocollection'
        }

    ])
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
            default: 'davey'
        },
        {
            type: "input",
            message: 'Enter intern id:',
            name: 'id',
            default: '3'
        },
        {
            type: "input",
            message: 'Enter intern email:',
            name: 'email',
            default: 'i@email.com'
        },
        {
            type: "input",
            message: 'Enter intern school:',
            name: 'school',
            default: 'university'
        }

    ])
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
            default: 'mike',
        },
        {
            type: "input",
            message: 'Enter manager id:',
            name: 'id',
            default: '12'
        },
        {
            type: "input",
            message: 'Enter manager email:',
            name: 'email',
            default: 'a@email.com'
        },
        {
            type: "input",
            message: 'Enter manager Office Number:',
            name: 'office',
            default: '500'
        }

    ])
        .then((response) => {
            const newManager = new Manager(response.name, response.id, response.email, response.office);
            employees.push(newManager);
            menu();
        });

}
init();