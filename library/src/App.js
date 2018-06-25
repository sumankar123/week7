import React, { Component } from 'react';
import './App.css';
import Catalog from './Catalog/Catalog';

class App extends Component {

  constructor() {
    super();
    this.state = { books: [] };
  }

  componentDidMount() {
    fetch(`http://localhost:4000/books`)
      .then(response => response.json())
      .then(data => {
        this.setState(() => {
          return { books: data };
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <h2>Library Self-Checkout App</h2>
        <Catalog books={this.state.books} />
      </div>
    );
  }
}

export default App;