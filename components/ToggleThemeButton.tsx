import { useTheme } from "./ThemeContext"
import { SunIcon, MoonIcon } from '@heroicons/react/solid'

export default function ToggleThemeButton() {
  const darkTheme = useTheme()

  return (
    <>
      <button onClick={darkTheme.toggleTheme}>
        {
          darkTheme.dark ?
          <MoonIcon className="opacity-80 h-6 w-6 text-white"/>
          :
          <SunIcon className="opacity-60 h-6 w-6"/>
        }
      </button>
    </>
  )
}