const Employee = require('./employeeClass')

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);

        this.school = school;
        this.role = "Intern";
    }

    this.getSchool = () => {
        return this.School;
    }

    this.createCard = () => {
        return `
            <div class='InternCard'>
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
                        Student at ${this.school}.
                    </p>
                </div>
            </div>`;
    }
}


module.exports = Intern;
