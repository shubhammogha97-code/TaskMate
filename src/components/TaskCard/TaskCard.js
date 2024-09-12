import React from "react";
import Tag from "../Tag/Tag";
import "./TaskCard.css";
import deleteIcon from "../../assets/delete.png"

export default function TaskCard() {
  
  return (
    <article className="task_card">
      <p className="task_text">This is a sample Text</p>
      <div className="task_card_bottom_line">
        <div className="task_card_tags">
          <Tag tagName="HTML" />
          <Tag tagName="CSS" />
          <Tag tagName="React JS"/>
        </div>
        <div className = "task_delete">
          <img src={deleteIcon} className="delete_icon" alt="delete"/>
        </div>
      </div>
    </article>
  );
}
