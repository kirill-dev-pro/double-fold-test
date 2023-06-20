import ScreensIcon from './ScreensIcon.svg'

type ScreenProps = {
  side: 'left' | 'right'
}

export function Screen({ side }: ScreenProps) {
  return (
    <div className='ScreenContent'>
      <img src={ScreensIcon} alt='Screens' className='image' />
      <div className='text'>
        <p className='title'>
          Get ready for the Fold experience with <span className='accent'>two phones</span>{' '}
        </p>
        <p className='description'>
          Find a daring buddy, make sure they have the{' '}
          <span className='accent'>Try Galaxy app</span>, and let the adventure begin! This is a{' '}
          {side} phone!
        </p>
      </div>
      <button className='button'>Get started</button>
    </div>
  )
}
