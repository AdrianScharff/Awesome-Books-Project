// checking if local storage is empty then add an empty array
if (localStorage.getItem("AddedBookds") === null) {
    localStorage.setItem("AddedBooks", JSON.stringify([]));
}

// store data into local storage
const storeData = JSON.parse(localStorage.getItem("AddedBooks"));

function updateData() {
    localStorage.setItem("AddedBooks", JSON.stringify(storeData));
}

// Getting values from input fields
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    const title = document.querySelector(".title");
    const author = document.querySelector(".author");
    e.preventDefault
});


// ---------------------------------------------------

const booksData = [
    {
        Title: "The slide edge",
        Author: "Jeff Olson"
    },
    {
        Title: "PsychoCybernetics",
        Author: "Ipsum"
    },
    {
        Title: "The power of now",
        Author: "Eckart Tolle"
    },
];

const booksContainer = document.querySelector(".booksContainer")


function addNewBook() {
    const newBook = 
    `<div>
        <p>${booksData.Title}</p>
        <p>${booksData.Author}</p>
        <button class="remove">Remove</button>
    </div>`
    booksContainer.appendChild(newBook);
}

function removeBook() {
    
}