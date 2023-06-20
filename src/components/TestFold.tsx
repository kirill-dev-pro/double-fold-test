import { AndroidNavBar } from './AndroidNavigationBar'
import { Screen } from './Screen'
import './TestFold.scss'
import { useEffect, useRef } from 'react'

export function TestFold() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const side = urlParams.get('side') === 'right' ? 'right' : 'left'
    if (side === 'right') {
      setTimeout(() => {
        ref.current?.style.setProperty('margin-left', '-100vw')
      }, 0)
    }
  }, [])
  return (
    <div className='TestFold' ref={ref}>
      <div className='ScreenContainer'>
        <Screen side='left' />
        <AndroidNavBar />
      </div>
      <div className='ScreenContainer'>
        <Screen side='right' />
        <AndroidNavBar />
      </div>
    </div>
  )
}
