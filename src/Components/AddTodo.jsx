import { useState } from "react";
import { Alert } from "./Alert";


export const AddTodo = ( { addTodo } ) => {

    const [inputValue, setinputValue] = useState('');
    const [alert, setAlert] = useState(false);

    const hundleChange = ({ target: { value } }) => setinputValue(value);

    const hundleSubmit = e => {
        e.preventDefault();

        if (inputValue.length === 0) {
            setAlert(true)
            return;
        }
        setAlert(false)

        const todo =  {
            value: inputValue.trim(),
            id: new Date().getTime() * 3,
            done: false
        };

        addTodo(todo);
        setinputValue('');
    }

    return (

        <>
            <form
                onSubmit={hundleSubmit}
            >
                <div className="form-floating">
                    <input
                        autoComplete="off"
                        type="text"
                        className="form-control text-secondary"
                        placeholder="Ingrese una tarea"
                        id="todo"
                        value={inputValue}
                        onChange={hundleChange}
                    />
                    <label htmlFor="todo" className="form-label">Ingrese una tarea</label>
                </div>
                <input type="submit" value="Guardar" className="btn btn-outline-primary mt-2" />
            </form>
            { ( alert ) && ( <Alert menssage={'Debes ingresar almenos un caracter'} bgColor={'danger'}/>) }
            
        </>
    )
}
