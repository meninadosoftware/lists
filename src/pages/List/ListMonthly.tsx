import React, { useEffect, useState } from "react";
import ListTable from "../../components/Table.tsx";
import Button from "../../components/Button.tsx";

export default function ListMonthly() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/listaMensal")
      .then((res) => {
        if (!res.ok) {
          throw Error("Error fetching users data");
        }
        return res.json();
      })
      .then((data) => {
        setLists(data);
      })
      .catch((err) => {});
  }, []);

  return (
    <>
      <div className="container mt-5">
        <ListTable lists={lists} />
        <Button />
      </div>
    </>
  );
}
