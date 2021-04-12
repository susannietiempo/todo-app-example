import React from 'react';
import {observer} from "mobx-react-lite";

export const TodoForm = observer(({todo, onCancel }) => {
    const [ text, setText ] = React.useState(todo.text);

    const handleChange = React.useCallback(e => {
        setText(e.target.value);
    }, [setText]);

    const handleSave = React.useCallback(e => {
        todo.text = text;
        todo.save();
        todo.editing = false;
    }, [text, todo])

    const handleCancel = React.useCallback(e => {
        todo.editing = false;
    }, [todo]);

    return (
        <div className="field has-addons mb-0">
            <div className="control is-expanded">
                <input value={text} className={"input is-rounded"} onChange={handleChange}/>
            </div>
            <div className="control">
                <button type="button" className="button is-info is-rounded" onClick={handleSave}>
                    Save
                </button>
            </div>
            <div className="control">
                <button type="button" className="button" onClick={handleCancel}>
                    Cancel
                </button>
            </div>
        </div>
    )
});