const Employee = require("../lib/Employee");

test("create new employee object", () => {
  const employee = new Employee("John", 10, "johnsmith@email.com");

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

test("tests return methods for employee object", () => {
  const employee = new Employee("John", 10, "johnsmith@email.com");

  // gets name
  expect(employee.getName()).toEqual(expect.stringContaining(employee.name));
  //gets id
  expect(employee.getId()).toBe(10);
  // gets email
  expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email));
});

test("returns the role", () => {
  const employee = new Employee("John", 10, "johnsmith@email.com");

  //tests for role
  expect(employee.getRole()).toBe("Employee");
});
