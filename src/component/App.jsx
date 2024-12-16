"use client"
import React from "react";
import useAuth from "./useauth";

function App() {
  
  const { authUser, signIn, signOut } = useAuth();
  // console.log(authUser,signIn,signOut);
  

  return (
    <div>
      {authUser ? (
        <>
          <p>Welcome, {authUser.name}!</p>
          <br />
          <button onClick={signOut}>Logout</button>
        </>
      ) : (
        <>
          <p>You are not logged in.</p>
          <br />  
          <button onClick={() => signIn("Adeel")}>Login</button>
        </>
      )}
    </div>
  );
}

export default App;
