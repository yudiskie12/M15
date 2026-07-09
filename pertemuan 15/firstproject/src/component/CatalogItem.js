import React, { useState } from "react";
import { FaBookmark, FaRegBookmark, FaThumbsUp, FaRegThumbsUp } from "react-icons/fa";

function CatalogItem({ book }) {
  const [image, title, author, publisher, year] = book;
  
  // Menggunakan useState hook
  const [bookmark, setBookmark] = useState(false);
  const [likes, setLikes] = useState(() => Math.floor(Math.random() * 11)); 
  const [isLiked, setIsLiked] = useState(false);

  const check_bookmark = () => {
    setBookmark(!bookmark);
  };
  
  const handle_like = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  return (
    <div className="card text-center">
      <div className="card-body">
        <img
          src={`img/${image}`}
          alt={title}
          width="150px"
          height="200px"
          style={{ marginBottom: "10px" }}
        />
        <h5 className="card-title title">{title}</h5>
        <p className="card-text author">{author}</p>
        <p className="card-text text-muted publisher">
          {publisher} <small className="year">{year}</small>
        </p>
      </div>
      
      <div className="card-footer text-muted d-flex justify-content-between align-items-center">
        <div className="text-start" onClick={handle_like} style={{ cursor: 'pointer' }}>
          {isLiked ? <FaThumbsUp /> : <FaRegThumbsUp />} {likes} like(s)
        </div>

        <div className="text-end d-flex align-items-center gap-2">
          <span>{bookmark ? "Bookmark!" : ""}</span>
          <span onClick={check_bookmark} style={{ cursor: 'pointer' }}>
            {bookmark ? <FaBookmark /> : <FaRegBookmark />}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CatalogItem;