import React, { useEffect } from "react";
import { Auth } from "aws-amplify";
import Container from "./Container";

const Protected = (props) => {
useEffect(() => {
  Auth.currentAuthenticatedUser()
  .catch(()=>{
    props.history.push('/profile')
  })
}, [])
return (
  <Container>
    <h1>if you made it here, that means you signed in!</h1>
  </Container>
);
}

export default Protected;
