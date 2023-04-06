//async action creators
import { GET_TODOS_REQUEST,GET_TODOS_SUCCESS,GET_TODOS_FAILED } from "../constants/todosConstants";
import axios from 'axios';

export const getAllTodos = () => async (dispatch)=>{
   
    dispatch({type:GET_TODOS_REQUEST})
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts"); //await: until executing this line it won't go further
    //based on fetching data we are writing other two types of actions below.
    try {
        dispatch({type:GET_TODOS_SUCCESS,payload:res.data});
    } catch (error) {
        dispatch({type:GET_TODOS_FAILED, payload: error.message});
    }

}
