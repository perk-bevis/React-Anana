import React from 'react'
import TopBar from '../../components/header/TopBar'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import MainNav from '../../components/header/MainNav'

const MainLayout = () => {
  return (
    <>
      <TopBar />
      <MainNav/>
      <main>
        <Outlet />
      </main>
      <Footer/>
    </>
  )
}

export default MainLayout
