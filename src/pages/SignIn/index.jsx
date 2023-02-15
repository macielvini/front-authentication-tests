import { useState } from "react";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import jwt_decoder from "jwt-decode";

export default function SignIn() {
  const [user, setUser] = useState();

  function googleLogin(credential) {
    const decoded = jwt_decoder(credential);
    setUser(decoded);
  }

  function logOut() {
    googleLogout();
    setUser(null);
  }
  return (
    <div>
      {user ? (
        <div>
          <img src={user.picture} alt="user" />
          <h3>User info:</h3>
          <p>Name: {user.name}</p>
          <button onClick={logOut}>Log out</button>
        </div>
      ) : (
        <GoogleLogin
          onSuccess={(res) => googleLogin(res.credential)}
          onError={(error) => console.log("Login failed: ", error)}
          useOneTap={true}
        />
      )}
    </div>
  );
}
