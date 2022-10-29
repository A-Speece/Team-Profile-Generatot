const Employee = require("../lib/Employee");

test("Test for name property", () => {
  // creating an test value
  const testName = "John";

  // process testing
  const newEmployee = new Employee(testName, 1, "test@mail.com");

  // conclusion
  expect(newEmployee.name).toBe(testName);
});

test("Test for id property", () => {
  // creating an test value
  const testId = 123;

  // process testing
  const newEmployee = new Employee("John", testId, "test@mail.com");

  // conclusion
  expect(newEmployee.id).toBe(testId);
});

test("Test for email property", () => {
  // creating an test value
  const testEmail = "john@foo.com";

  // process testing
  const newEmployee = new Employee("John", 123, testEmail);

  // conclusion
  expect(newEmployee.email).toBe(testEmail);
});

test("Test for getName method", () => {
  // creating an test value
  const testName = "John";

  // process testing
  const newEmployee = new Employee(testName, 1, "test@mail.com");

  // conclusion
  expect(newEmployee.getName()).toBe(testName);
});

test("Test for id method", () => {
  // creating an test value
  const testId = 123;

  // process testing
  const newEmployee = new Employee("John", testId, "test@mail.com");

  // conclusion
  expect(newEmployee.getId()).toBe(testId);
});

test("Test for email method", () => {
  // creating an test value
  const testEmail = "john@foo.com";

  // process testing
  const newEmployee = new Employee("John", 123, testEmail);

  // conclusion
  expect(newEmployee.getEmail()).toBe(testEmail);
});
