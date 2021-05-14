const Employee = require('./employeeClass')

class Mgmt extends Employee {
    constructor(name, id, email, roomNumber){
        super(name, id, email);

        this.room = roomNumber;
        this.role = "Team lead";
    }

    getRoomNumber() {
        return this.room;
    }

    createCard() {
        return `
            <div class='mgmtCard'>
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
                        Office # ${this.room}
                    </p>
                </div>
            </div>`;
    }
}


module.exports = Mgmt;
