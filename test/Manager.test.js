const Employee = require("../lib/Manager");

test("Test for office number property", () => {
  // creating an test value
  const testOfficeNumber = "(123)456-7891";

  // process testing
  const newEmployee = new Employee(
    "John",
    1,
    "test@mail.com",
    testOfficeNumber
  );

  // conclusion
  expect(newEmployee.officenumber).toBe(testOfficeNumber);
});

test("Test for office number method", () => {
  // creating an test value
  const testOfficeNumber = "(123)456-7891";

  // process testing
  const newEmployee = new Employee(
    "John",
    1,
    "test@mail.com",
    testOfficeNumber
  );

  // conclusion
  expect(newEmployee.getOfficeNumber()).toBe(testOfficeNumber);
});
