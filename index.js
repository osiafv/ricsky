process.chdir(__dirname);
require("dotenv").config();
const octikit = require("@octokit/rest");
/*const express = require('express')
const app = express()
app.get('/', (req, res) => {
  res.send('Bot Berjalan! Changes Saved!')
});
app.listen(3000, () => {
    console.log('Connecr');
  });*/

/*let token = process.argv[2];
let cmd = process.argv[3];
let folderName = process.argv[4];*/

let cmd = process.argv[2];
let folderName = process.argv[3];


const clientWithAuth = new octikit({
    //auth: token
    auth: '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'
});

//create repository

if (cmd === "1") {
    clientWithAuth.repos.createForAuthenticatedUser({
        name: folderName
    });
}
//delete repo
if (cmd === "0") {
    clientWithAuth.repos.delete({
        owner: "osiafv",
        repo: folderName

    }).then(data => {
        console.log("success fully delete " + folderName + "repo");
    }).catch(e => {
        console.log(e);
    });
}