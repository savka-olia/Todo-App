import React from "react";

import TodoListItem from "./todo-list-item";

const TodoList = () => {
  const items = ["Learn React", "Build awesome app"];
  return(
    <ul>
			<li><TodoListItem /></li>
			<li><TodoListItem /></li>
    </ul>
  );
};

export default TodoList;