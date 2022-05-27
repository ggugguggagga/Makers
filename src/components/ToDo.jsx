import React from "react";

const ToDo = () => (
    <li className="todo">

        <input type= "checkbox" className="todoCheckBox" />

        <span className="todoCtx">ToDo</span>

        <button type="button" className="todoEditBtn">✏️</button>
        <button type="button" className="todoDeleBtn">🗑</button>
        
    </li>
);

export default ToDo;