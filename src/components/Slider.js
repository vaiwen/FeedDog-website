import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

const Slider = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={`slider ${theme === 'light' ?  '' : 'dark-slider'}`}>
      <div className='slider-item' id='companies'>
        <div className='company-image' id='img1'></div>
        <div className='company-image' id='img2'></div>
        <div className='company-image' id='img3'></div>
        <div className='company-image' id='img4'></div>
        <div className='company-image' id='img5'></div>
        <div className='company-image' id='img6'></div>
      </div>
      <div className='slider-item slider-text'>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Atque veritatis corporis magni obcaecati sunt exercitationem!</p>
      </div>
    </div>
  )
}

export default Slider