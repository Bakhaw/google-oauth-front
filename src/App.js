import { useEffect } from "react";
import axios from "axios";

import logo from "./logo.svg";
import "./App.css";

function App() {
  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get("http://localhost:3002/auth/profile", {
          withCredentials: true,
        });

        console.log("response", response.data);

        return response.data;
      } catch (error) {
        console.log("error", error);
      }
    };

    getUser();
  }, []);

  const loginWithGoogle = () => {
    window.open("http://localhost:3002/auth/google/callback", "_self");
  };

  const logout = () => {
    window.open("http://localhost:3002/auth/logout", "_self");
  };

  return (
    <div className="App">
      <button onClick={loginWithGoogle}>Sign in with Google</button>

      <button onClick={logout}>Log out</button>
    </div>
  );
}

export default App;
