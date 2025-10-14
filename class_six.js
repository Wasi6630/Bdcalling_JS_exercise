class Student {
    constructor (name, age, department) {
        this.name = name;
        this.age = age;
        this.department = department;
    }

    information() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Department: ${this.department}`);
        
    }
}
const studentOne = new Student("Nahid", 22 , 'CSE');
const studentTwo = new Student("Sagor", 21 , 'CSE');
const studentThree = new Student("JOny", 23 , 'CSE');

studentOne.information();
studentTwo.information();
studentThree.information();

