import React from 'react'

import { Swirl } from 'react-ambient-canvas-backgrounds'
import './SwirlPage.css'

const SwirlPage = () => {
  return (
    <div className='content content--canvas'>
      <h2 className='content__title'>Swirl</h2>
      <Swirl />
    </div>
  )
}

export default SwirlPage