'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: 'Home', href:'/'},
  { name: 'Posts', href:'/posts'},
  { name: 'Create new post', href:'/create'},
]

export default function Header() {

  const pathname = usePathname()
  
  return (
    <header className="flex justify-between items-center py-4 px-14 border-b">
      <Link href={'/'}>
        <Image 
          className="w-[35px] aspect-auto"
          src='https://raw.githubusercontent.com/yucelsedat/blogposts/main/images/sample-icon-256x256.png'
          height={35}
          width={35}
          alt="my icon"
        />
      </Link>
      <nav>
        <ul className="flex items-center justify-center gap-x-5 text-[14px]">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link className={pathname === link.href?'text-zinc-900':'text-zinc-400'} href={link.href}>
                  {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
