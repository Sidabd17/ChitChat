import useGetOtherUsers from "../hooks/useGetOtherUsers";
import React from "react";
import { useSelector } from "react-redux";
import User from "./User";

const tempUsers = {
  user1: {
    name: "Alice",
    id: 1,
    profilePic: "https://avatar.iran.liara.run/public",
    status: "Online",
  },
  user2: {
    name: "Bob",
    id: 2,
    profilePic: "https://avatar.iran.liara.run/public",
    status: "Offline",
  },
  user3: {
    name: "Charlie",
    id: 3,
    profilePic: "https://avatar.iran.liara.run/public",
    status: "Online",
  },
};

const Users = () => {
    useGetOtherUsers();

    const otherUsers = useSelector((state) => state.auth.otherUsers);


  return (
    <div className="mt-3 flex flex-col gap-1 overflow-y-auto w-full max-w-md">
      {otherUsers && otherUsers.length > 0 && otherUsers.map((user) => {
        return (
          <User key={user.id} user={user} />
        );
      })}
    </div>
  );
};

export default Users;
