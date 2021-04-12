import React from 'react';
import {Todo} from "./Todo";
import {NoTodos} from "./NoTodos";
import classNames from "classnames";
import {todoStore} from "../todoStore";
import {observer} from "mobx-react-lite";

const tags = ["All", "Active", "Completed"]

export const TodoList = observer(() => {
    return(
        <div className="box todo-list">
            <NoTodos />
            {todoStore.filtered.map(todo => <Todo todo={todo} key={todo.id} />)}
            <div className="level todo-info">
                <div className="level-left">
                    <p>{todoStore.active.length} left</p>
                </div>
                <div className="level-item">
                    <div className="tags has-addons">
                    {
                        tags.map((tag, i) => (
                            <a
                                key={tag}
                                className={classNames('tag', { 'is-primary': todoStore.filter === i, 'is-light': todoStore.filter !== i})}
                                onClick={() => todoStore.filter = i}
                            >
                                {tag}
                            </a>
                        ))
                    }
                    </div>
                </div>
                <div className="level-right">
                    <button
                        className="button is-rounded"
                        type="button"
                        disabled={!todoStore.completed.length}
                        onClick={todoStore.clearCompleted}
                    >
                        Clear Completed
                    </button>
                </div>
            </div>
        </div>
    )
});