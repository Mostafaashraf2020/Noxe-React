import { createContext, useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import { Navigate } from "react-router-dom";

export let AuthContext = createContext(null);

export default function AuthContextProvider(props) {
  const [userData, setUserData] = useState(null);
  let saveUserData = () => {
    let encodedToken = localStorage.getItem("token");
    let decodedToken = jwtDecode(encodedToken);
    setUserData(decodedToken);
  };

  let logOut = () => {
    localStorage.removeItem("token");
    setUserData(null);
    return <Navigate to='login' />;
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      saveUserData();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ userData, saveUserData, logOut }}>
      {props.children}
    </AuthContext.Provider>
  );
}
