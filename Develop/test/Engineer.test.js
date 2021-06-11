// Starter file provided by Instructor (03/09/2021) AC

const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
    const gitHub = 'amgaudet';
    const newEmployee = new Engineer('bill', '123', 'email@here', gitHub);

    expect(newEmployee.github).toBe(gitHub);
});

test("getRole() should return \"Engineer\"", () => {
    const gitHub = 'amgaudet';
    const newEmployee = new Engineer('bill', '123', 'email@here', gitHub);

    expect(newEmployee.getRole()).toBe('Engineer');    

});

test("Can get GitHub username via getGithub()", () => {
    const gitHub = 'amgaudet';
    const newEmployee = new Engineer('bill', '123', 'email@here', gitHub);

    expect(newEmployee.getGithub()).toBe(gitHub);

});
