/**
 * Created by arvind on 12/10/17.
 */
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 2000 || process.env.PORT;

app.post('/rohan', function (req, res) {
    var name = req.body.name;
    var newname = name + "HIII..";
    var obj = {id : newname};

    res.send(obj);
});

app.listen(port, function (arr) {
   console.log("Server Running at " + port);
});
