import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import toast from "react-hot-toast";
import { MoonLoader } from "react-spinners";

export default function GetAllBrand() {
  const [products, setProducts] = useState();
  const [search, setSearch] = useState([]);
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // search aval ke safhe baz mishe
  // https://fakestoreapi.com/products
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await fetch("http://localhost:5000/api/products");

        if (!res.ok) {
          throw new Error("Fetch Failed");
        }

        const data = await res.json();
        console.log(data.data);
        setProducts(data.data);
        setSearch(data.data);
        console.log(products);
        // console.log(search);
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

  // const items = products.map((pr) => (<div
  //   key={pr.id}
  //   >
  //    <h3>{pr.title}</h3>
  //   </div>
  //   )

  // )

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
    const result = products?.filter((pr) => pr.id === Number(id));
    if (result.length === 0) {
      toast.error("No Product Found");
    }
    setSearch(result);
  }, [id, products]);

  // map be roye mahsolat baraye chape cart ha
 const items = products?.map((pr) => (
  <div
    key={pr.id}
    className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 hover:shadow-md transition  w-full"
  >
    <img
      src={pr.image}
      alt={pr.title}
      className="h-40 w-full object-contain mb-4"
    />
    <h2 className="text-gray-800 font-semibold text-sm mb-2 line-clamp-2">
      {pr.title}
    </h2>
    <p className="text-[12px] text-gray-600 font-medium mb-2 line-clamp-3">
      {pr.description}
    </p>
    <p className="text-blue-600 font-bold">{pr.price} تومان</p>
  </div>
));

return (
  <div className="flex-1 p-4 md:p-6 overflow-x-hidden ">
    {/* search input */}
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6 max-w-md">
      <input
        type="text"
        placeholder="جستجو بر اساس آیدی..."
        value={id}
        onChange={(e) => setId(e.target.value)}
        className="border border-gray-300 rounded-xl px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        onClick={handleSearch}
        className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl shadow-md transition duration-200 w-full sm:w-auto"
      >
        <FiSearch />
      </button>
    </div>

    {/* loading */}
    {loading ? (
      <div className="flex justify-center items-center min-h-[300px]">
        <MoonLoader size={60} color="blue" />
      </div>
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-1">
        {items}
      </div>
    )}
  </div>
);
;
}

// import React, { useEffect, useState } from "react";

// export default function GetAllBrans() {
//   const [products, setProducts] = useState();
//   useEffect(() => {
//     (async () => {
//       const res = await fetch("http://localhost:5000/api/posts");
//       const data = await res.json();
//       setProducts(data.data);
//       console.log(data);
//     })();
//   }, []);
//   return <div>{console.log(products)}
//   {products?.map((d)=> {
//     return (
//       <div key={d.id}>
//       <h2>{d.title}</h2>
//       <img src={d.image} alt="" />
//       </div>
//     )
//   })}
//   </div>;
// }
