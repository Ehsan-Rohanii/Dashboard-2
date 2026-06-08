import React from 'react';
import { FaHome, FaTags, FaUser, FaUserTie } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const menu = [
  { label: "خانه", to: "/dashboard", icon: FaHome },
  { label: "برند", to: "brand", icon: FaTags },
  { label: "کارمندان", to: "employees", icon: FaUserTie },
  { label: "مشتریان", to: "customes", icon: FaUser },
];

export default function Sidebar() {
  const location = useLocation();

  const menuItems = menu.map(({ label, to, icon: Icon }) => {
    const active = location.pathname === to;

    return (
      <Link
        key={to}
        to={to}
        dir="rtl"
        className={`flex flex-row-reverse items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200
          ${active
            ? "bg-blue-50 text-blue-600"
            : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
          }`}
      >
        
        <span>{label}</span>
        <Icon
          className={`text-base ${
            active ? "text-blue-600" : "text-gray-400"
          }`}
        />
      </Link>
    );
  });

  return (
    <aside className="w-64 h-screen bg-white border-l shadow-sm p-4 fixed top-0 right-0 w-[10%]" dir="rtl">
      <div className="space-y-2">
        {menuItems}
      </div>
    </aside>
  );
}


