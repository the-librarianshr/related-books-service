const faker = require('faker');
const request = require('request');
const db = require('.');

const getRandomImage = (cb) => {
  const randomPage = Math.floor(Math.random() * 30).toString();
  const randomImage = Math.floor(Math.random() * 30).toString();
  request({ url: 'https://picsum.photos/v2/list?page=' + randomPage }, (err, response) => {
    let url = JSON.parse(response.body)[randomImage].download_url;
    url = url.slice(0, url.indexOf('/', 25)) + '/85/130'
    cb(url);
  });
}

const createBook = (id) => {
  let book = {};
  getRandomImage(res => {
    book.id = id;
    book.author = {
      id,
      name: faker.name.findName()
    }
    book.title = `The ${faker.company.catchPhraseAdjective()} ${faker.company.catchPhraseNoun().split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
      }`;
    book.description = faker.lorem.sentences(5);
    book.year = faker.date.past(100);
    book.rating = `${Math.floor(Math.random() * 5)}.${Math.floor(Math.random() * 10)}`;
    book.image = res;
    db.save(book);
  });
};

for (var i = 0; i <= 100; i++) {
  createBook(i);
}




