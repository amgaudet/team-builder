// Starter file provided by Instructor (03/09/2021) AC

const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number via constructor argument", () => {
    const office = 5;
    const newManager = new Manager('Gillian', '001', 'boss@email.com', office);

    expect(newManager.officeNumber).toBe(office);
});

test('getRole() should return "Manager"', () => {
    const newManager = new Manager('Jared', '002', 'otherboss@email.com', 90);

    expect(newManager.getRole()).toBe('Manager');
});

test("Can get office number via getOffice()", () => {
    const office = 5;
    const newManager = new Manager('Gillian', '001', 'boss@email.com', office);

    expect(newManager.getOffice()).toBe(office);

});
