import { createContext,useState} from "react";
import { useEffect } from "react";
export const DarkModeContext = createContext()
export const DarkModeContextProvider =({children}) =>{

const [darkMode, setDarkMode]= useState(
    JSON.parse(localStorage.getItem("darkMode")) || false);
//on crée une fonction toggle 
const toggle = ()=>{
    setDarkMode(!darkMode)
}


    //on utilise useEffect
    useEffect(()=>{
     localStorage.setItem("darkMode", darkMode)   
    },[darkMode])
    return( <DarkModeContext.Provider value={{ darkMode, toggle}}>{children}</DarkModeContext.Provider>
    )
};