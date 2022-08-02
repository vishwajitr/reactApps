import './todo.css'
import { useState, useEffect } from "react"

const Todo = (props) => {
    const [inputText, setinputText] = useState("");
    const [todos, setTodo] = useState(JSON.parse(localStorage.getItem('todos')) || []
    )
    const [updatedText, setupdatedText] = useState("");
    const [todoEditing, settodoEditing] = useState("");

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);


    const handlerSubmit = (e) => {
        e.preventDefault();
        addTodo(inputText);
    }
    const addTodo = (title) => {
        console.log(title)
        const newTodo = [...todos, { 'title': title, 'status': false, id: Math.random() * 10 }]
        setTodo(newTodo)
        localStorage.setItem(newTodo);
    }


    const updatedTextHandler = (e) => { setupdatedText(e.target.value) }

    const editHandler = (id, text) => {
        settodoEditing(id); //
        setupdatedText(text)
    }

    const updateHandler = (id) => {
        setTodo(todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, title: updatedText }
            }
            return todo
        }))
        settodoEditing(null);// to disable input field
    }

    const deleteHandler = (id) => {
        const removeTodo = todos.filter((todo) => {
            return todo.id !== id
        })
        setTodo(removeTodo); //add updated array without picked id
    }

    return (
        <div>
            <div className="todoApp">
                <h1>Todo App</h1>
                <form onSubmit={handlerSubmit}>
                    <input type="text" name="todoText" onChange={(e) => { setinputText(e.target.value) }} />
                    <button type="submit">Add Todo</button>
                </form>
                <ul>
                    {
                        todos.map(function (todo, index) {
                            return (
                                <li key={index}>
                                    {(todoEditing !== todo.id) && todo.title}
                                    {(todoEditing === todo.id) && <input type="text" name="editText" value={updatedText} onChange={updatedTextHandler} />}
                                    <div className="actions">
                                        {(todoEditing === todo.id) && <button onClick={() => { updateHandler(todo.id) }}>save</button>}
                                        {(todoEditing !== todo.id) && <button onClick={() => { editHandler(todo.id, todo.title) }}>edit</button>}
                                        <button onClick={() => { deleteHandler(todo.id) }}>Delete</button>
                                    </div>
                                </li>
                            )
                        })

                    }
                </ul>
            </div>
        </div>
    )
}




export default Todo;