import React from "react";
import UserList from "../components/UserList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "sajal",
      image: "https://source.unsplash.com/collection/190727/1600x900",
      places: 3
    }
  ];
  return <UserList items={USERS} />;
};

export default Users;
