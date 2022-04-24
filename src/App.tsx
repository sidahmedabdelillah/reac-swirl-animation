import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'

import PipeLinesPage from './page/PipeLinesPage'
import SwirlPage from './page/SwirlPage'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <div className='frame'>
          <div className='frame__title-wrap'>
            <h1 className='frame__title'>Ambient Canvas Backgrounds</h1>
          </div>
          <a
            className='frame__github'
            href='https://github.com/codrops/AmbientCanvasBackgrounds/'
          >
            GitHub
          </a>
          <div className='frame__links'></div>
          <div className='frame__demos'>
            <Link to='/swirl' className='frame__demo'>
              Swirl
            </Link>
            <Link to='/' className='frame__demo frame__demo--current'>
              Pipeline
            </Link>
          </div>
        </div>
        <Routes>
          <Route path='/' element={<PipeLinesPage />} />
          <Route path='/swirl' element={<SwirlPage />} />
        </Routes>
        
      </div>
    </BrowserRouter>
  )
}

export default App
