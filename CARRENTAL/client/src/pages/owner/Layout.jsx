import React from 'react'
import NavbarOwner from '../../components/owner/NavbarOwner'
import Slidebar from '../../components/owner/Slidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='flex flex-col'>
        <NavbarOwner/>
        <div className='flex'>
            <Slidebar/>
            <Outlet/>
        </div>


    </div>
  )
}

export default Layout