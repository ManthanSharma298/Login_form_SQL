const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const PORT = 8080;
const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: '15435314',
  database: 'users',
});

app.post('/insert', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  if (name.length > 0 && email.length > 0) {
    db.query(
      'INSERT INTO user (name, email) VALUES (?,?)',
      [name, email],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send('Values Inserted');
        }
      }
    );
  }
});

app.listen(PORT, () => {
  console.log(`Successfully running on PORT ${PORT}`);
});
