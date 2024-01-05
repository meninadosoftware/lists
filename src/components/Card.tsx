import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

function ListCard({ id, title, text }) {
  const navigate = useNavigate();

  const goToList = () => {
    if (id === 1) {
      navigate("/lists/weekly");
    } else if (id === 2) {
      navigate("/lists/monthly");
    } else {
      navigate("/lists/yearly");
    }
  };
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <i className="ri-list-check ri-5x icon-card"></i>
        <Card.Body>
          <Card.Title style={{ color: "black", fontWeight: "bold" }}>
            {title}
          </Card.Title>
          <hr></hr>
          <Card.Text>{text}</Card.Text>
          <Button value={id} className="btn" onClick={goToList}>
            <i className="ri-arrow-right-line"></i>
            Ver mais
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default ListCard;
