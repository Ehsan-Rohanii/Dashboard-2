import React from 'react'
import { FaHome, FaTags, FaUser, FaUserTie } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom';

const menu = [
  { label: "Home", to: "/dashboard", icon: FaHome },
  { label: "Brand", to: "brand", icon: FaTags },
  { label: "Employees", to: "employees", icon: FaUserTie },
  { label: "Customers", to: "customes", icon: FaUser },
];

export default function Sidebar() {
  const location = useLocation();

  const menuItems = menu.map(({ label, to, icon: Icon }) => {
    const active = location.pathname === to;

    return (
      <Link
        key={to}
        to={to}
        className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200
          ${active
            ? "bg-blue-50 text-blue-600"
            : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
          }`}
      >
        <Icon
          className={`text-base ${
            active ? "text-blue-600" : "text-gray-400 group-hover:text-blue-600"
          }`}
        />
        <span>{label}</span>
      </Link>
    );
  });

  return (
    <aside className="w-64 h-screen bg-white border-r shadow-sm p-4">
      <div className="space-y-2">
        {menuItems}
      </div>
    </aside>
  );
}

