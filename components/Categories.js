import React from 'react'
import { Breadcrumb } from 'flowbite-react'
import CategoryCard from './product/CategoryCard'
import { HomeIcon } from '@heroicons/react/outline'
import Header from './layout/Header'
import Link from 'next/link'
export default function Categories() {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl  px-4 sm:px-6 md:-mt-14 lg:px-8">
        {/* CATÉGORIES DE PRODUITS */}
        <section>
          {/* <header> */}
          <h2 className=" mb-4  text-2xl font-bold text-gray-400 md:ml-2">
            CATÉGORIES DE PRODUITS
          </h2>
          {/* </header> */}
          <BreadcrumbExample />
        </section>
        <div className=" mb-10 flex flex-col items-center justify-center md:flex-row ">
          <Link href="/accueil">
            {' '}
            <div className="flex flex-[0.25]">
              {' '}
              <CategoryCard />
            </div>{' '}
          </Link>
          <div className="flex flex-[0.25]">
            {' '}
            <CategoryCard />
          </div>
          <div className="flex flex-[0.25]">
            {' '}
            <CategoryCard />
          </div>
          <div className="flex flex-[0.25]">
            {' '}
            <CategoryCard />
          </div>
        </div>
      </div>
    </div>
  )
}

function BreadcrumbExample() {
  return (
    <Breadcrumb aria-label="Default breadcrumb example">
      <Breadcrumb.Item href="/" icon={HomeIcon}>
        Home
      </Breadcrumb.Item>
      {/* <Breadcrumb.Item href="#">Catégorie X</Breadcrumb.Item> */}
      {/* <Breadcrumb.Item>Flowbite React</Breadcrumb.Item> */}
    </Breadcrumb>
  )
}
