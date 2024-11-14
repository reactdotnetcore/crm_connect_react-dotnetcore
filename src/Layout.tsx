import React from 'react'
import Header from './ThemeLayout/Header'
import Sidebar from './ThemeLayout/Sidebar'
import Footer from './ThemeLayout/Footer'
import { Outlet } from 'react-router'

export default function Layout() {
  return (
   <>
    <Header/>
    <Sidebar/>
    <Outlet/>
    <Footer/>
   </>
  )
}
