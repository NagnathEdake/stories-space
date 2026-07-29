import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import FriendStoryForm from "./Persons/FriendStoryForm";
import FriendStoriesList from "./Persons/FriendStoriesList";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<FriendStoryForm />} />
            <Route path="/list" element={<FriendStoriesList />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
