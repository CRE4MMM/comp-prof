'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'

const Navbar = () => {
  const [language, setLanguage] = useState('en')

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'id' : 'en'))
  }

  return (
    <nav className="bg-transparent text-white p-4 fixed top-0 w-full shadow-md z-50 h-16 flex items-center">
      <div className="container mx-auto flex justify-between items-center">
        {/* kembali ke Homepage */}
        <Link href="/" passHref>
          <Image
            src="/LOGO_SGS.png"
            alt="Home"
            width={100}
            height={50}
            priority
            className="cursor-pointer hover:opacity-80 transition-opacity duration-200"
          />
        </Link>

        {/* Language Switch Button */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg hover:bg-gray-100 active:scale-95 transition-all duration-200 border border-gray-300"
          >
            <Image
              src={language === 'en' ? '/id.png' : '/uk.jpeg'}
              alt={language === 'en' ? 'Indonesian Flag' : 'English Flag'}
              width={24}
              height={16}
              className="rounded-sm"
            />
            <span className="font-medium">
              {language === 'en' ? 'ID' : 'EN'}
            </span>
          </button>

          {/* Dropdown Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger className="focus:outline-none">
              <Menu
                size={28}
                className="text-black cursor-pointer hover:opacity-80 transition-opacity duration-200 transform hover:scale-110 active:scale-90"
                aria-label="Menu"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="bg-white text-gray-800 mt-2 w-48 rounded-md shadow-lg border border-gray-200"
            >
              <DropdownMenuItem asChild>
                <Link
                  href="/vision-mision"
                  className="w-full block px-4 py-2 hover:bg-gray-100"
                >
                  {language === 'en' ? 'Vision & Mission' : 'Visi & Misi'}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="/machines"
                  className="w-full block px-4 py-2 hover:bg-gray-100"
                >
                  {language === 'en' ? 'Machines' : 'Mesin'}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="/contact"
                  className="w-full block px-4 py-2 hover:bg-gray-100"
                >
                  {language === 'en' ? 'Contact' : 'Kontak'}
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
