
function Book(title, author) {

    return { title, author, isAvailable: true };
}

const library = [];

function addBook(title, author) {

    library.push(Book(title, author));
}

function borrowBook(title) {

    for (var i = 0; i < library.length; i++) {
        if (library[i].title === title && library[i].isAvailable === true) {
            library[i].isAvailable = false;
            break;
        }
    }
}

function returnBook(title) {

    for (var i = 0; i < library.length; i++) {
        if (library[i].title === title && library[i].isAvailable === false) {
            library[i].isAvailable = true;
            break;
        }
    }
}

function listBooks() {
    library.forEach((book) => {
        console.log(book.title);
        console.log(book.author);
        console.log("Availability = " + book.isAvailable);
        console.log();
    });
}

addBook("Rakta sindhoora", "Raja Chendoor");
addBook("101 Flames", "Preeti Shenoy");
listBooks();
borrowBook("101 Flames");
listBooks();
returnBook("101 Flames");
listBooks();