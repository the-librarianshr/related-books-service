import React from 'react';

class BookCarousel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { books } = this.props;
    return (
      <div>
        {books.map(book => (
          <div>{book.title}</div>
        ))}
      </div>
    );
  }
}

export default BookCarousel;
