// class Student {
//     constructor (name, age, department) {
//         this.name = name;
//         this.age = age;
//         this.department = department;
//     }

//     information() {
//         console.log(`Name: ${this.name}, Age: ${this.age}, Department: ${this.department}`);
        
//     }
// }
// const studentOne = new Student("Nahid", 22 , 'CSE');
// const studentTwo = new Student("Sagor", 21 , 'CSE');
// const studentThree = new Student("Jonny", 23 , 'CSE');

// studentOne.information();
// studentTwo.information();
// studentThree.information();


// const Persone = {
//     name : 'Nurul',
//     age : 21
     
// }
// console.log(Persone);


// const obj = new Object ();
// obj.x = 10
// obj.y  = 20
// console.log(obj);


// class Person1 {
//     constructor(name){
//         this.name = name;
//     }
//     greet (){
//         console.log(`Hello ${this.name}`);
        
//     }
// }
// const p1 = new Person1('Rana');
// p1.greet();
// console.log(p1);



// class Person2 {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     greet (){
//         console.log(` My name is ${this.name} and My age is: ${this.age}`);
        
//     }
// }
// const p2 = new Person2('Rana', 22);
// p2.greet();
// console.log(p2);


// class Person3 {
//     constructor(name, age , roll){
//         this.name = name;
//         this.age = age;
//         this.roll = roll;

//     }
//     dtls() {
//         console.log(`My name is ${this.name} my age is ${this.age} and my roll is ${this.roll}`);
        
//     }
// }
// const p3 = new Person3('Raj', 13, 1);
// p3.dtls()


// const viewers = {
//     name : 'Ali',
//     age : 21
// }
// console.log(viewers.age);
// delete viewers.name
// console.log(viewers);
// viewers.city = 'Dhaka';
// console.log(viewers);


// const counter = {
//     num : 0 ,
//     count (){
//         this.num ++;
//     }
// }
// counter.count();
// console.log(counter.num);
// counter.count();
// console.log(counter.num);
// counter.count();
// console.log(counter.num);



// const ani = {
//     speak() {
//         console.log('Sound...');
        
//     }
// };
// const dog = Object.create(ani);
// dog.name = 'Tommy';
// dog.speak();
// console.log(dog);


// const fruts = {
//     apple (){
//         console.log('This apple is so good.');
        
//     }
// };
// const newFruts = Object.create(fruts);
// newFruts.name = 'Banana';
// newFruts.apple();
// console.log(newFruts);



 class Student {
    constructor (name, age, department) {
        this.name = name;
        this.age = age;
        this.department = department;
    }

    info() {
        console.log(`Student name is  ${this.name}, Student age is  ${this.age} and Student department ${this.department}`);
        
    }
}
class Teacher extends Student {
    constructor (name, age){
        super(name, age);

        return;
    }
    info() {
        console.log(`Teacher name is  ${this.name}, Teacher age is  ${this.age} `);
        
    }
}

const Tname = new Teacher('Tonmay', 23);
Tname.info();

