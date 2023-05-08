import { mySum } from "./mySum.js";

const myArr = [1, 2, 3, 4, 5];
const result = mySum(...myArr);
console.log(result); // 15

const mySecondArr = myArr.map((num) => num * 2);
const avg =
  mySecondArr.reduce((acc, curr) => acc + curr, 0) / mySecondArr.length;
const filteredArr = mySecondArr.filter((num) => num >= avg);
console.log(filteredArr); // [6, 8, 10]

setTimeout(() => {
  console.log("Goodbye");
}, 3000);

const Employee = {
  name: "Ran Mouri",
  email: "mouriran@example.com",
  department: "Marketing",
  startDate: "2023-01-01",
};

const { name, email } = Employee;
const Person = { name, email };
console.log(Person);
