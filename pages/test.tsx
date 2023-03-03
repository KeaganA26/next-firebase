import { NextPage } from "next";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { useRouter } from "next/router";
import { useState } from "react";
import { auth } from "./firebase";
import styles from "@/styles/Test.module.css";

const Test: NextPage = () => {
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
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.banner}>
          <ul className={styles.navLinks}>
            <li className={router.pathname === "/" ? "active" : ""}>
              <a href="/">HOME</a>
            </li>
            <li className={router.pathname === "/about" ? "active" : ""}>
              <a href="/about">ABOUT</a>
            </li>
            <li className={router.pathname === "/contact" ? "active" : ""}>
              <a href="/contact">CONTACT</a>
            </li>
            <li className={router.pathname === "/blog" ? "active" : ""}>
              <a href="/blog">BLOG</a>
            </li>
          </ul>
          <p>Click on the buttons above to navigate</p>
        </div>
      </nav>
      <main className={styles.main}>
        <div className={styles.contentContainer}>
          <h1 className={styles.title}>Welcome to my site!</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae
            sapien elit. Sed feugiat elit in urna aliquet, a pulvinar nunc
            vestibulum. Donec id dapibus lectus.
          </p>
          {!loading && loggedIn && (
            <button className={styles.button} onClick={logOut}>
              Logout
            </button>
          )}
        </div>
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2023</p>
      </footer>
    </div>
  );
};

export default Test;
