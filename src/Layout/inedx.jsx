import React from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Layout() {
  const { token } = useSelector(state => state.auth)

  // اگر نمی‌خوای هیچ ریدایرکتی انجام بشه، شرط رو حذف کن یا فقط یه کنترل ساده بذار
  // مثلاً اگه هنوز توکن لود نشده بود، یه عبارت ساده نشون داده بشه:
  if (token === undefined) {
    return <div>Loading...</div>
  }

  return (
    <div className="h-screen flex flex-col">
      <Navbar />

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-6 bg-gray-50 overflow-y-auto ">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

