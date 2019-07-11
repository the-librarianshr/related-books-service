import React from 'react';
import ReactDOM from 'react-dom';
import BookCarousel from './Carousel.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  getBooks() {
    console.log('ajax');
    $.ajax({ method: 'GET', url: 'http://localhost:3004/books' }).then(books => {
      this.setState({ books });
      console.log(books);
    });
  }
  componentDidMount() {
    this.getBooks();
  }
  render() {
    return (
      <div className="container mt-5">
        <h3>Readers Also Enjoyed:</h3>
        <BookCarousel books={this.state.books.slice(0, 10)} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app2'));
