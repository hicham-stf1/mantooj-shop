import React from 'react'
import Image from 'next/image.js'
import DropDown from '../DropDown.js'
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
  UserIcon,
  LoginIcon,
  HomeIcon,
} from '@heroicons/react/outline'
import { AuthService } from '../../services/auth_service'

import Button from '../buttons/ButtonOutline'
import logo from '../../public/logo.png'
import ButtonOutline from '../buttons/ButtonOutline'
import HeaderOption from '../HeaderOption.js'
import Link from 'next/link'
import UserOptions from '../UserSettings.js'
export default function Header({ onClick }) {
  return (
    <>
      <header className=" start-0  fixed  top-0 z-10 w-full   bg-gray-800 pb-2 shadow-md transition-all">
        <div className=" flex max-w-6xl justify-between lg:mx-auto">
          {/* LEFT */}
          <div className="mt-2 flex flex-row">
            {' '}
            <div className="visible mr-32 mt-2  sm:hidden">
              <DropDown />
            </div>
            <div className="relative ml-5 h-12 w-12 md:ml-0 md:h-16 md:w-32">
              <Link href="/">
                <Image src={logo} layout="fill" objectFit="contain" />
              </Link>
            </div>
          </div>
          {/* MIDDLE - SEARCH INPUT FIELD */}
          <div className="max-x-xs mt-5 hidden flex-row md:ml-10 md:block ">
            <div className="flex w-auto flex-row">
              <div className="relative mt-1  cursor-pointer rounded-full  hover:text-green-600">
                {' '}
                <HeaderOption href="/accueil" text="Accueil" Icon={HomeIcon} />
              </div>

              {AuthService.getUserData !== null ? (
                <>
                  <div className="relative mx-8  mt-1 cursor-pointer hover:text-green-600">
                    <HeaderOption
                      href="/admin/profil"
                      text="Mon Profil"
                      Icon={UserIcon}
                    />
                  </div>{' '}
                  <UserOptions />
                  {/* <div className="relative mx-8  mt-1 cursor-pointer hover:text-green-600">
                    <UserOptions />
                  </div> */}
                </>
              ) : (
                <>
                  <div className="relative mx-8 mt-1 cursor-pointer hover:text-green-600">
                    <HeaderOption
                      href="/signup"
                      text="S'inscrire"
                      Icon={UserIcon}
                    />
                  </div>
                  <div className="relative mt-1  cursor-pointer hover:text-green-600">
                    {' '}
                    <HeaderOption
                      href="/login"
                      text="Se Connecter"
                      Icon={LoginIcon}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
          {/* RIGHT */}
          <div className="mt-2 mr-3 flex items-center justify-end md:mr-1  ">
            {/* <div className="relative mx-8  mt-1 cursor-pointer hover:text-green-600"> */}

            {/* </div> */}
            <ButtonOutline>
              {' '}
              <Link href="/publishAnnonce">Publier une annonce</Link>
            </ButtonOutline>

            <></>
          </div>
        </div>
      </header>
      {/* <Sidebar /> */}
    </>
  )
}
