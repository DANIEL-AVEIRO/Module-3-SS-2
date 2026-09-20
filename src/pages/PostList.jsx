import React from "react";
import posts from "../data/posts";

const PostList = () => {
  return (
    <div>
      {posts.map((post) => {
        return (
          <div className="mb-5">
            <h1>{post.title}</h1>
            <p>Author : {post.author}</p>
            <p>Viewer : {post.viewer}</p>
            <p>{post.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
