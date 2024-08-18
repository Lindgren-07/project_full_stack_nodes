import React from "react";
import { AiTwotoneDelete, AiOutlineExclamationCircle } from "react-icons/ai";
import './style.css'
import './style-priority.css'

function Notes({ data }) {
  return (
    <>
      <li class={data.priority ? "notepad-infos-priority" : "notepad-infos"}>
        <div>
          <strong>{data.title}</strong>
          <div>
            <AiTwotoneDelete size="20"></AiTwotoneDelete>
          </div>
        </div>

        <textarea defaultValue={data.notes}></textarea>
        <span>
          <AiOutlineExclamationCircle size="20"></AiOutlineExclamationCircle>
        </span>
      </li>



    </>
  )
}

export default Notes;