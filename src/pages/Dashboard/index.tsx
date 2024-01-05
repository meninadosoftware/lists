import React from "react";
import ListCard from "../../components/Card.tsx";

export default function Dashboard() {

 
  return (
    <>
      <div className="Dashboard">
        <span className="Dashboard-letter">
          <i className="ri-file-list-3-line icon-list"></i>
          DASHBOARD
        </span>
      </div>
      <p className="title">Listas de compras</p>
      <div className="container text-center">
        <div className="row">
          <div className="col-md-4">
            <div className="d-flex justify-content-between mt-4">
              <ListCard id={1} title={"Compras Semanais"} text={"Clique no botão ver mais para verificar os detalhes das compras semanais."} />
            </div>
          </div>
          <div className="col-md-4">
            <div className="d-flex justify-content-between mt-4">
              <ListCard id={2} title={"Compras Mensais"} text={"Clique no botão ver mais para verificar os detalhes das compras mensais."} />
            </div>
          </div>
          <div className="col-md-4">
            <div className="d-flex justify-content-between mt-4">
              <ListCard id={3} title={"Compras Anuais"} text={"Clique no botão ver mais para verificar os detalhes das compras anuais."} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
