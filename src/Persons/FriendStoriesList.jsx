import React, { useEffect, useState } from "react";
import { ref, onValue, remove } from "firebase/database";
import { db } from "../firebaseConfig";

const FriendStoriesList = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const friendsRef = ref(db, "friends");
    onValue(friendsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const friendsList = Object.entries(data).map(([id, story]) => ({
          id,
          ...story,
        }));
        setStories(friendsList);
        // console.log(friendsList);
      } else {
        setStories([]);
      }
    });
  }, []);

  const deleteFriend = async (friendId) => {
    const friendRef = ref(db, `friends/${friendId}`);
    try {
      await remove(friendRef);
      alert("Friend deleted!");
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Friend Stories</h2>
      {stories.length === 0 ? (
        <p>No stories yet.</p>
      ) : (
        stories.map((story) => (
          <div key={story.id} className="bg-gray-100 p-4 mb-4 rounded shadow">
            <h3 className="font-semibold text-lg mb-2">{story.friendName}</h3>
            <p>
              <strong>Relation:</strong> {story.relation}
            </p>
            <p>
              <strong>First Memory:</strong> {story.firstMemory}
            </p>
            <p>
              <strong>Personality:</strong> {story.personality}
            </p>
            <p>
              <strong>Best Moment:</strong> {story.bestMoment}
            </p>
            <button
              className="btn btn-primary"
              onClick={() => deleteFriend(story.id)}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default FriendStoriesList;
