const Intern = require("../lib/Intern");

test("tests for Intern object", () => {
  const intern = new Intern("U of A");

  expect(intern.school).toEqual(expect.any(String));
});

test("tests for returned school", () => {
  const intern = new Intern("U of A");

  expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school));
});

test("tests for role", () => {
  const intern = new Intern("U of A");

  expect(intern.getRole()).toEqual(
    expect.stringContaining(intern.constructor.name)
  );
});
