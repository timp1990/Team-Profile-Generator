const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("getName", () => {
        it("Should return the name of an Engineer class object", () => {
            const obj = new Engineer('Brendan Eich', 1, 'BrendanEich@company.com', 'BrendanEich');
            expect(obj.getName()).toEqual('Brendan Eich');
        });
    })

    describe("getID", () => {
        it("Should return the ID of an Engineer class object", () => {
            const obj = new Engineer('Brendan Eich', 1, 'BrendanEich@company.com', 'BrendanEich');
            expect(obj.getID()).toEqual(1);
        });
    })

    describe("getEmail", () => {
        it("Should return the Email of an Engineer class object", () => {
            const obj = new Engineer('Brendan Eich', 1, 'BrendanEich@company.com', 'BrendanEich');
            expect(obj.getEmail()).toEqual('BrendanEich@company.com');
        });
    })

    describe("getRole", () => {
        it("Should return the Role of an Engineer class object", () => {
            const obj = new Engineer('Brendan Eich', 1, 'BrendanEich@company.com', 'BrendanEich');
            expect(obj.getRole()).toEqual('Engineer');
        });
    })

    describe("getGitHub", () => {
        it("Should return the GitHub Account of an Engineer class object", () => {
            const obj = new Engineer('Brendan Eich', 1, 'BrendanEich@company.com', 'BrendanEich');
            expect(obj.getGitHub()).toEqual('BrendanEich');
        });
    })

    describe("writeHTML", () => {
        it("Should return a string that has the Engineer data in HTML format for the Bootstrap Card for the employee object", () => {
            const obj = new Engineer('Brendan Eich', 1, 'BrendanEich@company.com', 'BrendanEich');
            const htmlCardString = `
            <div class="card" style="width: 18rem; min-width: 200px;">
            <div class="card-img-top" src=".../100px180/" alt="Card image cap">
                <h2>Name : ${obj.getName()}</h2>
                <h3>Role : ${obj.getRole()}</h3>
            </div>
            <div class="card-body">
                <p class="card-text btn btn-secondary w-100">ID: ${obj.getID()}</p>
                <p class="card-text btn btn-secondary w-100">GitHub: <a href="https://github.com/${obj.getGitHub()}">${obj.getGitHub()}</a> </p>
                <a href="mailto: ${obj.getEmail()}" class="card-text btn btn-secondary w-100">Send Email</a>
            </div>
        </div>
      `
            expect(htmlCardString).toMatch(/Brendan Eich/);
            expect(htmlCardString).toMatch(/1/);
            expect(htmlCardString).toMatch(/Engineer/);
            expect(htmlCardString).toMatch(/BrendanEich/);
        });
    })
});
