const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(github) {
    super();
    this.github = github;
  }

  getGithub() {
    return this.github;
  }
}

module.exports = Engineer;
