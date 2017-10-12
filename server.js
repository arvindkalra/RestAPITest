/**
 * Created by arvind on 12/10/17.
 */
const express = require('express');
const app = express();

const port = process.env.PORT;

app.get('/what', function (req, res) {
    var obj = {name : 12};
    res.send(obj);
});

app.listen(port, function (arr) {
   console.log("Server Running at " + port);
});
