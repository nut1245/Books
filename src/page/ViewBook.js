import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import BookDetail from "../component/BookDetail";

function ViewBook(props) {
  const params = useParams();
  useEffect(() => {
  
    props.getBooks(params.isbn);
  }, );


  function renderDetailbook() {
    if (props.books)
      return (
        <div>
          <BookDetail
            thumbnailUrl={props.books.thumbnailUrl}
            title={props.books.title}
            isbn={props.books.isbn}
            pageCount={props.books.pageCount}
            shortDescription={props.books.shortDescription}
            status={props.books.status}
            authors={props.books.authors}
          />
          
        </div>
      );
  }
  return <div>{renderDetailbook()}</div>;
}

export default ViewBook;
