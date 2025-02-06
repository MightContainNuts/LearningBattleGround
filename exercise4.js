//Exercise 4 - Working with JSON


//Part 1Create and Save a JSON file

const fs = require('fs');

let jsonObj = {
    title: null,
    author: null,
    year : null
};

let jsonString = JSON.stringify(jsonObj, null, 2);

fs.writeFileSync( 'book.json',jsonString,"utf-8");

//Part 2: Read a JSON file

let jsonStringRead = fs.readFileSync('book.json', 'utf-8');
let jsonObjRead = JSON.parse(jsonStringRead);

console.log('Title: ', jsonObjRead.title);
console.log('Author: ', jsonObjRead.author);
console.log('Year: ', jsonObjRead.year);

//Part 3: Update a JSON file

jsonObjRead.title = 'The Hobbit';
jsonObjRead.author = 'J.R.R. Tolkien';
jsonObjRead.year = 1937;


console.log('Title: ', jsonObjRead.title);
console.log('Author: ', jsonObjRead.author);
console.log('Year: ', jsonObjRead.year);


jsonObjString3 = JSON.stringify(jsonObjRead, null, 2)

fs.writeFileSync('book.json', JSON.stringify(jsonObjRead, null, 2), 'utf-8');
