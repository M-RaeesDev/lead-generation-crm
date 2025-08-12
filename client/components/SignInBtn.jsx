"use client";
import Image from "next/image";
import { signIn } from "next-auth/react";


export default function SignInBtn() {
  return (
    <button onClick={()=> signIn("google")} className="flex item-cener gap-4 shadow-xl rounded-lg pl-3">
        <Image src="/google-logo.png" alt="Google" height={6} width={28}/>
        <span className="bg-blue-500 text-white px-4 py-2 ">
        Continue with Google
        </span>

    </button>
)
}
