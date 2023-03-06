import { NextPage } from "next";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { useRouter } from "next/router";
import { useState } from "react";
import { auth } from "./firebase";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Navigation2 from "./navigation2";
import styles from "@/styles/Test.module.css";

SwiperCore.use([Pagination, Navigation]);

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
    <div className={styles.container}>
      <Navigation2 />
      <main className={styles.main}>
        <div className={styles.contentContainer}>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{ clickable: true }}
            navigation
          >
            <SwiperSlide>
              <img src="/image1.jpg" alt="Image 1" className={styles.slideImage} />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/image2.jpg" alt="Image 2" className={styles.slideImage} />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/image3.jpg" alt="Image 3" className={styles.slideImage} />
            </SwiperSlide>
          </Swiper>
          <h1 className={styles.title}>Welcome to my site!</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae sapien elit. Sed feugiat elit in urna aliquet, a pulvinar nunc vestibulum. Donec id dapibus lectus.
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

export default HomePage;
