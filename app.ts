const os = require("os");

const user = os.userInfo();

console.log(user);

console.log(`The System uptime is ${os.uptime()} seconds`);
