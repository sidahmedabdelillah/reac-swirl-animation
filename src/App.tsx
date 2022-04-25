import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import TopBar from './components/TopBar'

import PipeLinesPage from './page/PipeLinesPage'
import SwirlPage from './page/SwirlPage'

const baseName = process.env.NODE_ENV === 'production' ?  process.env.PUBLIC_URL : ''

function App() {

  console.log(process.env)
  return (
    <BrowserRouter basename={baseName} >
      <div className='App relative'>
        <TopBar />
        <Routes>
          <Route path='/' element={<PipeLinesPage />} />
          <Route path='/swirl' element={<SwirlPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
