import React, { useState } from "react";
import { Comment } from "@/types/comment";

interface Props {
  onAddComment: (comment: Comment) => void;
}

// Function to generate a unique comment ID
const generateCommentId = () => {
  return Math.random().toString(36).substr(2, 9);
};

const CommentInputForm: React.FC<Props> = ({ onAddComment }) => {
  const [content, setContent] = useState("");
  const [owner, setOwner] = useState(""); // State for the comment owner

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newComment: Comment = {
      id: generateCommentId(),
      content: content,
      owner: owner, // Include the owner property in the comment object
      createdAt: new Date(),
    };
    onAddComment(newComment);
    setContent("");
    setOwner(""); // Clear the owner input field after submitting the comment
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="flex items-center bg-red-100 rounded-lg p-2">
        <input
          className="flex-grow bg-transparent border-none text-red-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Your name"
          value={owner}
          onChange={(e) => setOwner(e.target.value)} // Update the owner state
        />
        <input
          className="flex-grow bg-transparent border-none text-red-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Add a comment..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          className="bg-red-200 hover:bg-red-300 text-red-700 py-1 px-3 rounded-lg"
          type="submit"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default CommentInputForm;
