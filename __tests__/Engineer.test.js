const Engineer = require("../lib/Engineer");

test("checks for engineer object", () => {
  const engineer = new Engineer("mondrovic");

  expect(engineer.github).toEqual(expect.any(String));
});

test("checks email for return", () => {
  const engineer = new Engineer("mondrovic");

  // makes sure email matches
  expect(engineer.getGithub()).toEqual(
    expect.stringContaining(engineer.github)
  );
});

test("checks roles", () => {
  const engineer = new Engineer("mondrovic");

  expect(engineer.getRole()).toBe("Engineer");
});
