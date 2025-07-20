import React from 'react'
import { Route , Routes, useMatch } from 'react-router-dom'
import Home from './pages/students/Home'
import CoursesList from './pages/students/CoursesList'
import Coursedetails from './pages/students/Coursedetails'
import MyEnrollment from './pages/students/MyEnrollment'
import Player from './pages/students/Player'
import Loading from './components/students/Loading'
import Navbar from './components/students/Navbar'

function App() {

  const isEducatorRoute=useMatch('/educate/*')
  return (
    <div className='text-default min-h-screen bg-white'> 
      {!isEducatorRoute && <Navbar />}
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/course-list' element={<CoursesList/>} />
        <Route path='/course-list/:input' element={<CoursesList/>} />
        <Route path='/course/:id' element={<Coursedetails/>} />
        <Route path='/my-enrollments' element={<MyEnrollment/>} />
        <Route path='/player/:courseId' element={<Player/>} />
        <Route path='/loading/:path' element={<Loading/>} />
        
      </Routes>
    </div>
  )
}

export default App


