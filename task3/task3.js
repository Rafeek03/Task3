//Part1
//1.Declare variables using var, let, and const

console.log("\n================================");
console.log("       PART 1 - REVISION");
console.log("================================\n");

let age = 24;
const city = "Bengaluru";
var name = "Rafeek";
console.log(name);
console.log(age);
console.log(city);

//2. Create variables and check data types
let namee = "Rafeek";
let age1 = 24;
let salary = 25000;
let isWorking = true;

console.log(typeof namee);
console.log(typeof age1);
console.log(typeof salary);
console.log(typeof isWorking);

//3. Array containing five fruits
let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

console.log(fruits[0]);
console.log(fruits[2]);
console.log(fruits[4]);


//4. create an object
let student = {
    name: "Rafeek",
    age: 24,
    location: "Bengaluru",
    skills: "JavaScript"
};

console.log(student.name);
console.log(student.age);
console.log(student.location);
console.log(student.skills);


//5.arithmetic operators
let a = 20;
let b = 10;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

//6. pre increment
let num = 10;
console.log(++num);

//7.post increment
let num1 = 10;
let num2= num1++;

console.log("num1:", num1);
console.log("num2:", num2);


//8. six assignment operators 
let a3 = 20;
let b2 = 10;

a3 += b2;
console.log(a3);

a3 = 20;
a3 -= b2 ;
console.log(a3);

a3 = 20;
a3 *= b2;
console.log(a3);

a3 = 20;
a3 /= b2;
console.log(a3);

a3 = 20;
a3 **= b2;
console.log(a3);

a3 = 20;
a3 %= b2;
console.log(a3);

//9.Comparison operators
console.log(100 > 50);
console.log(100 == 100);
console.log(100 != 200);


//10.Loose equality and strict equality
console.log(25 == "25");
console.log(25 === "25");

//11 and operators
console.log(20 > 10 && 30 < 50);

//12. or operators
console.log(10 > 20 || 50 > 30);

//13. not operators
console.log(!(100 > 50));

//14ternary operator
let age3 = 20;

let result = age3 >= 18 ? "Eligible" : "Not Eligible";

console.log(result);

//15 template literals
let name1 = "Rafeek";
let age4 = 24;
let city1 = "Bengaluru";

console.log(`My name is ${name1}, age is ${age4}, and I live in ${city1}`);

//16 check data type

console.log(typeof ("Hello" + 100));
console.log(typeof (100 + true));


//17. Type conversion
let c = "500";

let result1 = Number(c) + 100;

console.log(result1); // 600



//18 boolean conversion

console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(""));
console.log(Boolean("JavaScript"));


//part2 conditional statements

//1 positive or negative

console.log("\n================================");
console.log("    PART 2 - CONDITIONALS");
console.log("================================\n");

let num3 = -10;

if (num3 > 0) {
    console.log("Positive");
} else {
    console.log("Negative");
}


//2 check eligibility to vote
let age5 = 20;

if (age5 >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible to vote");
}


//3 check even or odd
let num4 = 7;

if (num4 % 2 == 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

//4 check pass or fail
let mark = 45;

if (mark >= 35) {
    console.log("Pass");
} else {
    console.log("Fail");
}


//5 time based greeting
let time = 14;

if (time >= 1 && time <= 6) {
    console.log("Early Morning");
} 
else if (time >= 7 && time <= 12) {
    console.log("Good Morning");
} 
else if (time >= 13 && time <= 15) {
    console.log("Good Afternoon");
} 
else if (time >= 16 && time <= 18) {
    console.log("Good Evening");
} 
else if (time >= 19 && time <= 24) {
    console.log("Good Night");
} 
else {
    console.log("Invalid Time");
}


//6. Nested if statements
let age6 = 22;
let height = 170;
let weight = 60;

if (age6 >= 18) {
    if (height >= 160) {
        if (weight >= 50) {
            console.log("Selected");
        } else {
            console.log("Weight criteria not satisfied");
        }
    } else {
        console.log("Height criteria not satisfied");
    }
} else {
    console.log("Age criteria not satisfied");
}

//7. switch statement
let trafficLight = "red";

switch (trafficLight) {
    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Get Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid Signal");
}

//8. weekdays
let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid Day");
}



//9. login system
let username = "rafeek";
let password = "12345";

if (username == "rafeek" && password == "12345") {
    console.log("Login Successful");
} else {
    console.log("Invalid Username or Password");
}


//10. grade system

let mark1 = 85;

