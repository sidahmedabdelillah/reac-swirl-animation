import React, { useEffect, useRef, useState } from 'react'
import './SwirlPage.css'
import { Sidebar } from 'primereact/sidebar'
import { Button } from 'primereact/button'
import { InputNumber } from 'primereact/inputnumber'
import { ColorPicker } from 'primereact/colorpicker'
import { Tooltip } from 'primereact/tooltip'
import { InputSwitch } from 'primereact/inputswitch'

// import { PipeLines } from
// import  { PipeLinesRef, PipeLines } from 'react-ambient-canvas-backgrounds'
import {Swirl} from 'react-ambient-canvas-backgrounds'

const PipeLinesPage: React.FC = () => {
  const [isSideBarVisible, setIsSideBarVisible] = useState(false)

  const [particleCount, setParticleCount] = useState(700)
  const [rangeY, setRangeY] = useState(100)
  const [baseTTL, setBaseTTL] = useState(150)
  const [rangeTTL, setRangeTTL] = useState(150)
  const [baseSpeed, setBaseSpeed] = useState(0.1)
  const [rangeSpeed, setRangeSpeed] = useState(2)
  const [baseRadius, setBaseRadius] = useState(1)
  const [rangeRadius, setRangeRadius] = useState(4)
  const [baseHue, setBaseHue] = useState(220)
  const [rangeHue, setRangeHue] = useState(100)
  const [noiseSteps, setNoiseSteps] = useState(8)
  const [xOff, setXOff] = useState(0.00125)
  const [yOff, setYOff] = useState(0.00125)
  const [zOff, setZOff] = useState(0.00125)



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
          particle count
          <i
            className='ml-2 custom-target-icon pi pi-question-circle
            p-text-secondary p-overlay-badge'
            data-pr-tooltip='Tottal Number of Particles'
            data-pr-position='right'
            data-pr-at='right+5 top'
            data-pr-my='left center-2'
          ></i>
        </h4>
        <InputNumber
          className='p-inputtext-sm'
          value={particleCount}
          onChange={e => (e.value ? setParticleCount(e.value) : null)}
        />


        <h4 className='mt-4 text-ls text-gray-900 font-medium'>
          Range Y
          <i
            className='ml-2 custom-target-icon pi pi-question-circle
            p-text-secondary p-overlay-badge'
            data-pr-tooltip='The Y range that particles can reach use this to limit the Y spaning'
            data-pr-position='right'
            data-pr-at='right+5 top'
            data-pr-my='left center-2'
          ></i>
        </h4>
        <InputNumber
          className='p-inputtext-sm'
          value={rangeY}
          onChange={e => (e.value ? setRangeY(e.value) : null)}
        />

        <h4 className='mt-4 text-ls text-gray-900 font-medium'>
          Base Radius
          <i
            className='ml-2 custom-target-icon pi pi-question-circle
            p-text-secondary p-overlay-badge'
            data-pr-tooltip='The particle base radius'
            data-pr-position='right'
            data-pr-at='right+5 top'
            data-pr-my='left center-2'
          ></i>
        </h4>
        <InputNumber
          className='p-inputtext-sm'
          value={baseRadius}
          onChange={e => (e.value ? setBaseRadius(e.value) : null)}
        />
        <h4 className='mt-4 text-ls text-gray-900 font-medium'>
          Range Radius
          <i
            className='ml-2 custom-target-icon pi pi-question-circle
            p-text-secondary p-overlay-badge'
            data-pr-tooltip='How much speed can the particle get'
            data-pr-position='right'
            data-pr-at='right+5 top'
            data-pr-my='left center-2'
          ></i>
        </h4>
        <InputNumber
          className='p-inputtext-sm'
          value={rangeRadius}
          onChange={e => (e.value ? setRangeRadius(e.value) : null)}
        />

        <h4 className='mt-4 text-ls text-gray-900 font-medium'>
          Base Speed
          <i
            className='ml-2 custom-target-icon pi pi-question-circle
            p-text-secondary p-overlay-badge'
            data-pr-tooltip='The initial speed of the particle'
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
          Noise Step
          <i
            className='ml-2 custom-target-icon pi pi-question-circle
            p-text-secondary p-overlay-badge'
            data-pr-tooltip='This is used to handle nois'
            data-pr-position='right'
            data-pr-at='right+5 top'
            data-pr-my='left center-2'
          ></i>
        </h4>
        <InputNumber
          className='p-inputtext-sm'
          value={noiseSteps}
          onChange={e => (e.value ? setNoiseSteps(e.value) : null)}
        />

        <h4 className='mt-4 text-ls text-gray-900 font-medium'>
          xOff
          <i
            className='ml-2 custom-target-icon pi pi-question-circle
            p-text-secondary p-overlay-badge'
            data-pr-tooltip='This is used to handle nois'
            data-pr-position='right'
            data-pr-at='right+5 top'
            data-pr-my='left center-2'
          ></i>
        </h4>
        <InputNumber
          className='p-inputtext-sm'
          value={xOff}
          onChange={e => (e.value ? setXOff(e.value) : null)}
        />

        <h4 className='mt-4 text-ls text-gray-900 font-medium'>
          yOff
          <i
            className='ml-2 custom-target-icon pi pi-question-circle
            p-text-secondary p-overlay-badge'
            data-pr-tooltip='This is used to handle nois'
            data-pr-position='right'
            data-pr-at='right+5 top'
            data-pr-my='left center-2'
          ></i>
        </h4>
        <InputNumber
          className='p-inputtext-sm'
          value={yOff}
          onChange={e => (e.value ? setYOff(e.value) : null)}
        />

        <h4 className='mt-4 text-ls text-gray-900 font-medium'>
          zOff
          <i
            className='ml-2 custom-target-icon pi pi-question-circle
            p-text-secondary p-overlay-badge'
            data-pr-tooltip='This is used to handle nois'
            data-pr-position='right'
            data-pr-at='right+5 top'
            data-pr-my='left center-2'
          ></i>
        </h4>
        <InputNumber
          className='p-inputtext-sm'
          value={zOff}
          onChange={e => (e.value ? setZOff(e.value) : null)}
        />

        {/* <h4 className='mt-4 text-ls text-gray-900 font-medium'>
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
        <ColorPicker
          value={backgroundColor}
          onChange={e => {
            setBackgroundColor(`#${e.value}`)
          }}
        ></ColorPicker> */}
      </Sidebar>

      <Swirl
        particleCount={particleCount}
        rangeY={rangeY}
        baseTTL={baseTTL}
        baseSpeed={rangeSpeed}
        rangeSpeed={rangeSpeed}
        baseRadius={baseRadius}
        rangeRadius={rangeRadius}
        baseHue={baseHue}
        rangeHue={rangeHue}
        noiseSteps={noiseSteps}
        xOff={xOff}
        yOff={yOff}
        zOff={zOff}
      />
    </>
  )
}

export default PipeLinesPage
