import Link from "next/link";
import Logo from "../logo";
const navigation:NavigationType[] = require("@/lib/header.json")

const NavigationLink = (props:NavigationType)=>{
  return(
    <Link href={props.link} className="font-light border-b-4 py-2 border-transparent hover:text-brown-accent hover:border-brown-accent transition-all">{props.name}</Link>
  )
}
export default function Header() {
  return (
    <header className="bg-brown-main text-white body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Logo />
        <nav className="md:ml-auto grid grid-cols-3 md:grid-cols-4 flex-wrap items-center text-base justify-center gap-5">
          {navigation.map(link=><NavigationLink key={link.name+"-"+link.link} {...link}/>)}
        </nav>
        <button className="inline-flex items-center bg-brown-accent/60 border-0 py-3 px-6 focus:outline-none hover:bg-brown-accent rounded text-base mt-4 md:ml-5 md:mt-0">
          Book Now
        </button>
      </div>
    </header>
  )
}