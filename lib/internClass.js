const Employee = require('./employeeClass')

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);

        this.school = school;
        this.role = "Intern";
    }

    getSchool() {
        return this.School;
    }

    createCard() {
        return `
            <div class='InternCard'>
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
                        Student at ${this.school}.
                    </p>
                </div>
            </div>`;
    }
}


module.exports = Intern;
