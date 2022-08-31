import { Card } from 'flowbite-react'
import Image from 'next/image'
import a from '../../public/images/a.jpg'
export default function CategoryCard() {
  return (
    <div className="mx-0 mb-3 max-w-xs rounded-xl shadow-lg  shadow-green-100 hover:animate-pulse md:mx-2 md:mb-0">
      <Card>
        <Image src={a} alt="hhhh" />
        <div className="border-[1px]  border-gray-100 bg-gray-200" />
        <div className="pt-3 ">
          <h5 className="px-4 py-3 text-center text-xl font-semibold uppercase tracking-tight text-gray-900 ">
            Huiles alimentaires
          </h5>
        </div>
      </Card>
    </div>
  )
}
