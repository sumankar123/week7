import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './../Book/Book';
import './Catalog.css';

const propTypes = {
  books: PropTypes.arrayOf(Object)
}

class Catalog extends Component {
  constructor(props){
    super(props);
    this.state = {
      totalBooksCheckedOut:0
    }
    this.calculateTotalBooksCheckedOut = this.calculateTotalBooksCheckedOut.bind(this);
  }

  calculateTotalBooksCheckedOut(isBookCheckedOut){
    if (isBookCheckedOut){
      this.setState({
        totalBooksCheckedOut: this.state.totalBooksCheckedOut + 1
      });
    } else {
      this.setState({
        totalBooksCheckedOut: this.state.totalBooksCheckedOut -1
      });
    }
  }

  render() {
    return (
      <div>
        <h3 className='Catalog-hint-label1'>Total books checked out: {this.state.totalBooksCheckedOut}</h3>
        <h5 className='Catalog-hint-label2'>Note: You can only check out 2 books at a time</h5>
        <div className="Catalog-row">
                <div className="Catalog-column">Checkout</div>
                <div className="Catalog-column">Until</div>
                <div className="Catalog-column">Title</div>
                <div className="Catalog-column">Author</div>
                <div className="Catalog-column">Year</div>
                <div className="Catalog-column">Language</div>
                <div className="Catalog-column">Link</div>
            </div>
        {this.props.books.map((book, key) => {
          return <Book key={key} book={book} calculateTotalBooksCheckedOut={this.calculateTotalBooksCheckedOut} totalBooksCheckedOut={this.state.totalBooksCheckedOut} />
        })}
      </div>
    );
  }
}

Catalog.propTypes = propTypes;

export default Catalog;