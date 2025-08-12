"use client";
import Image from "next/image";
import SignInBtn from "./SignInBtn";
import {useSession} from "next-auth/react"


export default function Userinfo() {
  const {status, data: session} = useSession();

  if(status === "authenticated"){
    return(
      <div className="shadow-xl p-8 rounded-md flex flex-col gap-3 bg-blue-300">
        <Image src={session?.user?.image} alt="profile" className="rounded-full" width={60} height={60}/>
        <div className=" font-bold mt-5"> Wellcome Back <span>{session?.user?.name}</span> </div>
        <div className=" font-bold ">Email: <span>{session?.user?.email}</span> </div>
      </div>
    )
  } else {
    return <SignInBtn/>
  }
}
