import {makeAutoObservable, action} from "mobx";


function createTodo(opts = { id: null, editing: false, done: false, text: ""}) {
    return makeAutoObservable({
        id: opts.id,
        done: opts.done,
        editing: opts.editing,
        text: opts.text,
        toggleDone() {
            this.done = !this.done;
            this.save()
        },
        toggleEdit() {
            this.editing = !this.editing;
        },
        save() {
            fetch(`/todos/${this.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    todo: this
                })
            });
        },
        destroy() {
            fetch(`/todos/${this.id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            });
        }
    }, { toggleEdit: action.bound, toggleDone: action.bound, handleTextChange: action.bound })
}

export const todoStore = makeAutoObservable({
    todos: [],
    filter: 0,
    async addTodo(text) {
        const resp = await fetch("/todos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                todo: {
                    done: false,
                    text: text
                }
            })
        });
        const json = await resp.json();
        this.todos = [createTodo(json.todo), ...this.todos]
    },
    delete(todo) {
        todo.destroy();
        this.todos = this.todos.filter(t => t.id !== todo.id);
    },
    async fetch() {
        const resp = await fetch("/todos");
        const json = await resp.json();
        this.todos = json.map(j => createTodo(j))
    },
    async clearCompleted() {
        fetch("/todos/clear", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
        this.todos = this.active;
    },
    get completed() {
        return this.todos.filter(todo => todo.done)
    },
    get active() {
        return this.todos.filter(todo => !todo.done)
    },
    get filters() {
        return [
            this.todos,
            this.active,
            this.completed
        ]
    },
    get filtered() {
      return this.filters[this.filter];
    }
}, { clearCompleted: action.bound })