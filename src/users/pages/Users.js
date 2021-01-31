import React from "react";
import UserList from "../components/UsersList";
const Users = () => {
  const USER = [
    {
      id: "u1",
      name: "Max Sharz",
      image: "https://source.unsplash.com/random",
      places: 3,
    },
  ];
  return <UserList items={USER} />;
};

export default Users;
