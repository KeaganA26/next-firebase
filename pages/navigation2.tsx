import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@/styles/Navigation.module.css";

const Navigation2 = () => {
  const router = useRouter();

  
  return (
    <nav className={styles.nav}>
      <div className={styles.banner}>
        <div className={styles.logo}>
          <Link href="/">
            <img src="images/crownlogo.png" alt="Logo" />
          </Link>
        </div>
        <ul className={styles.navLinks}>
          <li className={router.pathname === "/home" ? styles.active : ""}>
            <Link href="/home">
              <div className={`${styles.navLinkContainer} ${styles.navLink}`}>
                <span>Home</span>
              </div>
            </Link>
          </li>
          <li className={router.pathname === "/about" ? styles.active : ""}>
            <Link href="/about">
              <div className={`${styles.navLinkContainer} ${styles.navLink}`}>
                <span>About</span>
              </div>
            </Link>
          </li>
          <li className={router.pathname === "/services" ? styles.active : ""}>
            <Link href="/services">
              <div className={`${styles.navLinkContainer} ${styles.navLink}`}>
                <span>Services</span>
              </div>
            </Link>
          </li>
          <li className={router.pathname === "/contact" ? styles.active : ""}>
            <Link href="/contact">
              <div className={`${styles.navLinkContainer} ${styles.navLink}`}>
                <span>Contact</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation2;
