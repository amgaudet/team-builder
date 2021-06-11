// Starter file provided by Instructor (03/09/2021) AC

const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
    const school = 'university';
    const newEmployee = new Intern('bill', '123', 'fake@email.com', school);

    expect(newEmployee.school).toBe(school);
});

test("getRole() should return \"Intern\"", () => {
    const newEmployee = new Intern('john', '345', 'email@email.com', 'uni');

    expect(newEmployee.getRole()).toBe('Intern');
});

test("Can get school via getSchool()", () => {
    const school = 'university';
    const newEmployee = new Intern('bill', '123', 'fake@email.com', school);

    expect(newEmployee.getSchool()).toBe(school);

});
