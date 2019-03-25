import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Google Book Search</h1>
        <form>
          Search: <input />
          <button>Search</button>
        </form>
         <div class="filter-menu-print-type">
                 <select id="dropdown" name="print-type">
                     Print Type:
                     <option value="magazines">magazines</option>
                     <option value="books">books</option>
                     <option value="all" selected>all</option>
                 </select>
          </div>
           <div class="filter-menu-book-type">
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
