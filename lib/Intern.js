const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getRole() {
        return 'Intern'
    }

    getSchool() {
        return this.school
    }

    writeHTML() {
        // Write Cards
        let newHTML = `
          <div class="card" style="width: 18rem; min-width: 200px;">
          <div class="card-img-top" src=".../100px180/" alt="Card image cap">
              <h2>Name : ${this.getName()}</h2>
              <h3>Role : ${this.getRole()}</h3>
          </div>
          <div class="card-body">
              <p class="card-text btn btn-secondary w-100">ID: ${this.getID()}</p>
              <p class="card-text btn btn-secondary w-100">School: ${this.getSchool()}</p>
              <a href="mailto: ${this.getEmail()}" class="card-text btn btn-secondary w-100">Send Email</a>
          </div>
      </div>
    `
        return newHTML;
    }
}

module.exports = Intern;