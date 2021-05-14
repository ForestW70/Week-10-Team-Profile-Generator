const Employee = require('./employeeClass')

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);

        this.github = github;
        this.role = "Engineer";
    }

    this.getGithub = () => {
        return this.github;
    }

    this.createCard = () => {
        return `
            <div class='EnginCard'>
                <div class='cardHead'>
                    <h1>${this.name}</h1>
                    <h2>${this.getRole()}</h2>
                </div>
                <div class='cardInfo'>
                    <p>
                        ID: ${this.getID()}
                    </p>
                    <p>
                        Email: <a href="mailto:${this.getEmail()}">${this.email}</a>
                    </p>
                    <p>
                        GitHub Profile: <a href='https://github.com/${this.getGitHub()}' target='_blank'>${this.getGitHub()}</a>
                    </p>
                </div>
            </div>`;
    }
}


module.exports = Engineer;
