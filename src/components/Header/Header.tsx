import "./header.css";
import light from "../../../public/images/lightIcon.svg";
import dark from "../../../public/images/darkIcon.svg";

type HeaderProps = {
  darkmode: boolean;
  toggleDarkMode: () => void;
};

const Header = (props: HeaderProps) => {
  return (
    <div className="header">
      <h1 className="name">devfinder</h1>
      <button className="toggle" onClick={props.toggleDarkMode}>
        {props.darkmode ? "Light" : "Dark"}
        {props.darkmode ? (
          <img src={light} alt=""></img>
        ) : (
          <img src={dark} alt=""></img>
        )}
      </button>
    </div>
  );
};

export default Header;
