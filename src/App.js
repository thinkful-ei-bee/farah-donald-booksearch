import React, { Component } from 'react';
import ListBooks from './ListBooks';
import './App.css';

class App extends Component {
  state = {
    bookResults: [],
    printTypeFilter: '',
    bookTypeFilter: '',
    searchTerm: '',
    }

  handleSearch = e => {
    e.preventDefault();
    let query = e.currentTarget.elements.searchTerm.value;
    this.setState({
      searchTerm: query
    })
    let url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyCdlfp2y3a52776yi2zkunXcMGxnYbHUCQ&maxResults=10`
    if(this.state.printTypeFilter) {
      url = url+`&printType=${this.state.printTypeFilter}`
    }
    if(this.state.bookTypeFilter) {
      url = url+`&filter=${this.state.bookTypeFilter}`
    }
    fetch(url)
      .then(res => {
        if(!res.ok){
          throw new Error ('Something went wrong.')
        }
        return res;
      })
      .then (res => res.json())
      .then (data => {
        this.setState({
          bookResults: data,
        })
      })
  }

  printTypeChange = e =>{
    this.setState({
      printTypeFilter: e.target.value
    })
  }

  bookTypeChange = e =>{
    this.setState({
      bookTypeFilter: e.target.value
    })
  }


  render() {
    return (
      <div className="App">
        <h1>Google Book Search</h1>
        <form onSubmit = {this.handleSearch} >
          <label>
          Search:
          <input name="searchTerm"/>
          </label>
          <input type="submit"/>
        </form>
         <div className="filter-menu-print-type">
                 <select id="dropdown" name="print-type" onChange={this.printTypeChange}>
                     Print Type:
                     <option value="magazines">magazines</option>
                     <option value="books">books</option>
                     <option value="all" selected>all</option>
                 </select>
          </div>
           <div className="filter-menu-book-type">
                 <select id="dropdown" name="book-type" onChange={this.bookTypeChange}>
                     Book Type:
                     <option value="partial">partial</option>
                     <option value="full">full</option>
                     <option value="free-ebooks">free-ebooks</option>
                     <option value="paid-ebooks">paid-ebooks</option>
                     <option value="ebooks">ebooks</option>
                     <option value="all" selected>all</option>
                 </select>
          </div>
        <ListBooks books={this.state.bookResults}/>
        </div>
    );
  }
}

export default App;
