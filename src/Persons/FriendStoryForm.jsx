import React, { useState } from "react";
import { set, ref, push } from "firebase/database";
import { db } from "../firebaseConfig";

const FriendStoryForm = () => {
  const [formData, setFormData] = useState({
    friendName: "",
    relation: "",
    firstMemory: "",
    personality: "",
    bestMoment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newRef = push(ref(db, "friends"));
    set(newRef, formData)
      .then(() => {
        alert("Friend's story saved successfully!");
      })
      .catch((error) => {
        alert("Error saving data: " + error.message);
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 max-w-lg mx-auto bg-white shadow rounded text-center "
    >
      <h2 className="text-xl text-success font-bold mb-4">
        Share Your Friend Story
      </h2>
      {Object.keys(formData).map((field) => (
        <div
          key={field}
          className="mb-4 d-flex  align-items-start justify-content-center gap-3"
        >
          <label className="block text-capitalize font-medium mb-1">
            {field.replace(/([A-Z])/g, " $1")}
          </label>
          <textarea
            name={field}
            value={formData[field]}
            onChange={handleChange}
            rows="2"
            className="w-full border rounded p-2"
            required
          />
        </div>
      ))}
      <button
        type="submit"
        className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-600 border"
      >
        Submit Story
      </button>
    </form>
  );
};

export default FriendStoryForm;
