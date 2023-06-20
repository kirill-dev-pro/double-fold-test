import Back from './AndroidBackIcon.svg'
import Home from './AndroidHomeIcon.svg'
import Recent from './AndroidRecentIcon.svg'

export function AndroidNavBar() {
  return (
    <div className='flex justify-around py-4'>
      <img src={Back} alt='Back' className='image' />
      <img src={Home} alt='Home' className='image' />
      <img src={Recent} alt='Recent' className='image' />
    </div>
  )
}
