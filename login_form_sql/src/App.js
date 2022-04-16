import './App.css';
import { useState } from 'react';
import Axios from 'axios';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const addUser = () => {
    Axios.post('http://localhost:8080/insert', {
      name: name,
      email: email,
    }).then(() => {
      console.log('user added');
    });
  };

  return (
    <div>
      <div className="form">
        <label>Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label>Email:</label>
        <input
          type="text"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />

        <button className="btn" onClick={addUser}>
          Add User
        </button>
      </div>
    </div>
  );
}

export default App;
