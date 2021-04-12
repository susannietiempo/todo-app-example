import React from 'react';
import classNames from "classnames";
import {observer} from "mobx-react-lite";

export const TodoView = observer(({ todo }) => {
    return (
        <p className={classNames('is-size-5', {completed: todo.done})}>{todo.text}</p>
    )
});