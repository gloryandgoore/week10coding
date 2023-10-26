import React from "react";

const UserPosts = ({ posts }) => {
  return (
    <div>
      <h1>User Posts</h1>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>{post}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserPosts;
