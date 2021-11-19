import React, { useState, useEffect } from "react";
import { Auth } from "@aws-amplify";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import Container from "./Container";

const Profile = () => {
  useEffect =
    (() => {
      checkUser();
    },
    []);

  const [user, setUser] = useState({});
  const checkUser = async () => {
    try {
      const data = await Auth.currentUserPoolUser();
      const userInfo = { username: data.username, ...data.attributes };
      console.log(userInfo);
      setUser(userInfo);
    } catch (err) {
      console.err("error");
    }
  };
  return (
    <Container>
      <h1>Profile</h1>
      <h2>Username: {user.username}</h2>
      <h3>Email: {user.email}</h3>
      <h4>Phone: {user.phone_number}</h4>
      <AmplifySignOut /> 
    </Container>
  );
};

export default withAuthenticator(Profile);
