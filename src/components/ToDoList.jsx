import React from "react";
import ToDo from './ToDo'

const ToDoList = () => (
    <div className="todoList">
        <p className="listTitle">제목</p>
        <ul className="listUl">
            <ToDo />

            <ToDo />

            <ToDo />
        </ul>
    </div>
);

export default ToDoList;