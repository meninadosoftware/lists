import React from "react";
import { useNavigate } from "react-router-dom";

function Button() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/");
  };

  return (
    <>
      <button className="btn" onClick={goBack}>Voltar</button>
    </>
  );
}
export default Button;
