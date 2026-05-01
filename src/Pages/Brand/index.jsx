import React from "react";
import { FaPlus } from "react-icons/fa";
import { Outlet, useNavigate } from "react-router-dom";

export default function Brand() {
  const navigate = useNavigate();

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Brands</h2>

        <button
          onClick={() => navigate("create")}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl shadow-md transition duration-200"
        >
          <FaPlus className="text-sm" />
          Create Brand
        </button>
      </div>

      {/* Content Card */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <Outlet />
      </div>
    </div>
  );
}
