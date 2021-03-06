import React, { Component } from "react";
import FilterForm from "./FilterForm";
import UserList from "./UserList";
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
      .then(res => this.setState({ results: res.data.results.map((user)=>{
        return(
          {
            uuid:user.login.uuid,
            firstName: user.name.first,
            lastName: user.name.last,
            phone: user.phone,
            email: user.email,
            dob: new Date(user.dob.date).toLocaleDateString(),
            age: user.dob.age,
            thumbnail : user.picture.medium
          }
        )
      })}))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleFilter = (obj) =>{
    const objValues = Object.values(obj)
    let doesContain=false;
    objValues.forEach((currentString)=>{
      if(!(doesContain || currentString.toString().toLowerCase().includes(this.state.filter.toLowerCase()))){
        doesContain=false;
      }else{
        doesContain=true;
      }
    })
    return doesContain;
  }

  render() {
    return (
      <div>
        <div className="header">
          <h1>Employee Directory</h1>
          <p>Click on a header to sort or use the search box to narrow your results.</p>
        </div>
        <nav className="navbar navbar-expand navbar-light bg-light">
          <div className="navbar-collapse row" id="navbarNav">
            <div className="searchbox">
              <FilterForm
                filter={this.state.filter}
                handleInputChange={this.handleInputChange}
              />
            </div>
          </div>
        </nav>
        <UserList users={this.state.results.filter(user=>{return this.handleFilter(user)})} />
      </div>
    );
  }
}

export default DirectoryContainer;
