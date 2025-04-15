var Person = /** @class */ (function () {
    function Person(firstName, lastName, age, address, contactNumbers) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
        this.contactNumbers = contactNumbers;
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    Person.prototype.getFullAddress = function () {
        return "".concat(this.address.street, ", ").concat(this.address.city, " - ").concat(this.address.pincode);
    };
    return Person;
}());
var person = new Person("Meghal", "Shah", 22, {
    street: "PDEU",
    city: "Gandhinagar",
    pincode: 380001,
}, ["9876543210", "9123456789"]);
console.log("Full Name:", person.getFullName());
console.log("Full Address:", person.getFullAddress());
