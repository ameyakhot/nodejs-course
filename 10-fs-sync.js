const { readFile, writeFile, writeFileSync } = require("fs");
const NAME = "Rahul"

setInterval(() => {
    readFile("./content/first.txt", "utf8", (err, result) => {
        if (err) {
          console.log(`ERROR: ${err}`);
          return;
        }
        const first = result
        readFile("./content/second.txt", "utf8", (err, result) => {
          if(err){
              console.log(`ERROR: ${err}`)
              return
          }
          const second = result
          writeFileSync(
              './content/resultAsync.txt', 
              `Here is the result for ${NAME}: ${first}, ${second} \n`,
              {flag: 'a'}
              )
        })
      });
}, 500)