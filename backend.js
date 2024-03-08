const path = require('path');
const fs = require('fs');
const express = require('express');
const app = express()

app.use(express.static('public'));
app.use(express.urlencoded({extended:false}));



app.get('/', function (req, res) {
    let htmlFilePath = path.join(__dirname, 'view','index.html');
    res.sendFile(htmlFilePath);
});



// app.post('/users', function(req, res){
//     const userInput = req.body;
//     const filePath = path.join(__dirname, 'data', 'inputs.json');
//     const fileData = fs.readFileSync(filePath);
//     const existingUsers = JSON.parse(fileData);
//     existingUsers.push(userInput);
//     fs.writeFileSync(filePath, JSON.stringify(existingUsers));
//     res.sendFile(filePath);
// });

app.get('/view/chat.html', function (req, res) {
    let htmlFilePath = path.join(__dirname, 'view', 'chat.html');
    res.sendFile(htmlFilePath);
})
app.listen(3000);