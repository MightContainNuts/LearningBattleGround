let pet ={
    type:'dod',
    name:'Buddy',
    age: 5
};

console.log(`The Pet is a ${pet.type} called ${pet.name} and is ${pet.age} years old.`);

console.log('....one year later....');

pet.age +=1;

console.log('The pet is now ${pet.age} years old.');


let student ={
    name: "Grade A Student",
    age : 25,
    subjects : ['Math', 'English', 'Science'],
    grades: {
        'Math': 'A',
        'English': 'B',
        'Science': 'A'

    }
}

console.log(`${student.name} is ${student.age} years old and is taking ${student.subjects.length} subjects.`);
for (let subject of student.subjects) {
    console.log(`${subject}`);
}
console.log(`${student.name} is getting the following grades: `);
for (let [subject, grade] of Object.entries(student.grades)) {
    console.log(`${subject} : ${grade}`);
};


student.grades['Math'] = 'B';

console.log(`${student.name} has now a ${student.grades['Math']} in Math.`);

student.grades['Home Economics'] = 'A';

for (let [subject, grade] of Object.entries(student.grades)) {
    console.log(`${subject} : ${grade}`);
}
