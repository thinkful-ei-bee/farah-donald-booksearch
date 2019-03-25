import React, { Component } from 'react';

// ListBooks.defaultProps = {
//  books: []
// };

export default class ListBooks extends Component {

	render(){
		let listBooks = (!this.props.books.items) ? [] : this.props.books.items
		listBooks = listBooks.map(book =>{
			let price = (!book.saleInfo.retailPrice) ? '' : new Intl.NumberFormat('en-US', { style: 'currency', currency: book.saleInfo.retailPrice.currency || "USD"})
				.format(book.saleInfo.retailPrice.amount);
			return(
				<div key={book.id}>
					<h2>{book.volumeInfo.title}</h2>
					<img src={book.volumeInfo.imageLinks.thumbnail}/>
					<p>Author: {book.volumeInfo.authors}</p>
					<p>Price: {price}</p>
					<p>{book.volumeInfo.description}</p>
					<br/>
			</div>)
		})
		return (
				<div>{listBooks}</div>
		)
	}
}