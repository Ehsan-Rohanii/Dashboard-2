import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { MoonLoader } from 'react-spinners'


// *** username : donero
// *** password : ewedon


export default function Auth() {
  const [loading, setLoading] = useState(false)
  const [username , setUsername] = useState("")
  const [password , setPassword] = useState("")
  const navigate = useNavigate()
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true);
    // try {
    //   const result = await fetch("auth", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ phoneNumber }),
    //   });

    //   if (!result.ok) throw new Error("Login Failed")
    //   const data = await result.json();
    //   localStorage.setItem("token", data.token)
    //   toast.success("Login Successfully")
    //   navigate('/')

    // } catch (error) {
    //   toast.error("Login Failed")
    //   setLoading(false)
    // }

    if(username=="Ehsan" && password=="ehsan123") {
      navigate('/dashboard')
      toast.success("Login Successfuly")
    } else {
      toast.error("Login Faild")
      console.log("Login Faild")
      return
    }
  } 

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* {loading && <Loading />} */}

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
        <h3>Username : Ehsan</h3>
        <h3>Password : ehsan123</h3>

        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder='Username'
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Password'
        className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' />
        <button
          type='submit'
          disabled={loading}
          className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 disabled:bg-blue-300 flex justify-center items-center gap-2"
        >
          {loading ? <MoonLoader size={20} color="#ffffff" /> : "Login"}
        </button>

      </form>
    </div>
  )
}

