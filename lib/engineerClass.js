const Employee = require('./employeeClass')

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);

        this.github = github;
        this.role = "Engineer";
    }

    getGithub() {
        return this.github;
    }

    createCard() {
        return `
            <div class='EnginCard'>
                <div class='cardHead'>
                    <h1>${this.name}</h1>
                    <h2>${this.role}</h2>
                </div>
                <div class='cardInfo'>
                    <p>
                        ID: ${this.id}
                    </p>
                    <p>
                        Email: <a href="mailto:${this.email}">${this.email}</a>
                    </p>
                    <p>
                        GitHub Profile: <a href='https://github.com/${this.github}' target='_blank'>${this.github}</a>
                    </p>
                </div>
            </div>`;
    }
}


module.exports = Engineer;
