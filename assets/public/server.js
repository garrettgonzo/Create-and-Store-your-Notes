const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(__dirname));

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });

  app.get('/notes', function (req, res) {
    res.sendFile(path.join(__dirname, "notes.html"));
  });