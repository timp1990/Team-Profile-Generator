const Generator = require("./lib/Generator");

// Initialize a new Generator object
const newGenerator = new Generator();

const program = new Promise((resolve, reject) => {
    // Start the generator
    let result = newGenerator.startGenerator();
    resolve(result)
})




// ToDo List:
// 1. Start the inquirer questions - a method on the generator class.
// 2. Store Answers
// 3. Write the HTML file