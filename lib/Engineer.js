const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email);
        this.gitHub = gitHub;
    }

    getRole() {
        return 'Engineer'
    }

    getGitHub() {
        return this.gitHub;
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
              <p class="card-text btn btn-secondary w-100">GitHub: <a href="https://github.com/${this.getGitHub()}">${this.getGitHub()}</a> </p>
              <a href="mailto: ${this.getEmail()}" class="card-text btn btn-secondary w-100">Send Email</a>
          </div>
      </div>
    `
        return newHTML;
    }
}

module.exports = Engineer;