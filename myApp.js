require('dotenv').config()
let express = require('express');
let app = express();


app.use("/public", express.static(__dirname + "/public"));

app.get('/json', (req, res) => {
    const absolutePath = __dirname + '/views/index.html';
    res.sendFile(absolutePath);
  
    if (process.env.MESSAGE_STYLE === "uppercase") {
        res.json({ "message": "HELLO JSON" });
    } else {
        res.json({ "message": "Hello json" });
    }
});





































 module.exports = app;
