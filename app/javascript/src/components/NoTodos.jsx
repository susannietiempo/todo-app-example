import React from 'react';
import {todoStore} from "../todoStore";
import {observer} from "mobx-react-lite";

const text = [
    "You haven't created any todos!",
    "You've completed all your todos!",
    "You haven't completed any of your todos!"
]

export const NoTodos = observer(() => {
    if(todoStore.filtered.length) return null;

    return(
        <div className="level">
            <div className="level-item">
                <p className="is-size-6">{text[todoStore.filter]}</p>
            </div>
        </div>
    )
});