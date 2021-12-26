import Image from 'next/image'
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'

export default function Header() {
  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
        {/* left */}
        <div className="relative hidden lg:inline-grid w-24 cursor-pointer">
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className="relative h-10 lg:hidden flex-shrink-0 cursor-pointer">
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* middle search field */}
        <div className="max-w-xs">
          <div className="relative mt-1 p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-300 block w-full pl-10 sm:text-sm border-gray=300 focus:ring-black focus:border-black rounded-md"
            />
          </div>
        </div>

        {/* right */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn" />
          <MenuIcon className="h-6 md:hidden cursor-pointer" />
          <div className="relative navBtn">
            <PaperAirplaneIcon className="navBtn rotate-45" />
            <div className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full  flex items-center justify-center animate-pulse text-white">
              3
            </div>
          </div>
          <PlusCircleIcon className="navBtn" />
          <UserGroupIcon className="navBtn" />
          <HeartIcon className="navBtn" />

          <img
            src="https://scontent-gig2-1.xx.fbcdn.net/v/t39.30808-6/216834911_2994840640838428_585535549365149787_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=9ZDSYnYgwSIAX_e7s_K&_nc_ht=scontent-gig2-1.xx&oh=00_AT9cxMS5xUGWnvYPqYzTUaFZQrNsmKvmuTb1NeGZAMtHzg&oe=61CCB37B"
            className="h-10 rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  )
}
