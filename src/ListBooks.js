import React, { Component } from 'react';

export default class ListBooks extends Component {
	constructor(props){
		super(props);
	}

	render(){
		console.log(this.props.books.items);
		return (
				<div></div>
		)
	}
}