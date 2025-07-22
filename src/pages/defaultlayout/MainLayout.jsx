import React from 'react'
import TopBar from '../../components/header/TopBar'
import MainNav from '../../components/header/MainNav'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
      <TopBar />
      <MainNav />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default MainLayout
