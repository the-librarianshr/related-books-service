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
  title: String,
  genre: String,
  description: String,
  year: Number,
  rating: Number
});

let Repo = mongoose.model('Book', bookSchema);

let save = (data) => {
  const book = new Repo(data);
  book.save((err, book) => {
    if (err) console.log('error:', err);
    console.log(book.title, ' saved to database');
  });
}

module.exports.save = save;
