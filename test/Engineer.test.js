const Employee = require("../lib/Engineer");

test("Test for github property", () => {
  // creating an test value
  const testGitHub = "John-GitHub";

  // process testing
  const newEmployee = new Employee("John", 1, "test@mail.com", testGitHub);

  // conclusion
  expect(newEmployee.gitHub).toBe(testGitHub);
});

test("Test for github method", () => {
  // creating an test value
  const testGitHub = "John-GitHub";

  // process testing
  const newEmployee = new Employee("John", 1, "test@mail.com", testGitHub);

  // conclusion
  expect(newEmployee.getGitHub()).toBe(testGitHub);
});
