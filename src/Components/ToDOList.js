import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../actions";

function ToDOList() {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.TodoReducer.list);
  return (
    <div>
      {list.map(function (item, index) {
        return (
          <div key={index}>
            {item.data}
            <button onClick={() => dispatch(deleteTodo(item.id))}>
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default ToDOList;
