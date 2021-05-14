const inquirer = require('inquirer');
const fs = require('fs');

const Mgmt = require("./lib/mgmtClass");
const Engineer = require("./lib/engineerClass");
const Intern = require('./lib/internClass');

let frends = []
let fileName = "";
let workerNumber = 1;
let internNumber = 1;

const startBuild = () => {
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
            fileName = `${data.headName}s-Team.md`;
            
            let bossMan = new Mgmt(data.headName, data.headId, data.headEmail, data.officeNumber);
            bossMan = bossMan.creteCard();
            frends.push(bossMan);


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
                name: `engineerName`
            },
            {
                type: 'input',
                message: "Please enter your engineer's ID.",
                name: `engineerId`
            },
            {
                type: 'input',
                message: "Please enter your engineer's gitHub name.",
                name: `engineerGit`
            },
            {
                type: 'input',
                message: "Please enter your engineer's email address.",
                name: `engineerEmail`
            },
        ]).then(data => {
            let engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGit);
            engineer = engineer.creteCard();
            frends.push(engineer);

            
            pathFinder();
        })
}

const addIntern = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: "Please enter your intern's name.",
                name: `internName`
            },
            {
                type: 'input',
                message: "Please enter your intern's ID.",
                name: `internId`
            },
            {
                type: 'input',
                message: "Please enter your intern's School name.",
                name: `internSchool`
            },
            {
                type: 'input',
                message: "Please enter your intern's email address.",
                name: `internEmail`
            },
        ]).then(data => {
            let intern = new Intern(data.internName, data.internId, data.internEmail, data.internSchool);
            intern = intern.createCard();
            frends.push(intern);
            
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
                            message: 'Please select a color theme.',
                            name: 'colorTheme',
                            choices: [
                                "light",
                                "dark",
                                "evil"
                            ]
                        }
                    ).then(data => {

                        let teamCards = '';
                        frends.forEach(worker => {
                            teamCards += (worker + '\n');
                        })

                        let html = `<!DOCTYPE html>
                        <html lang="en">
                        <head>
                            <meta charset="UTF-8">
                            <meta http-equiv="X-UA-Compatible" content="IE=edge">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <link rel="stylesheet" href="./assets/css/reset.css">
                            <link rel="stylesheet" href="./assets/css/styles.css">
                            <link rel="icon" href=''>
                            <title>Team Generator</title>
                        </head>
                        <body class="${data.colorTheme}">
                        <h1>Welcome! here is your new team.</h1>
                        <div id="cardHolder">${teamCards}</div>
                        </body>
                        </html>
                        `
                        

                        fs.appendFile('./dist/newTeam.html', html, err => {
                            err ? console.log(new Error(err)) : console.log('Created!');
                        })
                        return;
                    })
            } else {
                console.log("Heading back to team select.");
                pathFinder();
            }
        })
}


startBuild();