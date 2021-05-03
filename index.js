const inquirer = require('inquirer');
const fs = require('fs');
const { generate } = require('rxjs');

const fileName;
let workerNumber = 1;
let internNumber = 1;

cosnt startBuild = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Welcome team manager! Please enter your first and last name.', 
                name: 'headName'
            },
            {
                type: 'input',
                message: 'Please enter your employee ID.',
                name: 'headId'
            },
            {
                type: 'input',
                message: 'Please enter your Email address.',
                name: 'headEmail'
            },
            {
                type: 'number',
                message: 'Please enter your office number',
                name: 'officeNumber'
            }            
        ]).then(data => {
            fileName = `${data.headName}.json`;
            fs.writeFile(fileName, data, err => {
                err ? console.log(new Error(err)) : console.log('Thank you!, your information has been logged!');
            })
            pathFinder();
        })
}

const pathFinder = () => {
    inquirer
        .prompt(
            {
                type: 'list',
                message: 'Thank you! Now, what would you like to do?',
                name: 'path',
                choices: [
                    'Add an engineer',
                    'Add an intern',
                    'Finish building your team.'
                ]
            }
        ).then(data => {
            if(data.path == 'Add an engineer') {
                addEngineer();
            } else if(data.path == 'Add an intern') {
                addIntern();
            } else {
                wrapUp();
            }
        })
}

const addEngineer = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: "Please enter your engineer's name.",
                name: `engineer${workerNumber}Name`
            },
            {
                type: 'input',
                message: "Please enter your engineer's ID.",
                name: `engineer${workerNumber}Id`
            },
            {
                type: 'input',
                message: "Please enter your engineer's gitHub name.",
                name: `engineer${workerNumber}Git`
            },
            {
                type: 'input',
                message: "Please enter your engineer's email address.",
                name: `engineer${workerNumber}Email`
            },
        ]).then(data => {
            fs.appendFile(fileName, data, err => {
                err ? console.log(new Error(err)) : console.log('Logged!');
            })
            workerNumber ++; 
            pathFinder();
        })
}

const addIntern = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: "Please enter your intern's name.",
                name: `intern${internNumber}Name`
            },
            {
                type: 'input',
                message: "Please enter your intern's ID.",
                name: `intern${internNumber}Id`
            },
            {
                type: 'input',
                message: "Please enter your intern's School name.",
                name: `intern${internNumber}School`
            },
            {
                type: 'input',
                message: "Please enter your intern's email address.",
                name: `intern${internNumber}Email`
            },
        ]).then(data => {
            fs.appendFile(fileName, data, err => {
                err ? console.log(new Error(err)) : console.log('Logged!');
            })
            internNumber ++; 
            pathFinder();
        })
}

const wrapUp = () => {
    inquirer
        .prompt([
            {
                type: 'confirm',
                message: "Are you ready to build your team's html page?",
                name: 'isReady'
            },
        ]).then(data => {
            if(data.isReady) {
                inquirer
                    .prompt(
                        {
                            type: 'list',
                            message: 'Please select a color theme.'
                            name: 'colorTheme',
                            choices: [
                                "light mode",
                                "dark mode",
                                "evil mode"
                            ]
                        }
                    ).then(data => {
                        fs.appendFile(fileName, data, err => {
                            err ? console.log(new Error(err)) : console.log('Alright, lets generate this...');
                        })
                        generate();
                    })
            } else {
                console.log("Heading back to team select.");
                pathFinder();
            }
        })
}

const generate = () => {
    
}