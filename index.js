const express = require('express');
const { marked } = require("marked");
const app = express();
const port = 5000;
const bodyParser = require('body-parser');
var cors = require('cors')

app.use(cors())
// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.json());

// POST route for converting Markdown to HTML
app.post('/convert', (req, res) => {
    if (req.body.markdownText == null || req.body.markdownText == undefined) {
        return res.status(500).send({ status: false, message: "markdownText should not be empty" })
    }
    const markdownText = req.body.markdownText;
    const html = marked(markdownText);
    res.json({ html });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
