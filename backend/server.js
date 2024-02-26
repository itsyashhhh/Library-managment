const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 5002;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MySQL Connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'library',
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});
app.get('/books', (req, res) => {
    connection.query('SELECT title, author, subject, publish_year', (error, results, fields) => {
      if (error) {
        console.error('Error fetching books:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json(results);
      }
    });
  });
  
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });