import React, { useState, useReducer } from "react";
import ToDOList from "./ToDOList";
import { addTodo, deleteTodo,clearTodo } from "../actions";
import { useDispatch } from "react-redux";

function TodoComponent() {
  const [text, settext] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="Search">
      <div>
        <input type="text" onChange={(e) => settext(e.target.value)} />
        <button onClick={() => dispatch(addTodo(text))}>
          Submit
        </button>
      </div>
      <ToDOList/>
      <button onClick={() => dispatch(clearTodo())}>
        Clear All
      </button>
    </div>
  );
}

export default TodoComponent;
