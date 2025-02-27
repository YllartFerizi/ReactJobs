import React from 'react'
import { Link } from 'react-router-dom'
import { FaExclamationTriangle } from 'react-icons/fa'
const NotFoundPage = () => {
  return (
    <section className='text-center flex flex-col justify-center items-center h96'>
        <FaExclamationTriangle className=' text-yellow-400 fa-4x mb-4' size={77}></FaExclamationTriangle>
        <h1 className='text06xl font-bold mb-4'> 404 Not Found</h1>
        <p className="text-xl mb-5">This page Does not exist</p>
        <Link to='/' className='text-white bg-indigo-500 hover:bg-indigo-900 rounded-md px-3 py-2 mt-4'>
        Go Back</Link>

    </section>
  )
}

export default NotFoundPage