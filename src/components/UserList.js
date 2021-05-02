import React, { useReducer } from "react";
import useSortableData from "../utils/useSortableData"
import "../styles/UserList.css"

function UserList(props) {
  const {items:allUsers,requestSort} =useSortableData(props.users)

  

  const handleClick = (column) =>{
    requestSort(column)
    console.log(allUsers);
  }

  return (
    <table>
      <thead>
        <tr>
          <th>
            Image
          </th>
          <th onClick={() =>handleClick("firstName")}>
            Name
          </th>
          <th onClick={() =>handleClick("phone")}>
            Phone
          </th>
          <th>
            Email
          </th>
          <th onClick={() =>handleClick("age")}>
            DOB
          </th>
        </tr>
      </thead>
      <tbody>
      {allUsers.map(user=>{
        return(
        <tr key={user.uuid} class="user-row">
          <td>
            <img src={user.thumbnail} />
          </td>
          <td>
            {`${user.firstName} ${user.lastName}`}
          </td>
          <td>
            {user.phone}
          </td>
          <td>
            {user.email}
          </td>
          <td>
            {user.dob}
          </td>
        </tr>
        )
      })}
      </tbody>
    </table>
  );
}

export default UserList;
