import React, { useEffect, useRef, useState } from 'react'
import './PipeLines.css'
import { Sidebar } from 'primereact/sidebar'
import { Button } from 'primereact/button'
import { InputNumber } from 'primereact/inputnumber'
import { ColorPicker } from 'primereact/colorpicker';
import { Tooltip } from 'primereact/tooltip'
import { Toast } from 'primereact/toast'

// import { PipeLines } from 'react-ambient-canvas-backgrounds'
import PipeLine from '../../components/PipeLine'
const PipeLinesPage: React.FC = () => {
  const [isSideBarVisible, setIsSideBarVisible] = useState(false)

  const [pipeCount, setPipeCount] = useState(30)
  const [turnCount, setTurnCount] = useState(8)
  const [turnChanceRange, setTurnChanceRange] = useState(70)
  const [baseSpeed, setBaseSpeed] = useState(0.5)
  const [rangeSpeed, setRangeSpeed] = useState(1)
  const [baseTTL, setBaseTTL] = useState(100)
  const [rangeTTL, setRangeTTL] = useState(300)
  const [baseWidth, setBaseWidth] = useState(2)
  const [rangeWidth, setRangeWidth] = useState(4)
  const [baseHue, setBaseHue] = useState(180)
  const [rangeHue, setRangeHue] = useState(60)
  const [backgroundColor, setBackgroundColor] = useState('hsla(150,80%,1%,1)')


  return (
    <>
 
      <Button
        className='!absolute z-50 top-[50vh] left-1'
        icon='pi pi-cog'
        onClick={e => setIsSideBarVisible(true)}
      />
      <Sidebar
        visible={isSideBarVisible}
        onHide={() => setIsSideBarVisible(false)}
      >
        <Tooltip target='.custom-target-icon' content='' />
        <h1 className='title-font text-xl text-gray-900 mb-3 font-bold'>
          PipeLines Animation Props
        </h1>
        <h4 className=' mt-4 text-ls text-gray-900 font-medium'>
          Pipe Count
          <i
            className='ml-2 custom-target-icon pi pi-question-circle
            p-text-secondary p-overlay-badge'
            data-pr-tooltip='Number of pipes'
            data-pr-position='right'
            data-pr-at='right+5 top'
            data-pr-my='left center-2'
          ></i>
        </h4>
        <InputNumber
          className='p-inputtext-sm'
          value={pipeCount}
          onChange={e => (e.value ? setPipeCount(e.value) : null)}
        />

        <h4 className='mt-4 text-ls text-gray-900 font-medium'>
          Turn Count
          <i
            className='ml-2 custom-target-icon pi pi-question-circle
            p-text-secondary p-overlay-badge'
            data-pr-tooltip='Possible direction of turns 4 is Up,Down,Left,Rigth and do the math on that'
            data-pr-position='right'
            data-pr-at='right+5 top'
            data-pr-my='left center-2'
          ></i>
        </h4>
        <InputNumber
          className='p-inputtext-sm'
          value={turnCount}
          onChange={e => (e.value ? setTurnCount(e.value) : null)}
        />

        <h4 className='mt-4 text-ls text-gray-900 font-medium'>
          turnChanceRange
          <i
            className='ml-2 custom-target-icon pi pi-question-circle
            p-text-secondary p-overlay-badge'
            data-pr-tooltip='Possible direction of turns 4 is Up,Down,Left,Rigth and do the math on that'
            data-pr-position='right'
            data-pr-at='right+5 top'
            data-pr-my='left center-2'
          ></i>
        </h4>
        <InputNumber
          className='p-inputtext-sm'
          value={turnChanceRange}
          onChange={e => (e.value ? setTurnChanceRange(e.value) : null)}
        />

        <h4 className='mt-4 text-ls text-gray-900 font-medium'>
          Base Speed
          <i
            className='ml-2 custom-target-icon pi pi-question-circle
            p-text-secondary p-overlay-badge'
            data-pr-tooltip='The initial speed of the pipe'
            data-pr-position='right'
            data-pr-at='right+5 top'
            data-pr-my='left center-2'
          ></i>
        </h4>
        <InputNumber
          className='p-inputtext-sm'
          value={baseSpeed}
          onChange={e => (e.value ? setBaseSpeed(e.value) : null)}
        />

        <h4 className='mt-4 text-ls text-gray-900 font-medium'>
          Range Speed
          <i
            className='ml-2 custom-target-icon pi pi-question-circle
            p-text-secondary p-overlay-badge'
            data-pr-tooltip='How much extra speed can it get'
            data-pr-position='right'
            data-pr-at='right+5 top'
            data-pr-my='left center-2'
          ></i>
        </h4>
        <InputNumber
          className='p-inputtext-sm'
          value={rangeSpeed}
          onChange={e => (e.value ? setRangeSpeed(e.value) : null)}
        />

        <h4 className='mt-4 text-ls text-gray-900 font-medium'>
          Base TTL
          <i
            className='ml-2 custom-target-icon pi pi-question-circle
            p-text-secondary p-overlay-badge'
            data-pr-tooltip='Base life span of a pipe'
            data-pr-position='right'
            data-pr-at='right+5 top'
            data-pr-my='left center-2'
          ></i>
        </h4>
        <InputNumber
          className='p-inputtext-sm'
          value={baseTTL}
          onChange={e => (e.value ? setBaseTTL(e.value) : null)}
        />

        <h4 className='mt-4 text-ls text-gray-900 font-medium'>
          Range TTL
          <i
            className='ml-2 custom-target-icon pi pi-question-circle
            p-text-secondary p-overlay-badge'
            data-pr-tooltip='How much extra life can a pipe get'
            data-pr-position='right'
            data-pr-at='right+5 top'
            data-pr-my='left center-2'
          ></i>
        </h4>
        <InputNumber
          className='p-inputtext-sm'
          value={rangeTTL}
          onChange={e => (e.value ? setRangeTTL(e.value) : null)}
        />

        <h4 className='mt-4 text-ls text-gray-900 font-medium'>
          Base Width
          <i
            className='ml-2 custom-target-icon pi pi-question-circle
            p-text-secondary p-overlay-badge'
            data-pr-tooltip='The initial width of a pipe'
            data-pr-position='right'
            data-pr-at='right+5 top'
            data-pr-my='left center-2'
          ></i>
        </h4>
        <InputNumber
          className='p-inputtext-sm'
          value={baseWidth}
          onChange={e => (e.value ? setBaseWidth(e.value) : null)}
        />

        <h4 className='mt-4 text-ls text-gray-900 font-medium'>
          Range Width
          <i
            className='ml-2 custom-target-icon pi pi-question-circle
            p-text-secondary p-overlay-badge'
            data-pr-tooltip='How much extra width can it get'
            data-pr-position='right'
            data-pr-at='right+5 top'
            data-pr-my='left center-2'
          ></i>
        </h4>
        <InputNumber
          className='p-inputtext-sm'
          value={rangeWidth}
          onChange={e => (e.value ? setRangeWidth(e.value) : null)}
        />

        <h4 className='mt-4 text-ls text-gray-900 font-medium'>
          Base Hue
          <i
            className='ml-2 custom-target-icon pi pi-question-circle
            p-text-secondary p-overlay-badge'
            data-pr-tooltip='The Hue value of the Pipe'
            data-pr-position='right'
            data-pr-at='right+5 top'
            data-pr-my='left center-2'
          ></i>
        </h4>
        <InputNumber
          className='p-inputtext-sm'
          value={baseHue}
          onChange={e => (e.value ? setBaseHue(e.value) : null)}
        />

        <h4 className='mt-4 text-ls text-gray-900 font-medium'>
          Range Hue
          <i
            className='ml-2 custom-target-icon pi pi-question-circle
            p-text-secondary p-overlay-badge'
            data-pr-tooltip='The maximum amount that could be added to the base hue value'
            data-pr-position='right'
            data-pr-at='right+5 top'
            data-pr-my='left center-2'
          ></i>
        </h4>
        <InputNumber
          className='p-inputtext-sm'
          value={rangeHue}
          onChange={e => (e.value ? setRangeHue(e.value) : null)}
        />

        <h4 className='mt-4 text-ls text-gray-900 font-medium'>
          Background Color
          <i
            className='ml-2 custom-target-icon pi pi-question-circle
            p-text-secondary p-overlay-badge'
            data-pr-tooltip='Animation backgroud color'
            data-pr-position='right'
            data-pr-at='right+5 top'
            data-pr-my='left center-2'
          ></i>
        </h4>
        <ColorPicker value={backgroundColor} onChange={(e) => {
          setBackgroundColor(`#${e.value}`)
        }}></ColorPicker>

      </Sidebar>

      <PipeLine
        pipeCount={pipeCount}
        turnCount={turnCount}
        turnChanceRange={turnChanceRange}
        baseSpeed={baseSpeed}
        rangeSpeed={rangeSpeed}
        baseTTL={baseTTL}
        rangeTTL={rangeTTL}
        baseWidth={baseWidth}
        rangeWidth={rangeWidth}
        baseHue={baseHue}
        rangeHue={rangeHue}
        backgroundColor={backgroundColor}
      />
    </>
  )
}

export default PipeLinesPage
