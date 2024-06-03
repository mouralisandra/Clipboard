"use client";
import { useState } from "react";
import { Note } from "@/types/note";
import { notFound } from "next/navigation";
import { deleteNote } from "@/server/notes/delete";
import CommentInputForm from "../forms/add-comment"; // Import the CommentInputForm component
import { Comment } from "@/types/comment"; // Import the Comment interface

const NoteCard = async ({ id }: { id: string }) => {

  const [comments, setComments] = useState<Comment[]>([]); // State to store comments
  const note: Note | null = await kv.get(id);

  const deleteNoteAction = deleteNote.bind(null, id);

  if (!note) {
    notFound();
  }

  const handleAddComment = async (comment: Comment) => {
    try {
      setComments([...comments, comment]);
      // call api to add comment
      await kv.set(comment.id, comment);
      
    } catch (error) {
      console.error("Error adding comment:", error);
      // Handle errors
    }
  };

  return (
    <div className="flex flex-col">
      <h1 className="text-4xl font-bold">{note.title}</h1>

      <div className="p-4 bg-gray-100 rounded-lg my-2 whitespace-pre">
        <h2 className="text-lg font-bold">{note.title}</h2>
        <p className="text-gray-500 text-sm">ID: {note.id}</p>
        <p className="text-gray-500 text-sm">
          {note.createdAt.toLocaleString()}
        </p>
        <p className="text-gray-700">{note.content}</p>
      </div>

      {/* Render existing comments */}
      {comments.map((comment) => (
        <div key={comment.id} className="bg-red-200 p-2 rounded-md my-2">
          <p className="text-gray-700">{comment.content}</p>
          {comment.createdAt && (
            <p className="text-gray-500 text-sm">
              Comment by: {comment.owner} - {comment.createdAt.toLocaleString()}
            </p>
          )}
        </div>
      ))}

      {/* Comment input form */}
      <CommentInputForm onAddComment={handleAddComment} />

      <form className="flex flex-col" action={deleteNoteAction}>
        <button className="text-red-500">Click here to delete this note</button>
      </form>
    </div>
  );
};

export default NoteCard;
