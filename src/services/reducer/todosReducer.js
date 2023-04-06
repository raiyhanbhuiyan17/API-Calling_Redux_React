import { GET_TODOS_REQUEST,GET_TODOS_SUCCESS,GET_TODOS_FAILED } from "../constants/todosConstants";

const initialState = {
    isLoading: false,
    error:null,
    todos:[],
};

const todosReducer = (state=initialState,action)=>{
    switch (action.type) {
        case GET_TODOS_REQUEST:
            return{
                ...state,
                isLoading: true,

            }
        case GET_TODOS_SUCCESS:
            return{
                ...state,
                error: null,
                todos: action.payload,
                isLoading: false,
                
            }
        case GET_TODOS_FAILED:
            return{
                isLoading: false,
                error: action.payload,
                todos:[],
            }            
            
    
        default:
            return state;
    }

}
export default todosReducer;