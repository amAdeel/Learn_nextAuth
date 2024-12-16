"use client"
import { useState,useEffect } from 'react'

const useAuth = () => {
    const [authUser,setAuthUser]=useState(null)
    const [loading,setloading]=useState(true)

    useEffect(()=>{
        const user=JSON.parse(localStorage.getItem("authUser"))
        console.log(user)
        if (user){
            setAuthUser(user)
        }
        setloading(false)


    },[])

    //now i create signIn function
    const signIn=(name,role)=>{
        const user ={name,role}
        localStorage.setItem("authUser",JSON.stringify(user));
        setAuthUser(user);
    }
// create another function that just remove the data from the localstorage of browser .
    const signOut=()=>{
        localStorage.removeItem("authUser");
        setAuthUser(null);
    }
  return{authUser,signIn,signOut,loading}
}

export default useAuth