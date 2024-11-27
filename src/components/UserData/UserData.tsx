import { userType } from "../../types/type";
import "./userData.css";

type userprops = {
  user: userType;
};

const UserData = ({ user }: userprops) => {
  return (
    <div className="userCard">
      <div className="userTop">
        <img className="avatar"></img>
        <div className="userInfo">
          <div className="userHeader">
            <h1>UserName</h1>
            <a href={`https://github.com/${user.login}`}>@UserName</a>
            <h2>{user.created_at}</h2>
          </div>
        </div>
      </div>
      <div className="userMid"></div>
      <div className="userBtm"></div>
    </div>
  );
};

export default UserData;
