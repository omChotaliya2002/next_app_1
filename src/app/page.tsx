// import Image from "next/image";
// import Page from "./about/Page";
import Link from "next/link";

export default function Home() {
  return (
          <div className="flex flex-col items-center justify-center mt-[10%]">
                <h1 className="text-3xl font-semibold font-mono"> welcome to next app! </h1>  

                <Link href={"/waves"}>
                  <button className="bg-white text-black border-2 border-black w-[140px] h-[35px] hover:bg-black 
                  hover:text-white mt-[30px] rounded-lg hover:cursor-pointer active:bg-gray-300 active:text-black"> 
                        Let's wave it! 🕺 
                  </button>
                </Link>
          </div>
  );
}
