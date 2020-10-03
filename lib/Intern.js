const Employee = require("../lib/Employee");

class Intern extends Employee {
  constructor(school) {
    super();

    this.school = school;
  }

  getSchool() {
    return this.school;
  }
}

module.exports = Intern;
