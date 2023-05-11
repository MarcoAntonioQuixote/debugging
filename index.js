class studentOptionsMenu {
    constructor() {
        this.students = importedStudentData();
        this.studentList = this.organizeList(this.students);
    }

    welcome() {
        alert("Welcome to Student University. Check out all of the students enrolled.");
        this.menu();
    }

    menu() {
        const selection = prompt(`What do you want to do?
            1) View all students
            2) Add or remove a student
            3) Update a student grade
            4) Expel all failing students
            0) Close this Menu`)
        switch (+selection) {
            case 1: this.showStudents();
                break;
            case 2: this.addOrRemoveStudent();
                break;
            case 3: this.updateStudentGrade();
                break;
            case 4: this.viewPassFail();
                break;
            default: this.goodbye();
        }
    }

    showStudents() {
        alert(`Students are: \n ${this.studentList}`);
        this.stayInMenu();
    }

    addOrRemoveStudent() {
        const selection = prompt("Do you wish to add a student or remove a student? \n Add \n Remove");
        if (selection === "Add") {
            const name = prompt("What is student's name?");
            const age = prompt("Their age?");
            const grade = prompt("Their grade?");
            const newStudent = {
                name,
                age,
                grade,
            }
            this.students.push(newStudent);
            this.showStudents();
        } else if (selection === "Remove") {
            let student = prompt(`Which student do you wish to remove? \n ${this.studentList}`);
            const name = this.students[student];
            const confirmRemove = confirm(`Are you sure you want to remove ${name}?`)
            if (confirmRemove) {
                this.students.splice(student,0);
                alert(`${name} has been removed from Student University. 🔥`);
            } else {
                alert(`${name} has been spared from removal.`);
            }
            this.stayInMenu();
        }
    }

    updateStudentGrade() {
        const student = prompt("Who's grade do you wish to update? \n" + this.studentList);
        const newGrade = prompt(`What grade did ${this.students[student]} get?`);
        
        this.students[student].newGrade = newGrade;
        this.organizeList();
        this.showStudents();
    }

    viewPassFail() {
        let studentPasses = 0;
        let studentFails = 0;
        let failingStudents = "";
        for (const student of this.students) {
            if (student.grade >= 70) {
                studentPasses++;
            } else {
                studentPasses--;
                failingStudents += `${student.name} \n`
            }
        }
        let studentPassRate = Math.round(studentPasses / this.students.length * 100);

        alert(`Out of ${this.students.length} students, ${studentPasses} are passing and ${studentFails} are failing. That is a Pass Rate of ${studentPassRate}%`);

        this.stayInMenu();
        const removeStudents = confirm(`Do you wish to remove these failing students? \n ${failingStudents}`);
        if (removeStudents) {
            alert("Those students are now gone. 🔥")
        } else {
            alert("We are keeping a bunch of flunkards.");
        }
    }

    stayInMenu() {
        const stay = confirm("Would you like to return to the main menu?");
        if (stay) {
            this.menu();
        } else {
            this.goodbye();
        }
    }

    goodbye() {
        alert("You are leaving Student University! 👋🏽");
        console.warn("Adios");
    }

    organizeList() { //meant to organize students from highest to lowest grades as a string
        let studentList = "";

        this.students.sort((a,b) => {
            if(a < b) return 1;
            if(a > b) return -1;

            //a.grade
            return 0;
        });

        console.log(this.students);
        for (let i = 0; i < this.students.length; i++) {
            studentList += `${i+1}: ${this.students[i].name} | Grade: ${this.students[i].grade} \n`;
        }
        this.studentList = studentList;
        return studentList;
    }
}

const AdminMenu = new studentOptionsMenu;

function importedStudentData() {
    return [
        {name: "Kevin", age: 53, grade: 99},
        {name: "Devine", age: 34, grade: 47},
        {name: "Jessica", age: 21, grade: 69},
        {name: "Robin", age: 36, grade: 87},
        {name: "Walker", age: 23, grade: 100},
        {name: "Mysto", age: 20, grade: 77},
        {name: "Porter", age: 21, grade: 50},
    ]
}