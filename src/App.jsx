import { useEffect, useReducer } from "react"
import { AddTodo } from "./Components/AddTodo"
import { TodoList } from "./Components/TodoList";
import { todoReducer } from "./helpers/todoReducer";


export const App = () => {

  const initialState =  JSON.parse( localStorage.getItem('tareas') )  || [];
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = (todo) => {
    const action = {
      type: 'add todo',
      payload: todo
    }

    dispatch(action);
  }

  const deleteTodo = (state) => {

    const action = {
      type: 'delete todo',
      payload: state
    }

    dispatch(action);
  }

  const toggleDone = ( todo ) => {
    
    const action = {
      type: 'toggle todo',
      payload: todo
    }
    dispatch(action);
  }

  useEffect(() => {
    localStorage.setItem(  'tareas', JSON.stringify( state ) );
  }, [state])
  
  
  return (
    <div className="container-xl">

      <h1 className="text-center mt-3 text-primary">Lista de tareas</h1>

      <div className="row column-gap-3 justify-content-center mt-3">

        <div className="col-12 col-md-5 order-2 order-md-1 p-0">
          {
            state.map((todo) => (
              <TodoList
                key={todo.id}
                todo={ todo }
                deleteTodo={deleteTodo}
                toggleDone={ toggleDone }
                />
            ))
          }
        </div>

        <div className="col-12 col-md-5 order-1 order-md-2 mb-3 mb-md-0">
          <AddTodo addTodo={addTodo} />
        </div>
      </div>

    </div>
  )
}
