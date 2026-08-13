/* Task 1  */

let fruits = ["Apple", "Mango", "Banana"];

// "Orange" যোগ করা
fruits.push("Orange");

// শেষের item remove করা
fruits.pop();

// সব fruits console-এ দেখানো
fruits.forEach(function(fruit) {
    console.log(fruit);
});

/* Task 2  */

let numbers = [10, 20, 30, 40, 50];

// map() দিয়ে প্রতিটি সংখ্যার সাথে 10 যোগ
let addedNumbers = numbers.map(function(number) {
    return number + 10;
});

console.log(addedNumbers);

// filter() দিয়ে 30-এর বেশি সংখ্যা বের করা
let filteredNumbers = numbers.filter(function(number) {
    return number > 30;
});

console.log(filteredNumbers);


/*Task 3 */

let marks = [40, 55, 70, 85, 30];

// reduce() দিয়ে মোট marks বের করা
let totalMarks = marks.reduce(function(sum, mark) {
    return sum + mark;
}, 0);

console.log("Total Marks:", totalMarks);

// find() দিয়ে প্রথম 70 বা তার বেশি mark খোঁজা
let firstHighMark = marks.find(function(mark) {
    return mark >= 70;
});

console.log("First 70 or More:", firstHighMark);

// findIndex() দিয়ে 85 এর index বের করা
let indexOf85 = marks.findIndex(function(mark) {
    return mark === 85;
});

console.log("Index of 85:", indexOf85);


/* Task 4 — Object Methods */

let student = {
    name: "Rahim",
    age: 22,
    city: "Chittagong"
};

// Object.keys() দিয়ে keys দেখানো
console.log(Object.keys(student));

// Object.values() দিয়ে values দেখানো
console.log(Object.values(student));

// Object.entries() দিয়ে key ও value দেখানো
console.log(Object.entries(student));

// hasOwnProperty() দিয়ে name property আছে কিনা check
console.log(student.hasOwnProperty("name"));


/* Task 5 */

let numberSet = new Set([10, 20, 30]);

// add() দিয়ে 40 যোগ
numberSet.add(40);

// delete() দিয়ে 20 remove
numberSet.delete(20);

// has() দিয়ে 30 আছে কিনা check
console.log("30 আছে কি?", numberSet.has(30));

// forEach() দিয়ে সব value print
numberSet.forEach(function(value) {
    console.log(value);
});

/* Task 6 — Map */

let studentMap = new Map();

// set() দিয়ে data যোগ
studentMap.set("name", "Rahim");
studentMap.set("age", 22);

// get() দিয়ে name বের করা
console.log("Name:", studentMap.get("name"));

// has() দিয়ে age আছে কিনা check
console.log("Age আছে কি?", studentMap.has("age"));

// size দিয়ে মোট data সংখ্যা
console.log("Total Data:", studentMap.size);

/* Task 7 — Spread & Rest*/

//Spread Operator
let arrayA = [1, 2, 3];
let arrayB = [4, 5, 6];

let combinedArray = [...arrayA, ...arrayB];

console.log(combinedArray);

// Rest Operator
function sumNumbers(...numbers) {
    let total = 0;

    for (let number of numbers) {
        total += number;
    }

    return total;
}

console.log(sumNumbers(10, 20, 30));


/* Task 8 — Class & Constructor */

class Student {
    constructor(name, age, course) {
        this.name = name;
        this.age = age;
        this.course = course;
    }
}

// দুইজন Student-এর object তৈরি
let student1 = new Student("Rahim", 22, "JavaScript");
let student2 = new Student("Karim", 23, "React");

console.log(student1);
console.log(student2);


/* Task 9 — Inheritance & Overriding */

class Person {
    introduce() {
        console.log("I am a person.");
    }
}

// StudentChild হলো Person-এর child class
class StudentChild extends Person {

    // Method Overriding
    introduce() {
        console.log("I am a student.");
    }
}

// Person object
let personObj = new Person();
personObj.introduce();

// StudentChild object
let studentObj2 = new StudentChild();
studentObj2.introduce();


/* Task 10 — Small OOP Project  */
class BankAccount {
    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
    }

    // টাকা জমা
    deposit(amount) {
        this.balance += amount;
    }

    // টাকা উত্তোলন
    withdraw(amount) {
        this.balance -= amount;
    }
}

// Bank Account তৈরি
let account = new BankAccount("Rahim", 5000);

// Deposit
account.deposit(1000);

// Withdraw
account.withdraw(500);

// Account holder-এর নাম এবং current balance
console.log("Account Holder:", account.name);
console.log("Current Balance:", account.balance);

/* Bonus */

// static ব্যবহার করে একটি method তৈরি

class MyBankAccount {
    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        this.balance -= amount;
    }

    // Static method
    static bankInfo() {
        console.log("Welcome to Dutch-Bangla Bank Limited (DBBL)");
    }
}

// Static method call
MyBankAccount.bankInfo();

// Account তৈরি
let myAccount = new MyBankAccount("Rahim", 5000);

myAccount.deposit(1000);
myAccount.withdraw(500);

console.log("Account Holder:", myAccount.name);
console.log("Current Balance:", myAccount.balance);