import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'
import ContentOne from './ContentOne'
import ContentTwo from './ContentTwo'

const Contents = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={`${theme === 'light' ? '' : 'dark-contents'}`}>
        <ContentOne />
        <ContentTwo />
    </div>
  )
}

export default Contents