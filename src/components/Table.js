import React from "react";
import DataCard from "./DataCard";
import "../styles/Table.css";

function Table({ headings, users, handleSort }) {
  return (
    <div className="datatable mt-5">
      <table
        id="table"
        className="table table-striped table-hover table-condensed"
      >
        <thead>
          <tr>
            {headings.map(({ name, width }) => {
              return (
                <th
                  className="col"
                  key={name}
                  style={{ width }}
                  onClick={() => {
                    handleSort(name.toLowerCase());
                  }}>
                  {name}
                </th>
              );
            })}
          </tr>
        </thead>

        <DataCard users={users} />
      </table>
    </div>
  );
}

export default Table;
