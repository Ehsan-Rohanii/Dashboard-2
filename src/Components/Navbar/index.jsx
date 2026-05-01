import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate()

  const handleRemoveToken = () => {
    localStorage.removeItem("token")
    navigate("/")
  };

  return (
    <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center border-b">
      <h1 className="text-2xl font-semibold text-gray-800 tracking-wide">
        Dashboard
      </h1>

      <ul className="flex items-center space-x-4">
        <li>
          <a
            href="#"
            className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-blue-600 transition-all duration-200"
          >
            User Profile
          </a>
        </li>

        <li>
          <a
            href="#"
            className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-blue-600 transition-all duration-200"
          >
            Chats
          </a>
        </li>

        <li>
          <a
            href="#"
            className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-blue-600 transition-all duration-200"
          >
            Notifications
          </a>
        </li>

        <li>
          <button
            onClick={handleRemoveToken}
            className="px-4 py-2 rounded-lg text-sm font-medium text-red-600 
             bg-white border border-red-200 
             shadow-sm hover:shadow-lg 
             hover:bg-red-50 hover:text-red-700 
             transition-all duration-200"
          >
            LogOut
          </button>
        </li>
      </ul>
    </nav>
  )
}



