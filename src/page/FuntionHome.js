import React, { useEffect } from 'react';
import BookPosts from '../component/BookPost';

function FunctionHome(props) {
  const handledOnLoad = () => {
    props.handledOnLoad();
  };
  useEffect(() => {
    handledOnLoad();
  }, );
  function book() {
    return props.books.map(function (book) {
      return (
        <BookPosts
        thumbnailUrl={book.thumbnailUrl}
        title={book.title}
        isbn={book.isbn}
        pageCount={book.pageCount}
        shortDescription={book.shortDescription}
        status={book.status}
        authors={book.authors}
        />
      );
    });
  }
 
  return <div className='container'><div className='row col-12'>{book()}</div></div>;
}

export default FunctionHome;
