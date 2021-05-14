const Employee = require('./employeeClass')

class Mgmt extends Employee {
    constructor(name, id, email, roomNumber){
        super(name, id, email);

        this.room = roomNumber;
        this.role = "Team lead";
    }

    this.getRoomNumber = () => {
        return this.room;
    }

    this.createCard = () => {
        return `
            <div class='mgmtCard'>
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
                        Office # ${this.room}
                    </p>
                </div>
            </div>`;
    }
}


module.exports = Mgmt;
