import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

const Footer = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <footer className={`${theme === 'light' ? '' : 'dark-footer'}`}>
      <p>Feed Dog  © All Rights Reserved 2022</p>
    </footer>
  )
}

export default Footer