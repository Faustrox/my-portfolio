import classNames from 'classnames'

export default function Expertise() {
  return (
    <div
      className={classNames(
        'flex flex-col items-center',
        'w-[90%] my-12 p-24',
        'bg-slate-100'
      )}
    >
      <div>
        <h4 className='text-xl'>MY EXPERTISE</h4>
        <h2 className='text-4xl font-bold'>What I Do</h2>
      </div>
      <div
        className={classNames(
          'flex flex-row justify-evenly',
          'w-4/5 mt-24 mb-12'
        )}
      >
        <section className='m-6 border-solid border-r-2 border-blue-trans'>
          <h3>Image</h3>
          <h2 className='text-lg font-bold my-4'>Website Development</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            doloremque. Perspiciatis, voluptate vero eaque porro sunt atque
            voluptatibus magni adipisci laudantium illum ullam ipsa molestias
            sint quas, dignissimos non laboriosam.
          </p>
        </section>
        <section className='m-6 border-solid border-r-2 border-blue-trans'>
          <h3>Image</h3>
          <h2 className='text-lg font-bold my-4'>App Development</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            doloremque. Perspiciatis, voluptate vero eaque porro sunt atque
            voluptatibus magni adipisci laudantium illum ullam ipsa molestias
            sint quas, dignissimos non laboriosam.
          </p>
        </section>
        <section className='m-6'>
          <h3>Image</h3>
          <h2 className='text-lg font-bold my-4'>Backend Development</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            doloremque. Perspiciatis, voluptate vero eaque porro sunt atque
            voluptatibus magni adipisci laudantium illum ullam ipsa molestias
            sint quas, dignissimos non laboriosam.
          </p>
        </section>
      </div>
    </div>
  )
}
