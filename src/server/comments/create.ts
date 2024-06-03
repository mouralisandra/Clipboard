// createComment.ts

import { kv } from "@vercel/kv";
import { Comment } from "@/types/comment";

// Function to generate a unique comment ID
const generateCommentId = () => {
  return Math.random().toString(36).substr(2, 9);
};

export const createComment = async (
  owner: string,
  content: string,
  fileId?: string, 
  fileTitle?: string, 
  fileUrl?: string, 
  fileDownloadUrl?: string, 
  fileType?: string 
) => {
  // Create a new comment object
  const comment: Comment = {
    id: generateCommentId(), 
    owner,
    content,
    createdAt: new Date(),
    fileId,
    fileTitle,
    fileUrl,
    fileDownloadUrl,
    fileType
  };
  await kv.set(comment.id, comment);
  return comment;
};
