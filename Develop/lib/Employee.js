// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
        getId = () => this.id;
        getEmail = () => this.email;
        getName = () => this.name;
        getRole = () => 'Employee';
}

module.exports = Employee;