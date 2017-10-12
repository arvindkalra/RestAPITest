/**
 * Created by arvind on 12/10/17.
 */
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const arr = [];

const port = 2000;
// const port = process.env.PORT;

app.post('/addNew', function (req, res) {
    var name = req.body.name;
    var phone = req.body.phone;
    var objtba = {
        name : name,
        phone : phone
    };
    arr.push(objtba);

    res.send();
});

app.get('/all', function (req, res) {
    res.send(arr);
});

app.listen(port, function (arr) {
   console.log("Server Running at " + port);
});
