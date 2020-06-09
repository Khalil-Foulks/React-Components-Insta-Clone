// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [commentsData, setComments] = useState(props.comments)
  console.log('From Comment Container: ',props)
  console.log('This is from commentsData',commentsData)
  

  return (
    <div>
      {/* map through the comments data and return the Comment component */}

      {
        commentsData.map(comment => {
          console.log('Comment Map:',comment)
        return <Comment key={comment.username}  comment={comment}/>
        })
      }

      <CommentInput />
    </div>
  );
};

export default CommentSection;
