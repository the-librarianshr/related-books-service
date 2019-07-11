const express = require('express');
const bodyParse = require('body-parser');
const cors = require('cors');
const db = require('../database');

const port = 3004;
const app = express();

app.use(express.static(__dirname + '/../public/dist'));
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: false }));

app.get('/books', cors(), (req, res) => {
  db.find(response => {
    res.send(response);
  });
});


app.listen(port, () => console.log('Now listening on port ' + port));
