import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      ref={ref}
      className={`message ${message.senderId === currentUser.uid && "owner"}`}
    >
      <div className="messageInfo">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>{message.text}</p>
        {message.file &&
          <div>
            <a href={message.file} download>File</a>
            <img src={message.file} alt="" style={{ display: message.file.endsWith('.jpg' || '.png' || '.gif') ? 'block' : 'none' }} />
            <embed src={message.file} type="application/pdf" width="100%" height="600px" style={{ display: message.file.endsWith('.pdf') ? 'block' : 'none' }} />
            <audio controls src={message.file} style={{ display: message.file.endsWith('.mp3') ? 'block' : 'none' }}></audio>
            <video controls src={message.file} width="320" height="240" style={{ display: message.file.endsWith('.mp4') ? 'block' : 'none' }}></video>
          </div>
        }

      </div>
    </div>
  );
};

export default Message;
