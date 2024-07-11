"use client"
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
import { ModeToggle } from "./ui/Mode-toggle";
import { UserButton } from "@clerk/nextjs";

const Header = () => {
    const [mouseOver, setMouseOver] = useState("")
    return (
        <div className="w-full px-[15%] max-md:px-2 h-16 z-50 flex items-center justify-between absolute top-0 left-0">
            <ul className="text-white  font-semibold flex gap-10   h-full items-center">
                <li className="text-2xl mb-1 ">grabarts</li>
                <li className=" cursor-pointer max-sm:hidden hover:text-secondary/80">Artist</li>
                <li className=" cursor-pointer max-sm:hidden hover:text-secondary/80">Shop</li>
            </ul>
            <ul className="text-white max-sm:hidden font-semibold flex gap-5   h-full items-center">
                <li className="text-white  font-semibold flex  justify-between  h-full items-center cursor-pointer hover:text-secondary/80" onMouseLeave={() => setMouseOver("")} onMouseEnter={() => setMouseOver("contact")}>Contact us {mouseOver === "contact" ? <FaArrowRight className="h-3 ml-2 w-3" /> : <MdOutlineKeyboardArrowRight className="h-5 w-5" />}</li>
                {/* <Link href={"/login"}><button className="bg-white rounded-2xl py-1 pr-2 pl-4 flex text-rose-600 items-center hover:bg-secondary/80 " onMouseLeave={()=>setMouseOver("")} onMouseEnter={()=>setMouseOver("signin")} >Sign in {mouseOver==="signin"? <FaArrowRight className="h-3 ml-2 w-3" /> : <MdOutlineKeyboardArrowRight className="h-5 w-5" />} </button></Link> */}
                <ModeToggle />
                <div className="ml-auto">
                    <UserButton afterSignOutUrl="/" />
                </div>
            </ul>
        </div>
    );
}

export default Header;