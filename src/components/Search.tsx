import React, { useEffect } from 'react';
import { useTypedSelector } from '../app/store';
import { selectAllBooks } from '../ducks/booksDuck';

const Search: React.FC = () => {
  const books = useTypedSelector(selectAllBooks);
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    return () => {
    };
  }, [searchTerm]);

  return (
    <div>
     Search Books by ISBN<br></br>
    <input
      type="text"
      placeholder="Search"
      value={searchTerm}
      onChange={handleChange}
    />
      <br></br>{books.filter(book => book.isbn === searchTerm)[0]?.title}
  </div>
  );
};

export default Search;
