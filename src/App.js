import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FunctionHome from "./page/FuntionHome";
import ViewBook from "./page/ViewBook";
function App() {
  const [books, settingBooks] = useState([]);
  const thisbooks = async (
  ) => {
    const response = await axios.get
    ("https://se-book-store.herokuapp.com/api/v1/books",
    {
    });
    settingBooks(response.data);
  };
  const getBooks = async (isbn) => {
    //console.log(username);
    const response = await axios.get(
      `https://se-book-store.herokuapp.com/api/v1/books/${isbn}`,
      {}
    );
    settingBooks(response.data);
  };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FunctionHome handledOnLoad={thisbooks} books={books} />}/>
        <Route
          path="/BookDetail/:isbn"
          element={<ViewBook getBooks={getBooks} books={books}  />}
        />
      </Routes>
    </Router>
  );
}
export default App;