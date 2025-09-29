import React from 'react'
import assents from '../assets/assents'

const Navbar = () => {
  return (
    <div className='absolute top-0 left-0 w-full z-10'>
        <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
            {/* Logo corregido */}
            <img src={assents.logo} alt="Logo" className="h-8 w-auto"/>
            
            {/* Navigation Menu */}
            <ul className='hidden md:flex gap-7 text-black font-medium'>
                <li><a href="#Header" className='cursor-pointer hover:text-gray-400 transition-colors'>Software</a></li>
                <li><a href="#Precios" className='cursor-pointer hover:text-gray-400 transition-colors'>Precios</a></li>
                <li><a href="#Recursos" className='cursor-pointer hover:text-gray-400 transition-colors'>Recursos</a></li>
            </ul>
            
            {/* Buttons Container */}
           <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button className='inline-block rounded bg-white px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-orange-600 border-2 shadow-light-3 transition duration-150 ease-in-out hover:bg-orange-200 hover:shadow-light-2 focus:bg-gray-100 focus:shadow-light-2 focus:outline-none focus:ring-0 active:bg-gray-200 active:shadow-light-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong border-orange-400'>Obtén el CRM para pymes gratuito
            </button>
            <button className="inline-block rounded bg-orange-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-dark-3 transition duration-150 ease-in-out hover:bg-orange-700 hover:shadow-dark-2 focus:bg-orange-700 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
            Solicitar demo
            </button>
            </div>
        </div>
    </div>
  )
}

export default Navbar