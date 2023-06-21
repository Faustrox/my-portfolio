import classNames from 'classnames'
import Welcome from '@/app/(modules)/(Welcome)'
import Expertise from '@/app/(modules)/(Expertise)'
import Recent from '@/app/(modules)/(Recent)'

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center'>
      <Welcome />
      <Expertise />
      <Recent />
    </main>
  )
}
