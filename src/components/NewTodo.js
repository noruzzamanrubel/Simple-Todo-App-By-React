import React, { useState } from "react";

const NewTodo = (props) => {
    const [todo, setTodo] = useState({
        title: "",
        desc: "",
    });

    const { title, desc } = todo;

    const handleChange = (e) => {
        const name = e.target.name;
        setTodo((oldTodo) => {
            return {
                ...oldTodo,
                [name]: e.target.value,
            };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onAddTodo(todo);
        setTodo({ title: "", desc: "" });
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="form-field">
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={title}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-field">
                <label htmlFor="desc">Description</label>
                <textarea
                    type="text"
                    id="desc"
                    name="desc"
                    value={desc}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Add Todo</button>
        </form>
    );
};

export default NewTodo;
