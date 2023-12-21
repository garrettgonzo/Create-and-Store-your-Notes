const express = require('express');
const path = require('path');
const app = express();
const port = process.env.port || 3000
const api = require('./routes/index.js');

app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get('/notes', function (req, res) {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.get('/notes', function (req, res) {
  res.sendFile(path.join(__dirname, "notes.html"));
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});