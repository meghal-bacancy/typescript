interface PersonInfo {
    firstName: string;
    lastName: string;
    age: number;
    address: Address;
    contactNumbers: string[];

    getFullName(): string;
    getFullAddress(): string;
}
  
interface Address {
    street: string;
    city: string;
    pincode: number;
}

class Person implements PersonInfo {
    firstName: string;
    lastName: string;
    age: number;
    address: Address;
    contactNumbers: string[];

    constructor(
        firstName: string,
        lastName: string,
        age: number,
        address: Address,
        contactNumbers: string[]
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
        this.contactNumbers = contactNumbers;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    getFullAddress(): string {
        return `${this.address.street}, ${this.address.city} - ${this.address.pincode}`;
    }
}
  
const person = new Person(
    "Meghal",
    "Shah",
    22,
    {
        street: "PDEU",
        city: "Gandhinagar",
        pincode: 380001,
    },
    ["9876543210", "9123456789"]
);
  
console.log("Full Name:", person.getFullName());
console.log("Full Address:", person.getFullAddress());