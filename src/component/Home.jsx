import React from "react";

import { Outlet, Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page ">
      <div
        className="container home d-flex flex-column justify-content-center align-items-center"
        style={{ height: "90vh" }}
      >
        <div>
          <div className="h2 text-white ">Life is a Story</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
