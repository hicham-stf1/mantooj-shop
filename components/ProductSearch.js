import React, { useState } from 'react'
import { titles } from '../constants/Titles'
import { items } from '../constants/DatalistItems'
import FormRowSelect from './FormRowSelect1'
import { villeOptions } from '../constants/villeOptions'
import { categoryOptions } from '../constants/categoryOptions'
import Link from 'next/link'

const initialState = {
  productName: '',
  city: '',
  category: '',
}

export default function ProductSearch() {
  const [values, setValues] = useState(initialState)

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  return (
    <div
      className="mt-28 flex  w-[65%] flex-col border-x-4  border-x-green-300 bg-gray-100 p-8
    px-10 shadow-xl md:-mb-20"
    >
      <p className="pb-3 font-medium tracking-wide text-gray-700">
        {titles.PRODUCT_SEARCH_SECTION_TITLE}
      </p>
      <div className="flex items-center  justify-center">
        <div className="flex flex-[0.40]">
          <input
            type="text"
            name="product"
            list="products"
            className="mt-2 mr-6 w-full rounded-lg border border-slate-200 py-3 px-2 hover:shadow focus:border-slate-500 focus:outline-none"
            placeholder="Entrer ke nom  de produit"
          />
          <datalist id="products" type="text">
            {/* <option key="1">Huile</option>
            <option key="2">Thé</option>
            <option key="2">Fruit</option> */}
            {items.map((item, key) => (
              <option key={key} value={item.value} />
            ))}
          </datalist>
        </div>
        <div className="ml-8 flex flex-[0.3]">
          {' '}
          <FormRowSelect
            labelText="Ville"
            name="city"
            value={values.city}
            handleChange={handleChange}
            list={villeOptions}
          />
        </div>
        <div className="flex flex-[0.30]">
          {' '}
          <FormRowSelect
            labelText="Catégorie"
            name="category"
            value={values.category}
            handleChange={handleChange}
            list={categoryOptions}
          />
        </div>
      </div>
      <button className=" mx-40 my-4  rounded border-y border-black bg-green-400 py-2  text-center  font-semibold text-white  ">
        <Link href="/products">Lancer la recherche</Link>
      </button>
    </div>
  )
}
