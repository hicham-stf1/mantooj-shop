import { NextPage } from 'next'
import Head from 'next/head'
import AddProduct from '../components/AddProduct.js'
import Categories from '../components/categories.js'
import Footer from '../components/layout/Footer.js'
import Header from '../components/layout/Header.js'
import SignUp from '../components/layout/SignUp.js'
import LoginForm from '../components/LoginForm.js'
import SignUpForm from '../components/SignUpForm.js'
import UploadFile from '../components/UploadFile'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../slices/counterSlice'
import ProductSearch from '../components/ProductSearch.js'
import CategoryFilter from '../components/accueil/CategoryFilter.js'
import MyModal from '../components/MyModal.js'

export default function Home() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-100 ">
      <Head>
        <title>Mantooj Shop</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <ProductSearch />
      {/* <CategoryFilter /> */}
      {/* <Admin /> */}
      {/* <Header /> */}
      {/* <Footer /> */}
      {/* <LoginForm /> */}
      {/* <SignUp /> */}
      {/* <AddProduct /> */}
      {/* <FilterRow /> */}
      {/* <UploadFile /> */}
      <Categories />
      {/* <MyModal /> */}
      {/* <div className="mt-32">
        <h2>The value of count is : {count}</h2>
      </div>

      <button
        className="bg-green-400 p-4"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <button className="bg-red-400 p-4" onClick={() => dispatch(decrement())}>
        Decrement
      </button> */}

      {/* <SignUpForm /> */}
    </div>
  )
}
