import React from 'react';
import { Carousel } from 'react-bootstrap';

class BookCarousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      direction: null,
    };

    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }
  render() {
    const { index, direction } = this.state;
    const { books } = this.props;
    return (
      <Carousel activeIndex={index} direction={direction} onSelect={this.handleSelect}>
        {books.map(book => (
          <Carousel.Item key={book.id}>
            <img className="d-block w-100" src={book.image} alt={book.title} />
            <Carousel.Caption>
              <h3>{book.title}</h3>
              <p>{book.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }
}

export default BookCarousel;
