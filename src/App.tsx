import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import UserData from "./components/UserData/UserData";
import { userType } from "./types/type";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const [user, setuser] = useState<userType>();
  const handleUserChange = (user: userType) => {
    setuser(user);
  };

  useEffect(() => {
    document.body.className = `${darkMode ? "dark" : "light"}`;
  }, [darkMode]);

  return (
    <div className="app">
      <div className="container">
        <Header toggleDarkMode={toggleDarkMode} darkmode={darkMode} />
        <SearchBar saveUserData={handleUserChange} />
        <UserData />
      </div>
    </div>
  );
}

export default App;
