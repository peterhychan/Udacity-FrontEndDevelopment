import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route, Switch } from 'react-router'
import SearchPage from './SearchPage';
import HomePage from './HomePage';


class BooksApp extends React.Component {
    constructor() {
    super();

    this.state = {
      books: [],
    };

    this.filterBooks = this.filterBooks.bind(this);
    this.changeBookShelf = this.changeBookShelf.bind(this);
  }
  componentWillMount() {
    BooksAPI.getAll().then(books => this.setState({ books }));
  }
  filterBooks(books, value, prop = 'shelf') {
    return books.filter(book => book[prop] === value);
  }

  changeBookShelf(book, shelf) {
    BooksAPI.update(book, shelf).then(() => {
      if (book.shelf !== shelf) {
        BooksAPI.update(book, shelf).then(() => {
          book.shelf = shelf;

          this.setState(state => ({
            books: state.books.filter(b => b.id !== book.id).concat([book]),
          }));
        });
      }
    });
  }
  render() {
    return (
      <div className="app">

      <Switch>
        <Route path="/search" render={() => (
          <SearchPage books={this.state.books}
                      filterBooks={this.filterBooks}
                      changeBookShelf={this.changeBookShelf}
          />
        )}/>

        <Route path="/" exact render={() => (
          <HomePage books={this.state.books}
                    filterBooks={this.filterBooks}
                    changeBookShelf={this.changeBookShelf}
          />


        )}/>
         <Route path="*" render ={() => <div>404 Page Not Found </div>} /> 
        </Switch>
      </div>
    );
  }
}

export default BooksApp
