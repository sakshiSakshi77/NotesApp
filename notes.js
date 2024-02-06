// const notesContainer = document.querySelector(".notes-container");
// const createBtn = document.querySelector(".btn");
// // let notes = document.querySelectorAll(".input-box");

// function show() {
//     notesContainer.innerHTML = localStorage.getItem("notes");
// }
// show();
// // function save() {
// //     console.log("notes", notesContainer.innerHTML);
// //     localStorage.setItem("notes", notesContainer.innerHTML);
// // }

// function save() {
//     const notes = document.querySelectorAll(".input-box");
//     let notesContent = "";
//     notes.forEach(note => {
//         notesContent += note.innerHTML + "<br>"; // Store each note's content with a line break
//     });
//     localStorage.setItem("notes", notesContent);
// }

// createBtn.addEventListener("click", () => {
//     let inputBox = document.createElement("p");
//     let img = document.createElement("img");
//     inputBox.className = "input-box";
//     inputBox.setAttribute("contenteditable", "true");
//     img.src = "./image/delete.png";
//     notesContainer.appendChild(inputBox).appendChild(img);
// })

// notesContainer.addEventListener("click", function (e) {
//     if (e.target.tagName === "IMG") {
//         e.target.parentElement.remove();
//         save();
//     }
//     else if (e.target.tagName === "p") {
//         notes = document.querySelectorAll(".input-box");
//         notes.forEach(nt => {
//             nt.onkeyup = function () {
//                 save();
//             }
//         })
//     }

// })
// document.addEventListener("keydown", event => {
//     if (event.key === "enter") {
//         document.execCommand("insertLineBreak");
//         event.preventDefault();
        
//     }
// })
const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

function show() {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
        notesContainer.innerHTML = savedNotes;
    }
}
show();

function save() {
    const notes = document.querySelectorAll(".input-box");
    let notesContent = "";
    notes.forEach(note => {
        notesContent += note.innerHTML + "<br>"; // Store each note's content with a line break
    });
    localStorage.setItem("notes", notesContent);
}

createBtn.addEventListener("click", () => {
    const inputBox = document.createElement("p");
    const img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "./image/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);

    // save(); // Save whenever a new note is created
});

notesContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        save(); // Save after removing a note
    }
});

notesContainer.addEventListener("input", function () {
    save(); // Save whenever there's an input change in a note
});

document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
        save(); // Save when "Enter" key is pressed
    }
});
