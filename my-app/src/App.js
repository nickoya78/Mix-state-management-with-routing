import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import HomePage from "./components/Home";
import NotFoundPage from "./components/NotFoundPage";
import About from "./components/About";
import User from "./components/User";

function App() {
  const [data, setData] = useState({
    id: "1",
    title: "How to pass state in react-router-dom",
    description: "dummy data passed in state",
  });

  const [detail, setDetail] = useState({
    title: "mix state management with routing",
  });
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link
              to="/"
              state={{ detail: detail }}
              usestate={{ setDetail: setDetail }}
              className="link"
            >
              <h2>Home</h2>
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              state={{ data: data }}
              usestate={{ setData: setData }}
              className="link"
            >
              <h2>About</h2>
            </Link>
          </li>
          <li>
            <Link to="/services" className="link">
              <h2>Services</h2>
            </Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:id" element={<User />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
    </Router>
  );
}

export default App;
