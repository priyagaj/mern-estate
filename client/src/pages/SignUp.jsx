import React from "react";
import { Link } from "react-router-dom";
export default function SignUp() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold">Sign Up</h1>
      <form action="" className="flex flex-col gap-4 p-3">
        <input
          type="text"
          placeholder="username"
          className="border rounded-lg p-3"
        />
        <input
          type="text"
          placeholder="email"
          className="border rounded-lg p-3"
        />
        <input
          type="text"
          placeholder="password"
          className="border rounded-lg p-3"
        />
        <button className="bg-slate-700 p-3 rounded-lg text-white hover:opacity-95 disabled:opacity-70 uppercase">
          Sign Up
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
