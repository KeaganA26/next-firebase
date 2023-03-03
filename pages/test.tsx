import { NextPage } from "next";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { useRouter } from "next/router";
import { useState } from "react";
import { auth } from "./firebase";
import styles from "@/styles/Test.module.css";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  const images = [
    "https://via.placeholder.com/600x400/ff4136/ffffff?text=Image+1",
    "https://via.placeholder.com/600x400/0074d9/ffffff?text=Image+2",
    "https://via.placeholder.com/600x400/3d9970/ffffff?text=Image+3",
    "https://via.placeholder.com/600x400/ff851b/ffffff?text=Image+4",
    "https://via.placeholder.com/600x400/b10dc9/ffffff?text=Image+5",
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={styles["color-theme"]}>
      <nav className={styles.nav}>
        <ul>
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
      </nav>
      <main className={styles.main}>
        <div
          style={{ backgroundColor: "red", height: 200, width: 200 }}
          // className={styles.sliderContainer}
        >
          <Slider {...sliderSettings}>
            {images.map((image, index) => {
              return (
                <div key={index}>
                  <img width={200} height={200} src={image} />
                </div>
              );
            })}
          </Slider>
        </div>
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
