import React from "react";
import Container from "./Container";
import protectedRoute from "./ProtectedRoute";

function Protected() {
  return (
    <Container>
      <h1>Protected route</h1>
    </Container>
  );
}
export default protectedRoute(Protected);
