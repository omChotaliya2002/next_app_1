"use client";
import Link from "next/link";

export default function Home() {
  return (
          <div className="flex flex-col items-center justify-center mt-[10%]">
                <h1 className="text-3xl font-semibold font-mono"> welcome to next app! </h1>  

                <Link href={"/waves"}>
                  <button className="bg-black text-white w-[140px] h-[35px] hover:bg-white hover:text-black 
                      hover:border-2 hover:border-black mt-[30px] rounded-lg hover:cursor-pointer active:bg-gray-300 active:text-black"> 
                        Let's Rock! 🕺 
                  </button>
                </Link>
          </div>
  );
}
