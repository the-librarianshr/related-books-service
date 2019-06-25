const express = require('express');
const bodyParse = require('body-parser');
const db = require('../database');

const port = 3004;
const app = express();

app.use(express.static(__dirname + '/../public/dist'));
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: false }));

app.get('/book', (req, res) => {
  const book = req.body;
  db.save({ book });
  res.end();
});


app.listen(port, () => console.log('Now listening on port ' + port));
