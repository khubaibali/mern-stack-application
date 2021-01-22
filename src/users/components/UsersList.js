import React from "react";
import UserItem from "./UserItem";
import Card from "../../shared/components/UIElements/Card";
import "./UserList.css";

const UsersList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h1>No user found</h1>
        </Card>
      </div>
    );
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
