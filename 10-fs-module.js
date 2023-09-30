const { readFileSync, writeFileSync, writeFile } = require("fs");

try {
  const first = readFileSync("./content/first.txt", "utf8");
  console.log(first);

  const second = readFileSync("./content/second.txt", "utf8");
  console.log(second);
} catch (error) {
  console.error("An error occurred:", error);
}

const writeSomething = writeFileSync(
  "./content/resultFile.txt",
  "Hello, Result!"
);
