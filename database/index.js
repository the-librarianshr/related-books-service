const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/related-books', { useNewUrlParser: true, useCreateIndex: true });

let bookSchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true,
  },
  author: {
    id: {
      type: Number,
      unique: true,
    },
    name: String
  },
  image: String,
  title: String,
  description: String,
  year: Number,
  rating: Number
});

let Repo = mongoose.model('Book', bookSchema, 'books');

let save = (data) => {
  const book = new Repo(data);
  book.save((err, book) => {
    if (err) console.log('error:', err);
    console.log(book.title, ' saved to database');
  });
}

let saveMany = (data) => {
  Repo.collection.insert(data, (err, books) => {
    if (err) console.log(err);
  });
}

module.exports.save = save;
module.exports.saveMany = saveMany;