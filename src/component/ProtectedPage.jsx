"use client"
import React from 'react'
import useAuth from "./useAuth"
import {useRouter} from 'next/navigation'

const ProtectedPage = () => {
    const {loading,authUser}=useAuth();
    const router=useRouter()
    //protection layer apply now 
    React.useEffect(()=>{
      console.log({authUser})
    if (!loading && authUser.role !=="admin") {
        router.push("/");
        alert("You don't have access to this folder") // Redirect to home if not logged in
        }
    },[loading,authUser,router])

    if (loading) {
        return <p>Loading...</p>;
      }
  return (
    <div>Welcome to the protected dashboard, {authUser?.name}</div>
    // the above use {authUser?.name} is called optional chaining ?. mean to say error handing if user name was not in then it's can't show any error only tell us name is undefined .
  )
}

export default ProtectedPage