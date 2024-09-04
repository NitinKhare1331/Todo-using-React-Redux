import { combineReducers, createStore } from "redux";
import todoReducer from "./reducers/todoReducer";
import userReducer from "./reducers/userReducer";

const rootReducer = combineReducers({
    todosState: todoReducer,
    usersState: userReducer
})

const store = createStore(rootReducer);

export default store;