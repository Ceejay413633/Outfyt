import React, { useEffect } from "react";
import { FaShopify } from "react-icons/fa";

export default function Onboarding() {
    useEffect(() => {
       setTimeout(() => {
         window.location.href = "/signin"
       },2000)
    },[])
    return (
    <div className="h-screen w-full justify-center items-center flex flex-col gap-5 bg-amber-300">
      <FaShopify className="text-8xl text-white animate-dropdown" />
      <h1 className="text-white text-3xl text-center animate-slideIn">Welcome to Outfyt</h1>
    </div>
  );
}
