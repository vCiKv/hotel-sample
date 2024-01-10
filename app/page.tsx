import Header from '@/headers/header'

const Hero = () => {
  return (
    <div className="bg-brown-main h-screen relative">
      <div className='w-10/12 h-full flex items-center float-right'>
        <img
          src="https://images.unsplash.com/photo-1618773928121-c32242e63f39"
          alt="hero"
          className='w-full h-5/6 bg-center object-cover rounded'
        />
      </div>
      <div className='absolute top-1/2 -translate-y-1/2 pl-10 container text-white'>
        <div className='w-full md:w-2/3'>
          <h1 className='text-4xl md:text-7xl font-bold pb-6'>
            World Class Accommodation
          </h1>
          <p className='w-4/5 text-2xl md:text-4xl font-light pb-8'>
            experience a new dimension of luxury
          </p>
          <button className="inline-flex items-center bg-brown-accent/90 border-0 md:py-7 md:px-9 py-5 px-7 focus:outline-none hover:bg-brown-accent rounded md:text-2xl text-xl mt-4 md:mt-0">
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
    </>
  )
}
