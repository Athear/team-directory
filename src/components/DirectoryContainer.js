import React, { Component } from "react";
import FilterForm from "./FilterForm";
import ResultList from "./ResultList";
import API from "../utils/API";

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
        <FilterForm
          filter={this.state.filter}
          handleInputChange={this.handleInputChange}
        />
        {console.log(this.state.results)}
      </div>
    );
  }
}

export default DirectoryContainer;