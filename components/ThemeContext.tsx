import React, { useState, useContext, useEffect } from 'react'

const getInitialTheme = () : boolean => {
  if (global.window?.localStorage.getItem('darkMode') === 'true') {
    return true
  }
  
  return false
}

interface IThemeContext {
  dark: boolean,
  toggleTheme?: () => void
}

const defaultState = {
  dark: false
}

export const ThemeContext = React.createContext<IThemeContext>(defaultState)

export function useTheme() {
  return useContext(ThemeContext)
}


const ThemeProvider: React.FC<{}> = ({ children }) => {
  const [dark, setDarkTheme] = useState(false)

  useEffect(() => {
    setDarkTheme(getInitialTheme())
  })

  function toggleTheme() {
    setDarkTheme(prevDarkTheme => {
      global.window?.localStorage.setItem('darkMode', String(!prevDarkTheme))
      return !prevDarkTheme
    })
  }

  return (
    <>
      <ThemeContext.Provider value={{dark, toggleTheme}}>
        { children }
      </ThemeContext.Provider>
    </>
  )
}

export default ThemeProvider