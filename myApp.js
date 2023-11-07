require('dotenv').config()
let express = require('express');
let app = express();


app.use("/public", express.static(__dirname + "/public"));

app.get('/json', (req, res) => {
    if (process.env.MESSAGE_STYLE === "uppercase") {
        res.json({ message: "HELLO JSON" });
    } else {
        res.json({ message: "Hello json" });
    }

    // Send the HTML file after sending the JSON response
    const absolutePath = __dirname + '/views/index.html';
    res.sendFile(absolutePath);
});





































 module.exports = app;
