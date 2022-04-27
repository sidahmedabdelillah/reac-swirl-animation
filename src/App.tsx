import React from 'react'
import { BrowserRouter, Routes, Route,} from 'react-router-dom'
import './App.css'
import TopBar from './components/TopBar'

import PipeLinesPage from './page/PipeLinesPage'
import SwirlPage from './page/SwirlPage'


function App() {

  return (
    <BrowserRouter  >
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
