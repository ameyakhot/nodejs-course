const os = require("os");

// Info about the current user
const user = os.userInfo();
// console.log(user)

// Method returns system uptime in seconds
console.log(
  `The system uptime is: ${Math.round(os.uptime() / 60 / 60 / 24)} days`
);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
