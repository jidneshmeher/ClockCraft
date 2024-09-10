import {createContext, useContext} from "react"

export const MenuContext = createContext()

export const MenuContextProvider = MenuContext.Provider

export const useMenu = () => {
    return useContext(MenuContext)
}