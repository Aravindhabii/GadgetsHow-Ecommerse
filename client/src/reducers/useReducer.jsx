export function useReducer(state = null, action){
    switch(action.type){
        case "LOGGED_IN-USER":
            return action.payload;
        case "LOGOUT":
            return action.payload;
        default:
            return state;
    }
}