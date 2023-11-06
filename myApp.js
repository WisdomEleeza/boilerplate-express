let express = require('express');
let app = express();

app.use('/public', express.static())

app.get('/', (req, res) => {
    // const absolutePath = __dirname + '/views/index.html'
    const absolutePath = __dirname + '/public'
    res.sendFile(absolutePath)
});





































 module.exports = app;
