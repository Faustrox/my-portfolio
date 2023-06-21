import classNames from 'classnames'
export default function Welcome() {
  return (
    <section className='flex items-center w-full justify-evenly my-72'>
      <div className='flex flex-col mt-20'>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <h1 className='text-5xl font-bold mb-6'>Hey I'm Fausto</h1>
        <h1
          className={classNames(
            'absolute welcome-text select-none',
            'text-[4rem] font-bold',
            'mb-6 top-[330px] -z-10'
          )}
        >
          WELCOME
        </h1>
        <h3 className='text-3xl font-bold'>Web Developer</h3>
        <button
          className={classNames(
            'btn !rounded-lg',
            'w-1/2 mt-12',
            'bg-slate-800 text-white hover:text-black'
          )}
        >
          My Resume
        </button>
      </div>
      <div>
        <h1 className='text-5xl'>Portfolio Image</h1>
      </div>
      <div className='absolute right-16 mt-12'>
        <p className='mb-6'>Linkedin</p>
        <p>Github</p>
      </div>
    </section>
  )
}
