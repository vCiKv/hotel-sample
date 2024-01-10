import Link from "next/link";

export default function Logo(){
  return(
    <div className="text-xl tracking-wider font-black">
      <Link href={"/"}>
        LOGO
      </Link>
    </div>
  )
}