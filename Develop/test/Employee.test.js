// Starter file provided by Instructor (03/09/2021) AC

const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
    const newEmployee = new Employee();

    expect(typeof(newEmployee)).toBe('object');

});

test("Can set name via constructor arguments", () => {

    const name = 'bill';
    const newEmployee = new Employee(name);

    expect(newEmployee.name).toEqual(name);
});

test("Can set id via constructor argument", () => {
    const id = '123'
    const newEmployee = new Employee('bill', id);

    expect(newEmployee.id).toEqual(id);

});

test("Can set email via constructor argument", () => {
    const email = 'a@email.com';
    const newEmployee = new Employee('name', 'id', email);

    expect(newEmployee.email).toEqual(email);


});

test("Can get name via getName()", () => {  
    const name = 'bill';
    const newEmployee = new Employee(name);

    expect(newEmployee.getName()).toEqual(name);

});

test("Can get id via getId()", () => {
    const id = '123';
    const newEmployee = new Employee('bill', id);

    expect(newEmployee.getId()).toEqual(id);

});

test("Can get email via getEmail()", () => {
    const email = 'a@fake.email';
    const newEmployee = new Employee('bill', '123', email);

    expect(newEmployee.getEmail()).toEqual(email);

});

test("getRole() should return \"Employee\"", () => {
    const newEmployee = new Employee('bill', '123', 'a@fake.email');

    expect(newEmployee.getRole()).toBe('Employee');
});

