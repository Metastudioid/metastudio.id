import { useTheme } from "./ThemeContext"
import { SunIcon, MoonIcon } from '@heroicons/react/solid'

export default function ToggleThemeButton() {
  const darkTheme = useTheme()

  return (
    <>
      <button onClick={darkTheme.toggleTheme} className="hover:bg-gray-100 rounded-full px-4 py-4 dark:hover:bg-gray-900 ">
        {
          darkTheme.dark ?
          <MoonIcon className="opacity-40 h-5 w-5 text-white dark:text-gray-200"/>
          :
          <SunIcon className="opacity-30 h-5 w-5"/>
        }
      </button>
    </>
  )
}