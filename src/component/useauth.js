'use client'
import { useState } from "react";

function useAuth() {
  const [authUser, setAuthUser] = useState(null); // To store the logged-in user

  const signIn = (name) => {
    // Simulate a login by setting a user
    setAuthUser({ name });
  };

  const signOut = () => {
    // Clear the user (simulate logout)
    setAuthUser(null);
  };

  return { authUser, signIn, signOut }; //here i create a custom hook mean is tara m kasi bi dosri file me asy easily or ak hi place par use kar pao ga , matlab agr mojy ak dosri file me ya component use karny hai to m simple is file ko import karo ga , import useAuth from ''; and then m likho ga const {authUser,signIn,signOut}=useAuth() is tara m isy complete file me use kar sakta ho bina kasi problem k . 
}
export default useAuth;
