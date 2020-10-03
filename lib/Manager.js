const Employee = require("./Employee");

class Manager extends Employee {
  constructor(phone) {
    super();
    this.phone = phone;
  }
}

module.exports = Manager;
