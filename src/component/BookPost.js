import React from "react";
import { Link } from "react-router-dom";
function BookPosts({thumbnailUrl,title,isbn,pageCount,status, authors}) {
  return (
    
    <div className="col-sm-3 g-4">
      <div className="card h-100 ">
        <img src={thumbnailUrl} className="card-img-top" alt="..." />
        <div className="card-body">
        <Link to={`/BookDetail/${isbn}`}>
          <h6 className="card-text">รหัส : {isbn}</h6>
            </Link>
          <h6 className="card-text">จำนวนหน้า : {pageCount}</h6>
          <h6 className="card-text">รหัส : {isbn}</h6>
          <h6 className="card-text-Bold">สถานะ : {status}</h6>
          <h6 className="card-text-bold">ผู้แต่ง : {authors}</h6>
        </div>
      </div>
    </div>
  
  )
  }
export default BookPosts;
