import React from 'react';
import {observer} from "mobx-react-lite";
import {TodoView} from "./TodoView";
import {TodoForm} from "./TodoForm";
import {todoStore} from "../todoStore";

export const Todo = observer(({ todo }) => {
    let Component;
    if(todo.editing) {
        Component = TodoForm
    } else {
        Component = TodoView
    }
    return(
        <div className="level">
            <div className="level-left is-expanded">
                <div className="level-item">
                    <label className="checkbox">
                        <input type="checkbox" checked={todo.done} onChange={todo.toggleDone}/>
                    </label>
                </div>
                <div className="level-item">
                    <Component todo={todo} />
                </div>
            </div>
            <div className="level-right">
                <div className="level-item">
                    <div className="buttons has-addons">
                        <button className="button is-info" onClick={todo.toggleEdit}>
                            Edit
                        </button>
                        <button className="button is-danger" onClick={() => todoStore.delete(todo)}>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )

});