import AlertReducer from "./alertReducer";
import AlertContext from "./alertContext";
import React, { useReducer } from "react";
import { SET_ALERT, REMOVE_ALERT } from "../types";

const AlertState = (props) => {
  const initialState = null;

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  const setAlertMsg = (msg, type) => {
    dispatch({ type: SET_ALERT, payload: { msg, type } });
    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlertMsg,
      }}>
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
