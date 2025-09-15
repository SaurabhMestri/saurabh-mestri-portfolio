import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMode: "dark",
  darkTheme: ()=>{},
  lightTheme: ()=>{},
});

export const ThemeProdiver = ThemeContext.Provider

export default function useTheme(){
  return useContext(ThemeContext)
}