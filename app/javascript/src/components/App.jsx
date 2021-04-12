import React from 'react';
import {TodoList} from "./TodoList";
import {CreateTodo} from "./CreateTodo";
import {todoStore} from "../todoStore";

todoStore.fetch();

export const App = () => {

    return(
        <section className="section">
            <div className="container">
                <h1 className="title">Todos</h1>
                <CreateTodo />
                <TodoList />
            </div>
        </section>
    )
}