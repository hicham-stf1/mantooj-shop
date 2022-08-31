import { Card } from 'flowbite-react'
import Image from 'next/image'
import Link from 'next/link'
import a from '../../public/images/a.jpg'
export default function CardExample() {
  return (
    <div className=" mx-3 my-2 max-w-xs">
      <Card>
        <Image
          src={a}
          alt="hhhh"
          className="scale-75 duration-500 ease-in hover:scale-90"
        />
        <div className="border-[1px]  border-gray-100 bg-gray-200" />
        <div className="pt-3 ">
          <h5 className="px-4 font-teko text-[19px] uppercase tracking-tight text-gray-900 ">
            ÉPICES et AROMATES
          </h5>
          <p className="px-4 text-sm font-normal uppercase text-gray-700 ">
            DAR AZZAAFARANE
          </p>
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-[0.6] ">
              <h2 className="tracking-thin py-2 pr-1 pl-4 font-semibold">
                SAFRAN DE TALIOUINE 5G
              </h2>
            </div>
            <div className="flex flex-[0.4] items-center justify-center text-center  md:justify-end">
              {' '}
              <p className="px-4 text-[16px] font-bold text-orange-400">
                150 MAD
              </p>
            </div>
          </div>
        </div>
        <button className=" my-2 mx-4 rounded border border-green-500 bg-green-400 py-2 font-semibold text-white hover:bg-green-600   ">
          <Link href="/product"> Voir le produit</Link>
        </button>
      </Card>
    </div>
  )
}
