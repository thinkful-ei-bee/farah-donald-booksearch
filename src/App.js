import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    booksResults: [],
    printTypeFilter: '',
    bookTypeFilter: '',
    searchTerm: '',
    }

  // handleSearchInput= (e) => {
  //   this.setState({
  //     searchTerm: e.target.value,
  //   })
  // }

  // handleSearchSubmit = (e) => {
  //     e.preventDefault();

  //   console.log(url)
  //   fetch(url)
  //     .then(res => {
  //       if(!res.ok){
  //         throw new Error ('Something went wrong.')
  //       }
  //       return res;
  //     })
  //     .then (res => res.json())
  //     .then (data => {
  //       this.setState({
  //         bookResults: data,
  //       })
  //     })
  //   console.log(this.state.bookResults)
  // }

  handleSearch = e => {
    e.preventDefault();
    this.setState({
      searchTerm: e.target.value
    })
    let url = `https://www.googleapis.com/books/v1/volumes?q=${e.target.value}&key=AIzaSyCdlfp2y3a52776yi2zkunXcMGxnYbHUCQ&maxResults=10`
    if(this.state.printTypeFilter) {
      url = url+`&filter=${this.state.printTypeFilter}`
    }
    if(this.state.bookTypeFilter) {
      url = url+`&printType=${this.state.bookTypeFilter}`
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
    console.log(this.state.bookResults)
  }

  // componentDidMount(){

  // }

  render() {
    return (
      <div className="App">
        <h1>Google Book Search</h1>
        <form onSubmit= {this.handleSearchSubmit}>
          Search:
          <input type="text/submit"
          onSubmit={e => this.handleSearch(e)}/>
          <input type="submit" />
        </form>
         <div className="filter-menu-print-type">
                 <select id="dropdown" name="print-type">
                     Print Type:
                     <option value="magazines">magazines</option>
                     <option value="books">books</option>
                     <option value="all" selected>all</option>
                 </select>
          </div>
           <div className="filter-menu-book-type">
                 <select id="dropdown" name="print-type">
                     Book Type:
                     <option value="partial">partial</option>
                     <option value="full">full</option>
                     <option value="free ebooks">free ebooks</option>
                     <option value="paid ebooks">paid ebooks</option>
                     <option value="ebooks">ebooks</option>
                     <option value="all" selected>all</option>
                 </select>
          </div>
        <div></div>
        </div>
    );
  }
}

export default App;
