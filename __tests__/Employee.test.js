const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("getName", () => {
        it("should return an object containing a 'number' property when called with the 'new' keyword", () => {
            const obj = new Employee();

            expect("number" in obj).toEqual(true);
        });

        it("should default 'number' to 0", () => {
            const obj = new Employee();

            expect(obj.number).toEqual(0);
        });
    })
});
