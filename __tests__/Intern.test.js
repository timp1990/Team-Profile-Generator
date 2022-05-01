const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("getName", () => {
        it("Should return the name of an Intern class object", () => {
            const obj = new Intern('Brendan Eich', 1, 'BrendanEich@company.com', 'Santa Clara University');
            expect(obj.getName()).toEqual('Brendan Eich');
        });
    })

    describe("getID", () => {
        it("Should return the ID of an Intern class object", () => {
            const obj = new Intern('Brendan Eich', 1, 'BrendanEich@company.com', 'Santa Clara University');
            expect(obj.getID()).toEqual(1);
        });
    })

    describe("getEmail", () => {
        it("Should return the Email of an Intern class object", () => {
            const obj = new Intern('Brendan Eich', 1, 'BrendanEich@company.com', 'Santa Clara University');
            expect(obj.getEmail()).toEqual('BrendanEich@company.com');
        });
    })

    describe("getRole", () => {
        it("Should return the Role of an Intern class object", () => {
            const obj = new Intern('Brendan Eich', 1, 'BrendanEich@company.com', 'Santa Clara University');
            expect(obj.getRole()).toEqual('Intern');
        });
    })

    describe("getSchool", () => {
        it("Should return the School of an Intern class object", () => {
            const obj = new Intern('Brendan Eich', 1, 'BrendanEich@company.com', 'Santa Clara University');
            expect(obj.getSchool()).toEqual('Santa Clara University');
        });
    })

    describe("writeHTML", () => {
        it("Should return a string that has the Intern data in HTML format for the Bootstrap Card for the employee object", () => {
            const obj = new Intern('Brendan Eich', 1, 'BrendanEich@company.com', 'Santa Clara University');
            const htmlCardString = `
            <div class="card" style="width: 18rem; min-width: 200px;">
            <div class="card-img-top" src=".../100px180/" alt="Card image cap">
                <h2>Name : ${obj.getName()}</h2>
                <h3>Role : ${obj.getRole()}</h3>
            </div>
            <div class="card-body">
                <p class="card-text btn btn-secondary w-100">ID: ${obj.getID()}</p>
                <p class="card-text btn btn-secondary w-100">School: ${obj.getSchool()}</p>
                <a href="mailto: ${obj.getEmail()}" class="card-text btn btn-secondary w-100">Send Email</a>
            </div>
        </div>
      `
            expect(htmlCardString).toMatch(/Brendan Eich/);
            expect(htmlCardString).toMatch(/1/);
            expect(htmlCardString).toMatch(/Intern/);
            expect(htmlCardString).toMatch(/Santa Clara University/);
        });
    })
});