if (mark1 >= 90) {
    console.log("Grade A");
} 
else if (mark1 >= 75) {
    console.log("Grade B");
} 
else if (mark1 >= 50) {
    console.log("Grade C");
} 
else {
    console.log("Fail");
}

//part3 loops
console.log("\n================================");
console.log("       PART 3 - LOOPS");
console.log("================================\n");

//1 print from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}


//2 print numbers from 10 to 1
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

//3 print even numbers from 1 to 20
for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

//4 print odd numbers from 1 to 20
for (let i = 1; i <= 20; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}


//5 print multiplication table of 5
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

//6 print multiplication table of 10
let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum = sum + i;
}


console.log("Total:", sum);

//7 print numbers from 10 to 1 using while loop
let i = 10;

while (i >= 1) {
    console.log(i);
    i--;
}

//8 print numbers from 1 to 5 using do while loop
let j = 1;

do {
    console.log(j);
    j++;
} while (j <= 5);

//9 print each letter of the word "JAVASCRIPT" using for...of loop
let word = "JAVASCRIPT";

for (let letter of word) {
    console.log(letter);
}

//10 print each element of the array using for...of loop
let languages = ["Java", "Python", "JavaScript", "C", "PHP"];

for (let language of languages) {
    console.log(language);
}

//11 print each property of the object using for...in loop
let employee = {
    name: "Rafeek",
    age: 24,
    location: "Bengaluru",
    designation: "Developer"
};

for (let key in employee) {
    console.log(key, employee[key]);
}

//12 print each element of the array using for...of loop
let mobiles = ["Samsung", "Apple", "Vivo", "Oppo", "OnePlus"];

for (let brand of mobiles) {
    console.log(brand);
}


//part4 Combined

console.log("\n================================");
console.log("    PART 4 - COMBINED");
console.log("================================\n");
//1 display each mark of the student using for...of loop
let marks = [85, 90, 75, 60, 95];

for (let mark of marks) {
    console.log(mark);
}

//2 display each property of the employee object using for...in loop
let employee1 = {
    name: "Rafeek",
    age: 24,
    salary: 30000,
    location: "Bengaluru"
};

for (let key in employee1) {
    console.log(key + " : " + employee1[key]);
}


//3 check if each number in the array is even or odd using for...of loop
let numbers = [10, 15, 20, 25, 30];

for (let num of numbers) {
    if (num % 2 == 0) {
        console.log(num + " is Even");
    } else {
        console.log(num + " is Odd");
    }
}

//4 pass or fail for each student using for...of loop
let student1 = {
    name: "Rafeek",
    marks: 75
};

if (student1.marks >= 35) {
    console.log(student1.name + " Passed");
} else {
    console.log(student1.name + " Failed");
}

//5 traffic signal using switch statement
let signal = "green";

switch (signal) {
    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Wait");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid Signal");
}

//6 multiplication table of 7 using for loop
let num5 = 7;

for (let i = 1; i <= 10; i++) {
    console.log(`${num5} x ${i} = ${num5 * i}`);
}

//7 print each fruit in uppercase using for...of loop
let fruits1 = ["apple", "banana", "mango", "orange", "grapes"];

for (let fruit of fruits1) {
    console.log(fruit.toUpperCase());
}


//8 salary check using if...else statement
let employee2 = {
    name: "Rafeek",
    age: 24,
    salary: 30000,
    location: "Bengaluru"
};

for (let key in employee2) {
    console.log(key + " : " + employee2[key]);
}

if (employee2.salary > 25000) {
    console.log("Salary is above 25000");
} else {
    console.log("Salary is 25000 or below");
}

//9 login system using if...else statement
let username1 = "admin";
let password1 = "12345";

if (username1 == "admin" && password1 == "12345") {
    console.log("Welcome! Login Successful");
} else {
    console.log("Invalid Login Details");
}


//10 check pass or fail for multiple students using for...of loop
let students = [
    {
        name: "Arun",
        marks: 85
    },
    {
        name: "Ravi",
        marks: 30
    },
    {
        name: "Kumar",
        marks: 65
    },
    {
        name: "Ajay",
        marks: 25
    },
    {
        name: "Rahul",
        marks: 95
    }
];

for (let student of students) {

    console.log("Name:", student.name);
    console.log("Marks:", student.marks);

    if (student.marks >= 35) {
        console.log("Result: Pass");
    } else {
        console.log("Result: Fail");
    }

    console.log("----------------");
}