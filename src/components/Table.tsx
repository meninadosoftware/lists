import React from "react";
import Table from "react-bootstrap/Table";

interface Lista {
  id: number;
  description: string;
  price: number;
}

interface ListProps {
  lists: Lista[];
}

const ListTable: React.FC<ListProps> = ({ lists }) => {
  const formatNumber = (q) => {
    return q.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };
  return (
    <Table responsive striped bordered>
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Valor</th>
        </tr>
      </thead>
      <tbody>
        {lists?.map((item, i) => (
          <tr>
            <td>{item.description}</td>
            <td> {formatNumber(item.price)}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ListTable;
