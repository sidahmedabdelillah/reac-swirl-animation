import React, { RefObject } from 'react'
import { useRef, useState, useEffect } from 'react'

import { useWindowSize } from '@react-hook/window-size'
import SimplexNoise from 'simplex-noise'

const particleCount = 700
const particlePropCount = 9
const particlePropsLength = particleCount * particlePropCount
const rangeY = 100
const baseTTL = 50
const rangeTTL = 150
const baseSpeed = 0.1
const rangeSpeed = 2
const baseRadius = 1
const rangeRadius = 4
const baseHue = 220
const rangeHue = 100
const noiseSteps = 8
const xOff = 0.00125
const yOff = 0.00125
const zOff = 0.0005
const backgroundColor = 'hsla(260,40%,5%,1)'

const Swirl = () => {
  const canvasARef = useRef<HTMLCanvasElement>(null)
  const canvasBRef = useRef<HTMLCanvasElement>(null)

  const [windowWidth, windowHeight] = useWindowSize()

  // const [ canvasAContex , setCanvasAContex ] = useState<CanvasRenderingContext2D | null>(null) ;
  // const [ canvasBContex , setCanvasBContex ] = useState<CanvasRenderingContext2D | null>(null) ;

  const [center, setCenter] = useState<number[]>([])
  const [tick, setTick] = useState(0)
  const [simplex, setSimplex] = useState(new SimplexNoise())
  const [particleProps, setParticleProps] = useState(
    new Float32Array(particlePropsLength)
  )

  useEffect(() => {
    if (!canvasARef.current || !canvasBRef.current) {
      console.log('returned here')
      return
    }
    for (let i = 0; i < particlePropsLength; i += particlePropCount) {
      initParticle(canvasARef.current, particleProps, center, i)
    }

    if (!canvasARef.current || !canvasBRef.current) {
      return
    }

    draw(canvasARef,canvasBRef,particleProps,center,simplex,tick)
    setTick(tick => tick + 1)
  }, [])

  useEffect(() => {
    if (!canvasARef.current || !canvasBRef.current) {
      return
    }
    const contextA = canvasARef.current.getContext('2d')
    const contextB = canvasBRef.current.getContext('2d')

    if (!contextA || !contextB) {
      return
    }

    canvasARef.current.width = windowWidth
    canvasARef.current.height = windowHeight

    contextA.drawImage(canvasBRef.current, 0, 0)

    canvasBRef.current.width = windowWidth
    canvasBRef.current.height = windowHeight

    contextB.drawImage(canvasARef.current, 0, 0)

    center[0] = 0.5 * canvasARef.current.width
    center[1] = 0.5 * canvasARef.current.height
  }, [windowHeight, windowWidth])

  return (
    <div className='content--canvas'>
      <canvas ref={canvasARef} />
      <canvas
        ref={canvasBRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  )
}

export default Swirl

function draw(
  canvasARef: RefObject<HTMLCanvasElement>,
  canvasBRef: RefObject<HTMLCanvasElement>,
  particleProps: Float32Array,
  center: number[],
  simplex: SimplexNoise,
  tick: number
) {
  if (!canvasARef.current || !canvasBRef.current) {
    return
  }

  const contextA = canvasARef.current.getContext('2d')
  const contextB = canvasBRef.current.getContext('2d')

  if (!contextA || !contextB) {
    return
  }

  contextA.clearRect(0, 0, canvasARef.current.width, canvasARef.current.height)

  contextB.fillStyle = backgroundColor
  contextB.fillRect(0, 0, canvasARef.current.width, canvasARef.current.height)

  drawParticles(
    canvasARef.current,
    contextA,
    particleProps,
    center,
    simplex,
    tick
  )
  renderGlow(canvasARef.current, contextB)
  renderToScreen(canvasARef.current, contextB)

  window.requestAnimationFrame(() => draw(canvasARef,canvasBRef,particleProps,center,simplex,tick))
}

function initParticle(
  canvasA: HTMLCanvasElement,
  particleProps: Float32Array,
  center: number[],
  i: number
) {
  const x = rand(canvasA.width)
  const y = center[1] + randRange(rangeY)
  const vx = 0
  const vy = 0
  const life = 0
  const ttl = baseTTL + rand(rangeTTL)
  const speed = baseSpeed + rand(rangeSpeed)
  const radius = baseRadius + rand(rangeRadius)
  const hue = baseHue + rand(rangeHue)

  particleProps.set([x, y, vx, vy, life, ttl, speed, radius, hue], i)
}

function drawParticles(
  canvasA: HTMLCanvasElement,
  contextA: CanvasRenderingContext2D,
  particleProps: Float32Array,
  center: number[],
  simplex: SimplexNoise,
  tick: number
) {
  let i

  for (i = 0; i < particlePropsLength; i += particlePropCount) {
    updateParticle(canvasA, contextA, particleProps, center, simplex, tick, i)
  }
}

function updateParticle(
  canvasA: HTMLCanvasElement,
  contextA: CanvasRenderingContext2D,
  particleProps: Float32Array,
  center: number[],
  simplex: SimplexNoise,
  tick: number,
  i: number
) {
  let i2 = 1 + i,
    i3 = 2 + i,
    i4 = 3 + i,
    i5 = 4 + i,
    i6 = 5 + i,
    i7 = 6 + i,
    i8 = 7 + i,
    i9 = 8 + i
  let n, x, y, vx, vy, life, ttl, speed, x2, y2, radius, hue

  x = particleProps[i]
  y = particleProps[i2]
  n = simplex.noise3D(x * xOff, y * yOff, tick * zOff) * noiseSteps * TAU
  vx = lerp(particleProps[i3], cos(n), 0.5)
  vy = lerp(particleProps[i4], sin(n), 0.5)
  life = particleProps[i5]
  ttl = particleProps[i6]
  speed = particleProps[i7]
  x2 = x + vx * speed
  y2 = y + vy * speed
  radius = particleProps[i8]
  hue = particleProps[i9]

  drawParticle(contextA, x, y, x2, y2, life, ttl, radius, hue)

  life++

  particleProps[i] = x2
  particleProps[i2] = y2
  particleProps[i3] = vx
  particleProps[i4] = vy
  particleProps[i5] = life

  ;(checkBounds(canvasA, x, y) || life > ttl) &&
    initParticle(canvasA, particleProps, center, i)
}

function drawParticle(
  contextA: CanvasRenderingContext2D,
  x: number,
  y: number,
  x2: number,
  y2: number,
  life: number,
  ttl: number,
  radius: number,
  hue: number
) {
  contextA.save()
  contextA.lineCap = 'round'
  contextA.lineWidth = radius
  contextA.strokeStyle = `hsla(${hue},100%,60%,${fadeInOut(life, ttl)})`
  contextA.beginPath()
  contextA.moveTo(x, y)
  contextA.lineTo(x2, y2)
  contextA.stroke()
  contextA.closePath()
  contextA.restore()
}

function checkBounds(canvasA: HTMLCanvasElement, x:number, y:number) {
  return x > canvasA.width || x < 0 || y > canvasA.height || y < 0
}

function renderGlow(
  canvasA: HTMLCanvasElement,
  contexB: CanvasRenderingContext2D
) {
  contexB.save()
  contexB.filter = 'blur(8px) brightness(200%)'
  contexB.globalCompositeOperation = 'lighter'
  contexB.drawImage(canvasA, 0, 0)
  contexB.restore()

  contexB.save()
  contexB.filter = 'blur(4px) brightness(200%)'
  contexB.globalCompositeOperation = 'lighter'
  contexB.drawImage(canvasA, 0, 0)
  contexB.restore()
}

function renderToScreen(
  canvasA: HTMLCanvasElement,
  contexB: CanvasRenderingContext2D
) {
  contexB.save()
  contexB.globalCompositeOperation = 'lighter'
  contexB.drawImage(canvasA, 0, 0)
  contexB.restore()
}

// utils
const { PI, cos, sin, abs, sqrt, pow, round, random, atan2 } = Math
const HALF_PI = 0.5 * PI
const TAU = 2 * PI
const TO_RAD = PI / 180
const floor = (n: number) => n | 0
const rand = (n: number) => n * random()
const randIn = (min: number, max: number) => rand(max - min) + min
const randRange = (n: number) => n - rand(2 * n)
const fadeIn = (t: number, m: number) => t / m
const fadeOut = (t: number, m: number) => (m - t) / m
const fadeInOut = (t: number, m: number) => {
  let hm = 0.5 * m
  return abs(((t + hm) % m) - hm) / hm
}
const dist = (x1: number, y1: number, x2: number, y2: number) =>
  sqrt(pow(x2 - x1, 2) + pow(y2 - y1, 2))
const angle = (x1: number, y1: number, x2: number, y2: number) =>
  atan2(y2 - y1, x2 - x1)
const lerp = (n1: number, n2: number, speed: number) =>
  (1 - speed) * n1 + speed * n2
