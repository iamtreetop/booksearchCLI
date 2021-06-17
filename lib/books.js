const axios = require('axios');

const fetchBooks = async (query) => {
  const searchQuery =
    query.split(" ").length <= 1 ? query : query.split(" ").join("%");

  const API_URL = `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&maxResults=5&key`;

  try {
    const res = await axios.get(API_URL);
    const data = res.data.items;
    console.log(data);
    return data;
  } catch (err) {
    console.log("An error has occured", err);
  }
};

module.exports = {
  fetchBooks,
};