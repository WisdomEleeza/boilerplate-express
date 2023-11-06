let express = require('express');
let app = express();

app.use("/public", express.static(__dirname + "/public"));

app.get('/json', (req, res) => {
    const absolutePath = __dirname + '/views/index.html'
    res.sendFile(absolutePath)
    res.json({ message: "Hello json" })
});





































 module.exports = app;
