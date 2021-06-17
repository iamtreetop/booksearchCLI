# 📚🔎 BookSearchCLI

## Description
BookSearcherCLI is a CLI search tool which allows you to use the Google Books API to search for books and construct a reading list.  Built with Javascript and Node.

## Functionality
This application enables the user to:

* Type in a query and display a list of 5 books matching that query.
* Each item in the list includes the book's author, title, and publishing company.
* Select a book or books from the five search results displayed and save to a “Reading List”
* View a “Reading List” with all the books the user has selected from their queries -- this is a local reading list and not tied to Google Books’s account features.
 
## Getting started
* Clone this repo
* Navigate to directory `$ cd booksearchCLI`
* run `$ npm install` to install dependencies.
* run `$ node index.js`

## Search for Books and Add to Reading List
You will be prompted to select an option.  Use your arrow keys to navigate up and down.  
Select `Search for book`

![image](https://github.com/iamtreetop/booksearchCLI/blob/main/assets/image1.png)

This search by title or author:
Ex. `toy story`

![image](https://github.com/iamtreetop/booksearchCLI/blob/main/assets/image2.png)

This will yield the following results:

![image](https://github.com/iamtreetop/booksearchCLI/blob/main/assets/image3.png)

Select one or multiple books to add to your Reading List by navigating the list using up and down arrow keys.  Selections are denoted by the green dot.

![image](https://github.com/iamtreetop/booksearchCLI/blob/main/assets/image4.png)

Press `enter` to save your selections

![image](https://github.com/iamtreetop/booksearchCLI/blob/main/assets/image4.png)

## View your Reading List
run `$ node index.js`
Navigate to and select `See Reading List`

![image](https://github.com/iamtreetop/booksearchCLI/blob/main/assets/image6.png)

There it is!

![image](https://github.com/iamtreetop/booksearchCLI/blob/main/assets/image7.png)


## 🛠 Dependencies
* [Inquirer](https://www.npmjs.com/package/inquirer) - command line interaction
* [Axios](https://www.npmjs.com/package/axios) - fetch data from APIs
* [Chalk](https://www.npmjs.com/package/chalk) - add coloration to console

## Known Issues
* Incomplete error handling; Some values return "undefined"
* No tests written

## Next Iteration
* Include testing via Jest
* Add additional error handling
* Refactor to so helper functions in /lib do not call each other
* Add an 'exit' action
