// const rectangle = {width: 20, height: 10, square: function () {
//     return this.width * this.height;
// },perimeter: function()  {
//     return this.width * 2 + this.height * 2
// }}
// // this.width = 100;
// // this.height = 200;
// // console.log(this)
//  console.log(rectangle.square());
//  console.log(rectangle.perimeter());
 
// class Rectangle {
//     #width;
//     #height;
//     constructor(width, height) {
//         this.#height = height;
//         this.#width = width;
//     }
//     square() {
//         return this.#width * this.#height;
//     }
//     perimeter() {
//         return this.#width * 2 + this.#height *2
//     }
// }
// function Rectangle(width, height) {
//     this.width = width;
//     this.height = height;
// }
// Rectangle.prototype.square = function() {
//     return this.width * this.height;
// }
// const rectangle1 = new Rectangle(3, 4);
// console.log(rectangle1.square());
// Rectangle.prototype.square = function() {
//     return "kuku"
// }
// console.log(rectangle1.square());
//console.log(rectangle1.perimeter());
/* HW #21 */
// Employe structure and function createEmployee() taken from previous HW
function createEmployee(id, name, birthYear, salary, city, country) {
    return {id, name, birthYear, salary, address: {city, country}}
}
class Company {
    #employees //object key: <id value>, value: reference to Employee object
    constructor() {
        
        this.#employees = {};
    }

    //returns true if added new employee object
        //returns false if employee with a given id value already exists
    addEmployee(empl) {
        //adds empl into #employees object
        

        if(this.#employees[empl.id]){
            return false;
        }else{
            this.#employees[empl.id] = empl;
            return true;
        }

        
    }
    removeEmployee(id) {
        //TODO
        //removes employee with a given id from #employees object
        //returns true if removed
        //returns false if employee with the id doesn't exist
        if(this.#employees[id]){
            delete this.#employees[id];
            return true;
        }else{
            return false;
        }
    }
    getEmployeesCountry(country) {
        //TODO
        //returns array of employee objects having field "country" equaled to a given country
       
        // const res = (this.#employees).reduce(function(acc, empl){
        //     empl.country === country ? acc += empl : acc;
        // }, [])
        const res =Object.values(this.#employees);
        return res.reduce((acc, empl) => {
            if (empl.address.country === country) acc.push(empl);
            return acc;
        }, []);
    }
    getEmployeesByAge(age) {
        //TODO
        //returns array of employee objects with a given age
    }
    getEmployeesBySalaries(salryFrom, salryTo) {
        //TODO
        //returns array of employee objects with salary in a given closed range [salaryFrom, salaryTo]
        //if salaryFrom < 0, then get employees with salary less or equal salaryTo
        //if salaryTo , 0, then get employees with salary greater or equal salaryFrom
        //if salaryFrom < 0 && salaryTo < 0, then get all employees
    }
}
const emp1 = createEmployee(124, "Pavel", 2003, 12000, "Lod", "Israel");
const emp7 = createEmployee(126, "Pavel", 2003, 12000, "Lod", "Israel");
const emp2 = createEmployee(127, "John", 2000, 15000, "New York", "USA");
const emp3 = createEmployee(128, "Jane", 2005, 18000, "London", "UK");
const emp4 = createEmployee(129, "Bob", 2002, 20000, "Paris", "France");
const emp5 = createEmployee(130, "Sara", 2001, 22000, "Berlin", "Germany");
const emp6 = createEmployee(125, "Pavel", 2003, 12000, "Lod", "Israel");
const add = new Company();
add.addEmployee(emp1);
add.addEmployee(emp7);
add.addEmployee(emp2);
add.addEmployee(emp3);
add.addEmployee(emp4);
add.addEmployee(emp5);
add.addEmployee(emp6);
add.removeEmployee(126);
const country = add.getEmployeesCountry("Israel");

// console.log(add.addEmployee(empl));
// console.log(add.addEmployee(empl1));
// console.table(Company.this.#employees);
// const add1 = new Company();
// const empl1 = createEmployee(126, "Pavel", 2003, 12000, "Lod", "Israel");
// console.log(add1.addEmployee(empl1));





// function createEmployee(id, name, birthYear, salary, city, country) {
//     return {id, name, birthYear, salary, address: {city, country}}
// }
// class Company {
//     #employees //object key: <id value>, value: reference to Employee object
//     constructor(id, name, birthYear, salary, city, country) {
//         this.#employees = {};
//     }
//     addEmployee(empl) {
        
//         //adds empl into #employees object
//         //returns true if added new employee object
//         //returns false if employee with a given id value already exists
//         if(Company.this.#employees.id === empl.id){
//             return false;
//         }else{
//             this.#employees = empl;
//             return true;
//         }
//     }
// }

// adds empl into #employees object
// returns true if added new employee object
// returns false if employee with a given id value already exists