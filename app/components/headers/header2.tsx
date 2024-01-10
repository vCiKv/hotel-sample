import Link from "next/link";
import Logo from "../logo";
const navigation: NavigationType[] = require("@/lib/header.json")

const NavigationLink = (props:NavigationType)=>{
  return(
    <Link href={props.link} className="text-black transition-all hover:bg-gray-800/70 rounded-md py-1 px-3 hover:text-white">{props.name}</Link>
  )
}

export default function Header() {
  return (
    <header className="bg-white/50 body-font fixed z-50 top-0 w-full text-black">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Logo />
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center gap-x-3">
          {navigation.map(link=><NavigationLink key={link.name+"-"+link.link} {...link}/>)}
        </nav>
        <button className="inline-flex rounded-md items-center bg-gray-800 text-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-800/70 text-base mt-4 md:mt-0">
          Book Now
        </button>
      </div>
    </header>
  )
}