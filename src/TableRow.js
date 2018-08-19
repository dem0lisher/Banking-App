import React, { Component } from 'react';

export default class TableRow extends Component {
  render() {
    return (
      <div className="table-row">
        <div className="table-item bank-id">
          {this.props.data.bank_id}
        </div>
        <div className="table-item">
          {this.props.data.ifsc}
        </div>
        <div className="table-item">
          {this.props.data.bank_name}
        </div>
        <div className="table-item bank-branch">
          {this.props.data.branch}
        </div>
        <div className="table-item bank-address">
          {this.props.data.address}
        </div>
        <div className="table-item">
          {this.props.data.district}
        </div>
        <div className="table-item">
          {this.props.data.city}
        </div>
        <div className="table-item">
          {this.props.data.state}
        </div>
      </div>
    );
  }
}
