import React, { useState } from "react";

export default function CreateBrand() {
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  // const handleRemove = (id) => {
  //   const filterCard = products.filter((pr) => pr.id !== id);
  //   setProducts(filterCard);

  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      id: Date.now(),
      title,
      price,
      image: image ? URL.createObjectURL(image) : null,
    };

    setProducts([...products, newProduct]);
    setImage(null);
    setTitle("");
    setPrice("");
  };

  const pro = products.map((pr) => (
    <div
      key={pr.id}
      className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 hover:shadow-md transition duration-200"
    >
      {pr.image && (
        <img
          src={pr.image}
          alt={pr.title}
          className="h-40 mx-auto object-contain mb-4"
        />
      )}

      <h4 className="text-gray-800 font-semibold text-sm mb-2 line-clamp-2">
        {pr.title}
      </h4>

      <p className="text-blue-600 font-bold">${pr.price}</p>
      {/* <button onClick={handleRemove(pr.id)} >Delete</button> */}
    </div>
  ));

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Form Section */}
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-10"
      >
        <h2 className="text-xl font-bold text-gray-800 mb-6">ساخت محصول</h2>

        <div className="grid md:grid-cols-3 gap-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="عنوان"
            className="border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="قیمت"
            className="border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            className="border border-gray-300 rounded-xl px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {/* <img src={image} alt="" /> */}
        </div>

        <button
          type="submit"
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl shadow-md transition duration-200"
        >
          تایید
        </button>
      </form>

      {/* Products Section */}
      <h2 className="text-xl font-bold text-gray-800 mb-6">محصولات</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">{pro}</div>
    </div>
  );
}
