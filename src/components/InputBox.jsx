import React from "react";

const InputBox = () => (
    <div className="todoInputBox">
        <input 
            type= "text"
            name = "todo" 
            placeholder="텍스트 입력" 
            className="inputbox"
        />

        <button type= "submit" className="inputAddBtn">Add</button>
    </div>
);

export default InputBox;