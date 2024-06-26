const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Rahul123*#',
  database: 'user_authentication'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

app.get('/', (req, res) => {
  res.send('Welcome to the User Authentication API');
});

app.post('/api/signin', (req, res) => {
  const { mobileNumber, name, password, confirmPassword } = req.body;
  console.log('Received data:', req.body);

  if (!mobileNumber || !name || !password || !confirmPassword) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ error: 'Passwords do not match' });
  }

  const checkMobileNumberQuery = 'SELECT * FROM users WHERE mobileNumber = ?';
  connection.query(checkMobileNumberQuery, [mobileNumber], (checkMobileNumberError, mobileNumberResults) => {
    if (checkMobileNumberError) {
      console.error('Error checking mobile number:', checkMobileNumberError);
      return res.status(500).json({ error: 'Internal server error' });
    }

    if (mobileNumberResults.length > 0) {
      return res.status(400).json({ error: 'Mobile number already exists' });
    }

    const insertUserQuery = 'INSERT INTO users (mobileNumber, name, password) VALUES (?, ?, ?)';
    connection.query(insertUserQuery, [mobileNumber, name, password], (insertUserError, insertUserResults) => {
      if (insertUserError) {
        console.error('Error inserting user:', insertUserError);
        return res.status(500).json({ error: 'Internal server error' });
      }

      return res.status(200).json({ message: 'User signed up successfully' });
    });
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
