import Image from 'next/image'
import React, { useState } from 'react'
import b from '../../public/images/b.jpg'
import WhatsappIcon from '../../public/images/whatsapp.png'

const ProductDetails = () => {
  const [show, setShow] = useState(false)
  const [show2, setShow2] = useState(false)

  return (
    <div className="mx-2 mt-20  items-start justify-center rounded-md bg-white py-20 px-4  shadow-2xl md:flex md:px-6 2xl:px-20">
      <div className=" my-10 w-80 text-center lg:w-2/5 xl:w-2/6">
        <Image className="w-full" alt="img of a product" src={b} />
      </div>

      <div className="mt-6 md:ml-6 md:mt-0 md:w-1/2 lg:ml-8 xl:w-2/5">
        <div className="border-b border-gray-200 pb-6">
          <p className="text-sm leading-none text-gray-600">Coopérative name</p>
          <h1
            className="
							mt-2
							text-xl
							font-semibold
							leading-7
							text-gray-800
							lg:text-2xl
							lg:leading-6
						"
          >
            HUILE D'OLIVE VIERGE EXTRA 750ML
          </h1>
        </div>
        <div>
          <div className="border-b border-gray-200 py-4">
            <div
              onClick={() => setShow2(!show2)}
              className="flex cursor-pointer items-center justify-between"
            >
              <p className="font-teko text-base text-[24px] leading-4 text-gray-800">
                Description
              </p>
              <button
                className="
									cursor-pointer
									rounded focus:outline-none focus:ring-2 focus:ring-gray-400
									focus:ring-offset-2
								"
                aria-label="show or hide"
              >
                <svg
                  className={'transform ' + (show2 ? 'rotate-180' : 'rotate-0')}
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 1L5 5L1 1"
                    stroke="#4B5563"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div
              className={
                'mt-4 pt-4 pr-12 text-base leading-normal text-gray-600 ' +
                (show2 ? 'block' : 'hidden')
              }
              id="sect"
            >
              Huile d'olive Vierge Extra 750ml de la coopérative El Hamri, une
              huile de qualité supérieur avec un taux d’acidité faible
              garantissant une qualité gustative exceptionnelle..
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between border-b border-gray-200 py-4">
          <p className="font-teko text-base text-[24px] leading-4 text-gray-800">
            Quantity
          </p>
          <div className="flex items-center justify-center">
            <p className="mr-3 text-sm font-medium leading-none text-gray-600">
              38 items
            </p>
          </div>
        </div>

        <div>
          <div className="mt-7 border-t border-b border-gray-200 py-4">
            <div
              onClick={() => setShow(!show)}
              className="flex cursor-pointer items-center justify-between"
            >
              <p className="font-teko text-[24px] text-base leading-4 text-gray-800">
                Datails
              </p>
              <button
                className="
									cursor-pointer
									rounded focus:outline-none focus:ring-2 focus:ring-gray-400
									focus:ring-offset-2
								"
                aria-label="show or hide"
              >
                <svg
                  className={'transform ' + (show ? 'rotate-180' : 'rotate-0')}
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 1L5 5L1 1"
                    stroke="#4B5563"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div
              className={
                'mt-4 pt-4 pr-12 text-base leading-normal text-gray-600 ' +
                (show ? 'block' : 'hidden')
              }
              id="sect"
            >
              L’huile d’olive vierge extra offre un goût authentique. Les olives
              récoltées à la main au cœur des vergers de la région sont pressées
              à froid, sans subir de transformation chimique pour garantir une
              huile vierge extra généreuse, savoureuse et de qualité. Chaque
              goutte renferme de délicieuses saveurs fruitées et de précieux
              antioxydants, bon pour la santé. Spécifications techniques : Usage
              : Alimentaire. Labels :Terroir du Maroc,
            </div>
          </div>
        </div>

        <div>
          <p className="flex justify-between py-4">
            <span className="text-start font-teko text-[24px] uppercase">
              à partit de :
            </span>
            <span className="text-right text-2xl font-bold text-green-500">
              150 MAD
            </span>
          </p>
        </div>

        <button
          className="
						flex w-full items-center justify-center
						bg-gray-800
						py-4
						text-base
						leading-none
						text-white
						hover:bg-gray-700
						focus:outline-none
						focus:ring-2
						focus:ring-gray-800
						focus:ring-offset-2
					"
        >
          <div className="mr-2 mt-[1px] ">
            {' '}
            <Image src={WhatsappIcon} alt="Whatsapp" height={17} width={17} />
          </div>
          Contacter la coopérative
        </button>
      </div>
    </div>
  )
}

export default ProductDetails
