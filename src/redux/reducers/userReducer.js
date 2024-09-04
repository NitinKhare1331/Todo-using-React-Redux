import { ADD_USER } from "../constants/constants"

const intitialState = {
    users: []
}

function userReducer(state = intitialState, action){
    if(action.type === ADD_USER){
        return {
            ...state,
            users: [
                ...state.users,
                action.payload
            ]
        }
    }
    else{
        return state;
    }
}

export default userReducer;