const Employee = require('./employeeClass')

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);

        this.school = school;
        this.role = "Intern";
    }

    getSchool() {
        return this.school;
    }

    createCard() {
        return `
            <div class='intern card'>
                <div class='card-head'>
                    <h2>${this.name}</h2>
                    <h3>${this.role}</h3>
                </div>
                <div class='card-info'>
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
