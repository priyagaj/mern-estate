import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
export default function SignUp() {
  const [formData,setFormData] =  useState({});
  const [err,setErr] = useState(null);
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData, [e.target.id]: e.target.value
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      setLoading(true)
      const res = await axios({
        url: '/api/auth/sign-up',
        method: 'POST',
        data: formData
      })
      setLoading(false)
      setErr(false);
      navigate('/sign-up')
    }catch(e){
      setLoading(false)
      setErr(e?.response?.data?.message)
    }  }
 // console.log('formData====',formData)
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold">Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-3">
        <input
          type="text"
          placeholder="username"
          id="userName"
          className="border rounded-lg p-3"
          onChange={handleChange}
        />
        <input
          type="email"
          id="email"
          placeholder="email"
          className="border rounded-lg p-3"
          onChange={handleChange}
        />
        <input
          type="password"
          id="password"
          placeholder="password"
          className="border rounded-lg p-3"
          onChange={handleChange}
        />
        <button disabled={loading} className="bg-slate-700 p-3 rounded-lg text-white hover:opacity-95 disabled:opacity-70 uppercase">
          {err ? err : 'Sign Up'}
        </button>
      </form>
      <div>
        <p className="px-3">
          Have an account ? 
          <Link to={'/sign-in'}>
          <span className="text-blue-700"> Sign In</span>
          </Link>
        </p>
      </div>
    </div>
  );
}
