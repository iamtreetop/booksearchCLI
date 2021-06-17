const fs = require("fs")

const writeToFile = (file, data) => {
  let book = `${data}\n`
  fs.appendFile(file, book, (err) => {
    if (err) throw err;
  });
  console.log("Books were added to Reading List");
};

const addToReadingList = (books, booksToAdd) => {
  books.map((book) => {
    if (booksToAdd.includes(book)) {
      writeToFile("reading-list.txt", book);
    }
  })
};

module.exports = {
  addToReadingList,
};