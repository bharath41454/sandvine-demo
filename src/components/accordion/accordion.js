import React from "react";

export const Accordion = ({ title, description, handleClick, isActive }) => {
  return (
    <div className='accordion'>
      <div
        className={`title ${isActive ? "active" : ""}`}
        title={title}
        onClick={handleClick}
      >
        {title.toUpperCase()}
        <span title={title} className='placeholder'>
          {isActive ? "-" : "+"}
        </span>
      </div>
      {isActive && <div className='content'>{description}</div>}
    </div>
  );
};
