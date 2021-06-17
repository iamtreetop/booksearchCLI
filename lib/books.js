const axios = require("axios");
const inquirer = require("inquirer");
const chalk = require("chalk");

const { addToReadingList } = require("./readingList");

const fetchBooks = async (query) => {
  const searchQuery =
    query.split(" ").length <= 1 ? query : query.split(" ").join("%");

  const API_URL = `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&maxResults=5`;

  try {
    const res = await axios.get(API_URL);
    const data = res.data.items;
    return data;
  } catch (err) {
    console.log(chalk.red("Invalid Search.  Try Again 😭"));
  }
};

const listBooks = async (query) => {
  const data = await fetchBooks(query);
  const bookList = [];
  data.map((item, idx) => {
    bookList.push(
      `${chalk.yellow(item.volumeInfo.title)} by ${item.volumeInfo.authors}, ${
        item.volumeInfo.publisher
      }`
    );
  });

  return bookList;
};

const selectBook = async (query) => {
  const books = await listBooks(query);
  if (books) {
    const answer = await inquirer.prompt({
      type: "checkbox",
      name: "addToReadingList",
      message: `Search results for: "${chalk.yellow(query)}". Select books to add to your Reading List`,
      async choices() {
        return books;
      },
    });

    if (answer.addToReadingList.length) {
      // add to reading list
      // console.log(answer.addToReadingList)
      addToReadingList(books, answer.addToReadingList);
    } else {
      console.log(
        chalk.red("Book(s) have not been added to your reading list")
      );
    }
  }
};

module.exports = {
  selectBook,
};
