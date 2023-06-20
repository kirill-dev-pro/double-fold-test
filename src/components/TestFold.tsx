import { AndroidNavBar } from './AndroidNavigationBar'
import { Screen } from './Screen'
import './TestFold.scss'

export function TestFold() {
  return (
    <div className='TestFold'>
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
