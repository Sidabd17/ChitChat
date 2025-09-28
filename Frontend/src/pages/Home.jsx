
import Chatbox from '@/AppComponents/Chatbox'
import Sidebar from '../AppComponents/Sidebar'
import React from 'react'
import { useSelector } from 'react-redux'
import ProfileBox from '@/AppComponents/ProfileBox'

const Home = () => {
  const selectedprofile = useSelector((state)=>state.auth.selectedprofile);
  return (

    <div className='bg-slate-500 max-h-screen no-scrollbar p-10'>
        <div className='max-w-7xl mx-auto flex bg-slate-800 rounded-xl h-[92vh]'>
            <Sidebar/>
            <Chatbox/> 
            {selectedprofile && <ProfileBox />}
        </div>
    </div>
  )
}

export default Home
