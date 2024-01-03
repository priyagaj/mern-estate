import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { signInStart, signInSuccess, signInFailure } from "../redux/user/userSlice";
import OAuth from "../components/OAuth";
export default function SignIn() {
  const [formData,setFormData] =  useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector(state => state.user)

  const handleChange = (e) => {
    setFormData({
      ...formData, [e.target.id]: e.target.value
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      dispatch(signInStart())
      const res = await axios({
        url: '/api/auth/sign-in',
        method: 'POST',
        data: formData
      })
      dispatch(signInSuccess(res))
      navigate('/')
    }catch(err){
      dispatch(signInFailure(err.response.data.message))
    } }
 // console.log('formData====',formData)
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-3">
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
          {loading ? 'loading...' : 'Sign In'}
        </button>
      <OAuth />
      </form>
      <div>
        <p className="px-3">
          Dont have an account ? 
          <Link to={'/sign-up'}>
          <span className="text-blue-700"> Sign Up</span>
          </Link>
        </p>
      </div>
      { error && <p className="text-red-500">{error}</p>}
    </div>
  );
}
