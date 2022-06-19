import { Checkbox } from "@material-ui/core";
import React from "react";
import "./TodoItems.css";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { setCheck } from "../features/todoSlice";

const TodoItems = ({ name, done, id }) => {
  const dispatch = useDispatch()
    const handleCheck = () => {
      dispatch(setCheck(id))        
    }
  return (
    <div className="todoItem">
      <Checkbox
        checked={done}
        color='primary'
        onChange={handleCheck}
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
      <p className={done && "todoItem--done"}>{name}</p>
    </div>
  );
};

export default TodoItems;
