import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './Carousel.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  getBooks() {
    console.log('ajax');
    $.ajax({ method: 'GET', url: 'http://localhost:3004/books' }).then(res => {
      console.log(res);
    });
  }
  componentDidMount() {
    this.getBooks();
  }
  render() {
    return (
      <div>
        <h3 className="text-center">Readers Also Enjoyed:</h3>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
