import React, { useEffect } from 'react';

import { useAppDispatch, useTypedSelector } from '../app/store';
import { actions as bookActions, selectAllBooks } from '../ducks/booksDuck';
import Search from '../components/Search';

const BooksContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const books = useTypedSelector(selectAllBooks);

  useEffect(() => {
    const promise = dispatch(bookActions.get());
    return () => {
      promise.abort();
    };
  }, []);

  return (
    <div>
      <h1>All Books</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}> Title: {book.title} ISBN:{book.isbn}</li>
        ))}
      </ul>
      <Search />
    </div>
  );
};

export default BooksContainer;
