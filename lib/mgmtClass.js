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
        <span class="divider">Head honcho</span>    
        <div class='mgmt card'>
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
                        Office # ${this.room}
                    </p>
                </div>
            </div>
            <span class="divider">The team:</span>`;
    }
}


module.exports = Mgmt;
