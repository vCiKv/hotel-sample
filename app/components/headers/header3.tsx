"use client"
import Link from "next/link";
import Logo from "../logo";
import React, { useLayoutEffect, useState } from 'react';
const navigation: NavigationType[] = require("@/lib/header.json")

export default function Header() {

  const useWindowSize = () => {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }
  const DesktopHeader = () => {
    return (
      <>
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
          <Logo />
        </div>
        <div className="mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
          <nav className="flex flex-wrap items-center text-base justify-center gap-x-5">
            {navigation.map(link => <Link key={link.name} href={link.link} className="decoration-2 underline-offset-4 hover:underline hover:text-blue-700 transition-all" >{link.name}</Link>)}
          </nav>
          <button className="inline-flex items-center text-blue-700 border border-blue-700 bg-white px-3 py-1 rounded-md font-semibold hover:text-white hover:bg-blue-700 transition-all">
            Book Now
          </button>
        </div>
      </>
    )
  }
  const MobileHeader = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const toggleMenu = () => {
      setOpenMenu(p => !p)
    }
    return (
      <>
        <div className="mx-auto flex flex-wrap p-5 flex-row items-center justify-between">
          <div className="flex gap-x-5">
            <span onClick={toggleMenu} className="cursor-pointer">{openMenu?"close":"open"}</span>
            <Logo />
          </div>
          <button className="inline-flex items-center text-blue-700 border border-blue-700 bg-white px-3 py-1 rounded-md font-semibold hover:text-white hover:bg-blue-700 transition-all">
            Book Now
          </button>
        </div>
        {openMenu &&
          <nav className="absolute bg-white w-[50vw] h-[50vh] z-10 px-3 py-2 flex flex-col items-center text-left text-base justify-evenly gap-x-5">
            {navigation.map(link => <Link key={link.name} href={link.link} className="decoration-2 underline-offset-4 hover:underline hover:text-blue-700 transition-all" >{link.name}</Link>)}
          </nav>
        }
      </>
    )
  }
  const [windowWidth] = useWindowSize()
  return (
    <header className={"text-gray-600 body-font relative "+ (windowWidth<770?"fixed":"")}>
      {windowWidth > 770 ? <DesktopHeader /> : <MobileHeader />}
    </header>
  )
}