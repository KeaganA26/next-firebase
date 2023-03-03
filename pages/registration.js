import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';


const RegistrationPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleRegistration = async (event) => {
    event.preventDefault();
    try {
      createUserWithEmailAndPassword(auth, email, password)
      /*await firebase.auth().createUserWithEmailAndPassword(email, password);*/
    } catch (error) {
      setError(error.message);
    }
  };

  const signUp = async () => {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    console.log(res.user);
  }

  return (
    <div>
      <h1>Registration Page</h1>
      {/* <form onSubmit={handleRegistration}> */}
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button onClick={signUp} type="submit">Register</button>
      {/* </form> */}
      {error && <p>{error}</p>}
    </div>
  );
};

export default RegistrationPage;


