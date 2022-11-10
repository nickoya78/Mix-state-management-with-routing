import React from "react";
import { useLocation } from "react-router-dom";

export default function Home(props) {
  const location = useLocation();
  console.log(props, "props");
  console.log(location, "useLocation Hook");
  const detail = location.state?.detail;
  return (
    <div className="home">
      <h3>Home Page</h3>
      <h1>{detail ? detail.title : "Go to Home"}</h1>
    </div>
  );
}
