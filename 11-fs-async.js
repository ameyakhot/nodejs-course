const { readFile, writeFile, writeFileSync } = require("fs");
const NAME = "Mahesh"

console.log("start")

readFile("./content/first.txt", "utf8", (err, result) => {
    if (err) {
        console.log(`ERROR: ${err}`);
        return;
    }
    else {
        console.log("Found first sentence.")
    }
    const first = result
    readFile("./content/second.txt", "utf8", (err, result) => {
        if(err){
            console.log(`ERROR: ${err}`)
            return
        }
        else {
        console.log("Found second sentence.")
        }
        const second = result
        writeFile(
            './content/resultAsync.txt', 
            `Here is the result for ${NAME}: ${first}, ${second} \n`,
            {flag: 'a'}, 
            (err, result) => {
            if(err){
                console.log(err)
            }
            else{
                console.log("All good here")
            }
            }
            )
    })
});

console.log("end")

// start
// end
// Found first sentence.
// Found second sentence.
// All good here

// This kind of stuff happens in Javascript. 
// So it is better to use ASYNC-AWAIT    
// or maybe promises