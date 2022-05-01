const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("getName", () => {
        it("Should return the name of an Manager class object", () => {
            const obj = new Manager('Brendan Eich', 1, 'BrendanEich@company.com', '0400 000 000');
            expect(obj.getName()).toEqual('Brendan Eich');
        });
    })

    describe("getID", () => {
        it("Should return the ID of an Manager class object", () => {
            const obj = new Manager('Brendan Eich', 1, 'BrendanEich@company.com', '0400 000 000');
            expect(obj.getID()).toEqual(1);
        });
    })

    describe("getEmail", () => {
        it("Should return the Email of an Manager class object", () => {
            const obj = new Manager('Brendan Eich', 1, 'BrendanEich@company.com', '0400 000 000');
            expect(obj.getEmail()).toEqual('BrendanEich@company.com');
        });
    })

    describe("getRole", () => {
        it("Should return the Role of an Manager class object", () => {
            const obj = new Manager('Brendan Eich', 1, 'BrendanEich@company.com', '0400 000 000');
            expect(obj.getRole()).toEqual('Manager');
        });
    })

    describe("getOfficeNumber", () => {
        it("Should return the Office Number of an Manager class object", () => {
            const obj = new Manager('Brendan Eich', 1, 'BrendanEich@company.com', '0400 000 000');
            expect(obj.getOfficeNumber()).toEqual('0400 000 000');
        });
    })

    describe("writeHTML", () => {
        it("Should return a string that has the Manager data in HTML format for the Bootstrap Card for the employee object", () => {
            const obj = new Manager('Brendan Eich', 1, 'BrendanEich@company.com', '0400 000 000');
            const htmlCardString = `
          <div class="card" style="width: 18rem; min-width: 200px;">
          <div class="card-img-top" src=".../100px180/" alt="Card image cap">
              <h2>Name : ${obj.getName()}</h2>
              <h3>Role : ${obj.getRole()}</h3>
          </div>
          <div class="card-body">
              <p class="card-text btn btn-secondary w-100">ID: ${obj.getID()}</p>
              <p class="card-text btn btn-secondary w-100">Office Number: ${obj.getOfficeNumber()}</p>
              <a href="mailto: ${obj.getEmail()}" class="card-text btn btn-secondary w-100">Send Email</a>
          </div>
      </div>
    `
            expect(htmlCardString).toMatch(/Brendan Eich/);
            expect(htmlCardString).toMatch(/1/);
            expect(htmlCardString).toMatch(/Manager/);
            expect(htmlCardString).toMatch(/0400 000 000/);
        });
    })
});
