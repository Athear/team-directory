import React from "react";

function UserList(props) {
  const allUsers = props.users

  const handleClick = (column) =>{
    console.log(allUsers);
  }

  return (
    <table>
      <thead>
        <tr>
          <th onClick={handleClick}>
            Image
          </th>
          <th>
            Name
          </th>
          <th>
            Phone
          </th>
          <th>
            Email
          </th>
          <th>
            DOB
          </th>
        </tr>
      </thead>

    </table>
  );
}

export default UserList;
