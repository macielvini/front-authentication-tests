import { useState } from "react";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import jwt_decoder from "jwt-decode";
import { Container, HalfContainer } from "./styles";
import Form from "../../components/Form";

export default function SignIn() {
  const [user, setUser] = useState();

  function googleLogin(credential) {
    const decoded = jwt_decoder(credential);
    setUser(decoded);
  }

  function login(e) {
    e.preventDefault();
  }
  function logOut() {
    googleLogout();
    setUser(null);
  }
  return (
    <Container>
      <HalfContainer>
        {/* <img src={user.picture} alt="user" />
          <h3>User info:</h3>
          <p>Name: {user.name}</p>
          <button onClick={logOut}>Log out</button> */}
        <Form
          onSubmit={login}
          title={"Bem-vindo"}
          subtitle={"Preencha com suas credenciais"}
          footer={"Ou faça login utilizando"}
        >
          <input type="email" name="email" placeholder="E-mail" />
          <input type="password" name="password" placeholder="Senha" />
          <button>Login</button>
        </Form>
        <GoogleLogin
          onSuccess={(res) => googleLogin(res.credential)}
          onError={(error) => console.log("Login failed: ", error)}
          useOneTap={true}
        />
      </HalfContainer>
      <HalfContainer>
        <div className="img-container">
          <img
            // https://images.unsplash.com/photo-1676372971824-ed309f425e21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80
            src="https://images.unsplash.com/photo-1588420343618-6141b3784bce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80"
            alt="abstrato"
          />
        </div>
      </HalfContainer>
    </Container>
  );
}
