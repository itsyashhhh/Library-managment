// Page.js

import React, { useState, useEffect } from 'react';
import './page.css';

function Page() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch('http://localhost:5002/books');
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  return (
    <div>
      <h1>Books</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Subject</th>
            <th>Publish Year</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.subject}</td>
              <td>{book.publish_year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Page;