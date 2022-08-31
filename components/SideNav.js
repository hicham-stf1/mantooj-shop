import Link from 'next/link'
import { useRouter } from 'next/router'

import TheDisclosure from '../components/TheDisclosure'
import { ChevronUpIcon } from '@heroicons/react/solid'
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
  BellIcon,
} from '@heroicons/react/outline'
import Footer from '../components/layout/Footer'

export default function SideNav() {
  const router = useRouter()

  const adminItems = [
    {
      href: '/admin/addCategory',
      title: 'CATÉGORIE',
    },
    {
      href: '/admin/addSubCategory',
      title: 'SOUS CATÉGORIE',
    },
    {
      href: '/admin/addFields',
      title: 'CHAMPS',
    },
    {
      href: '/admin/addresses',
      title: 'ADDRESSES',
    },
  ]

  const menuItems = [
    {
      href: '/admin/mesannonces',
      title: 'ANNONCES',
    },
    {
      href: '/admin/valideAnnonce',
      title: ' VALIDATION ANNONCE',
    },
    {
      href: '/admin/favoris',
      title: 'FAVOURIS',
    },
    {
      href: '/admin/alert',
      title: 'ALERTS',
    },
  ]
  // Headless UI
  return (
    <div className=" relative mb-3 flex flex-col bg-gray-100  md:-mt-6  md:min-h-screen">
      {/* <header className="sticky top-0 flex h-14 items-center justify-center bg-purple-200 font-semibold uppercase">
        Next.js sidebar menu
      </header> */}
      {/* <Header /> */}
      <div className="flex flex-1 flex-col  md:m-6 md:flex-row">
        <aside className="w-full rounded-lg bg-white pb-3 pt-4 shadow-xl md:w-60">
          <nav>
            <TheDisclosure
              title="Profil"
              content={() => (
                <ul>
                  <li className="m-2 w-full">
                    <Link href="/admin/profil">
                      <a
                        className={`flex w-full cursor-pointer rounded bg-green-100 p-2 hover:bg-green-500 ${
                          router.asPath === '/admin/profil' &&
                          'bg-green-600 font-bold text-white'
                        }`}
                      >
                        <div className="mt-[1px]">
                          <UserIcon width={16} height={16} />
                        </div>
                        <span className="ml-2">Profil</span>
                      </a>
                    </Link>
                  </li>
                </ul>
              )}
            />
            <TheDisclosure
              title="Mes annonces"
              content={() => (
                <ul>
                  {menuItems.map(({ href, title }) => (
                    <li className="m-2 w-full" key={title}>
                      <Link href={href}>
                        <a
                          className={`flex w-full cursor-pointer rounded bg-green-100 p-2 hover:bg-green-500 ${
                            router.asPath === href &&
                            'bg-green-600 font-bold text-white'
                          }`}
                        >
                          {title}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            />
            <TheDisclosure
              title="Admin"
              content={() => (
                <ul>
                  {adminItems.map(({ href, title }) => (
                    <li className="m-2 w-full" key={title}>
                      <Link href={href}>
                        <a
                          className={`flex w-full cursor-pointer rounded bg-green-100 p-2 hover:bg-green-500 ${
                            router.asPath === href &&
                            'bg-green-600 font-bold text-white'
                          }`}
                        >
                          {title}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            />
          </nav>
        </aside>
      </div>
    </div>
  )
}
