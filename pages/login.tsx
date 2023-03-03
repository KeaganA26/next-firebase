import React, { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { useRouter } from "next/router";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const router = useRouter();

  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setLoggedIn(true);
      // const userDetails = {
      //   email: email,
      //   password: password
      // }
      // localStorage.setItem('userDetails', JSON.stringify(userDetails));
      router.push("/home");
    } catch (error: any) {
      setError(error?.message ?? "Unknown error");
    }
  };

  // useEffect(() => {
  //   const userDetails = localStorage.getItem("userDetails"); // get the current user
  //   if (userDetails) {
  //     setLoggedIn(true);
  //     window.location.href = "/home"; // redirect to home page if user is already logged in
  //   }
  // }, [loggedIn]);

  return (
    <div className="login-page">
      <h1>Login Page</h1>

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
      <button type="submit" onClick={signIn}>
        Login
      </button>

      {error && <p>{error}</p>}
    </div>
  );
};

export default LoginPage;
