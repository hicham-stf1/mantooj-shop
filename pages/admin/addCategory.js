import React from 'react'

export default function addCategory() {
  return (
    <div className="bg-blueGray-100 relative my-2  mx-2 flex w-full min-w-0 flex-col break-words rounded-lg border-0 bg-white py-8 shadow-lg md:my-0  md:mx-2 md:mb-6">
      <div className="px-6">
        <h2 className="text-xl font-semibold leading-tight">
          {' '}
          GESTION D'UNE CATÉGORIE
        </h2>
      </div>
      <div className="flex flex-row items-center justify-center py-6 px-6">
        <p className="py-2">Catégorie existante</p>
        <div>
          {' '}
          <select
            id="countries"
            className=" ml-3 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          >
            <option selected>Multimedia</option>
            <option value="US">Emploi</option>
            <option value="CA">Immobilier</option>
            <option value="FR">Loisirs</option>
            <option value="DE">Services</option>
          </select>
        </div>
        <button className="my-1 mx-6 rounded border border-red-500 bg-transparent bg-red-500 px-2  py-[6px] font-semibold text-white hover:border-transparent  ">
          Supprimer
        </button>
      </div>
      <div className="mx-6 border border-gray-100 bg-gray-100 " />
      <div className="flex flex-col">
        <h6 className="text-blueGray-400 mx-6 mt-3 mb-6 rounded-md bg-gray-200 px-[17px] py-2 text-sm font-bold uppercase">
          Création d'une catégorie
        </h6>
        <div className="relative  ml-[15%] flex w-full pt-4">
          <label className="mr-4 py-3 text-sm uppercase">
            Nom de Catégorie
          </label>
          <input
            type="text"
            className="placeholder-blueGray-300 text-blueGray-600 w-[40%] rounded border-0 bg-white px-3 py-2.5 text-sm shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
            placeholder="hicham"
          />
        </div>
        <div className="relative  ml-[15%] flex w-full py-4">
          <label className="mr-4 ml-[19%] py-3 text-sm md:ml-[9.5%]">
            Photo
          </label>
          <input
            type="file"
            className="placeholder-blueGray-300 text-blueGray-600 w-[40%] rounded border-0 bg-white px-3 py-2.5 text-sm shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
            placeholder="hicham"
          />
        </div>
        <div className="ml-[29%]   flex w-full  py-4">
          <button className="my-1 rounded border border-green-500 bg-transparent bg-green-500 px-6 py-2  text-sm font-semibold text-white hover:border-transparent  md:ml-3">
            Ajouter
          </button>
          <button className="my-1 ml-1 rounded border border-red-500 bg-gray-400 px-4 py-2 text-sm font-semibold  text-white hover:border-transparent md:ml-3  md:px-6">
            Vider le formulaire
          </button>
        </div>
      </div>
    </div>
  )
}
