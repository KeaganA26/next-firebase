import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { useRouter } from "next/router";
import { useState } from "react";
import { auth } from "./firebase";

const HomePage = () => {
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
  // useEffect(() => {
  //   const userDetails = localStorage.getItem("userDetails");
  //   //const parsedItem = JSON.parse(savedItem);
  //   if (!userDetails) {
  //     window.location.href = "/login"; // redirect to login page if user is not logged in
  //   } else {
  //     setLoggedIn(true);
  //     console.log("stored information \n", JSON.parse(userDetails));
  //   }
  // }, []); // run this effect only on mount

  // if (!loggedIn && !loading) {
  //   return <p>You are not logged in. Redirecting to login page...</p>;
  // }

  return (
    <div className="home-page">
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>

      {!loading && loggedIn && <button onClick={logOut}>Logout</button>}
    </div>
  );
};

export default HomePage;
