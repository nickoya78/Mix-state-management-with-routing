import React from "react";
import { useLocation } from "react-router-dom";

export default function About(props) {
  const location = useLocation();
  console.log(props, "props");
  console.log(location, "useLocation Hook");
  const data = location.state?.data;
  return (
    <div className="about">
      <h3> About Page</h3>
      <h1>{data ? data.title : "Go to Home"}</h1>
      <h1>{data ? data.description : "Go to Home"}</h1>
    </div>
  );
}
