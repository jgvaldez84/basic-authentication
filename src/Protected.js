import React, { useEffect } from "react";
import Auth from "aws-amplify";
import Container from "./Container";

const Protected = (props) => {
  useEffect(() => {
    Auth.currentAuthenicatedUser().catch(() => {
      props.history.push("/profile");
    });
  }, []);
  return (
    <Container>
      <h1>Protected Route</h1>
    </Container>
  );
};

export default Protected;
