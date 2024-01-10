import Header from '@/headers/header2'

const hotelLocations = [{ name: "FOOD", imgUrl: "https://images.unsplash.com/photo-1484723091739-30a097e8f929" }, { name: "CLUB", imgUrl: "https://images.unsplash.com/photo-1581417478175-a9ef18f210c2" }, { name: "LOUNGE", imgUrl: "https://images.unsplash.com/photo-1582533404221-9c8db685e30e" }]
const HeroCard = (props: { imgUrl: string, name: string }) => {
  return (
    <div className='group flex flex-col flex-nowrap h-full rounded-md md:text-xl bg-gray-800 text-white hover:text-gray-800 hover:bg-white cursor-pointer border-2 border-transparent hover:border-white transition-all'>
      <div className='aspect-[2/3] rounded-t-md'>
        <img
          alt={props.name}
          src={props.imgUrl}
          className='object-center object-cover w-full h-full rounded-t-md md:blur-[2px] overflow-hidden group-hover:blur-0'
        />
      </div>
      <div className=' uppercase md:p-6 p-4 rounded-b-md'>
        {props.name}
      </div>
    </div>
  )
}

const Hero = () => {
  return (
    <div className="min-h-screen w-screen overflow-hidden relative pb-7">
      <div className="-z-10 block w-full h-full absolute blur-sm scale-105">
        <img
          src='https://images.unsplash.com/photo-1542314831-068cd1dbfeeb'
          className='w-full h-full object-cover'
        />
      </div>
      <div className="md:pt-24 pt-44 text-white w-full px-4">
        <div className="w-full z-10">
          <h1 className="text-6xl md:text-8xl font-bold pb-6">
            We Hope You Enjoy Your Stay.
          </h1>
          <div className='float-right md:w-2/3'>

            <div className="float-right grid grid-cols-3 gap-3 ">
              {hotelLocations.map(location => <HeroCard key={location.name} {...location} />)}
            </div>
          </div>
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
