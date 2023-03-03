import { NextPage } from "next";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { useRouter } from "next/router";
import { useState } from "react";
import { auth } from "./firebase";
import styles from '@/styles/.module.css'

const HomePage: NextPage = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const logOut = async () => {
    signOut(auth);
    router.push("/login");
  };

  onAuthStateChanged(auth, (event: User | null) => {
    setLoading(true);
    if (event?.email) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
      router.push("/login");
    }
    setLoading(false);
  });

  return (
    <div className="home-page">
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>

      {!loading && loggedIn && <button onClick={logOut}>Logout</button>}
    </div>
  );
};

export default HomePage;
