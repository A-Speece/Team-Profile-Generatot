const Employee = require("../lib/Intern");

test("Test for school property", () => {
  // creating an test value
  const testSchool = "Southern Methodist";

  // process testing
  const newEmployee = new Employee("John", 1, "test@mail.com", testSchool);

  // conclusion
  expect(newEmployee.school).toBe(testSchool);
});

test("Test for school method", () => {
  // creating an test value
  const testSchool = "Southern Methodist";

  // process testing
  const newEmployee = new Employee("John", 1, "test@mail.com", testSchool);

  // conclusion
  expect(newEmployee.getSchool()).toBe(testSchool);
});
