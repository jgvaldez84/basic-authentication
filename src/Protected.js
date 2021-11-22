import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Auth } from "aws-amplify";
import Container from "./Container";

const Protected = () => {
  const navigate = useNavigate();
  useEffect(() => {
    Auth.currentAuthenticatedUser().catch(() => {
      navigate("/profile");
    });
  }, []);
  return (
    <Container>
      <h1>if you made it here, that means you signed in!</h1>
    </Container>
  );
};

export default Protected;
