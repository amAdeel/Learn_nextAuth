"use client";
import React from "react";
import useAuth from "./useAuth";
import { useRouter } from "next/navigation";

function App() {
  const { authUser, signIn, signOut, loading } = useAuth();
  const router =useRouter()

  if (loading) {
    return <p>Loading...</p>;
  }
  const navigate=()=>{
    router.push('/admin')
  }
  const navigate1=()=>{
    router.push('/protected')
  }

  return (
    <div>
      {authUser ? (
        <>
          <p>Welcome, {authUser.name}! Role: {authUser.role}</p>
          <br />
          {authUser.role === "admin" &&<button onClick={navigate}>Access Admin Panel</button>}
          <br />
          <button onClick={navigate1}>Access Protected folder</button>
          <br />
          <button onClick={signOut}>Logout</button>
        </>
      ) : (
        <>
          <p>You are not logged in.</p>
          <br/>
          <button  onClick={() => signIn("Adeel", "admin")}>Click (Login as Admin)</button>
          <br/>
          <button  onClick={() => signIn("Ali", "guest")}>Click (Login as Guest)</button>
          
        </>
      )}
    </div>
  );
}

export default App;
