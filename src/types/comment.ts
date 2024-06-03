// comment.ts

export interface Comment {
    id: string;
    owner?: string;
    content?: string;
    createdAt?: Date;
    fileId?: string; // This property will hold the ID of the file associated with the comment
    fileTitle?: string; // Title of the file associated with the comment
    fileUrl?: string; // URL of the file associated with the comment
    fileDownloadUrl?: string; // Download URL of the file associated with the comment
    fileType?: string; // Type of the file associated with the comment
}
