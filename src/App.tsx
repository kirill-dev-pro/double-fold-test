import { TestFold } from './components/TestFold'
import clsx from 'clsx'

export default function App() {
  return (
    <div className='grid h-[100vh] place-items-center dark:border-neutral-600 dark:bg-neutral-800'>
      <div className={clsx('h-[812px] w-[375px]')}>
        <TestFold />
      </div>
    </div>
  )
}
