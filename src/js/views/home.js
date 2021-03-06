import React from "react";
import { Redirect } from "react-router-dom";
import { Context } from "../store/appContext";

export function Login() {
    const { actions, store } = useContext(Context);

    return (
    <h1>
        <p>Go To Dashboard</p>
        {store.isLoggedIn ? <Redirect to={"/Dashboard"} />
        :
        <p>To see ToDoList</p>
        }
        <button onClick={() => actions.login()}>Fake button</button>
    </h1>
    
    );
}   
