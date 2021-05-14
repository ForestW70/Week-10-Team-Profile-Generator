const Employee = require('../lib/employeeClass');

describe("Employee", () => {
    describe("getName method", () => {
        it("should return the name of the newly created employee.", () => {
            const employee = new Employee("Forest", "421", "hexaforest@gmail.com");

            expect(employee.getName()).toEqual("Forest");
        });
    });

    describe("getId method", () => {
        it("should return the id of the newly created employee.", () => {
            const employee = new Employee("Forest", "421", "hexaforest@gmail.com");

            expect(employee.getId()).toEqual("421");
        });
    });

    describe("getEmail method", () => {
        it("should return the email of the newly created employee.", () => {
            const employee = new Employee("Forest", "421", "hexaforest@gmail.com");

            expect(employee.getEmail()).toEqual("hexaforest@gmail.com");
        });
    });

    describe("getRole method", () => {
        it("should return the role of the newly created employee as 'employee'.", () => {
            const employee = new Employee("Forest", "421", "hexaforest@gmail.com");

            expect(employee.getRole()).toEqual("employee");
        });
    });
});


