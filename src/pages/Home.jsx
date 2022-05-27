import React from "react";
import InputBox from '../components/InputBox';
import ToDoList from '../components/ToDoList';

const Home = () => (
    <div className="todoContainer">

        <InputBox />

        <ToDoList />

        <ToDoList />
    </div>
);

export default Home;