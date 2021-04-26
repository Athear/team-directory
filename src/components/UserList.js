import React, { useReducer } from "react";
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
      <tbody>
      {allUsers.map(user=>{
        return(
        <tr key={user.login.uuid}>
          <td>
            <img src={user.picture.thumbnail} />
          </td>
          <td>
            {`${user.name.first} ${user.name.last}`}
          </td>
          <td>
            {user.phone}
          </td>
          <td>
            {user.email}
          </td>
          <td>
            {user.dob.date}
          </td>
        </tr>
        )
      })}
      </tbody>
    </table>
  );
}

export default UserList;
