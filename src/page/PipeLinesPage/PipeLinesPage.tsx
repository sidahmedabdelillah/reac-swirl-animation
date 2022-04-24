import React  from "react"
import './PipeLines.css'

import PipeLines from "../../components/PipeLine"
const PipeLinesPage : React.FC =  () => {
  return (
    <>
      <div className='content content--canvas'>
        <h2 className='content__title'>Pipeline</h2>
        <PipeLines />
      </div>
    </>
  )
}

export default PipeLinesPage