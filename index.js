const inquirer = require("inquirer");
const { selectBook } = require("./lib/books.js");

const firstQuestion = [
  {
    type: "list",
    name: "action",
    message: "What would you like to do?",
    choices: [
      { name: "Search for book", value: "search" },
    ],
  },
  {
    type: "input",
    name: "query",
    message: "Search by title:",
    if (answers) {
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
        console.log("Beep Boop Beep Boop...");
        await selectBook(query);
        break;
      default:
        console.log("Beep Boop Beep Boop");
    }
  } catch (err) {
    throw new Error(err);
  }
};

main();