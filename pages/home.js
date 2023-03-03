import React, { useState, useEffect } from 'react';
import { auth } from './firebase';

const HomePage = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const userDetails = localStorage.getItem("userDetails");
    //const parsedItem = JSON.parse(savedItem);
    if (!userDetails) {
      window.location.href = '/loginpage'; // redirect to login page if user is not logged in
    } else {
      setLoggedIn(true);
      console.log('stored information \n', JSON.parse(userDetails));
    }
  }, []); // run this effect only on mount

  if (!loggedIn) {
    return <p>You are not logged in. Redirecting to login page...</p>;
  }

  return (
    <div className="home-page">
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
    </div>
  );
};

export default HomePage;

