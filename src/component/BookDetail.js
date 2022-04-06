import React from "react";

  const BookDetail = ({thumbnailUrl,title,isbn,pageCount,authors,status
    
  }) => {
    return (
        <div className="col-sm-3 g-4">
        <div className="card h-100 ">
          <img src={thumbnailUrl} className="card-img-top" alt="..." />
          <div className="card-body">
          <h6 className="card-text"> {title}</h6>
            <h6 className="card-text">จำนวนหน้า : {pageCount}</h6>
            <h6 className="card-text">รหัส : {isbn}</h6>
            <h6 className="card-text-Bold">สถานะ : {status}</h6>
            <h6 className="card-text-bold">ผู้แต่ง : {authors}</h6>
          </div>
        </div>
      </div>
            
    );
  };


export default BookDetail;
