import "./tablegrid.css";

import { Table } from "reactstrap";

const TableGrid = ({ rows, columns }) => {
  return (
    <Table hover responsive className="table">
      <thead>
        <tr>
          {columns.map((col) => (
            <th style={{ border: "none", padding: "15px" }}>
              <h3>{col.label}</h3>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr id="table-row">
            <td> {row.role}</td>
            <td>{row.location}</td>
            <td>{row.exp}</td>
            <td>{row.type}</td>
            <td className="action-btn">{row.action}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableGrid;
