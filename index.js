const inquirer = require("inquirer");
const { selectBook } = require("./lib/books");
const { getReadingList } = require("./lib/readingList");
const chalk = require("chalk");

const firstQuestion = [
  {
    type: "list",
    name: "action",
    message: "What would you like to do?",
    choices: [
      { name: "Search for book", value: "search" },
      { name: "See Reading List", value: "list" },
    ],
  },
  {
    type: "input",
    name: "query",
    message: "Search by title:",
    when (answers) {
      return answers.action === "search";
    },
  },
];

const main = async () => {
  console.log(`📚🔎 BookSearch\n`);
  try {
    const answer = await inquirer.prompt(firstQuestion);

    const { action, query } = answer;

    switch (action) {
      case "search":
        console.log(chalk.green("Beep Boop Beep Boop..."));
        await selectBook(query);
        break;
      case "list":
        console.log(chalk.green("Eee errr Eee errr..."));
        getReadingList();
        break;
      default:
        console.log("Please select one");
    }
  } catch (err) {
    console.log(chalk.red("An unexpected error has occured"));
  }
};

main();