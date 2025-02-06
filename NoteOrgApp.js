// Final Exercise Note Organiser App

const readlineSync = require('readline-sync');


let notes = [
    {
        title: 'Shopping List',
        body: 'Buy milk and bread',
        time_added: '2023-08-01T08:30:00Z'
    },
    {
        title: 'Homework',
        body: 'Finish math assignment',
        time_added: '2023-08-01T09:00:00Z'
    },
    // more notes go here...
]


let menu ={
    1: 'Add a note',
    2: 'List all notes',
    3: 'Read a note',
    4: 'Delete a note',
    5:'Update a note',
    6: 'Exit'
}

function addNote(){
    let title = readlineSync.question('Enter the note title: ');
    let body = readlineSync.question('Enter the note body: ');
    let time_added = new Date().toISOString();
    notes.push({title, body, time_added});
    console.log('Note added successfully.');
}

function listNotes(){
    for (let note of notes) {
        console.log(`Title: ${note.title}`);
        console.log(`Body: ${note.body}`);
        console.log(`Time Added: ${note.time_added}`);
        console.log('---');
    }
}

function readNote(){
    let title = readlineSync.question('Enter the note title: ');
    let note = notes.find(note => note.title === title);
    if (note) {
        console.log(`Title: ${note.title}`);
        console.log(`Body: ${note.body}`);
        console.log(`Time Added: ${note.time_added}`);
    } else {
        console.log('Note not found.');
    }
}

function deleteNote(){
    let title = readlineSync.question('Enter the note title: ');
    let noteIndex = notes.findIndex(note => note.title === title);
    if (noteIndex !== -1) {
        notes.splice(noteIndex, 1);
        console.log('Note deleted successfully.');
    } else {
        console.log('Note not found.');
    }
}

function updateNote(){
    let title = readlineSync.question('Enter the note title: ');
    let note = notes.find(note => note.title === title);
    if (note) {
        let newTitle = readlineSync.question('Enter the new title: ');
        let newBody = readlineSync.question('Enter the new body: ');
        note.title = newTitle;
        note.body = newBody;
        console.log('Note updated successfully.');
    } else {
        console.log('Note not found.');
    }
}


function startApp(){
    while (true) {
        console.log('Menu');
        console.log('----');
        for (let [key,value] of Object.entries(menu)) {
            console.log(`${key}: ${value}`);
        }
        let choice = readlineSync.question('Enter your choice: ');
        if (choice === '1') {
            addNote();
        } else if (choice === '2') {
            listNotes();
        } else if (choice === '3') {
            readNote();
        } else if (choice === '4') {
            deleteNote();
        } else if (choice === '5') {
            updateNote();
        } else if (choice === '6') {
            break;
        } else {
            console.log('Invalid choice. Please try again.');
        }
    }
}


startApp()
