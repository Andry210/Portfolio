import {createContext,useReducer} from 'react';

export const ThemeContext =  createContext();

const INITIAL_STATE = {lightmode: false}

const themeReducer =  (state,action) =>{
    switch(action.type){
        case 'Toggle' :
                return {
                    lightmode : !state.lightmode
                };
                default :
                return  state;
    }
}

export const ThemeProvider = (props) =>{
    const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE);
    return(
        <ThemeContext.Provider value={{state,dispatch}}>
            {props.children}
        </ThemeContext.Provider>
    )

}