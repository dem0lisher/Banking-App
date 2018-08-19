import React from 'react';

const TableHeader = ({props}) => {
  return (
    <div className="table-header-row">
      <div className="table-header-item bank-id">
        Bank Id
      </div>
      <div className="table-header-item">
        IFSC Code
      </div>
      <div className="table-header-item">
        Bank Name
      </div>
      <div className="table-header-item bank-branch">
        Branch
      </div>
      <div className="table-header-item bank-address">
        Address
      </div>
      <div className="table-header-item">
        District
      </div>
      <div className="table-header-item">
        City
      </div>
      <div className="table-header-item">
        State
      </div>
    </div>
  );
}

export default TableHeader;