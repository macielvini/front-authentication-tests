import { useEffect } from "react";
import jwt_decode from "jwt-decode";

function App() {
  function handleCallBackResponse(response) {
    let userObject = jwt_decode(response.credential);
    console.log(userObject);
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "308158880130-kvb57ufdsgbm3905027u0enaaupa7g68.apps.googleusercontent.com",
      callback: handleCallBackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  return (
    <div className="App">
      <div id="signInDiv"></div>
    </div>
  );
}

export default App;
