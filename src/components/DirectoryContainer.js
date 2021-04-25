import React, { Component } from "react";
import FilterForm from "./FilterForm";
import ResultList from "./ResultList";
import API from "../utils/API";
import "../styles/Directory.css"

class DirectoryContainer extends Component {
  state = {
    filter: "",
    results: []
  };

  // When this component mounts, pull random user list
  componentDidMount() {
    this.getUsers(10);
  }

  getUsers = (numUsers) => {
    API.search(numUsers)
      .then(res => this.setState({ results: res.data.results }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <div className="header">
          <h1>Employee Directory</h1>
          <p>Click on carrots to filter by heading or use the search box to narrow your results.</p>
        </div>
        <nav className="navbar navbar-expand navbar-light bg-light">
          <div className="navbar-collapse row" id="navbarNav">
            <div className="searchbox">
              <FilterForm
                filter={this.state.filter}
                handleInputChange={this.handleInputChange}
              />
              {console.log(this.state.results)}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default DirectoryContainer;
