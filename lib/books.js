require("dotenv").config();
const axios = require("axios");
const inquirer = require("inquirer");

const { addToReadingList } = require("./readingList")

const fetchBooks = async (query) => {
  const searchQuery =
    query.split(" ").length <= 1 ? query : query.split(" ").join("%");

  const API_URL = `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&maxResults=5&key`;

  try {
    const res = await axios.get(API_URL);
    const data = res.data.items;
    // console.log(data);
    return data;
  } catch (err) {
    console.log("An error has occured", err);
  }
};

const listBooks = async (query) => {
  const data = await fetchBooks(query);
  // console.log(data)
  const bookList = [];
  data.map((item, idx) => {
    bookList.push(
      `${item.volumeInfo.authors}, ${
        item.volumeInfo.title
      }, ${item.volumeInfo.publisher}`
    );
  });

  return bookList;
};

const selectBook = async (query) => {
  const books = await listBooks(query);
  // console.log(books)
  if (books) {
    const answer = await inquirer.prompt({
      type: 'checkbox',
      name: 'addToReadingList',
      message: `Search results for: "${query}". Select books to add to your Reading List`,
      async choices() {
        return books;
      }
    })
    
    if (answer.addToReadingList.length) {
      // add to reading list 
      // console.log(answer.addToReadingList)
      addToReadingList(books, answer.addToReadingList)
    } else {
      console.log("Book(s) have not been added to your reading list")
    }
  }
}
 
module.exports = {
  selectBook,
};