import React from "react";
import posts from "../data/posts";
import LinkButton from "../components/LinkButton";

const PostList = () => {
  return (
    <div>
      <div className="mb-5 flex justify-between items-center">
        <h1 className="text-center text-3xl">Our Posts</h1>
        <LinkButton to={"/post-create"} label={"+ Add New Post"} />
      </div>
      <div className="grid gap-4 grid-cols-4">
        {posts.map((post) => {
          return (
            <div className="shadow shadow-black rounded-md p-4 flex flex-col gap-2">
              <h1 className="text-2xl">{post.title}</h1>
              <p className="text-xl">Author : {post.author}</p>
              <p className="text-xl">
                Viewer :
                <span className="bg-green-600 px-2 py-1 ml-2 text-white rounded-sm text-sm">
                  {post.viewer}
                </span>
              </p>
              <p className="text-xl">{post.description}</p>
              <div className="flex flex-row gap-2">
                <button
                  className="text-base text-white bg-yellow-600 
                rounded-sm px-4 py-2 capitalize border border-yellow-600 border-solid cursor-pointer
                hover:bg-transparent hover:text-yellow-600 duration-300 transition-all"
                >
                  update
                </button>
                <button
                  className="text-base text-white bg-red-600 
                rounded-sm px-4 py-2 capitalize border border-red-600 border-solid cursor-pointer
                hover:bg-transparent hover:text-red-600 duration-300 transition-all"
                >
                  delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostList;
