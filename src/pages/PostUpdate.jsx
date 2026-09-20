import React from "react";
import LinkButton from "../components/LinkButton";

const PostUpdate = () => {
  return (
    <div>
      <div className="mb-5 flex justify-between items-center">
        <LinkButton to={"/post-list"} label={"Go Back"} />
        <h1 className="text-center text-3xl">Update Form</h1>
      </div>

      <form className="grid grid-cols-1 gap-4 shadow shadow-black rounded-md p-8">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="title" className="text-xl capitalize text-black">
              title
            </label>
            <input
              type="text"
              id="title"
              placeholder="Enter post title"
              className="px-4 py-2 border border-solid border-black rounded-sm text-base"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="author" className="text-xl capitalize text-black">
              author
            </label>
            <input
              type="text"
              id="author"
              placeholder="Enter post author"
              className="px-4 py-2 border border-solid border-black rounded-sm text-base"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="viewer" className="text-xl capitalize text-black">
            viewer
          </label>
          <input
            type="text"
            id="viewer"
            placeholder="Enter post viewer"
            className="px-4 py-2 border border-solid border-black rounded-sm text-base"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="description"
            className="text-xl capitalize text-black"
          >
            description
          </label>
          <textarea
            id="description"
            placeholder="Enter post description"
            className="px-4 py-2 h-60 resize-none border border-solid border-black rounded-sm text-base"
          />
        </div>
        <button
          type="submit"
          className="inline-block px-4 py-2 bg-black text-white capitalize 
        rounded-sm border border-black border-solid cursor-pointer
        hover:bg-transparent hover:text-black duration-300 transition-all"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default PostUpdate;
