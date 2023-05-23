import React, { useState } from 'react';
import { useHref } from "react-router-dom";
import axios from "axios";

import './Style.css';

export default function Signup(props) {

  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('/api/users/reg', {
      username, email, password
    });
    if (response && response.status === 200) {
      alert("Hello");
      window.location.href = '/';
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username    </label>
          <input type="text" name="username" onChange={(e) => setUserName(e.target.value)} />
        </div>
        <div>
          <label>Email </label>
          <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div>
          <label>Password </label>
          <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
        </div>

        <button type="submit"> Signup </button>
      </form>
    </div>
  );
}
