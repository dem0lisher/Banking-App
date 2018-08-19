import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

export default class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {currentCity: 'BANGALORE', bankData: [], searchString: ''};
    this.getCityBankData = this.getCityBankData.bind(this);
    this.changeCurrentCity = this.changeCurrentCity.bind(this);
    this.populateBankData = this.populateBankData.bind(this);
    this.updateSearchString = this.updateSearchString.bind(this);
  }

  componentDidMount(){
    this.getCityBankData(this.state.currentCity);
  }

  getCityBankData(city){
    $.ajax({
      url: 'https://app.fyle.in/api/bank_branches',
      type: 'GET',
      data: {city: city, offset: 0, limit: 50},
      crossOrigin: true
    }).then((data) => {
        this.setState({ bankData: data });
      });
  }

  changeCurrentCity(e){
    this.getCityBankData(e.currentTarget.value);
    this.setState({ currentCity: e.currentTarget.value });
  }

  populateBankData(){
    var bankData = [];
    var searchString = this.state.searchString, i;
    if(searchString){
      searchString = searchString.toLowerCase().trim();
      for(i=0;i < this.state.bankData.length;i++){
        if(this.state.bankData[i].branch.toLowerCase().indexOf(searchString) > -1 || this.state.bankData[i].bank_name.toLowerCase().indexOf(searchString) > -1 || this.state.bankData[i].ifsc.toLowerCase().indexOf(searchString) > -1){
          bankData.push(<TableRow data={this.state.bankData[i]} key={this.state.bankData[i].ifsc} />);
        }
      }
    }
    else{
      for(i=0;i < this.state.bankData.length;i++){
        bankData.push(<TableRow data={this.state.bankData[i]} key={this.state.bankData[i].ifsc} />);
      }
    }
    return(
      <div>
        {bankData}
      </div>
    );
  }

  updateSearchString(e){
    this.setState({ searchString: e.currentTarget.value });
  }

  render() {
    return (
      <div>
        <header id="header">
          <h1>Bank Branches</h1>
        </header>
        <section>
          <div id="filter-container">
            <select id="city-selector" onChange={this.changeCurrentCity}>
              <option value="BANGALORE">Bangalore</option>
              <option value="DELHI">Delhi</option>
              <option value="MUMBAI">Mumbai</option>
              <option value="CHENNAI">Chennai</option>
              <option value="KOLKATA">Kolkata</option>
            </select>
            <div id="search-container">
              <input type="search" id="search-bar" name="search-bar" placeholder="Search" value={this.state.searchString} onInput={this.updateSearchString} />
              <img src="./search.svg" height="16px" width="16px" id="search-icon" />
            </div>
          </div>
          <div id="table-container">
            <TableHeader />
            {this.populateBankData()}
          </div>
        </section>
      </div>
    );
  }
}

