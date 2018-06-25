import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Book.css'

const propTypes = {
    book: PropTypes.object
}

class Book extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkedOut: false,
            checkedOutUntil: ''
        }
    }

    generateRandomDate = (start, end) => {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }

    checkoutBook = () => {
        if (this.props.totalBooksCheckedOut < 2) {
            this.setState({
                checkedOut: true,
                checkedOutUntil: this.generateRandomDate(new Date(2018, 6, 1), new Date()).toISOString().split('T')[0]
            });
            this.props.calculateTotalBooksCheckedOut(true);
        }
    }

    returnBook = () => {
        this.setState({
            checkedOut: false,
            checkedOutUntil: ''
        });
        this.props.calculateTotalBooksCheckedOut(false);
    }

    renderBook() {
        return (
            <div className="row">
                <div className="column">
                    <button className="Checkout" style={!this.state.checkedOut ? { className: "Test" } : { display: 'none' }} onClick={this.checkoutBook}>{!this.state.checkedOut ? 'Checkout' : 'Return'}</button>
                    <button className="Return" style={this.state.checkedOut ? { className: "Test" } : { display: 'none' }} onClick={this.returnBook}>{this.state.checkedOut ? 'Return' : 'Checkout'}</button>
                </div>
                <div className="column">{this.state.checkedOutUntil}</div>
                <div className="column">{this.props.book.title}</div>
                <div className="column">{this.props.book.author}</div>
                <div className="column">{this.props.book.year}</div>
                <div className="column">{this.props.book.language}</div>
                <div className="column">
                <a href={this.props.book.link}>
                {this.props.book.link}
                </a>
                </div>
            </div>
        )
    }

    render() {
        return this.renderBook();
    }
}

Book.propTypes = propTypes;

export default Book;