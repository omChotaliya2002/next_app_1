"use client";  // added this directive because react hooks only work in client component👍

// import { useParams } from "next/navigation";

// export default function UserProfile() {
//   const params = useParams(); // Get dynamic params

//   return (
//     <div className="select-none">
//       <h1>User Profile</h1>
//       <p>User ID: {params.id}</p>
//     </div>
//   );
// }


export default function UserProfile({ params }: { params: { id: unknown }}) {
    
    // function to check if id is string or not for unknown data type : 

    function isString(value : unknown) : value is string {
            return typeof value === "string";
    }

    if(isString(params.id)){
        return <h1 className="flex items-center justify-center mt-[10%] text-2xl select-none"> User ID: {params.id} </h1>;
    } 
  } 