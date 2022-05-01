const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("getName", () => {
        it("Should return the name of an employee class object", () => {
            const obj = new Employee('Brendan Eich', 1, 'BrendanEich@company.com');
            expect(obj.getName()).toEqual('Brendan Eich');
        });
    })

    describe("getID", () => {
        it("Should return the ID of an employee class object", () => {
            const obj = new Employee('Brendan Eich', 1, 'BrendanEich@company.com');
            expect(obj.getID()).toEqual(1);
        });
    })

    describe("getEmail", () => {
        it("Should return the Email of an employee class object", () => {
            const obj = new Employee('Brendan Eich', 1, 'BrendanEich@company.com');
            expect(obj.getEmail()).toEqual('BrendanEich@company.com');
        });
    })

    describe("getRole", () => {
        it("Should return the Role of an employee class object", () => {
            const obj = new Employee('Brendan Eich', 1, 'BrendanEich@company.com');
            expect(obj.getRole()).toEqual('Employee');
        });
    })
});
