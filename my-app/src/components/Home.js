import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Home(props) {
  const users = useSelector((state) => state.users.value);
  return (
    <div className="home">
      <h1>Home Page</h1>
      <h3>List of users</h3>
      <ul>
        {users.map((u) => (
          <li>
            <Link to={`/users/${u.id}`}>{u.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
