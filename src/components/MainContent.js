import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

const MainContent = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={`main-content ${theme === 'light' ?  '' : 'dark-main-content'}`}>
        <p className='main-content-text'>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
        <div className={`main-content-images ${theme === 'light' ?  '' : 'dark-main-content-images'}`}>
            <div className='dogs' id='dog1'></div>
            <div className='dogs' id='dog2'></div>
            <div className='dogs' id='dog3'></div>
            <div className='dogs' id='dog4'></div>
            <div className='dogs' id='dog5'></div>
            <div className='dogs' id='dog6'></div>
            <div className='dogs' id='dog7'></div>
            <div className='dogs' id='dog8'></div>
            <div className='dogs' id='dog9'></div>
        </div>
    </div>
  )
}

export default MainContent