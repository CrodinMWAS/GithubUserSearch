import "./searchBar.css";
import searchIcon from "../../../public/images/icon-search.svg";
import { FormEvent, useEffect, useState } from "react";
import { userType } from "../../types/type";

type searchBarProps = {
  saveUserData: (user: userType) => void;
};

const SearchBar = ({ saveUserData }: searchBarProps) => {
  const [user, setuser] = useState("");

  const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setuser(e.target.value);
  };

  const fetchUser = async (user: string) => {
    try {
      const response = await fetch(`https://api.github.com/users/${user}`);
      if (!response.ok) {
        throw new Error();
      }
      const data = await response.json();
      console.log(data);
      saveUserData(data);
    } catch (error) {
      console.error("error:", error);
    }
  };

  useEffect(() => {
    fetchUser("CrodinMWAS");
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    fetchUser(user);
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <img className="searchIcon" src={searchIcon} alt="" />
      <input
        type="text"
        className="username"
        value={user}
        onChange={handleUserChange}
        placeholder="Search Github username..."
      />
      <button className="searchBtn">Search</button>
    </form>
  );
};

export default SearchBar;
