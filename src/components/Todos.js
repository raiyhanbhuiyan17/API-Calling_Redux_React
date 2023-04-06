import React from 'react'
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { getAllTodos } from '../services/action/todosAction';

const Todos = () => {
    //const todos = useSelector(state =>console.log(state));
    //destructure
    const {error,isLoading,todos} = useSelector(state => state);

    const dispatch = useDispatch();
// calling/dispatch the action creator function getAllTodos()
    useEffect(() => {
        dispatch(getAllTodos());
      
    }, []);
    
    return (
        <div>

        <h2 style={{ backgroundColor:'yellow',display:'inline-block'}}>ToDo's App</h2>
        {isLoading && <h3>Loading...</h3> }
        {error && <h3>{error.message}</h3> }
        <section>
            {todos && todos.map((todo) =>{
                //const {id,title} = todo then just use id and title instead of using todo.id, todo.title
                return <article>
                    <h4>{todo.id}</h4>
                    <h4>{todo.title}</h4>

                </article>

            })}
        </section>

        </div>
    )
}
export default Todos
