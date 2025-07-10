import React from "react";
import { useHistory } from "react-router-dom";
import { useUserContext } from "../../context/user_context"; // ✅ fixed path
import "./Home.css";

export default function Home() {
  const { myUser, loginWithRedirect } = useUserContext();
  const history = useHistory();

  const handleClick = () => {
    if (myUser) {
      history.push("/products");
    } else {
      alert("⚠️ You need to log in first.");
      loginWithRedirect();
    }
  };

  return (
    <div className="info">
      <div className="content">
        <div className="head">
          <h1>Ready for new experience</h1>
          <p>Buy your next device at reasonable cost</p>

          <button onClick={handleClick}>Get Started</button>
        </div>
      </div>
      <div className="pic"></div>
    </div>
  );
}
