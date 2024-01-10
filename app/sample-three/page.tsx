"use client"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Header from '@/headers/header3'
import { HTMLInputTypeAttribute, InputHTMLAttributes } from 'react'

const Carousel = (props: { images: string[] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()])
  return (
    <div className="embla h-full w-full" ref={emblaRef}>
      <div className="embla__container h-full w-full">
        {props.images.map((image, index) => <div key={"slide-" + index} className="embla__slide"><img src={image} alt={"slide-" + index} className='object-cover h-full w-full'/></div>)}

      </div>
    </div>
  )
}
const Label = (props: { name: string, label: string }) => {
  return (
    <label htmlFor={props.name} className="leading-7 text-sm text-gray-600">{props.label}</label>
  )
}
const Input = (props: { name: string, type: HTMLInputTypeAttribute | undefined, label: string } & any) => {
  return (
    <div className="relative">
      <Label label={props.label} name={props.name} />
      <input type={props.type} id={props.name} name={props.name} {...props} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
    </div>
  )
}
const carouselImages = ["https://images.unsplash.com/photo-1578683010236-d716f9a3f461", "https://images.unsplash.com/photo-1621293954908-907159247fc8", "https://images.unsplash.com/photo-1559599238-308793637427", "https://images.unsplash.com/photo-1465804575741-338df8554e02"]
const Hero = () => {
  // const inputs = [
  //   {name:}
  // ]
  return (
    <div className='relative w-full min-h-screen overflow-x-hidden'>
      <div className='w-full h-screen'>
        <Carousel images={carouselImages} />
      </div>
      <div className='top-0 w-full absolute h-full bg-gradient-to-b from-black/20 to-transparent '>
        {/* <div className='w-screen'> */}
        <div className='flex flex-col md:flex-row pt-44 w-full overflow-hidden justify-evenly'>
          <div className='md:w-3/6 py-12 container text-white px-6 bg-black/5'>
            <h1 className='text-7xl font-bold tracking-tight pb-4'>A Luxury Hotel</h1>
            <p className='text-2xl font-semibold pb-8'>The best hotel you deserve.</p>
            <span className='tracking-wider font-bold underline-offset-4 underline cursor-pointer transition-all decoration-blue-700 uppercase hover:underline-offset-8 hover:decoration-2'>discover now</span>
          </div>
          <div className='md:w-2/6'>
            <div className='bg-white p-8 mx-auto rounded-md'>
              <h3 className='text-4xl pb-4 font-semibold'>Book Your Room</h3>
              <form className='space-y-4'>
                <div>
                  <div className="label">
                    <span className="label-text">Pick Your Room</span>
                  </div>
                  <select className="select select-bordered w-full">
                    <option disabled selected>Pick Room</option>
                    <option>Basic Room</option>
                    <option>Advance Room</option>
                    <option>Luxury Room</option>
                  </select>
                </div>
                <div>
                  <div className="label">
                    <span className="label-text">Check In</span>
                  </div>
                  <input type="date" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div>
                  <div className="label">
                    <span className="label-text">Check Out</span>
                  </div>
                  <input type="date" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className='py-4'>
                    <button className="text-blue-700 border border-blue-700 bg-white w-full px-6 py-3 rounded-md font-semibold hover:text-white hover:bg-blue-700 transition-all">
                    Check Availability
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  )
}

export default function Page() {
  return (
    <>
      <Header />
      <Hero />
    </>
  )
}