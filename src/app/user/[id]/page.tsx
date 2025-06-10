"use client";  // added this directive because react hooks only work in client component👍

interface userProps {
    params : Promise<{
        id : string;
    }>
}

export default async function UserProfile({ params } : userProps) {

    const resolveParams = await params;
    const userid = resolveParams.id;
    
    // function to check if id is string or not for unknown data type : 

    function isString(value : unknown) : value is string {
            return typeof value === "string";
    }

    if(isString(userid)){
        return <h1 className="flex items-center justify-center mt-[10%] text-2xl select-none"> User ID: {userid} </h1>;
    } 
  } 