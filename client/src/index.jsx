import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>Hello World!</div>;
  }
}

ReactDOM.render(<Hello />, document.getElementById('app'));
