const fs = require("fs")

const writeToFile = (file, data) => {
  let book = `${data}\n`
  fs.appendFile(file, book, (err) => {
    if (err) console.log(chalk.red("Unable to save"));
  });
};

function readFromFile(file) {
  fs.readFile(file, "utf8", (err, data) => {
    if (err) console.log(chalk.red("Unable to get your reading list"));
    console.log(data);
  });
}

const addToReadingList = (books, booksToAdd) => {
  books.map((book) => {
    if (booksToAdd.includes(book)) {
      writeToFile("reading-list.txt", book);
    }
  })
  console.log(chalk.free("Books were added to Reading List"));
};

const getReadingList = (file = "reading-list.txt") => {
  readFromFile(file);
};

module.exports = {
  addToReadingList,
  getReadingList,
};