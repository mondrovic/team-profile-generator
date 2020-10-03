const Manager = require("../lib/Manager");

test("tests for Manager object", () => {
  const manager = new Manager(1234567890);

  expect(manager.phone).toEqual(expect.any(Number));
});

test("test for role return", () => {
  const manager = new Manager(1234567890);

  expect(manager.getRole()).toEqual(
    expect.stringContaining(manager.constructor.name)
  );
});
