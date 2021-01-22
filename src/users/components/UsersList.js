import React from "react";
import UserItem from "./UserItem";
import "./UserList.css";
const UsersList = (props) => {
  if (props.items.length === 0) {
    return <h1>No user found</h1>;
  } else {
    return (
      <ul>
        <li className={"users-list"}>
          {props.items.map((user) => {
            return (
              <UserItem
                key={user.id}
                id={user.id}
                image={user.image}
                name={user.name}
                placeCount={user.places}
              />
            );
          })}
        </li>
      </ul>
    );
  }
};

export default UsersList;
