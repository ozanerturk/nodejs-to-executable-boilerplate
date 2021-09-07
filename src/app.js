const some_dependency = require("./some_dependency");
const fs = require("fs");
const fetch = require("node-fetch").default;



async function main() {
    
    console.log(some_dependency.data);
    const response = await fetch('https://api.github.com/users/github');
    let jsonRespons = await response.json();
    let beautyfied = JSON.stringify(jsonRespons, null, 4);
    fs.writeFileSync("output.json", beautyfied);

}

main();