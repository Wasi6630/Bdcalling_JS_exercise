// Task one
const StudentInfo = {
    name: '',
    age: 0,
    roll: ""
};
const student1 = Object.create(StudentInfo);
student1.name = "Rahim";
student1.age = 20;
student1.roll = 2156;

const student2 = Object.create(StudentInfo);
student2.name = 'Karim';
student2.age = 21;
student2.roll = 5603;

console.log(student1);
console.log(student2);


// Task Two
const student = {
    name : 'Sultan',
    age : 15,
}
console.log(student);

student.grade = 'A+';
console.log(student);

delete student.age;
console.log(student);


// Task Three
const student3 = {
    name: 'Jamal',
    roll: 9283,
    department: 'CST'
}

const {name, roll, department} = student3;

console.log(`Name: ${name}`);
console.log(`Roll: ${roll}`);
console.log(`Department: ${department}`);



