import React from "react";
import objectSort from "../utils/objectSort"

function UserList(props) {
  const allUsers = props.users

  const handleClick = (column) =>{
    allUsers.sort(objectSort(column))
    console.log(allUsers);
  }

  return (
    <table>
      <thead>
        <tr>
          <th>
            Image
          </th>
          <th onClick={() =>handleClick("name.first")}>
            Name
          </th>
          <th onClick={() =>handleClick("phone")}>
            Phone
          </th>
          <th>
            Email
          </th>
          <th onClick={() =>handleClick("dob.age")}>
            DOB
          </th>
        </tr>
      </thead>

    </table>
  );
}

export default UserList;
