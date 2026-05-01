import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import toast from "react-hot-toast";
import { MoonLoader } from "react-spinners";

export default function GetAllBrand() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState([]);
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  // search aval ke safhe baz mishe 
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await fetch("https://fakestoreapi.com/products");

        if (!res.ok) {
          throw new Error("Fetch Failed");
        }

        const data = await res.json();
        setProducts(data);
        setSearch(data);
      } catch (err) {
        setError("مشکلی در دریافت محصولات پیش آمده است");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);


  // handle kardan search (1)
  const handleSearch = () => {
    if (!id) {
      setSearch(products);
      return;
    }
    const result = products.filter((pr) => pr.id === Number(id));
    if (result.length === 0) {
      toast.error("No Product Found");
    }
    setSearch(result);
  };



  // handle kardan search (2)
  useEffect(() => {
    if (!id) {
      setSearch(products);
      return;
    }
    const result = products.filter((pr) => pr.id === Number(id));
    if (result.length === 0) {
      toast.error("No Product Found");
    }
    setSearch(result);
  }, [id, products]);


  // map be roye mahsolat baraye chape cart ha
  const items = search.map((pr) => (
    <div
      key={pr.id}
      className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 hover:shadow-md transition duration-200"
    >
      <img
        src={pr.image}
        alt={pr.title}
        className="h-40 mx-auto object-contain mb-4"
      />
      <h3 className="text-gray-800 font-semibold text-sm mb-2 line-clamp-2">
        {pr.title}
      </h3>
      <p className="text-blue-600 font-bold">${pr.price}</p>
    </div>
  ));


  return (
    <div>
      {/* search input */}
      <div className="flex items-center gap-3 mb-6">
        <input
          type="text"
          placeholder="Search by ID..."
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="border border-gray-300 rounded-xl px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={handleSearch}
          className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl shadow-md transition duration-200"
        >
          <FiSearch />
        </button>
      </div>

      {/* loading */}
      {loading && <MoonLoader size={200} color="blue" className="ml-[400px] mt-[80px]" />}

      {/* products grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items}
      </div>
    </div>
  );
}
