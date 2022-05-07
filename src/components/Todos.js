import React from "react";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";

const Todos = (props) => {
    return (
        <section className="todos">
            {props.todos.map((todo) => (
                <Todo
                    key={uuidv4()}
                    todo={todo}
                    id={todo.id}
                    onRemoveTodo={props.onRemoveTodo}
                />
            ))}
        </section>
    );
};

export default Todos;
