"use client"
import React, { useEffect } from 'react'
import useAuth from "./useAuth"
import {useRouter} from 'next/navigation'

const AdminPage = () => {
  const {loading,authUser}=useAuth();
  const router=useRouter()
  useEffect(()=>{
    if(!loading && authUser.role !== ("admin")){
      router.push("/");
    }

  },[loading,authUser])
  return (
    <div className='bg-white'>
        <h1>AdminPage</h1>
        </div>
  )
}

export default AdminPage