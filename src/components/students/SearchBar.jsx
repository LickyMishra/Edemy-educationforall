import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

function SearchBar({data}) {
  
   const navigate=useNavigate()    /*This hook helps in navigating to other pages*/
   const [input,setInput]=useState(data? data: "")

   const onSearchHandler=(e)=>{    /*This function helps in going  to other required page(based upon our input) upon clicking on search button and prevents default action*/
       e.preventDefault()
       navigate('/course-list/' + input) 
   }
  return (
      <form onSubmit={onSearchHandler} className='max-w-xl w-full md:h-14 h-12 flex items-center bg-white border border-gray-600 rounded'>
        <img src={assets.search_icon} alt="search_icon"  className='md:w-auto w-10 px-3'/>
        <input onChange={e=> setInput(e.target.value)} value={input} type="text" placeholder='Search for courses' className='w-full h-full outline-none text-gray-800' />
        <button type='submit' className='bg-blue-600 rounded text-white md:px-10 px-7 md:py-3 py-2 mx-1'>Search</button>
      </form>
  )
}

export default SearchBar
