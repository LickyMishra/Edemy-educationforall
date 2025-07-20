import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import CourseCard from './CourseCard'

function CoursesSection() {
  const {allCourses}=useContext(AppContext)
  return (
    <div className='py-16 md:px-40 px-8'>
      <h2 className='text-3xl font-medium text-gray-800'>Learn from the best</h2>
      <p className='text-sm md:text-base text-gray-800 mt-3'>Discover our top rated courses across various categories.<br/>
         From coding to design to business and wellness, our courses are crafted to deliver best results.</p>

    <div className='grid grid-cols-auto px-4 md:px-0 md:my-16 my-10 gap-4'>
      {allCourses.slice(0,4).map((course,index)=> <CourseCard key={index} course={course}/>)}
    </div>
    <Link to={'/course-list'} onClick={()=>scrollTo(0,0)} className='text-gray-800 border border-gray-600 px-10 py-3 rounded' >Show all courses</Link>
    </div>
  )
}

export default CoursesSection


/*scrollTo(0,0) helps in going to top left part of the page..i.e first 0 means horizontally 0 andd second 0 means vertically 0*/